import jQuery from 'jquery';
import $ from 'jquery';
import {ItemView} from 'backbone.marionette';
import Radio from 'backbone.radio';
import editorTpl from './templates/editor';
import helper from 'common/helper';
import Cocktail from 'backbone.cocktail';
import KeycodesMixin from 'mixins/keycodes.mixin';
import UidMixin from 'mixins/uid.mixin';
import PlaceholdersMixin from 'mixins/placeholders.mixin';


/*
	Editor

	triggers on self:

	* `sections:changed`

*/
var Editor = ItemView.extend({

	template: editorTpl,

	ui: {
		title: '.post-title',
		subtitle: '.post-subtitle',
		content: '.post-content'
	},

	events: {
		'keydown @ui.content' : 'handleKeydownOnContent',
		'input @ui.content'   : 'updateSections',
		'change @ui.content'  : 'updateSections'
	},

	// children of @ui.content that are considered sections
	sectionSelector: ':not(br):not(hr):not(.non-section)',

	// number of sections (we always start with 1 section)
	numOfSections: 1,

	onAttach: function() {
		this.createFirstSection();
	},

	createFirstSection: function() {
		// create the first section with a random uid
		if (typeof this.ui.content.attr('data-length') === 'undefined') {
		    this.createEmptySection('start', true);
		}
	},

	createEmptySection: function(hook, giveFocus) {
		console.log('createEmptySection');

		// create new empty section
		var $p = $('<p class="post-section" name="' + this.generateSectionUID() + '"></p>');
		// attach it to dom
		if (!hook || hook === 'start') {
			this.ui.content.prepend($p);
		} else if (hook === 'end') {
			this.ui.content.append($p);
		} else if (hook.nodeType || hook instanceof $) {
			$p.insertAfter(hook);
		} else {
			return false;
		}
		// give it focus
		if (giveFocus) {
			helper.selectElementContents($p[0]);
		}
		// force counting of sections
		// this.ui.content.trigger('sectionsChanged.posting.EDITOR');
		this.updateSections();
		// return it
		return $p;
	},

	isMediaElement: function(element) {
		return /^FIGURE$|^IMG$|^FIGCAPTION$/.test(element.nodeName) ||
			$(element).hasClass('media-element') ||
			$(element).parentsUntil('#main-content', '.media-element').length > 0;
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


	handleKeydownOnContent: function(e) {

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
	}
});

Cocktail.mixin(Editor, KeycodesMixin, UidMixin, PlaceholdersMixin);

export default Editor;
