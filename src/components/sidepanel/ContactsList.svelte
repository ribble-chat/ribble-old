<script lang="ts">
  import * as api from "../../api";
  import Contact from "./Contact.svelte";

  let contacts = [
    {
      name: "Nibbles",
      profilePicture: "nibbles.png",
    },
  ];

  const groupName: string = "group name";
  const testPicture: string = "nibbles.png";
  function handleNewGroup() {
    api.joinGroup(groupName, "test user");
    contacts = [{ name: groupName, profilePicture: testPicture }, ...contacts];
  }
</script>

<div id="contacts-list-container">
  <button id="join-group-button" class="icon-button" on:click={handleNewGroup}>
    <i class="fas fa-plus-square" />
  </button>
  {#each contacts as contact}
    <Contact {contact} />
  {/each}
</div>

<style>
  #join-group-button {
  }

  #contacts-list-container {
    background-color: var(--chat-bubble-bg);
    display: flex;
    flex-direction: column;
    height: 95%;
    width: 100%;
    box-sizing: border-box;
    padding-top: 0.2em;
    padding-bottom: 0.1em;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
