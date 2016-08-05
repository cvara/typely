import RootView from 'views/root';
import EditorView from 'views/editor';


class Typely {
	constructor({
		container,
		maxFileSize = 5 * 1024 * 1024, // 5mb
		allowTrailingMedia = true
	} = {}) {

		if (!container) {
			throw 'TypelyError: container is not set';
		}

		const rootView = this.rootView = new RootView();
		rootView.addRegion('editor', container);

		this.editorView = new EditorView({
			maxFileSize: maxFileSize,
			allowTrailingMedia: allowTrailingMedia
		});

		rootView.getRegion('editor').show(this.editorView);
	}
}

export default Typely;
