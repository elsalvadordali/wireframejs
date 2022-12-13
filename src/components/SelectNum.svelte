<script lang="ts">
	import { updateOrder } from '../store'
	let quantity = 0
	export let selection

	$: updateOrder({ [selection]: quantity })
</script>

<div class="inline">
	<button on:click="{() => (quantity > 0 ? quantity-- : 0)}">-</button>
	<input bind:value="{quantity}" type="text" disabled />
	<button on:click="{() => quantity++}">+</button>
</div>

<style>
	.inline {
		display: flex;
		align-items: center;
	}
	button {
		border: 2px solid black;
		padding: 1rem;
	}
	input {
		width: 30px;
		padding: 0.5rem 1rem;
		text-align: center;
		font-size: 1.675rem;
		border: none;
		border-top: 2px solid black;
		border-bottom: 2px solid black;
	}
</style>
