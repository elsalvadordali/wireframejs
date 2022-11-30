<script lang="ts">
    import Home from './Pages/Home.svelte'
    import Menu from './Pages/Menu.svelte'
    import { page } from './store'
</script>

<div class="phone">
    {#if $page == 'pete'}
        <Menu page='pete' />
    {:else if $page == 'kate'}
        <Menu page='kate' />
    {:else if $page == 'tim'}
        <Menu page='tim' />
    {:else}
        <Home />
    {/if}
</div>

<style>
    .phone {
        width: 375px;
        height: 667px;
        border: 1rem solid black;
        border-radius: 2rem;
        overflow-y: scroll;
    }
</style>
