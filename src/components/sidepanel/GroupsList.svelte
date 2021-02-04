<script lang="ts">
  import * as api from "api";
  import Group from "./Group.svelte";
  import type { Group as TGroup } from "types";
  import { currentGroup } from "stores/chat";

  let groups: TGroup[] = [];

  let count = 1;
  const groupName: string = "group";
  const testPicture: string = "nibbles.png";
  function handleNewGroup() {
    let name = `${groupName} ${count++}`;
    api.joinGroup(name, "test user");
    currentGroup.set({ name, picture: testPicture });
    groups = [{ name, picture: testPicture }, ...groups];
  }
</script>

<header id="group-utils">
  <section id="search-bar">
    <i id="search-icon" class="fas fa-search" />
    <input id="search-form" type="text" placeholder="search.." />
  </section>

  <button id="join-group-button" class="icon-button" on:click={handleNewGroup}>
    <i class="fas fa-plus" />
  </button>
</header>

<div id="groups-list-container">
  {#each groups as group}
    <Group {group} />
  {/each}
</div>

<style>
  #join-group-button {
    padding: 0.1em 0 0 0.7em;
    font-size: 1em;
  }

  #group-utils {
    display: flex;
    align-items: center;
    height: 2em;
    box-sizing: border-box;
    padding: 0.2em 0.2em 0.2em 0.6em;
  }

  #search-bar {
    display: flex;
    background-color: var(--search-bar-bg);
    box-sizing: border-box;
    padding: 0.2em;
    height: 90%;
    width: 80%;
    align-items: center;
  }

  #search-icon {
    color: var(--form-place-holder-col);
    font-size: 0.9em;
    padding: 0 0.3em;
  }

  #search-form {
    outline: none;
    border: solid;
    width: 90%;
    border-width: 0.2em;
    border-color: black;
    background-color: var(--search-bar-bg);
    border-color: var(--search-bar-bg);
    color: white;
  }

  #groups-list-container {
    background-color: var(--side-panel-bg);
    display: flex;
    flex-direction: column;
    height: 95%;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding-top: 0.2em;
    padding-bottom: 0.1em;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
