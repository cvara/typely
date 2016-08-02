import $ from 'jquery';
import {ItemView} from 'backbone.marionette';
import insertMediaTpl from './templates/insert.media';
import Cocktail from 'backbone.cocktail';
import ClickoutMixin from 'mixins/clickout.mixin';

const InsertMediaView = ItemView.extend({
	template: insertMediaTpl,

	className: 'typely-insert-media',

	ui: {
		showTooltipButton: '.show-tooltip-button',
		tooltip: '.tooltip',
		tooltipList: '.tooltip .tooltip-list',
		tooltipListItem: '.tooltip .tooltip-list li'
	},

	events: {
		'mouseup @ui.showTooltipButton': 'killEvent',
		'mousedown @ui.showTooltipButton': 'handleTooltipButtonClick'
	},

	initialize: function() {
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
		console.log('click out');
		this.destroy();
	},

	onHookDetached: function() {
		this.destroy();
	},

	// TODO: instead of triggering `postHeightChanged`, just call positionSelf()
	positionSelf: function() {
		const hookEl = this.hookEl;

		if (!$.contains(document, hookEl[0])) {
		    this.triggerMethod('hook:detached');
			return;
		}

		const hookPosition = hookEl.position();

		let top = hookPosition.top +
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
	}
});

Cocktail.mixin(InsertMediaView, ClickoutMixin);

export {InsertMediaView};
