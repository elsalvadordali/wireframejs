<script lang="ts">
    import Img from "./Img.svelte"
    import P from './P.svelte'
    export let options

    let css = 'card'
    for (const o in options) {
        if (o === 'flex') {
            if (options[o] === 'col') css += ' col'
            else css += ' row'
        }
        if (o === 'border' && options[o]) css += ' border'
        if (o === 'centered' && options[o]) css += ' center'
        if (o === 'direction' && options[o] === 'row') css += ' row'
    }
    console.log(options.image) 
</script>


<div class={css}>
    <Img />
    {#if options.title}
        <h4 class='titl'>{options.title}</h4>
    {:else}
        <div class='title'></div>
    {/if}
    {#if options.image == true} 
        <Img options={{size: options.direction == 'row' ? 'm' : 'xl', dimensions: 'square'}}/> 
    {/if}
    {#if options.text}
        <P length={options.direction === 'row' ? 'short' : options.text} />
    {/if}
</div>

<style>
    .card {
        margin: 1rem;
        padding: 1rem;
        display: flex;
        flex-flow: column nowrap;

    }
    .row {
        flex-flow: row wrap;
        align-items: flex-start;

    }
    .row .title {
        width: 100%
    }
    .titl {
        width: 85%;
        font-size: 2rem;
        margin: .5rem 0;
    }
    .title {
        width: 85%;
        height: 30px;
        background-color: #cecece;
        border-radius: 12px;
        margin: 1rem .5rem;
    }
    .border {
        border: 2px solid black;
    }
    .center {
        align-items: center;
    }
</style>