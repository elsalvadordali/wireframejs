<script lang="ts">
    import P from "./P.svelte";
    import Button from "./Button.svelte"

    export let toggle = true
    export let title = ''
    export let button = 'Click me'
</script>

{#if toggle}
<div class='window' on:click={() => toggle = !toggle} on:keypress={() => toggle = !toggle}>
    <div class='modulus'>
        <div class='window-menu'> <button class='close'>X</button></div>
        <div class='center'>
        {#if title}
            <h4>{title}</h4>
        {:else}
            <div class='title'></div>
        {/if}
        <P length='short' />

        {#if button}
            <Button text={button} />
        {/if}
    </div>
    </div>
</div>
{/if}

<style>
    .window {
        background-color: rgba(0, 0, 0, .3);
        width: 100vw;
        min-height: 100vh;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modulus {
        width: 90%;
        min-width: 320px;
        height: 300px;
        background-color: white;
        padding: 1rem;
        box-sizing: border-box;
    }
    .title {
        width: 90%;
        height: 30px;
        background-color: #cecece;
        border-radius: 12px;
        margin: 1rem .5rem;
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
</style>