import {ItemView} from 'backbone.marionette';
import insertMediaTpl from './templates/insert.media';


const InsertView = ItemView.extend({
	template: insertMediaTpl,

	className: 'typely-insert-media',

	initialize: function() {
		this.hookEl = this.getOption('hookEl');
		this.prevElName = this.hookEl.attr('name');
		this.nextElName = this.hookEl.next(':not(.non-section)').length > 0 ?
			this.hookEl.next().attr('name') : -1;
	},

	onAttach: function() {
		this.positionSelf();
		this.storeSiblingRefs();
	},

	positionSelf: function() {
		const hookEl = this.hookEl;
		const hookPosition = hookEl.position();

		let top = hookPosition.top +
			hookEl.outerHeight(true) -
			parseInt(hookEl.css('margin-bottom'));

		// minor alignment corrections
		if(hookEl[0].nodeName === 'H1') {
			top -= 7;
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

	storeSiblingRefs: function() {
		console.log(this.nextElName);
		this.$el.attr('data-ref-prev', this.prevElName);
		this.$el.attr('data-ref-next', this.nextElName);
	}
});

export {InsertView};
