import {CompositeView} from 'backbone.marionette';
import CaptionPlaceholderBehavior from 'behaviors/caption.placeholder';


const MediaView = CompositeView.extend({

	className: 'post-section media-element',
	tagName: 'p',

	behaviors: {
		CaptionPlaceholder: {
			behaviorClass: CaptionPlaceholderBehavior
		}
	},

	attributes: function() {
		return {
			name: this.getOption('name'),
			contenteditable: false
		};
	},

	initialize: function() {
		this.name = this.getOption('name');
	}
});

export default MediaView;
