<script lang="ts">
  import Contact from "./Contact.svelte";

  export let contacts = [];
</script>

<div id="contacts-list-container">
  {#each contacts as contact}
    <Contact contact="{contact}" />
  {/each}
</div>

<style>
  #contacts-list-container {
    background-color: var(--chat-bubble-bg);
    display: flex;
    flex-direction: column;
    height: 95%;
    width: 100%;
    box-sizing: border-box;
    padding-top: 0.2em;
    padding-bottom: 0.1em;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
