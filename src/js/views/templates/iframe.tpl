<iframe src="<%= url %>" frameborder="0"></iframe>
<span
	class="caption video-description editable"
	contenteditable="true"
	data-empty="<%= caption.length === 0 ? 'true' : 'false' %>">
	<%= caption || captionPlaceholder %>
</span>
