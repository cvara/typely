import RootView from 'views/root';
import EditorView from 'views/editor';


class Typely {
	constructor({container} = {}) {
		this.container = container;

		var rootView = new RootView();
		rootView.addRegion('editor', this.container);

		var editorView = new EditorView({});

		rootView.getRegion('editor').show(editorView);
	}
}

export default Typely;
