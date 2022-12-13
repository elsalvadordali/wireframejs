<script lang="ts">
	export let text = ''
	export let handleClick = null
	export let parameters = null
</script>

<button on:click="{() => handleClick(parameters)}">{text}</button>

<style>
	button {
		background-color: #aaa;
		border: 2px solid black;
		padding: 0.5rem 1rem;
		margin-top: 0;
		margin-bottom: 3px;
	}
	button:hover,
	button:active {
		margin-top: 3px;
		margin-bottom: 0;
	}
</style>
