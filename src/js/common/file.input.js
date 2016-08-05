import $ from 'jquery';

const requestFileInput = function({multiple = false} = {}) {

	const deferred = $.Deferred();

	const input = $(`<input class="typely-hidden-input" type="file" ${multiple ? 'multiple' : ''}>`);

	if (!input[0].files) {
		deferred.reject({
			error: 'This browser doesn\'t seem to support the `files` property of file inputs.'
		});
		return;
    }

	input.appendTo('body');

	input.on('change', (e) => {
		const resolveVal = multiple ? input[0].files : input[0].files[0];
		deferred.resolve(resolveVal);
		input.remove(); // chrome won't fire `change` event if same image is selected twice
	});

	input.trigger('click');

	return deferred.promise();
};

export {requestFileInput};
