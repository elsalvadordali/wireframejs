<script lang="ts">
	import Button from '../components/Button.svelte'
	import Header from '../components/Header.svelte'
	import Modal from '../components/Modal.svelte'
	import { order, menu, setPage } from '../store'
	const orderWithPrices = order
	let total = 0
	let toggle = false

	let menuItemNames = Object.keys($order)
	const selectedRestaurant = $menu.find(restaurant => {
		return restaurant.menu.find(menuItem => {
			return menuItem.name == menuItemNames[0]
		})
	})
	let restaurantPage = selectedRestaurant.name
		.split(' ')[1]
		.split("'")[0]
		.toLowerCase()
	console.log(restaurantPage)
	function calcucalePrices() {
		menuItemNames.forEach(item => {
			const menuItem = selectedRestaurant.menu.find(
				thisItem => thisItem.name == item
			)
			if (menuItem) total += menuItem.price * $order[item]
			if (menuItem) menuItem.subtotal = menuItem.price * $order[item]
			if (menuItem) console.log(menuItem)
		})
	}
	calcucalePrices()
</script>

<div class="center">
	<Header />
	<h2>Order</h2>
	<table>
		{#each selectedRestaurant.menu as item}
			{#if $order[item.name] >= 1}
				<tr>
					<td><h5>{item.name}</h5></td>
					<td><h6>x {$order[item.name]}</h6></td>
				</tr>
				<tr>
					<td>Price per unit</td>
					<td><p>{item.price}</p></td>
				</tr>
				<tr>
					<td>Item Total: </td>
					<td><p class="price">{item.price * $order[item.name]}</p></td>
				</tr>
			{/if}
		{/each}
		<tr>
			<td>Total: </td>
			<td>{total}</td>
		</tr>
	</table>
	<div class="flex">
		<Button text="Change order" handleClick="{() => setPage(restaurantPage)}" />
		<Button text="Checkout" handleClick="{() => (toggle = true)}" />
	</div>
	<Modal bind:toggle="{toggle}" total="{total.toFixed(2)}" />
</div>

<style>
	.center {
		padding: 1rem;
	}
	td:last-of-type {
		text-align: center;
	}
	td:first-of-type {
		width: 90%;
	}
	.price {
		background-color: #eee;
		padding: 0.5rem 1rem;
	}
	.flex {
		display: flex;
	}
</style>
