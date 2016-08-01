import helper from 'common/helper';

export default {

	placeholders: {
		title: 'Enter a title',
		subtitle: 'Enter a subtitle',
		content: 'Start typing your post'
	},

	placeholderHandlersRegistered: false,

	ui: {
		placeholder: '[data-placeholder]'
	},

	events: {
		'blur @ui.placeholder'     : 'handlePlaceholderBlur',
		'click @ui.placeholder'    : 'handlePlaceholderClick'
	},

	onAttach: function() {
		// Init placeholders
		this.initPlaceholders();
	},

	onBeforeDestroy: function() {
		this.ui.placeholder.off();
	},

	initPlaceholders: function() {
		// all placeholders start empty
		this.ui.placeholder.not('[data-length]').attr('data-length', 0);
		// set placeholder text only on elements that are empty
		this.ui.title.filter('[data-length=0]').html(this.placeholders.title);
		this.ui.subtitle.filter('[data-length=0]').html(this.placeholders.subtitle);
		this.ui.content.filter('[data-length=0]').children('p:first-child').html(this.placeholders.content);
		this.ui.content.blur().children().blur();
	},

	handlePlaceholderChange: function(e) {
		let self = this;

		let placeholder = $(e.currentTarget);
		let which = placeholder.attr('data-placeholder');

		// 'enter'
		if (e.keyCode === self.enterKey) {
			// prevent 'enter' default behaviour
			if (placeholder.hasClass('post-title') || placeholder.hasClass('post-subtitle')) {
				return false;
			}
		}

		// 'tab'
		if (e.keyCode === self.tabKey) {
			if (e.type === 'keydown') {
				if (which === 'title') {
					placeholder.trigger('blur');
					this.ui.subtitle.trigger('click').trigger('focus');
				}
				if (which === 'subtitle') {
					placeholder.trigger('blur');
					this.ui.content.trigger('click').trigger('focus');
					this.ui.content.children('p:first-child').trigger('click').trigger('focus');
					helper.setEndOfContenteditable($('.post-content > p:first-child')[0]);
				}
			}
			return false;
		}

		// on any other key press, we set placeholder text size
		let textLength = which === 'content' ?
			$.trim(placeholder.children('.post-section:not(.media-element)').text()).length :
			$.trim(placeholder.text()).length;

		placeholder.attr('data-length', textLength);
	},

	handlePlaceholderBlur: function(e) {
		let placeholder = $(e.currentTarget);
		let which = placeholder.attr('data-placeholder');

		if (placeholder.attr('data-length') === '0') {
			if (which === 'content') {
				placeholder.children('p:first-child').html(this.placeholders[which]);
			} else {
				placeholder.html(this.placeholders[which]);
			}
		}
	},

	handlePlaceholderClick: function(e) {
		this.registerHandlers();
		this.focusAndEmpty(e);
	},

	registerHandlers: function() {
		if (!this.placeholderHandlersRegistered) {
			this.ui.placeholder.on('keydown keyup keypress change input', this.handlePlaceholderChange.bind(this));
			this.placeholderHandlersRegistered = true;
		}
	},

	focusAndEmpty: function(e) {
		let initiator = $(e.target);
		// console.log(e);
		// console.log('Am I the first child? ', $target.is('p.post-section:first-child'));
		// if click was triggered from inside a non-section (i.e. slideshow picker)
		if (!initiator.attr('data-placeholder') && !initiator.is('p.post-section:first-child')) {
			// console.log('I am not inside a placeholder, exiting...');
			return true;
		}
		// // if click was triggered from inside a non-section (i.e. slideshow picker)
		// if ($target.closest('.non-section').length > 0) {
		// 	return true;
		// }

		let placeholder = $(e.currentTarget);

		let focusEl;
		if (placeholder.hasClass('post-content')) {
			focusEl = placeholder.children('p:first-child');
		} else {
			focusEl = placeholder;
		}

		if (parseInt(placeholder.attr('data-length')) === 0) {
			focusEl.empty();
			helper.selectElementContents(focusEl[0]);
		}
	}
};
