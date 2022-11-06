<script lang="ts">
    import Img from './Img.svelte'
    export let title = ''
    export let logo
    console.log('logo', logo)
</script>

<div class="header">
    <h1>{title}</h1>
    {#if logo}
        <Img options={logo} />
    {/if}
</div>

<style>
    .header {
        border: 2px solid black;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem;
    }
    .header h1 {
        font-size: 1.8rem;
        margin: 0;
    }
</style>