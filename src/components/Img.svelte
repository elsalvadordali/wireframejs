<script lang="ts">
    import P from './P.svelte'
    type Options = {
        dimensions? : 'square' | '4x3' | '3x4'
        size? : 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'fit' | 'cover'
        rounded? : boolean
        circle? : boolean
        caption? : boolean
    }
    export let options: Options = {}

    //export let edgar: String | undefined = undefined

    let classes = 'img '
    for (const option in options) {
        if (option === 'dimensions') {
            if (options.size) classes += ' ' + options.size + '-' + options.dimensions
        }
        if (option === 'circle') classes += ' circle'
        if (option === 'caption') classes += ' caption'
    }
</script>

<div>
    <div class={classes}>

    </div>
    {#if options.caption}
    caption???
        <P length='short' />
    {/if}
</div>

<style>
    .circle {
        border-radius: 50%;
    }
    .img {
        background-color: #cecece;
        margin: .5rem;
    }
    .xxs-square, 
    .xxs {
        height: 2rem;
        width: 2rem;
    }
    .xxs-3x4 {
        height: 2rem;
        width: 1.5rem;
    }
    .xxs-4x3 {
        height: 1.5rem;
        width: 2rem;
    }
    .xs-square {
        height: 3rem;
        width: 3rem;
    }
    .xs-3x4 {
        width: 2.25rem;
        height: 3rem;
    }
    .xs-4x3 {
        height: 2.25rem;
        width: 3rem;
    }
    .s-square {
        height: 6rem;
        width: 6rem;
    }
    .s-3x4 {
        width: 4.5rem;
        height: 6rem;
    }
    .s-4x3 {
        width: 6rem;
        height: 4.5rem;
    }
    .m-square {
        width: 6rem;
        height: 6rem;
    }
    .m-3x4 {
        width: 4.5rem;
        height: 6rem;
    }
    .m-4x3 {
        width: 6rem;
        height: 4.5rem;
    }
    .l-square {
        width: 12rem;
        height: 12rem;
    }
    .l-3x4 {
        width: 9rem;
        height: 12rem;
    }
    .l-4x3 {
        width: 12rem;
        height: 9rem;
    }
    .xl-square {
        width: 14rem;
        height: 14rem;
    }
    .xl-3x4 {
        width: 10.5rem;
        height: 14rem;
    }
    .xl-4x3 {
        width: 14rem;
        height: 10.5rem;
    }
    .xxl-square {
        height: 18rem;
        width: 18rem;
    }
    .xxl-3x4 {
        width: 13.5rem;
        height: 18rem;
    }
    .xxl-4x3 {
        width: 18rem;
        height: 13.5rem;
    }
    .caption {
        height: 6px;
        border: 3px solid #cecece;
        background-color: #cecece;
        border-radius: 6px;
        margin: .5rem .25rem;
    }
    
    
</style>