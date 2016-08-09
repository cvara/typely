import $ from 'jquery';
import MediaView from 'views/media';
import embedTpl from './templates/embed';
import {notify} from 'common/notify';

const EmbedView = MediaView.extend({

	template: embedTpl

});

export default EmbedView;
