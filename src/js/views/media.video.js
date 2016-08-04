import $ from 'jquery';
import MediaView from 'views/media';
import youtubeTpl from './templates/video.youtube';
import vimeoTpl from './templates/video.vimeo';

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
	}

});

export default VideoView;
