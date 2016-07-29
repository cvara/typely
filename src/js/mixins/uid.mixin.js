export default {

	sectionUIDs: [],
	imageUIDs: [],

	generateSectionUID: function() {
        /*jshint bitwise: false*/
        var id;

        do {
            id = ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).substr(-4);
        } while (this.sectionUIDs.indexOf(id) !== -1);

        this.sectionUIDs.push(id);

        return id;
    },

    generateImageUID: function() {
        /*jshint bitwise: false*/
        var id;

        do {
            id = 'image-' + ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).substr(-4);
        } while (this.imageUIDs.indexOf(id) !== -1);

        this.imageUIDs.push(id);

        return id;
    }
};
