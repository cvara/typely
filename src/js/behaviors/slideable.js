import {Behavior} from 'backbone.marionette';
import _ from 'underscore';
import 'jquery-unslider';


const SlideableBehavior = Behavior.extend({

	ui: {
		'slider': '.slider'
	},


	onAttach: function() {
	    this.ui.slider.unslider({
	        arrows: {
	            //  Unslider default behaviour
	            prev: '<i class="unslider-arrow prev fa fa-arrow-left"></i>',
	            next: '<i class="unslider-arrow next fa fa-arrow-right"></i>',
	        }
	    });
	},

	onBeforeDestroy: function() {
		// slider cleanup code would go here
	}
});

export default SlideableBehavior;
