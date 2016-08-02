import $ from 'jquery';
import {InsertView} from 'views/media';


export default {

	events: {
		'mouseenter .post-section': 'showAddMediaButton'
	},

	ALLOW_INSERT_MEDIA_LAST: true,

	isLast: function(sectionEl) {
		const el = sectionEl instanceof $ ? sectionEl : $(sectionEl);
		return el.next(':not(.non-section)').length === 0;
	},

	showAddMediaButton: function(e) {

		const hookEl = $(e.currentTarget);

		if(this.isLast(hookEl) && !this.ALLOW_INSERT_MEDIA_LAST) {
			return;
		}

		const insertMediaView = new InsertView({
			hookEl: hookEl
		});

		this.getRegion('insertMedia').show(insertMediaView);
	}
};
