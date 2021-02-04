<script lang="ts">
  import { Chat, SidePanel } from "components";
  import { currentGroup } from "stores";
</script>

<div id="main-container">
  <SidePanel />
  {#if $currentGroup != undefined}
    <Chat />
  {:else}
    <section id="background" />
  {/if}
</div>

<style lang="scss" global>
  #main-container {
    height: 100vh;
    display: flex;
    overflow: hidden;
  }

  #background {
    background-color: var(--chat-box-bg);
    height: 100vh;
    width: 100%;
  }
</style>
