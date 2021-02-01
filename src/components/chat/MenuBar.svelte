<script lang="ts">
  export let group = {
    name: "unnamed",
    groupPicture: "unamed",
  };
</script>

<header id="menu-bar-container">
  <div id="group-title">
    <img
      class="group-picture"
      src={`./images/${group.groupPicture}`}
      alt="."
    />
    <p id="group-name">{group.name}</p>
  </div>

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
