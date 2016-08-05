import $ from 'jquery';

const readAsDataUrl = function(file) {
	const deferred = $.Deferred();
	const fr = new FileReader();

	// install event handler for the 'load' event, which fires at completion of the read
	fr.onload = () => {
		deferred.resolve(fr.result);
	};
	// read the file (will fire 'load' on FileReader when done)
	fr.readAsDataURL(file);

	return deferred.promise();
};

export {readAsDataUrl};
