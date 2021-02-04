<script lang="ts">
  import { currentGroup } from "stores";
  import type { Group } from "types";
</script>

<header id="menu-bar-container">
  {#if $currentGroup != undefined}
    <div id="group-title">
      <img
        class="group-picture"
        src={`./images/${$currentGroup.picture}`}
        alt="."
      />
      <p id="group-name">{$currentGroup.name}</p>
    </div>
  {/if}

  <nav id="util-buttons">
    <button class="icon-button"><i class="fas fa-phone-alt" /></button>
    <button class="icon-button"><i class="fas fa-search" /></button>
    <button class="icon-button"><i class="fas fa-cog" /></button>
  </nav>
</header>

<style>
  #menu-bar-container {
    margin-bottom: auto;
    height: var(--top-bar-height);
    color: white;
    background-color: var(--bar-bg);
    display: flex;
    align-items: center;
  }

  #group-title {
    display: flex;
    padding-left: 0.05em;
  }

  #group-name {
    padding-top: 0.4em;
    font-size: 1.1em;
    font-weight: bold;
    color: white;
  }

  #util-buttons {
    margin-left: auto;
    margin-right: 0.2em;
  }

  .group-picture {
    width: 2.7em;
    height: 2.7em;
    padding: 1em;
  }
</style>
