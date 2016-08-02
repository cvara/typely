import {ItemView} from 'backbone.marionette';
import tooltipTpl from './templates/tooltip';
import _ from 'underscore';
import helper from 'common/helper';
import Cocktail from 'backbone.cocktail';
import KeycodesMixin from 'mixins/keycodes.mixin';
import ClickoutMixin from 'mixins/clickout.mixin';


const Tooltip = ItemView.extend({

	template: tooltipTpl,

	ui: {
		toggleList: '.toggle-list',
		toggle: '[data-format]',
		urlInput: '.url-input',
		urlInputField: '.url-input .input-field',
		urlInputClose: '.url-input .close-button'
	},

	events: {
		'click @ui.toggle': 'handleClickOnToggle',
		'keydown @ui.urlInputField': 'handleKeydownOnUrlInput',
		'click @ui.urlInputClose': 'submitUrl'
	},

	className: function() {
		return 'typely-tooltip ' + (this.getOption('customClass') ? this.getOption('customClass') : '');
	},

	templateHelpers: function() {
		return {
			selectionFormat: this.getOption('selectionFormat') || []
		};
	},

	onRender: function() {
		this.handleDisabledFormats();
	},

	onAttach: function() {
		this.setPosition();
		this.setWidth();
		this.repositionOnWindowResize();
	},

	onBeforeDestroy: function() {
		$(window).off('.' + this.cid);
	},

	onClickOut: function() {
		console.log('click out');
		this.triggerMethod('tooltip:click:out');
	},

	onUpdatePosition: function() {
		this.setPosition();
	},

	onShowUrlInput: function() {
		this.ui.toggleList.addClass('hidden');
		this.ui.urlInput.removeClass('hidden');
		this.ui.urlInputField.focus();
	},

	onHideUrlInput: function() {
		this.ui.toggleList.removeClass('hidden');
		this.ui.urlInput.addClass('hidden');
	},

	onActivateToggle: function(format) {
		this.ui.toggle.filter(`[data-format=${format}]`).addClass('active');
	},

	onDeactivateToggle: function(format) {
		this.ui.toggle.filter(`[data-format=${format}]`).removeClass('active');
	},

	setPosition: function() {
		try {
			// get selection coordinates
			const selCoordinates = helper.calculateSelectionCoordinates();
			const tooltipX = (selCoordinates.start.x + selCoordinates.end.x) / 2;
			const tooltipY = selCoordinates.start.y - 20;

			// get tooltip box dimensions
			const w = this.$el.outerWidth();
			const h = this.$el.outerHeight();

			this.$el.css({
				left : tooltipX - w/2 + 'px',
				top  : tooltipY - 40 + 'px'
			});
		}
		catch (e) {
			console.info('Tooltip: unable to set position');
		}
	},

	setWidth: function() {
		this.$el.css({
			width : this.$el.outerWidth()
		});
	},

	repositionOnWindowResize: function() {
		$(window).on('resize.' + this.cid, _.throttle(() => {
			this.setPosition();
		}, 250));
	},


	handleClickOnToggle: function(e) {
	    const toggle = $(e.currentTarget);
	    const formatType = toggle.attr('data-format');
	    const isActive = toggle.hasClass('active');
		this.triggerMethod('tooltip:toggle:clicked', toggle, formatType, isActive);
	},

	handleKeydownOnUrlInput: function(e) {
		if (e.keyCode === this.enterKey) {
			e.preventDefault();
			this.submitUrl();
		}
	},

	submitUrl: function() {
		const url = this.ui.urlInputField.val();
		const toggle = this.ui.toggle.filter('[data-toggle="a"]');
		this.triggerMethod('tooltip:toggle:clicked', toggle, 'a', false, url);
	},

	handleDisabledFormats: function() {
		_.each(this.getOption('disableFormats'), (format) => {
			this.ui.toggle.filter(`[data-format=${format}]`).addClass('hidden');
		});
	}
});

Cocktail.mixin(Tooltip, KeycodesMixin, ClickoutMixin);

export default Tooltip;
