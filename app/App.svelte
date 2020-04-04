<script lang="ts">
  import { fibonacci } from '@pkg/utils'

  export let name: string

  let sevFibNumber: number = fibonacci(17)
</script>

<style lang="scss" global>
  @import './styles/global.scss';

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: var(--accent-color);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <p>The 17th fibonacci number is {sevFibNumber}</p>
</main>
