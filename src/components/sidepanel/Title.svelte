<script lang="ts">
  import * as api from "../../api";
  function handleNewGroup() {
    api.joinGroup("test");
    console.log("join group button");
  }
</script>

<div id="title-container">
  <div id="top-section">
    <p id="title">Ribble</p>
    <button
      id="join-group-button"
      class="icon-button"
      on:click={handleNewGroup}
    >
      <i class="fas fa-plus-square" />
    </button>
  </div>
  <div id="search-bar">
    <i id="search-icon" class="fas fa-search" />
    <input id="search-form" type="text" placeholder="search.." />
  </div>
</div>

<style>
  #title-container {
    height: var(--top-bar-height);
    background-color: var(--side-panel-bg);
    display: flex;
    flex-direction: column;
    color: white;
    box-sizing: border-box;
    padding: 0.7em;
  }

  #top-section {
    display: flex;
  }

  #join-group-button {
    margin-left: auto;
    padding: 0 0.3em 0 0;
  }

  #title {
    margin: 0;
    padding-left: 0.2em;
    padding-bottom: 0.5em;
    font-size: 1em;
    font-weight: bold;
    color: white;
  }

  #search-bar {
    display: flex;
    background-color: var(--search-bar-bg);
    box-sizing: border-box;
    height: 48%;
    padding: 0.2em;
    align-items: center;
  }

  #search-icon {
    color: var(--form-place-holder-color);
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
</style>
