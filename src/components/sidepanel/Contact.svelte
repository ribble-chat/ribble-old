<script lang="ts">
  import { setCurrentGroup } from "../../stores/chat";

  export let contact = {
    name: "unnamed",
    profilePicture: "",
  };

  function selectGroup() {
    setCurrentGroup(contact.name);
  }
</script>

<div id="contacts-container" on:click={selectGroup}>
  <img
    class="profile-picture"
    src={`./images/${contact.profilePicture}`}
    alt="profile"
  />
  <p id="name">{contact.name}</p>
</div>

<style>
  #contacts-container {
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 0.6em;
    padding-left: 1em;
    box-sizing: border-box;
  }

  #contacts-container:hover {
    background-color: var(--contact-hover-bg);
  }

  .profile-picture {
    width: 2.4em;
    height: 2.4em;
  }

  #name {
    color: white;
    font-size: 0.9em;
    padding-left: 1em;
  }
</style>
