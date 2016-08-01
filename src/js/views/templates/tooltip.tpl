<ul class="toggle-list posting-tooltip">

	<li class="toggle toggle-bold <%= selectionFormat.indexOf('b') !== -1 ? 'active' : '' %>"
		data-format="strong">
		<i class="fa fa-bold"></i>
	</li>

	<li class="toggle toggle-italic <%= selectionFormat.indexOf('i') !== -1 ? 'active' : '' %>"
		data-format="em">
		<i class="fa fa-italic"></i>
	</li>

	<li class="toggle toggle-h1 <%= selectionFormat.indexOf('h1') !== -1 ? 'active' : '' %>"
		data-format="h1">
		<i class="fa fa-header"></i><sub>1</sub>
	</li>

	<li class="toggle toggle-h2 <%= selectionFormat.indexOf('h2') !== -1 ? 'active' : '' %>"
		data-format="h2">
		<i class="fa fa-header"></i><sub>2</sub>
	</li>

	<li class="toggle toggle-quote  <%= selectionFormat.indexOf('blockquote') !== -1 ? 'active' : '' %>"
		data-format="blockquote">
		<i class="fa fa-quote-right"></i>
	</li>

	<li class="toggle toggle-anchor <%= selectionFormat.indexOf('a') !== -1 ? 'active' : '' %>"
		data-format="a">
		<i class="fa fa-link"></i>
	</li>
</ul>


<div class="posting-tooltip-arrow">
	<span class="icon"></span>
</div>


<div class="url-input hidden">
	<input class="input-field" placeholder="Insert Link">
	<div class="close-button">Ok!</div>
</div>
