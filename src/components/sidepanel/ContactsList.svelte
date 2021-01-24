<script lang="ts">
  import Contact from "./Contact.svelte";

  export let contacts = [];
</script>

<div id="">
  {#each contacts as contact}
    <Contact {contact} />
  {/each}
</div>

<style>
  div {
    background-color: var(--chat-bubble-bg);
    display: flex;
    width: 15em;
    height: 100%;
    flex-direction: column;
    position: relative;
    overflow-y: scroll;
  }
</style>
