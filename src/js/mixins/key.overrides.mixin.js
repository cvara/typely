export default {

	// New override methods can be added by following the naming convention:
	// onOverride[capitalized_key_name]
	// NOTE: capitalized_key_name should exist in the keycodes.mixin keyIndex map

	onOverrideEnter: function(e, parentEl, isTrailing, isLeading) {
		const position = isLeading ? 'start' : isTrailing ? 'end' : 'mid-section';
		const parentTagName = parentEl.nodeName;

		console.log('Enter override: at: ', position, 'of', parentTagName);

		// 'enter' was pressed at the end of heading element
		// NOTE: chrome instead of appending <p> appends <div> after headings, which is unwanted
		if (isTrailing && /^H[123456]$/.test(parentTagName)) {
			// prevent default behaviour (would be the insertion of a <p> or <div>)
			e.preventDefault();
			this.createEmptySection(parentEl, true);
			return;
		}
		// 'enter' was pressed at the end of blockquote element
		if (isTrailing && /BLOCKQUOTE/.test(parentTagName)) {
			// prevent default behaviour (would be the insertion of
			// a new blockquote in Chrome or a <br> in Firefox)
			e.preventDefault();
			this.createEmptySection(parentEl, true);
			return;
		}
		// 'enter' was pressed from inside a media element
		if(this.isMediaElement(parentEl)) {
			e.preventDefault();
		}
	},

	onOverrideBackspace: function(e, parentEl, isTrailing, isLeading) {

		const position = isLeading ? 'start' : isTrailing ? 'end' : 'mid-section';
		const $parentEl = $(parentEl);
		const parentTagName = parentEl.nodeName;

		console.log('Backspace override: at: ', position, 'of', parentTagName);

		var $prev = $(parentEl).prev();

		// 'backspace' was pressed at the start of figcaption element
		if ($parentEl.hasClass('caption') && (isLeading || parentEl.textContent.length === 0)) {
			e.preventDefault();
			return;
		}

		// 'backspace' was pressed immediately after a media element
		if (isLeading && $prev.hasClass('media-element')) {
			console.log('after media');
			e.preventDefault();
			// mark images inside $prev for delete (there may be many)
			$('img', $prev).each((index, image) => {
				this.markImageForDelete(image);
			});
			// manually remove the previous element
			const mediaName = $prev.attr('name');
			this.destroyMediaView(mediaName);
			// force section refreshing
			// self.$postContent.trigger('sectionsChanged.posting.EDITOR');
			this.updateSections();
		}
	},

	onOverrideDelete: function(e, parentEl, isTrailing, isLeading) {

		const position = isLeading ? 'start' : isTrailing ? 'end' : 'mid-section';
		const $parentEl = $(parentEl);
		const parentTagName = parentEl.nodeName;

		console.log('Delete override: at: ', position, 'of', parentTagName);

		var $next = $parentEl.next();

		// 'delete' was pressed at the end of figcaption element
		if ($parentEl.hasClass('caption') && (isTrailing || parentEl.textContent.length === 0)) {
			e.preventDefault();
			return;
		}

		// 'delete' was pressed at the end of current element & next element is a media element
		if (isTrailing && $next.hasClass('media-element')) {
			console.log('before media');
			e.preventDefault();
			// mark images inside $next for delete (there may be many)
			$('img', $next).each((index, image) => {
				this.markImageForDelete(image);
			});
			// manually remove the following element
			const mediaName = $next.attr('name');
			this.destroyMediaView(mediaName);
			// force section refreshing
			// self.$postContent.trigger('sectionsChanged.posting.EDITOR');
			this.updateSections();
		}
	}
};
