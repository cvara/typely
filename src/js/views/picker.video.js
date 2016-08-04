import PickerView from 'views/picker';
import {Model} from 'backbone';
import VideoView from 'views/media.video';
import videoPickerTpl from './templates/video.picker';
import Syphon from 'backbone.syphon';
import {generateSectionUID} from 'common/uid';

const VideoPickerView = PickerView.extend({

	template: videoPickerTpl,

	ui: {
		'insert': '.js-insert',
		'cancel': '.js-cancel',
		'form': 'form'
	},

	events: _.extend({}, PickerView.prototype.events, {
		'click @ui.cancel': 'handleCancel',
		'submit @ui.form': 'handleSubmit'
	}),

	stopPropagation: function(e) {
		e.stopPropagation();
	},

	handleCancel: function(e) {
		e.stopPropagation();
		this.destroy();
	},

	handleSubmit: function(e) {
		e.preventDefault();
		const data = Syphon.serialize(this);
		this.showVideo(data);
	},

	showVideo: function({url, caption}) {
		console.log(url, caption);
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
				videoId: videoID,
				caption: caption,
				captionPlaceholder: 'Click to enter a caption'
			}),
			name: generateSectionUID(),
			provider: provider
		});

		videoView.render();

		// insert view $el after self
		this.$el.before(videoView.$el);

		// FIXME: this does not work, since VideoPickerView
		// is NOT a child of the EditorView (not rendered
		// inside one of its regions). This means that events
		// have no way of bubbling up. Use backbone.radio instead
		this.triggerMethod('inserted:media', {
			mediaView: videoView,
			hookEl: this.hookEl
		});

		this.destroy();
	}
});

export default VideoPickerView;
