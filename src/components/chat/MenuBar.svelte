<script lang="ts">
  export let person = {
    name: "unnamed",
    profilePicture: "unamed",
  };
</script>

<header id="menu-bar">
  <div id="person">
    <img
      class="profile-picture"
      src={`./images/${person.profilePicture}`}
      alt="."
    />
    <p id="name">{person.name}</p>
  </div>

  <nav id="buttons">
    <button class="icon-button"><i class="fas fa-phone-alt" /></button>
    <button class="icon-button"><i class="fas fa-search" /></button>
    <button class="icon-button"><i class="fas fa-cog" /></button>
  </nav>
</header>

<style>
  #menu-bar {
    margin-bottom: auto;
    height: var(--top-bar-height);
    color: white;
    background-color: var(--bar-bg);
    display: flex;
    align-items: center;
  }

  #person {
    display: flex;
    padding-left: 0.05em;
  }

  #name {
    padding-top: 0.4em;
    font-size: 1.1em;
    font-weight: bold;
    color: white;
  }

  #buttons {
    margin-left: auto;
    margin-right: 0.2em;
  }

  .profile-picture {
    width: 2.7em;
    height: 2.7em;
    padding: 1em;
  }
</style>
