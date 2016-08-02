import $ from 'jquery';

const requestSingleFileInput = function() {

	const deferred = $.Deferred();

	const input = $('<input type="file">').css({
		'position': 'absolute',
		'top': 0,
		'left': 0,
		'width': 0,
		'height': 0,
		'visibility': 'hidden',
		'z-index': -1
	});

	if (!input[0].files) {
		deferred.reject({
			error: 'This browser doesn\'t seem to support the `files` property of file inputs.'
		});
		return;
    }

	input.appendTo('body');

	input.on('change', (e) => {
		deferred.resolve(input[0].files[0]);
		input.remove(); // chrome won't fire `change` event if same image is selected twice
	});

	input.trigger('click');

	return deferred.promise();
};

export {requestSingleFileInput};
