const notify = function({
	type = 'log',
	title = 'Hello',
	body = 'World'
} = {}) {
	console[type](title, body);
};
export {notify};
