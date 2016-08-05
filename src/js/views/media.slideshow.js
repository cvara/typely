import $ from 'jquery';
import MediaView from 'views/media';
import slideshowTpl from './templates/slideshow';
import {notify} from 'common/notify';

const VideoView = MediaView.extend({

	tagName: 'p',

	template: slideshowTpl

});

export default VideoView;
