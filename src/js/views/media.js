import {CompositeView} from 'backbone.marionette';

const MediaView = CompositeView.extend({

	className: 'post-section media-element',

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
