<script lang="ts">
</script>

<div id="title-container">
  <div id="content-container">
    <p id="title">Ribble</p>
    <input id="search-bar" type="text" placeholder="search.." />
  </div>
</div>

<style>
  #title-container {
    height: var(--top-bar-height);
    background-color: var(--side-panel-bg);
    display: flex;
    flex-direction: column;
    color: white;
  }

  #content-container {
    margin: 5%;
  }

  #title {
    margin: 0;
    padding-left: 0.3em;
    padding-bottom: 0.5em;
    font-size: 1em;
    font-weight: bold;
    color: white;
  }

  #search-bar {
    outline: none;
    border: solid;
    width: 90%;
    grid-area: chat-form;
    padding-left: 0.5em;
    border-width: 0.2em;
    border-radius: 0.2em;
    border-color: black;
    background-color: var(--search-bar-bg);
    border-color: var(--search-bar-bg);
    color: white;
  }
</style>
