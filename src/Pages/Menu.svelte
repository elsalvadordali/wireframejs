<script lang="ts">
    import Header from "../components/Header.svelte";
    import Card from "../components/Card.svelte";
    import { menu } from '../store'
    export let page = ''
    let menuItem 
    for (const item of $menu) {
        console.log(item)
        if (item.link == page) menuItem = item
    }
    console.log(menuItem, 'found')
</script>

<div>
    <Header />
    {#each menuItem.menu as item}
        <Card title={item.name} options={{description: item.description, price: item.price}} />
    {/each}

    
</div>