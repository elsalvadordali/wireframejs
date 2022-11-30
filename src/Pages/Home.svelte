<script lang="ts">
    import Card from "../components/Card.svelte";
    import Header from "../components/Header.svelte";
    import {page} from '../store'
    import { menu } from '../store'

</script>

<div>
    <Header title="Coasters 'n 'Raunts" />
    {$page}
    <h2>Choose a restaurant to get started</h2>
    {#each $menu as item}
        <Card options={{title: item.name, image: true}} page={item.link} />
    {/each}
</div>

<style>
    h2 {
        margin: 3rem 1rem
    }
</style>