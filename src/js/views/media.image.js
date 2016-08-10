import $ from 'jquery';
import MediaView from 'views/media';
import imageTpl from './templates/image';
import CaptionPlaceholderBehavior from 'behaviors/caption.placeholder';


const ImageView = MediaView.extend({

	template: imageTpl,
	tagName: 'figure',

	ui: {
		'image': 'img'
	},

	events: {
		'mouseenter': 'showActionsOverlay',
		'mouseleave': 'hideActionsOverlay'
	},

	showActionsOverlay: function() {
		// console.log('show overlay!');
	},

	hideActionsOverlay: function() {
		// console.log('hide overlay!');
	}
});

export default ImageView;
