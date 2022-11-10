<script lang="ts">
    export let length
    let words = []
    let n = 0
    if (length == 'short') n = Math.ceil(Math.random() * 10) + 5 
    if (length == 'medium') n = Math.ceil(Math.random() * 15) + 30
    if (length == 'long') n = Math.ceil(Math.random() * 20) + 50
    while (n > 0) {
        words.push('a' + Math.ceil(Math.random() * 6))
        n--
    }
    
</script>



<div class="flex">
    {#each words as n}
    <div class={n + ' gray'} ></div>
   {/each}
</div>

<style>
    .gray {
        height: 6px;
        border: 3px solid #cecece;
        background-color: #cecece;
        border-radius: 6px;
        margin: .5rem .25rem;
    }
    .a1 {width: 44px}
    .a2 {width: 14px}
    .a3 {width: 64px}
    .a4 {width: 96px}
    .a5 {width: 26px}
    .a6 {width: 9px}
    .flex {
        display: flex;
        flex-flow: row wrap;
        padding: .5rem;
    }
    
</style>