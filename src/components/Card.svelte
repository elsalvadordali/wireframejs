<script lang="ts">
	import Img from './Img.svelte'
	import P from './P.svelte'
	import { setPage } from '../store'
	export let options
	export let page

	type Options = {
		flex?: 'col' | 'row'
		border?: boolean
		centered?: boolean
		description?: string
		price?: number
	}
	let css = 'card'
	for (const o in options) {
		if (o === 'flex') {
			if (options[o] === 'col') css += ' col'
			else css += ' row'
		}
		if (o === 'border' && options[o]) css += ' border'
		if (o === 'centered' && options[o]) css += ' center'
	}
	function clicked() {
		setPage(page)
	}
</script>

<div class="{css}" on:click="{() => clicked()}" on:keypress="{() => clicked()}">
	<Img />
	<slot />
	{#if options.title}
		<h4 class="titl">{options.title}</h4>
	{:else}
		<div class="title"></div>
	{/if}
	{#if options.image == true}
		<Img
			options="{{
				size: options.direction == 'row' ? 'm' : 'xl',
				dimensions: 'square'
			}}"
		/>
	{/if}
	{#if options.description}
		<p>{description}</p>
	{/if}
	{#if options.text}
		<P length="{options.direction === 'row' ? 'short' : options.text}" />
	{/if}
</div>

<style>
	.card {
		margin: 1rem;
		padding: 1rem;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		border: 2px solid black;
	}
	h4 {
		text-align: center;
	}
	.row {
		flex-flow: row wrap;
		align-items: flex-start;
	}
	.row .title {
		width: 100%;
	}
	.titl {
		width: 85%;
		font-size: 2rem;
		margin: 0.5rem 0;
	}
	.title {
		width: 85%;
		height: 30px;
		background-color: #cecece;
		border-radius: 12px;
		margin: 1rem 0.5rem;
	}
	.border {
		border: 2px solid black;
	}
	.center {
		align-items: center;
	}
</style>
