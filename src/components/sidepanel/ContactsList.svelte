<script lang="ts">
  import * as api from "../../api";
  import Contact from "./Contact.svelte";
  import { setCurrentGroup } from "../../stores/chat";

  let contacts = [];

  let count = 1;
  const groupName: string = "group";
  const testPicture: string = "nibbles.png";
  function handleNewGroup() {
    let name = `${groupName} ${count++}`;
    api.joinGroup(name, "test user");
    setCurrentGroup(name);
    contacts = [{ name, profilePicture: testPicture }, ...contacts];
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
    margin: 0;
    padding-top: 0.2em;
    padding-bottom: 0.1em;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
