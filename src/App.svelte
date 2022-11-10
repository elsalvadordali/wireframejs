<script lang="ts">
  import Header from './components/Header.svelte'
  import Img from './components/Img.svelte'
  import P from './components/P.svelte';
  import Card from './components/Card.svelte'
  import Modulus from './components/Modulus.svelte'
  import Input from './components/Input.svelte'
</script>

<main>
  <Header title="Igor's App" logo={{dimensions: 'square', size: 'xxs'}} />
  <Input inputName='Name' />
  <Card options={{ border: true, title: 'Restaurant A', centered: true, direction: 'row', image: true, text: 'medium'}} />
  <Modulus />
</main>

<style>
</style>