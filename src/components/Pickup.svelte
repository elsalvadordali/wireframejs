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
	<h5>Payment processed successfully</h5>

	<img src="qr.png" alt="tell the server your name" />
	<h3>Your order will be ready to pick up at:</h3>

	<h1>5:15</h1>
	<img
		src="map.png"
		alt="map showing where to pick up food. It is near the ferris wheel"
	/>
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
	img {
		width: 90%;
	}
</style>
