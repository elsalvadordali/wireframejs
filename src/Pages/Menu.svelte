<script lang="ts">
	import Header from '../components/Header.svelte'
	import Card from '../components/Card.svelte'
	import MenuItem from '../components/MenuItem.svelte'
	import { menu } from '../store'
	import Button from '../components/Button.svelte'
	import { setPage, order } from '../store'
	import { onMount } from 'svelte'
	export let page = ''
	let menuItem
	for (const item of $menu) {
		if (item.link == page) menuItem = item
	}

	onMount(() => order.set({}))
</script>

<div>
	<Header />
	{#each menuItem.menu as item}
		<MenuItem
			options="{{
				title: item.name,
				description: item.description,
				price: item.price
			}}"
		/>
	{/each}
	<MenuItem
		options="{{
			title: 'Add a large soda',
			description: 'Any large soda, ice or no',
			price: 3.99
		}}"
	/>
	<div class="centered">
		<Button
			handleClick="{() => setPage('home')}"
			text="{'Change restaurant'}"
		/>

		<Button handleClick="{() => setPage('checkout')}" text="{'Place order!'}" />
	</div>
</div>

<style>
	.centered {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
	}
</style>
