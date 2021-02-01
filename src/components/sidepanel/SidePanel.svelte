<script lang="ts">
  import ContactsList from "./ContactsList.svelte";
</script>

<aside id="side-panel-container">
  <header id="title-container">
    <section id="top-section">
      <p id="title">Ribble</p>
    </section>
    <div id="search-bar">
      <i id="search-icon" class="fas fa-search" />
      <input id="search-form" type="text" placeholder="search.." />
    </div>
  </header>
  <ContactsList />
</aside>

<style>
  #side-panel-container {
    min-width: 12em;
    max-width: 12em;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

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
