<script lang="ts">
	export let inputName
	let cssClass =
		inputName.toLowerCase() == 'year' ||
		inputName.toLowerCase() == 'month' ||
		inputName.toLowerCase() == 'hour' ||
		inputName.toLowerCase() == 'minute' ||
		inputName == 'CVC'
			? 'short'
			: ''
</script>

<div class="input">
	<label for="input">{inputName}</label>
	<input type="text" id="input" class="{cssClass}" />
</div>

<style>
	label {
		display: block;
		width: 100%;
	}
	.input {
		padding: 0.5rem;
		margin: 0.5rem;
		width: 90%;
	}
	input {
		width: 100%;
		height: 30px;
		outline: none;
	}
	.short {
		width: 60%;
	}
</style>
