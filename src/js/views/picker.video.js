import PickerView from 'views/picker';
import {Model} from 'backbone';
import VideoView from 'views/media.video';
import videoPickerTpl from './templates/picker.video';
import _ from 'underscore';

import {generateSectionUID} from 'common/uid';

const VideoPickerView = PickerView.extend({

	template: videoPickerTpl,

	ui: _.extend({}, PickerView.prototype.ui, {
		// child ui elements go here
	}),

	events: _.extend({}, PickerView.prototype.events, {
		// child events go here
	}),

	onSubmit: function(data) {
		this.showVideo(data);
	},

	showVideo: function({url, caption}) {
		let match, videoID, provider;

		// youtube
		if (/^https?\:\/\/(((www\.)?youtube\.com\/watch\?([^&]+=[^&]+&)*v=.+)|(youtu\.be\/.*))/.test(url)) {
		    videoID = (match = url.match(/(?:v=)([^&]+)/)) !== null ? match[1] : url.match(/(?:youtu.be\/)(.*)/)[1];
			provider = 'youtube';
		}
		// vimeo
		else if (/^https?\:\/\/(www\.)?vimeo\.com\/.+/.test(url)) {
		    videoID = url.match(/^https?\:\/\/(?:www\.)?vimeo\.com\/(.+)/)[1];
			provider = 'vimeo';
		}

		const videoView = new VideoView({
			model: new Model({
				url: url,
				videoId: videoID,
				caption: caption,
				captionPlaceholder: 'Click to enter a caption'
			}),
			name: generateSectionUID(),
			provider: provider
		});

		// invoke parent method to insert view
		this.insertMediaView(videoView);
	}
});

export default VideoPickerView;
