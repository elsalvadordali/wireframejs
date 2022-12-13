<script lang="ts">
	import P from './P.svelte'
	import Button from './Button.svelte'
	import Input from './Input.svelte'
	import { setPage } from '../store'
	export let total = 0
	export let toggle = true
	export let title = ''
	export let button = 'Click me'
</script>

{#if toggle}
	<div class="window">
		<div class="modulus">
			<div class="window-menu">
				<button class="close" on:click="{() => (toggle = !toggle)}">X</button
				></div
			>
			<div class="center">
				<Input inputName="Order Name" />
				<Input inputName="Name on Card" />
				<Input inputName="Card Number" />
				<p>Expiration Date</p>
				<div class="inline">
					<Input inputName="Year" />
					<Input inputName="Month" />
				</div>

				<Input inputName="CVC" />
				<div class="center">
					<input type="checkbox" id="check" />
					<label for="check">Pick us ASAP</label>
				</div>
				<p>or</p>
				<p>pick up at</p>
				<div class="inline">
					<Input inputName="Hour" />
					<Input inputName="Minute" />
				</div>
				<div class="center">
					<input type="checkbox" id="check" />
					<label for="check">I understand I will be charged ${total}</label>
				</div>
				<Button text="Pay Now" handleClick="{() => setPage('checkout')}" />
				<Button text="Pay Now" handleClick="{() => setPage('pickup')}" />
			</div>
		</div>
	</div>
{/if}

<style>
	p {
		align-self: flex-start;
	}
	.window {
		background-color: rgba(0, 0, 0, 0.3);
		width: 100%;
		min-height: 100vh;

		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.modulus {
		width: 360px;
		background-color: white;
		padding: 1rem;
		box-sizing: border-box;
		max-height: 620px;
		overflow-y: scroll;
	}

	.window-menu {
		display: flex;
		justify-content: flex-end;
	}
	.close {
		background-color: transparent;
		border: 0;
	}
	.center {
		height: 80%;
		box-sizing: border-box;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: space-between;
	}
	.inline {
		display: flex;
		justify-content: center;
		width: 60%;
		align-self: flex-start;
	}
</style>
