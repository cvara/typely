import jQuery from 'jquery';
import $ from 'jquery';
import {ItemView, LayoutView} from 'backbone.marionette';
import TooltipView from './tooltip';
import Radio from 'backbone.radio';
import editorTpl from './templates/editor';
import helper from 'common/helper';
import Cocktail from 'backbone.cocktail';
import KeycodesMixin from 'mixins/keycodes.mixin';
import UidMixin from 'mixins/uid.mixin';
import PlaceholdersMixin from 'mixins/placeholders.mixin';
import rangy from 'rangy-core';
import rangySelection from 'rangy-selection';


/*
	Editor

	triggers on self:

	* `sections:changed`

*/
const Editor = LayoutView.extend({

	template: editorTpl,

	className: 'typely-container',

	regions: {
		tooltip: '.tooltip-region'
	},

	ui: {
		title: '.post-title',
		subtitle: '.post-subtitle',
		content: '.post-content'
	},

	events: {
		'keydown @ui.content' : 'handleKeydownOnContent',
		'keyup @ui.content'   : 'handleKeyupOnContent',
		'input @ui.content'   : 'updateSections',
		'change @ui.content'  : 'updateSections',
		'mouseup @ui.content' : 'handleMouseupOnContent',
		'paste .post-section' : 'handlePaste'
	},

	childEvents: {
	    'tooltip:click:out': 'clearTooltip',
		'tooltip:toggle:clicked': 'handleTooltipToggleClick'
	},

	// children of @ui.content that are considered sections
	sectionSelector: ':not(br):not(hr):not(.non-section)',

	// state
	numOfSections: 1,
	isSelectionSaved: false,
	ctrlDown: false,
	savedSel: null,

	quoteTooltipClass: 'quoteTooltip',
	listTooltipClass: 'listTooltip',


	onAttach: function() {
		this.createFirstSection();
	},


	// Section Related
	// ==========================
	//
	createFirstSection: function() {
		// create the first section with a random uid
		if (typeof this.ui.content.attr('data-length') === 'undefined') {
		    this.createEmptySection('start', true);
		}
	},

	createEmptySection: function(hook, giveFocus) {
		// create new empty section
		var section = $('<p class="post-section" name="' + this.generateSectionUID() + '"></p>');
		// attach it to dom
		if (!hook || hook === 'start') {
			this.ui.content.prepend(section);
		} else if (hook === 'end') {
			this.ui.content.append(section);
		} else if (hook.nodeType || hook instanceof $) {
			section.insertAfter(hook);
		} else {
			return false;
		}
		// give it focus
		if (giveFocus) {
			helper.selectElementContents(section[0]);
		}
		// force counting of sections
		// this.ui.content.trigger('sectionsChanged.posting.EDITOR');
		this.updateSections();
		// return it
		return section;
	},

	renameDuplicates: function() {
		var sections = this.ui.content.children(this.sectionSelector);

		// handle the case where the browser gives name to new section (there will be duplicates)
		for (var i = 0; i < this.sectionUIDs.length; i++) {
			// find elements with current name
			var sectionsByName = sections.filter('[name=' + this.sectionUIDs[i] + ']');
			// if more than one exist, we have duplicates
			if(sectionsByName.length > 1) {
				// leaving the first element alone, we change all others' names
				// NOTE: name is not the only duplicate attribute. The new paragraph may also have
				//		 inherited the 'data-side-ref' attribute from it's previous sibling
				/* jshint -W083 */
				sectionsByName.each((i, section) => {
					$(section).attr('name', this.generateSectionUID()).removeAttr('data-side-ref');
				});
				break;
			}
		}
	},

	nameTheUnnamed: function() {
		var sections = this.ui.content.children(this.sectionSelector);

		var unnamedSections = sections.filter(':not([name])').addClass('post-section');

		unnamedSections.each((i, section) => {
			$(section).attr('name', this.generateSectionUID());
		});
	},

	updateSections: function() {

	    // we calculate section number after a small delay to allow the DOM inspector to parse any changes
		requestAnimationFrame(() => {
			// clear accidentally added first level <br> elements (mainly for firefox)
			this.ui.content.children('br').remove();

			var sections = this.ui.content.children(this.sectionSelector);
			var newNumOfSections = sections.length;

			if (this.numOfSections !== newNumOfSections) {

				// new sections were added: give them unique names
				if (newNumOfSections > this.numOfSections) {
					console.info('sections added.');
					// handle the case where the browser gives name to new section (there will be duplicates)
					this.renameDuplicates();
					// handle the case where the browser creates an unnamed/un-classed section
					// (e.g. after pressing enter from inside an empty paragraph)
					this.nameTheUnnamed();
				}

				// sections were deleted
				else {
					console.info('sections deleted.');
					// the user accidentally deleted all sections
					if (newNumOfSections === 0) {
						console.info('all sections deleted');
						this.ui.content.focus(); // give focus to the correct contentEditable element (chrome)
						document.execCommand('selectAll', false, null); // select leftovers (<br/> elements usually)
						document.execCommand('delete', false, null); // delete leftovers
						this.createEmptySection('start', true);
						newNumOfSections = 1;
						sections = this.ui.content.children(this.sectionSelector);
					}
				}

				// update sectionUIDs in memory to reflect DOM state
				this.sectionUIDs = [];
				sections.each((i, section) => {
					this.sectionUIDs.push($(section).attr('name'));
				});
				console.info(this.sectionUIDs);
			}

			// update number of sections
			this.numOfSections = newNumOfSections;
		});
	},


	// Selection Related
	// ==========================
	//
	removeMarkers: function() {
		rangy.removeMarkers(this.savedSel);
		$('.rangySelectionBoundary').remove();
		this.isSelectionSaved = false;
	},

	saveSelection: function() {
		if(this.isSelectionSaved) {
			rangy.removeMarkers(this.savedSel);
		}
		this.isSelectionSaved = true;
		this.savedSel = rangy.saveSelection();
	},

	restoreSelection: function() {
		if(this.isSelectionSaved) {
			rangy.restoreSelection(this.savedSel);
			this.isSelectionSaved = false;
		}
	},


	// Media Related
	// ==========================
	//
	isMediaElement: function(element) {
		return /^FIGURE$|^IMG$|^FIGCAPTION$/.test(element.nodeName) ||
			$(element).hasClass('media-element') ||
			$(element).parentsUntil('.typely-container', '.media-element').length > 0;
	},

	markImageForDelete: function(img) {
		// // verify that img is saved
		// if ($(img).attr('data-saved')) {
		//
		// 	var suffix = /jp(e)?g/i.test($(img).attr('data-type')) ? '.jpg' :
		// 		(/png/i.test($(img).attr('data-type')) ? '.png' : '');
		//
		// 	var src = this.cdn_url + this.article_id + '_' + img.id + suffix;
		// 	this.deletedImages.push(src);
		// }
	},

	hideMediaOverlays: function() {
		console.info('TODO: actually hide media overlays');
		// $(window).trigger('hideMediaOverlays.posting.EDITOR');
	},


	handleKeydownOnContent: function(e) {
		// this.hideMediaOverlays();
		this.guardImportantKeys(e); // for sections
		this.detectShortcuts(e);
		this.properlyClearTooltip(e);
		this.detectListInput(e);
	},

	handleKeyupOnContent: function(e) {
		this.resetCtrl(e);
	},

	resetCtrl: function(e) {
		if (this.ctrlKey.indexOf(e.keyCode) !== -1) {
			this.ctrlDown = false;
		}
	},

	guardImportantKeys: function(e) {

		var self = this;
		var parentEl = helper.getSelectionParentElement();

		// 'enter' override
		if(e.keyCode === self.enterKey) {
			// 'enter' was pressed at the end of heading element
			// NOTE: chrome instead of appending <p> appends <div> after headings, which is unwanted
			if(/^H[123456]$/.test(parentEl.nodeName) && helper.carretAtEndOfElement(parentEl)) {
				e.preventDefault(); // prevent default behaviour (would be the insertion of a <p> or <div>)
				self.createEmptySection(parentEl, true);
			}
			// 'enter' was pressed at the end of blockquote element
			else if(/BLOCKQUOTE/.test(parentEl.nodeName) && helper.carretAtEndOfElement(parentEl)) {
				console.info('"enter" was pressed at the end of blockquote element');
				e.preventDefault(); // prevent default behaviour (would be the insertion of a new blockquote in Chrome or a <br> in Firefox)
				self.createEmptySection(parentEl, true);
			}
			// 'enter' was pressed from inside a media element
			else if(self.isMediaElement(parentEl)) {
				e.preventDefault();
			}
		}

		// 'backspace' override
		else if(e.keyCode === this.backspaceKey) {
			var $prev = $(parentEl).prev();
			// 'backspace' was pressed at the start of figcaption element
			if(
				$(parentEl).hasClass('caption') &&
				(helper.carretAtStartOfElement(parentEl) || parentEl.textContent.length === 0
			) ) {
				e.preventDefault();
			}
			// 'backspace' was pressed immediately after a media element
			else if(helper.carretAtStartOfElement(parentEl) && $prev.hasClass('media-element')) {
				console.log('bs after media');
				e.preventDefault();
				// mark images inside $prev for delete (there may be many)
				$('img', $prev).each(function() {
					self.markImageForDelete(this);
				});
				// manually remove the previous element
				$prev.remove();
				// force section refreshing
				// self.$postContent.trigger('sectionsChanged.posting.EDITOR');
				this.updateSections();
			}
		}

		// 'delete' override
		else if(e.keyCode === self.deleteKey) {
			var $next = $(parentEl).next();
			// 'delete' was pressed at the end of figcaption element
			if(
				$(parentEl).hasClass('caption') &&
				(helper.carretAtEndOfElement(parentEl) || parentEl.textContent.length === 0) ) {
				e.preventDefault();
			}
			// 'delete' was pressed at the end of current element & next element is a media element
			else if(helper.carretAtEndOfElement(parentEl) && $next.hasClass('media-element')) {
				console.log('del before media');
				e.preventDefault();
				// mark images inside $next for delete (there may be many)
				$('img', $next).each(function() {
					self.markImageForDelete(this);
				});
				// manually remove the following element
				$next.remove();
				// force section refreshing
				// self.$postContent.trigger('sectionsChanged.posting.EDITOR');
				this.updateSections();
			}
		}
	},


	detectListInput: function(e) {

		// Only care for space & enter
		if (e.keyCode !== this.enterKey && e.keyCode !== this.spaceKey) {
			return true;
		}

		const el = helper.getSelectionParentElement();

		// enter was pressed from inside an empty list element
		if (el.nodeName === 'LI' && e.keyCode === this.enterKey && el.textContent.length === 0) {
			// prevent key-press default behaviour
			e.preventDefault();
			// we are inside the last <li> of the list
			if ($(el).next('li').length === 0) {
				// get list element
				const parent = el.parentNode;
				// remove current list item
				$(el).remove();
				// insert new paragraph after list section (execCommand behaves unexpectedly in Safari)
				this.createEmptySection(parent, true);
			}
			// we are in the middle of the list
			else {
				/**
				 * @TODO: split the list into two new lists seperated by <p> and give focus on <p>
				 */
			}
			return;
		}

		// enter/space was pressed at the begining of a section, after '1.','*','-' or '+'
		if (/^1.$|^\*$|^\-$|^\+$/.test(el.textContent)) {

			let $listEl, $listParentEl;
			// prevent key-press default behaviour
			event.preventDefault();
			// store the name of the section (it will be deleted after execCommand)
			const name = $(el).attr('name');
			// ordered list
			if(/^1.$/.test(el.textContent)) {
				// delete user input '1.' and convert section to list
				document.execCommand('delete',false,null);
				document.execCommand('delete',false,null);
				document.execCommand('insertOrderedList',false,null);
			}
			// unordered list
			else {
				// delete user input '*', '-' and convert section to list
				document.execCommand('delete',false,null);
				document.execCommand('insertUnorderedList',false,null);
			}

			// Chrome/Safari place newly created lists inside parent (unexpected)
			$listEl = $(helper.getSelectionParentElement().parentNode);
			// Chrome/Safari also wrap list item contents inside <font> elements (only if starting with a list)
			if ($listEl[0].nodeName === 'LI') {
				$listEl.html($listEl.children().html());
				$listEl = $listEl.parent();
			}
			$listParentEl = $listEl.parent();
			if (!$listParentEl.hasClass('post-content')) {
				$listEl.insertBefore(el);
				$(el).remove();
			}
			// transfer saved name to newly created ol section
			$listEl.attr('name',name ).addClass('post-section');
			helper.selectElementContents($listEl.children('li').last()[0]);
		}
	},


	onPaste: function() {
		this.clearTooltip();
	},

	onCopy: function() {
		// Do nothing
	},

	onCut: function() {
		this.clearTooltip();
	},

	detectShortcuts: function(e) {
		if (this.ctrlKey.indexOf(e.keyCode) !== -1) {
			this.ctrlDown = true; // remember ctrlDown
			return;
		}
		if (this.ctrlDown && e.keyCode === this.vKey) {
			this.triggerMethod('paste');
		}
		if (this.ctrlDown && e.keyCode === this.cKey) {
			this.triggerMethod('copy');
		}
		if (this.ctrlDown && e.keyCode === this.xKey) {
			this.triggerMethod('cut');
		}
	},


	// Tooltip Related
	// ==========================
	//
	isTooltipActive: function() {
		return this.getRegion('tooltip').hasView();
	},

	getTooltipView: function() {
		return this.getRegion('tooltip').currentView;
	},

	clearTooltip: function() {
		if (this.isTooltipActive()) {
			this.getRegion('tooltip').empty();
			// leave selections intact, just remove markers
			this.removeMarkers();
		}
	},

	properlyClearTooltip: function(e) {
		if (e.keyCode === this.backspaceKey && this.isTooltipActive()) {
			e.preventDefault();
			document.execCommand('delete',false, null);
			this.clearTooltip();
			return;
		}
		if (e.keyCode === this.deleteKey && this.isTooltipActive()) {
			e.preventDefault();
			document.execCommand('forwardDelete',false, null);
			this.clearTooltip();
			return;
		}

		this.clearTooltip();
	},

	showTooltip: function({disableFormats = []} = {}) {

		var range = helper.getFirstRange();

		if(!range || range.toHtml().length === 0) {
			return false;
		}

		// before we show the tooltip we need to get all current selection formats
	    // NOTE: based on values returned from 'getSelectionFormat' some of the tooltip
	    // may be set to an 'active' state
	    var selectionFormat = this.getSelectionFormat();

	    this.saveSelection();

		var tooltipView = new TooltipView({
			disableFormats: disableFormats,
			selectionFormat: selectionFormat
		});

		this.getRegion('tooltip').show(tooltipView);
		return true;
	},


	getSelectionFormat: function() {

		var parentEl = helper.getSelectionParentElement();
		var startBoundaryEl = helper.getSelectionBoundaryElement(true);
		var endBoundaryEl = helper.getSelectionBoundaryElement(false);
		var parentTagName = parentEl.nodeName;
		var textWithTags = rangy.getSelection().getRangeAt(0).toHtml();
		var textPlain = rangy.getSelection().getRangeAt(0).toString();

		// console.info('parent: ' + parentTagName);
		// console.info('text with tags: ' + textWithTags);
		// console.info('text plain: ' + textPlain);

		var selectionFormat = [];

		// check for inline formating first
		if (document.queryCommandState('bold')) {
			console.info('inline formating: bold');
			selectionFormat.push('b');
		}
		if (document.queryCommandState('italic')) {
			console.info('inline formating: italic');
			selectionFormat.push('i');
		}
		// NOTE: document.queryCommandState('createLink') does not work
		// To detect links, we check both boundaries of selection and if at least one
		// of them is an <a> node, we mark the selection as formated with 'createLink'
		if (startBoundaryEl.nodeName === 'A' || endBoundaryEl.nodeName === 'A') {
			console.info('inline formating: anchor');
			selectionFormat.push('a');
		}

		// check for block formating
		if (/^H[123456]$|^BLOCKQUOTE$/.test(parentTagName)) {
			selectionFormat.push(parentTagName.toLowerCase());
		}
		else {
			console.info('block formating: ' + parentTagName);
			selectionFormat.push(parentTagName.toLowerCase());

			var ancestor = parentEl;

			while(!/^P$|^DIV$|^H[123456]$|^BLOCKQUOTE$/.test(ancestor.nodeName)) {
				ancestor = ancestor.parentNode;
				selectionFormat.push(ancestor.nodeName.toLowerCase());
				console.info('block formating: ' + ancestor.nodeName);
			}
		}

		return selectionFormat;
	},


	handleMouseupOnContent: function(e) {
		// in case the user is trying to drop a sortable element with mouseup
		if($('.ui-sortable-placeholder').length > 0) {
			return true;
		}
		var parentEl = helper.getSelectionParentElement();
		// check if the selection lies inside the post-content
		if ($(parentEl).closest('.post-content').length === 0) {
			return false;
		}
		if (this.isMediaElement(parentEl)) {
			return false;
		}
		if (parentEl.nodeName === 'LI' || parentEl.parentNode.nodeName === 'LI') {
			this.showTooltip({
				disableFormats: ['h1', 'h2', 'em']
			});
			return false;
		}
		if (/post-content/.test(parentEl.className)) {
			return false;
		}
		if (parentEl.textContent.length === 0) {
			return false;
		}
		if (parentEl.nodeName === 'BLOCKQUOTE' ) {
			this.showTooltip({
				disableFormats: ['h1', 'h2', 'blockquote']
			});
			return false;
		}
		this.showTooltip();
		return false;
	},

	handleTooltipToggleClick: function(tooltipView, toggle, formatType, isActive, url) {
		// no need to format anything just yet, just show url input
		if (formatType === 'a' && !isActive && !url) {
		    // restore the selection (it has been lost on click)
		    this.restoreSelection();
		    this.saveSelection();
		    // format selection with empty link because selection will be lost with focus
		    document.execCommand('createLink', false, 'http://');
			// notify tooltipView to show the url input
			tooltipView.triggerMethod('show:url:input');
		    return false;
		}

		this.formatSelection(toggle, formatType, isActive, url);
		return false;
	},


	formatSelection: function(toggle, type, active, url) {

		// Get ref to tooltipView
		const tooltipView = this.getTooltipView();

		// Hide all media-related overlays
		this.hideMediaOverlays();

		// restore previously saved selections
		this.restoreSelection();
		this.saveSelection();

		if (type === 'strong') {
			document.execCommand('bold', false, null);
			if(!active) {
				toggle.addClass('active');
			}
			else {
				toggle.removeClass('active');
			}
		}

		if (type === 'em') {
			document.execCommand('italic', false, null);
			if(!active) {
				toggle.addClass('active');
			}
			else {
				toggle.removeClass('active');
			}
		}

		if (type === 'h1') {
			// save element name attribute before formating (for chrome/safari)
			let parent = $(helper.getSelectionParentElement());
			const elementName = parent.attr('name');

			if (!active) {
				document.execCommand('formatBlock', false, 'h1');
				toggle.addClass('active');
				tooltipView.triggerMethod('deactivate:toggle', 'h2');
			}
			else {
				document.execCommand('formatBlock',false,'p');
				toggle.removeClass('active');
			}

			// restore element name attribute after formating (for chrome/safari)
			parent = $(helper.getSelectionParentElement());
			parent.attr('name', elementName);

			parent.addClass('post-section'); // also restore class (again for chrome/safari)
			// chrome/safari deletes selection markers with execComman, so we save again
			this.saveSelection();
		}

		if (type === 'h2') {
			// save element name attribute before formating (for chrome/safari)
			let parent = $(helper.getSelectionParentElement());
			const elementName = parent.attr('name');

			if (!active) {
				document.execCommand('formatBlock',false,'h2');
				toggle.addClass('active');
				tooltipView.triggerMethod('deactivate:toggle', 'h1');
			}
			else {
				document.execCommand('formatBlock',false,'p');
				toggle.removeClass('active');
			}

			// restore element name attribute after formating (for chrome/safari)
			parent = $(helper.getSelectionParentElement());
			parent.attr('name',elementName);
			parent.addClass('post-section'); // also restore class (again for chrome/safari)
			// chrome/safari deletes selection markers with execCommand, so we save again
			this.saveSelection();
		}

		if (type === 'blockquote') {

			// formatBlock behaves differently in firefox and chrome/safari:
			// firefox: wraps current element in 'BLOCKQUOTE' (unexpected)
			// chrome/safari: converts current element to 'BLOCKQUOTE' (expected) &
			//                stops formating at first inline element (unexpected)
			// e.g. if we format a selection that has an inline common ancestor (inside a <b> for example)

			// search for first heading, paragraph, div or blockquote parent
			let parentEl = helper.getSelectionParentElement();
			while (!/^P$|^DIV$|^H[123456]$|^BLOCKQUOTE$/.test(parentEl.nodeName)) {
				parentEl = parentEl.parentNode;
			}
			// now we found it, we select it all
			helper.selectElementContents(parentEl);

			// parent name
			const elementName = $(parentEl).attr('name');

			if (!active) {
				// call execCommand on the selection we created above
				document.execCommand('formatBlock', false, 'blockquote');

				// find the 'BLOCKQUOTE' element we just created (may or may not be direct ancestor)
				let blockquoteEl = helper.getSelectionParentElement();
				let hasBlockChildren = false;
				while (blockquoteEl.nodeName !== 'BLOCKQUOTE') { // for firefox
					hasBlockChildren = true;
					blockquoteEl = blockquoteEl.parentNode;
				}

				// transfer original section name & class to quote
				const $blockquote = $(blockquoteEl).
					attr('name', elementName).
					attr('contentEditable',true).
					addClass('post-section');

				// remove possible block child (for firefox)
				if (hasBlockChildren) {
					$blockquote.html($blockquote.children().html());
				}

				// update section info
				this.updateSections();
				// clear the tooltip
				this.clearTooltip();
			}
			else {
				const $blockquote = $(helper.getSelectionParentElement());
				// clear tooltip
				this.clearTooltip();
				// prepare new <p> to replace the blockquote with
				const $p = $('<p></p>').html($blockquote.html());
				// transfer attributes from blockquote to p
				const attributes = $blockquote.prop('attributes');
				$.each(attributes, function() {
				    $p.attr(this.name, this.value);
				});
				// insert <p> after blockquote & remove blockquote
				$blockquote.after($p).remove();
				// // add post-section class to <p>
				// $p.addClass('post-section').removeAttr('contentEditable');
				// // select <p> contents
				// helper.selectElementContents($p[0]);
				// // show tooltip again
				// this.showTooltip();
				// force the counting of total sections & data length
				this.updateSections();
				// set quote toggle as inactive
				toggle.removeClass('active');
			}
		}

		if (type === 'a') {
			if (!active) {
				document.execCommand('unlink', false, null);
				document.execCommand('createLink', false, url);
				$('a', this.ui.content).attr('target', '_blank');
				tooltipView.triggerMethod('hide:url:input');
				toggle.addClass('active');
			}
			else {
				document.execCommand('unlink',false,null);
				toggle.removeClass('active');
			}
		}

		// selection dimensions may have changed
		tooltipView.triggerMethod('update:position');
	},

	handlePaste: function(e) {

		var container = e.target;
		// chrome enters <br> tags
		while (container.nodeName === 'BR') {
			container = container.parentNode;
		}

		// capture the content to be pasted as plain text
		var data = e.originalEvent.clipboardData.getData('Text');

		// console.log('paste happened');
		// console.log('event: ', e);
		// console.log('data: ', data);
		// console.log('container: ', container);

		// save caret position before paste
		this.saveSelection();

		// replace existing text with new, which contains all pasted content
		helper.deleteSelection();
		var pos = helper.getCaretCharacterOffsetWithin(container, true);
		var content = $(container).html();
		var newContent = content.substr(0, pos) + data + content.substr(pos);

		// console.log('pos: ', pos);
		// console.log('new content: ', newContent);

		$(container).html(newContent);

		// restore caret position after paste
		this.restoreSelection();

		// prevent paste default behaviour & bubbling
		e.preventDefault();
		e.stopPropagation();
		// return false;

	}

});

Cocktail.mixin(Editor, KeycodesMixin, UidMixin, PlaceholdersMixin);

export default Editor;
