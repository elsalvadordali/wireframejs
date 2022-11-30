<script lang="ts">
    import Img from './Img.svelte'
    import { setPage, menu } from '../store'
    export let title = ''
    export let logo = null
    
    

    console.log('menu', menu)
    function goTo(page) {
        setPage(page)
        openMenu = false
    }

    let openMenu = false
</script>

<div class="header">
    <h1>{title}</h1>
    {#if logo}
        <Img options={logo} />
    {/if}

    <button class="open-menu" on:click={() => openMenu = !openMenu}>
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
    </button>
    {#if openMenu}
        <div class="menu">
        {#each $menu as item}
            <button on:click={() => goTo(item.link)} class='link'>{item.name}</button>
        {/each}
        </div>
    {/if}
</div>

<style>
    .open-menu {
        background-color: transparent;
        border: 0;
    }
    .header {
        border-bottom: 2px solid black;
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
    .link {
        border: none;
        background-color: transparent;
        text-decoration: underline;
    }
    .menu {
        background-color: white;
        display: flex;
        position: absolute;
        top: calc(50vh - 280px);
        height: 560px;
        width: 374px;
        left: calc(50vw - 186.5px);
        z-index: 10;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: center;
        border-bottom: 2px solid black;
    }
</style>