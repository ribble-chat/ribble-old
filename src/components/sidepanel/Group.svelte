<script lang="ts">
  import { setCurrentGroup } from "stores/chat";
  import type { Group } from "types";

  export let group: Group;

  $: ({ name, picture } = group);

  function selectGroup() {
    setCurrentGroup(name);
  }
</script>

<div id="group-container" on:click={selectGroup}>
  <img
    class="group-picture"
    src={`./images/${picture}`}
    alt="profile"
  />
  <p id="group-name">{name}</p>
</div>

<style>
  #group-container {
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 0.6em;
    padding-left: 1em;
    box-sizing: border-box;
  }

  #group-container:hover {
    background-color: var(--group-hover-bg);
  }

  .group-picture {
    width: 2.4em;
    height: 2.4em;
  }

  #group-name {
    color: white;
    font-size: 0.9em;
    padding-left: 1em;
  }
</style>
