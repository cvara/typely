import PickerView from 'views/picker';
import {Model} from 'backbone';
import EmbedView from 'views/media.embed';
import embedPickerTpl from './templates/picker.embed';
import _ from 'underscore';

import {generateSectionUID} from 'common/uid';

const EmbedPickerView = PickerView.extend({

	template: embedPickerTpl,

	ui: _.extend({}, PickerView.prototype.ui, {
		// child ui elements go here
	}),

	events: _.extend({}, PickerView.prototype.events, {
		// child events go here
	}),

	onSubmit: function(data) {
		this.showEmbed(data);
	},

	showEmbed: function({code, caption}) {
		let match, videoID, provider;

		const embedView = new EmbedView({
			model: new Model({
				code: code,
				caption: caption,
				captionPlaceholder: 'Click to enter a caption'
			}),
			name: generateSectionUID()
		});

		// invoke parent method to insert view
		this.insertMediaView(embedView);
	}
});

export default EmbedPickerView;
