<script lang="ts">
  import GroupsList from "./GroupsList.svelte";
</script>

<aside id="side-panel-container">
  <p id="title">Ribble</p>
  <GroupsList />
</aside>

<style>
  #side-panel-container {
    min-width: 12em;
    max-width: 12em;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: var(--side-panel-bg);
  }

  #title {
    margin: 0;
    padding: 0.8em 0em 0.5em 0.8em;
    font-size: 1em;
    font-weight: bold;
    color: white;
  }
</style>
