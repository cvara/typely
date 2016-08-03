let sectionUIDs = [];
let imageUIDs = [];


const generateSectionUID = function() {
    /*jshint bitwise: false*/
    let id;

    do {
        id = ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).substr(-4);
    } while (sectionUIDs.indexOf(id) !== -1);

    sectionUIDs.push(id);

    return id;
};

const generateImageUID = function() {
    /*jshint bitwise: false*/
    let id;

    do {
        id = 'image-' + ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).substr(-4);
    } while (imageUIDs.indexOf(id) !== -1);

    imageUIDs.push(id);

    return id;
};


export {
	sectionUIDs,
	imageUIDs,
	generateSectionUID,
	generateImageUID
};
