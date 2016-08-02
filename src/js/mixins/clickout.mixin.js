export default {

	onAttach: function() {
		this.detectClickouts();
	},

	onBeforeDestroy: function() {
		$(document).off('.' + this.cid);
	},

	detectClickouts: function() {
		$(document).on('mousedown.' + this.cid, (e) => {
			const container = this.$el;
			 // if the target of the click isn't the container nor a descendant of the container
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				this.triggerMethod('click:out');
			}
		});
	}
};
