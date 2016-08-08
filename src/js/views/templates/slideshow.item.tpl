<figure>
	<img src="<%= src %>" id="<%= id %>" data-type="<%= type %>">
	<figcaption
		class="caption editable"
		contenteditable="true"
		data-empty="<%= caption.length === 0 ? 'true' : 'false' %>">
		<%= caption || captionPlaceholder %>
	</figcaption>
</figure>
