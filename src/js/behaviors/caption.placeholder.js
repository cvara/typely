import {Behavior} from 'backbone.marionette';
import $ from 'jquery';


const CaptionPlaceholderBehavior = Behavior.extend({

	ui: {
		'placeholder': '[data-caption-placeholder]'
	},

	events: {
		'click @ui.placeholder': 'giveFocus',
		'focus @ui.placeholder': 'giveFocus',
		'blur @ui.placeholder': 'updateState'
	},

	onRender: function() {
		const caption = this.view.model.get('caption');
		this.ui.placeholder.attr('data-empty', caption && caption.length > 0 ? 'false' : 'true');
	},

	giveFocus: function(e) {
		const placeholder = $(e.currentTarget);
		if (placeholder.attr('data-empty') === 'true') {
			placeholder.html('');
		}
	},

	updateState: function(e) {
		const placeholder = $(e.currentTarget);
		const textLength = $.trim(placeholder.text()).length;
		if (textLength === 0) {
			placeholder.html('Click to enter a caption').attr('data-empty', 'true');
		}
		else {
			placeholder.attr('data-empty', 'false');
		}
	}
});

export default CaptionPlaceholderBehavior;
