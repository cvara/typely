import PickerView from 'views/picker';
import {Collection} from 'backbone';
import {ItemView} from 'backbone.marionette';
import SlideshowView from 'views/media.slideshow';
import slideshowPickerTpl from './templates/picker.slideshow';
import slideshowImagePreviewTpl from './templates/slideshow.image.preview';
import {generateSectionUID, generateImageUID} from 'common/uid';
import {requestFileInput} from 'common/file.input';
import {isImage} from 'common/validators';
import {notify} from 'common/notify';
import {readAsDataUrl} from 'common/image.reader';
import _ from 'underscore';
import SortableBehavior from 'behaviors/sortable';


const ImagePreview = ItemView.extend({
	template: slideshowImagePreviewTpl,
	tagName: 'li',

	ui: {
		delete: '.js-delete',
		input: 'input'
	},

	triggers: {
		'click @ui.delete': 'delete'
	},

	events: {
		'keyup @ui.input': 'handleKeyup',
		// to avoid confusing the sortable plugin
		'mousedown @ui.delete': 'stopPropagation'
	},

	handleKeyup: function(e) {
		this.model.set('caption', this.ui.input.val());
	},

	stopPropagation: function(e) {
		e.stopPropagation();
	}
});

const SlideshowPickerView = PickerView.extend({

	template: slideshowPickerTpl,

	// parent is CompositeView
	childView: ImagePreview,
	childViewContainer: '.image-previews',
	childEvents: {
	    'delete': 'onChildDelete',
	},

	// sortable behavior
	behaviors: {
	    Sortable: {
	        behaviorClass: SortableBehavior,
	        html5sortable: false // Required when using HTML5 Sortable.
	    }
	},

	ui: _.extend({}, PickerView.prototype.ui, {
		// child ui elements go here
		addImage: '.js-add-image',
		imagePreviews: '.image-previews'
	}),

	events: _.extend({}, PickerView.prototype.events, {
		// child events go here
		'click @ui.addImage': 'handleAddImage'
	}),

	initialize: function() {
		PickerView.prototype.initialize.apply(this);
		this.collection = new Collection([]);
	},

	onSubmit: function() {
		this.showSlideshow();
	},

	onChildDelete: function(childView) {
		this.collection.remove(childView.model);
	},

	handleAddImage: function() {
		requestFileInput({multiple: true}).then((files) => {
			// add valid files to collections
			_.chain(files).filter((file) => {
				const isValid = isImage(file) && file.size <= this.maxFileSize;
				// notify user of invalid file
				if (!isValid) {
					notify({
						type: 'warn',
						title: `Skipping ${file.name}`,
						body: `Image type: ${file.type} is invalid. Only jpg, png and gif are accepted`
					});
				}
				return isValid;
			}).each((file => {
				this.addToCollection(file);
			}));
		});
	},

	addToCollection: function(file) {
		readAsDataUrl(file).then((result) => {
			this.collection.add({
				src: result,
				id: generateImageUID(),
				type: file.type,
				name: file.name,
				caption: '',
				captionPlaceholder: 'Click to enter a caption'
			});
		});
	},

	showSlideshow: function() {

		// TODO: render slideshow section in content
		const slideshowView = new SlideshowView({
			collection: this.collection, // the collection is the same
			name: generateSectionUID()
		});

		// invoke parent method to insert view
		this.insertMediaView(slideshowView);
	}
});

export default SlideshowPickerView;
