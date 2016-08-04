import {ItemView} from 'backbone.marionette';


const PickerView = ItemView.extend({

	className: 'typely-media-picker non-section mark-for-editable',

	attributes: {
		contenteditable: false
	},

	events: {
		'mouseup': 'stopPropagation',
		'keydown': 'stopPropagation'
	},

	stopPropagation: function(e) {
		e.stopPropagation();
	},

	initialize: function() {
		this.hookEl = this.getOption('hookEl');
	}
});

export default PickerView;
