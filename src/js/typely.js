import Root from './views/root';
import Editor from './views/editor';


class Typely {
	constructor({container} = {}) {
		this.container = container;

		var rootView = new Root();
		rootView.addRegion('editor', this.container);

		var editorView = new Editor({});

		rootView.getRegion('editor').show(editorView);
	}
}


window.Typely = Typely;

export default Typely;
