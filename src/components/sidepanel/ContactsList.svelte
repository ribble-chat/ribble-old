<script lang="ts">
  import Contact from "./Contact.svelte";

  export let contacts = [];
</script>

<div id="contacts-list-container">
  {#each contacts as contact}
    <Contact {contact} />
  {/each}
</div>

<style>
  #contacts-list-container {
    background-color: var(--chat-bubble-bg);
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
