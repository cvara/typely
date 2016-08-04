import $ from 'jquery';
import {ItemView, LayoutView} from 'backbone.marionette';
import TooltipView from 'views/tooltip';
import InsertMediaView from 'views/insert.media';
import VideoPickerView from 'views/picker.video';
import editorTpl from './templates/editor';
import helper from 'common/helper';
import Cocktail from 'backbone.cocktail';
import KeycodesMixin from 'mixins/keycodes.mixin';
import KeyOverridesMixin from 'mixins/key.overrides.mixin';
import PlaceholdersMixin from 'mixins/placeholders.mixin';
import SectionsMixin from 'mixins/sections.mixin';
import rangy from 'rangy-core';
import rangySelection from 'rangy-selection';


const Editor = LayoutView.extend({

	template: editorTpl,

	className: 'typely-container',

	regions: {
		tooltip: '.tooltip-region',
		insertMedia: '.insert-media-region'
	},

	ui: {
		title: '.post-title',
		subtitle: '.post-subtitle',
		content: '.post-content'
	},

	events: {
		'keydown @ui.content': 'handleKeydownOnContent',
		'keyup @ui.content': 'handleKeyupOnContent',
		'mouseup @ui.content': 'handleMouseupOnContent',
		'mouseenter .post-section': 'handleMouseenterOnSection',
		'paste .post-section': 'handlePaste'
	},

	// Events fired from childviews rendered inside the view's regions
	// NOTE: tooltip:* refers to selection tooltip whereas
	// media:tooltip:* refers to to the insert media tooltip
	childEvents: {
	    'tooltip:click:out': 'clearTooltip',
		'tooltip:toggle:clicked': 'onChildTooltipToggleClicked',
		'media:tooltip:shown': 'clearTooltip',
		'inserted:media': 'onChildInsertedMedia',
		'request:media:input': 'onChildRequestMediaInput'
	},

	// state
	isSelectionSaved: false,
	ctrlDown: false,
	savedSel: null,

	quoteTooltipClass: 'quoteTooltip',
	listTooltipClass: 'listTooltip',

	// hash map for storing media view refs indexed by their section name
	// NOTE: not to be confused with the mediaPickerViews below: this is
	// a dictionary that stores the views related to all *inserted* media
	// sections that are part of the content
	mediaViews: {},

	// media picker views & constructors
	// NOTE: these are the views that allow the selection of the media
	// to be inserted into the content. We store both the constructors
	// (so we may create new instances) and the created instances (so
	// we may delete them when done). We need to store both, since the
	// media instances can't be inserted into a region, so we lose all
	// the region-related view management that is built in Marionette.
	mediaPickerViewConstructors: {
		video: VideoPickerView,
		audio: null,
		slideshow: null
	},

	initialize: function(options) {
		this.maxFileSize = this.getOption('maxFileSize');
		this.allowTrailingMedia = this.getOption('allowTrailingMedia');
	},

	onBeforeShow: function() {
		// InsertMediaView is attached directly
		// NOTE: the InsertMediaView remains forever attached,
		// it just shows and repositions itself when asked to
		this.attachInsertMediaView();
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
		this.overrideImportantKeys(e);
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

	overrideImportantKeys: function(e) {
		const parentEl = helper.getSelectionParentElement();
		const isTrailing = helper.carretAtEndOfElement(parentEl);
		const isLeading = helper.carretAtStartOfElement(parentEl);
		const keyName = this.keyIndex[e.keyCode];
		// override methods reside in KeyOverridesMixin
		this.triggerMethod(`override:${keyName}`, e, parentEl, isTrailing, isLeading);
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


	// Media Picker Related
	// ==========================
	//
	onChildRequestMediaInput: function(childView, type, hookEl) {
		this.showMediaPickerView(type, hookEl);
	},

	getMediaPickerConstructor: function(type) {
		return this.mediaPickerViewConstructors[type];
	},

	showMediaPickerView: function(type, hookEl) {
		const MediaPicker = this.getMediaPickerConstructor(type);
		const mediaPickerView = new MediaPicker({
			hookEl: hookEl
		});
		mediaPickerView.render();
		// manually register a listener for 'inserted:media'
		// NOTE: we need this since mediaPickerViews are not
		// rendered in this view's regions, and thus their
		// events do not spontaneously propagate as childEvents
		mediaPickerView.on('inserted:media', (args) => {
			// emulate a 'child:inserted:media' invoking the handler
			this.triggerMethod('child:inserted:media', mediaPickerView, args);
		});
		mediaPickerView.$el.insertAfter(hookEl);
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
				disableFormats: ['h1', 'h2', 'BLOCKQUOTE']
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
				disableFormats: ['h1', 'h2']
			});
			return false;
		}
		this.showTooltip();
		return false;
	},

	onChildTooltipToggleClicked: function(tooltipView, toggle, formatType, isActive, url) {
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

	isLast: function(sectionEl) {
		const el = sectionEl instanceof $ ? sectionEl : $(sectionEl);
		return el.next(':not(.non-section)').length === 0;
	},

	handleMouseenterOnSection: function(e) {
		const hookEl = $(e.currentTarget);
		if(this.isLast(hookEl) && !this.allowTrailingMedia) {
			return;
		}
		this.showInsertView(hookEl);
	},

	attachInsertMediaView: function() {
		this.insertMediaView = new InsertMediaView({
			contentEl: this.ui.content,
			maxFileSize: this.maxFileSize
		});
		this.getRegion('insertMedia').show(this.insertMediaView);
	},

	showInsertView: function(hookEl) {
		this.insertMediaView.triggerMethod('show:after:hook', hookEl);
	},

	onChildInsertedMedia: function(childView, {mediaView, hookEl}) {
		console.log('onChildInsertedMedia', mediaView, hookEl);
		this.storeMediaView(mediaView);
		this.updateSections();
		if (this.isLast(mediaView.$el)) {
			this.createEmptySection(mediaView.$el, false);
		}
	},

	storeMediaView: function(view) {
		this.mediaViews[view.name] = view;
		console.log(this.mediaViews);
	},

	destroyMediaView: function(name) {
		this.mediaViews[name].destroy();
		delete this.mediaViews[name];
		this.insertMediaView.triggerMethod('hide');
		console.log(this.mediaViews);
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

		// prevent paste default behavior & bubbling
		e.preventDefault();
		e.stopPropagation();
	}

});

Cocktail.mixin(Editor, KeycodesMixin, KeyOverridesMixin, PlaceholdersMixin, SectionsMixin);

export default Editor;
