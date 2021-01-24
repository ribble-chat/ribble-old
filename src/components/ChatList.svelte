<script lang="ts">
  import SideContact from "./SideContact.svelte";

  export let contacts: [];
</script>

<div>
  {#each contacts as contact}
    <SideContact {contact} />
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
