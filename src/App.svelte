<script lang="ts">
  import Header from './components/Header.svelte'
  import Img from './components/Img.svelte'
  import P from './components/P.svelte';
</script>

<main>
  <Header title="Igor's App" logo={{dimensions: 'square', size: 'xxs'}} />
  <Img options={{size: 'xl', dimensions: 'square'}}/>
  <P length={'short'} />
  <P length={'medium'} />
  <P length={'long'} />
</main>

<style>
</style>