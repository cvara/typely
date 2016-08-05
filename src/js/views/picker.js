import {ItemView} from 'backbone.marionette';
import Syphon from 'backbone.syphon';
import _ from 'underscore';
import {isUrl} from 'common/validators';
import formErrorTpl from './templates/form.error';

const PickerView = ItemView.extend({

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
	}
});

export default PickerView;
