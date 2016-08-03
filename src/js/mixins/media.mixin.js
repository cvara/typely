import $ from 'jquery';
import InsertMediaView from 'views/insert.media';


export default {

	events: {
		'mouseenter .post-section': 'handleMouseenterOnSection'
	},

	allowInsertAtTheEnd: true,

	isLast: function(sectionEl) {
		const el = sectionEl instanceof $ ? sectionEl : $(sectionEl);
		return el.next(':not(.non-section)').length === 0;
	},

	handleMouseenterOnSection: function(e) {
		const hookEl = $(e.currentTarget);
		if(this.isLast(hookEl) && !this.allowInsertAtTheEnd) {
			return;
		}
		this.showInsertView(hookEl);
	},

	showInsertView: function(hookEl) {
		const insertMediaView = new InsertMediaView({
			hookEl: hookEl
		});
		this.getRegion('insertMedia').show(insertMediaView);
	}
};
