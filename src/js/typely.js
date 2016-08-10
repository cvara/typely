import RootView from 'views/root';
import EditorView from 'views/editor';
import {Model} from 'backbone';


class Typely {

	constructor({
		container,
		maxFileSize = 5 * 1024 * 1024, // 5mb
		allowTrailingMedia = true,
		article // a previously saved article
	} = {}) {

		// Make sure container option exists
		if (!container) {
			throw 'TypelyError: container is not set';
		}

		// Prepare root view and add a region to it
		const rootView = this.rootView = new RootView();
		rootView.addRegion('editor', container);

		// Prepare the model
		this._model = new Model({
			title: '',
			subtitle: '',
			content: ''
		});

		// Create the editor view
		this.editorView = new EditorView({
			model: this._model,
			maxFileSize: maxFileSize,
			allowTrailingMedia: allowTrailingMedia
		});

		// Show the editor view inside the region
		rootView.getRegion('editor').show(this.editorView);
	}

	get article() {
		return this._model.toJSON();
	}

	set article(data) {
		this._model.set(data);
	}
}

export default Typely;
