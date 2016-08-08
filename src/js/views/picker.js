import Marionette, {CompositeView} from 'backbone.marionette';
import Syphon from 'backbone.syphon';
import _ from 'underscore';
import {isUrl} from 'common/validators';
import formErrorTpl from './templates/form.error';

const PickerView = CompositeView.extend({

	className: 'typely-media-picker non-section mark-for-editable',

	attributes: {
		contenteditable: false
	},

	ui: {
		'cancel': '.js-cancel',
		'form': 'form',
		'input': 'form [name]',
		'formGroup': '.form-group'
	},

	events: {
		'mouseup': 'stopPropagation',
		'keydown': 'stopPropagation',
		'click @ui.cancel': 'handleCancel',
		'submit @ui.form': 'handleSubmit'
	},

	initialize: function() {
		this.hookEl = this.getOption('hookEl');
		this.maxFileSize = this.getOption('maxFileSize');
	},

	stopPropagation: function(e) {
		e.stopPropagation();
	},

	handleCancel: function(e) {
		e.stopPropagation();
		this.destroy();
	},

	handleSubmit: function(e) {
		e.preventDefault();
		this.clearErrors();
		const data = Syphon.serialize(this);
		const report = this.validateInput(data);
		if (report.isValid) {
			this.triggerMethod('submit', data);
		} else {
			this.showErrors(report.errors);
		}
	},

	validateInput: function({url, caption}) {
		let errors = {};
		if (url!== undefined && !isUrl(url)) {
			errors.url = 'Url is invalid';
		}
		return {
			isValid: _.isEmpty(errors),
			errors: errors
		};
	},

	showErrors: function(errors) {
		_.each(errors, (value, key) => {
			let input = this.ui.input.filter(`[name=${key}]`);
			const error = $(formErrorTpl({error: value})).addClass('form-error');
			input.after(error);
			input.parent('.form-group').addClass('has-error');
		});
	},

	clearErrors: function() {
		this.ui.formGroup.removeClass('hasError');
		this.$el.find('.form-error').remove();
	},

	insertMediaView: function(view) {
		// render view
		view.render();

		// insert view $el before self
		this.$el.before(view.$el);

		// manually trigger attach event on view
		// NOTE: if we don't do it manually here it won't be
		// fired since the view is not shown inside a Region
		Marionette.triggerMethodOn(view, 'attach', view);

		// NOTE: this works, even though PickerView
		// is NOT a child of the EditorView (not rendered
		// inside one of its regions), because the EditorView
		// manually registers an event listener
		this.triggerMethod('inserted:media', {
			mediaView: view,
			hookEl: this.hookEl
		});

		this.destroy();
	}
});

export default PickerView;
