import $ from 'jquery';
import {ItemView} from 'backbone.marionette';
import insertMediaTpl from './templates/insert.media';
import figureSectionTpl from './templates/figure.section';
import Cocktail from 'backbone.cocktail';
import ClickoutMixin from 'mixins/clickout.mixin';
import {requestSingleFileInput} from 'common/file.input';
import {notify} from 'common/notify';
import {generateSectionUID, generateImageUID} from 'common/uid';

// TODO: when content height changes, instead of triggering
//       `postHeightChanged`, just call positionSelf()


const InsertMediaView = ItemView.extend({
	template: insertMediaTpl,

	className: 'typely-insert-media',

	ui: {
		showTooltipButton: '.show-tooltip-button',
		tooltip: '.tooltip',
		tooltipList: '.tooltip .tooltip-list',
		tooltipListItem: '.tooltip .tooltip-list li',
		mediaType: '[data-media-type]',
		fileInput: 'input[type="file"]'
	},

	events: {
		'mouseup @ui.showTooltipButton': 'killEvent',
		'mousedown @ui.showTooltipButton': 'handleTooltipButtonClick',
		'mouseup @ui.mediaType': 'killEvent',
		'mousedown @ui.mediaType': 'handleMediaTypeClick'
	},

	initialize: function() {
		this.maxFileSize = this.getOption('maxFileSize');
		this.contentEl = this.getOption('contentEl');
		this.hookEl = this.getOption('hookEl');
		this.prevElName = this.hookEl.attr('name');
		this.nextElName = this.hookEl.next(':not(.non-section)').length > 0 ?
			this.hookEl.next().attr('name') : -1;
	},

	onAttach: function() {
		this.positionSelf();
		this.saveSiblingRefsToDOM();
		this.setTooltipWidth();
	},

	onClickOut: function() {
		this.destroy();
	},

	onHookDetached: function() {
		this.destroy();
	},

	positionSelf: function() {
		const hookEl = this.hookEl;
		const contentEl = this.contentEl;

		if (!$.contains(document, hookEl[0])) {
		    this.triggerMethod('hook:detached');
			return;
		}

		const hookPosition = hookEl.position();
		const contentElPosition = contentEl.position();

		const left = 0;

		let top = contentElPosition.top +
			hookPosition.top +
			hookEl.outerHeight(true) -
			parseInt(hookEl.css('margin-bottom'));

		// minor alignment corrections
		if(hookEl[0].nodeName === 'H1') {
			// top -= 7;
		}
		else if(hookEl[0].nodeName === 'BLOCKQUOTE') {
			top += 7;
		}
		else {
			top += 3;
		}

		this.$el.css({
			left: left + 'px',
			top: top + 'px'
		});
	},

	saveSiblingRefsToDOM: function() {
		this.$el.attr('data-ref-prev', this.prevElName);
		this.$el.attr('data-ref-next', this.nextElName);
	},

	handleTooltipButtonClick: function(e) {
		this.killEvent(e);
		this.toggleTooltip();
		return false;
	},

	killEvent: function(e) {
		e.preventDefault();
		e.stopPropagation();
	},

	setTooltipWidth: function() {
		const itemWidth = this.ui.tooltipListItem.width();
		const itemCount = this.ui.tooltipListItem.length;
		// this.ui.tooltip.width(itemWidth * itemCount);
		this.ui.tooltipList.width(itemWidth * itemCount);
	},

	toggleTooltip: function() {
		this.ui.tooltip.toggleClass('hidden');
		if (this.ui.tooltip.hasClass('hidden')) {
			this.triggerMethod('media:tooltip:hidden');
		} else {
			this.triggerMethod('media:tooltip:shown');
		}
	},

	handleMediaTypeClick: function(e) {
		this.killEvent(e);
		const which = $(e.currentTarget).attr('data-media-type');
		console.log(which);
		switch (which) {
			case 'image':
				this.initiateImageInput();
				break;
			case 'video':
				this.initiateVideoInput();
				break;
			case 'slideshow':
				this.initiateSlideshowInput();
				break;
			case 'audio':
				this.initiateAudioInput();
		}
	},

	initiateImageInput: function() {
		requestSingleFileInput().then((file) => {
			if (!this.isValidImage(file)) {
				this.destroy();
				return;
			}
			this.displaySingleImage({
				file: file,
				hookEl: this.hookEl
			});
		});
	},

	isValidImage: function(file) {
		// make sure the file is an image
		if (!(/jp(e)?g|png|gif/i).test(file.type)) {
			notify({
				type: 'warn',
				title: 'Invalid Image',
				body: `Image type: ${file.type} is invalid. Only jpg, png and gif are accepted`
			});
			return false;
		}
		// make sure selected file size does not exceed threshold
		if (file.size > this.maxFileSize) {
			notify({
				type: 'warn',
				title: 'Image Size Error',
				body: `Image size should not exceed ${this.maxFileSize}`
			});
			return false;
		}
		return true;
	},

	displaySingleImage: function({file, hookEl}) {

		console.log(file, hookEl);

	    const fr = new FileReader();

	    // install event handler for the 'load' event, which fires at completion of the read
	    fr.onload = () => {
	        const img = new Image();
	        img.onload = () => {
				// generate figure section html
				const figureHtml = figureSectionTpl({
					name: generateSectionUID(),
					src: img.src,
					id: generateImageUID(),
					type: file.type,
					captionPlaceholder: 'Click to enter a caption'
				});
				const figureEl = $(figureHtml);
	            // insert figure after hookEl
				hookEl.after(figureEl);

				this.triggerMethod('inserted:single:image', {
					figureEl: figureEl,
					hookEl: hookEl
				});
	        };
	        // will force the browser to load image & when done will fire 'load' on image
	        img.src = fr.result;
	    };
	    // read the file (will fire 'load' on FileReader when done)
	    fr.readAsDataURL(file);
	},


});

Cocktail.mixin(InsertMediaView, ClickoutMixin);

export default InsertMediaView;
