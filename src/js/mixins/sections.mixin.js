import $ from 'jquery';
import helper from 'common/helper';

export default {

	ui: {
		sectionParent: '.post-content'
	},

	events: {
		'input @ui.sectionParent'   : 'updateSections',
		'change @ui.sectionParent'  : 'updateSections',
	},

	// children of @ui.sectionParent that are considered sections
	sectionSelector: ':not(br):not(hr):not(.non-section)',

	// number of existing sections
	numOfSections: 1,

	onRender: function() {
		this.createFirstSection();
	},

	createFirstSection: function() {
		// create the first section with a random uid
		if (typeof this.ui.sectionParent.attr('data-length') === 'undefined') {
		    this.createEmptySection('start', false);
		}
	},

	createEmptySection: function(hook, giveFocus) {
		console.log('createFirstSection');
		// create new empty section
		var section = $('<p class="post-section" name="' + this.generateSectionUID() + '"></p>');
		// attach it to dom
		if (!hook || hook === 'start') {
			this.ui.sectionParent.prepend(section);
		} else if (hook === 'end') {
			this.ui.sectionParent.append(section);
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
		this.updateSections();
		// return it
		return section;
	},

	renameDuplicateSections: function() {
		var sections = this.ui.sectionParent.children(this.sectionSelector);

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

	nameUnnamedSections: function() {
		var sections = this.ui.sectionParent.children(this.sectionSelector);

		var unnamedSections = sections.filter(':not([name])').addClass('post-section');

		unnamedSections.each((i, section) => {
			$(section).attr('name', this.generateSectionUID());
		});
	},

	updateSections: function() {

	    // we calculate section number after a small delay to allow the DOM inspector to parse any changes
		requestAnimationFrame(() => {
			// clear accidentally added first level <br> elements (mainly for firefox)
			this.ui.sectionParent.children('br').remove();

			var sections = this.ui.sectionParent.children(this.sectionSelector);
			var newNumOfSections = sections.length;

			if (this.numOfSections !== newNumOfSections) {

				// new sections were added: give them unique names
				if (newNumOfSections > this.numOfSections) {
					console.info('sections added.');
					// handle the case where the browser gives name to new section (there will be duplicates)
					this.renameDuplicateSections();
					// handle the case where the browser creates an unnamed/un-classed section
					// (e.g. after pressing enter from inside an empty paragraph)
					this.nameUnnamedSections();
				}

				// sections were deleted
				else {
					console.info('sections deleted.');
					// the user accidentally deleted all sections
					if (newNumOfSections === 0) {
						console.info('all sections deleted');
						this.ui.sectionParent.focus(); // give focus to the correct contentEditable element (chrome)
						document.execCommand('selectAll', false, null); // select leftovers (<br/> elements usually)
						document.execCommand('delete', false, null); // delete leftovers
						this.createEmptySection('start', true);
						newNumOfSections = 1;
						sections = this.ui.sectionParent.children(this.sectionSelector);
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
};
