import $ from 'jquery';
import MediaView from 'views/media';
import youtubeTpl from './templates/video.youtube';
import vimeoTpl from './templates/video.vimeo';
import iframeTpl from './templates/iframe';
import {notify} from 'common/notify';

const VideoView = MediaView.extend({

	tagName: 'p',

	getTemplate: function() {
		const provider = this.getOption('provider');
		if (provider === 'youtube') {
			return youtubeTpl;
		}
		if (provider === 'vimeo') {
			return vimeoTpl;
		}
		notify({
			type: 'warn',
			title: 'Unknown video source',
			body: `Attempting to process video as a generic iframe embed. May fail.`
		});
		return iframeTpl;
	}

});

export default VideoView;
