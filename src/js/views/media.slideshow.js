import $ from 'jquery';
import {ItemView} from 'backbone.marionette';
import MediaView from 'views/media';
import slideshowTpl from './templates/slideshow';
import slideshowItemTpl from './templates/slideshow.item';
import {notify} from 'common/notify';
import SlideableBehavior from 'behaviors/slideable';


const SlideshowItemView = ItemView.extend({
	template: slideshowItemTpl,
	tagName: 'li',
	className: 'slider-content'
});

const SlideshowView = MediaView.extend({

	template: slideshowTpl,

	// parent is a CompositeView
	childView: SlideshowItemView,
	childViewContainer: 'ul',

	// slideable behavior
	behaviors: {
		Slideable: {
			behaviorClass: SlideableBehavior
		}
	},

});

export default SlideshowView;
