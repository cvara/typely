<iframe width="100%" height="355" src="<%= src %>" frameborder="0"></iframe>
<span
	class="caption video-description editable"
	contenteditable="true"
	data-empty="<%= caption.length === 0 ? 'true' : 'false' %>">
	<%= caption || 'Click to enter a caption' %>
</span>
