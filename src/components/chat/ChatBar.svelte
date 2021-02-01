<script lang="ts">
  import * as api from "api";
  export const emoji: string = "nibbles.png";

  let message = "";
  function clickEmoji() {
    console.log("clicked emoji");
  }

  function sendMessage() {
    api.sendMessageToGroup(message);
  }
</script>

<div id="chat-bar-container">
  <button on:click={sendMessage} id="add-button" class="icon-button">
    <i class="fas fa-plus-circle" />
  </button>
  <input
    bind:value={message}
    id="chat-form"
    type="text"
    placeholder="type a message..."
  />
  <img
    id="emoji-button"
    src={`./images/${emoji}`}
    alt="emoji"
    on:click={clickEmoji}
  />
</div>

<style>
  #chat-form {
    grid-area: chat-form;
    width: 100%;
    padding-left: 1em;
    margin: 1em 0;
    border-radius: 0.5em;
    outline: none;
    border: none;
    background-color: var(--form-bg);
    color: white;
    font-size: 1em;
  }

  #chat-bar-container {
    margin-top: auto;
    padding-left: 1em;
    display: flex;
    background-color: var(--bar-bg);
    height: 70px;
  }

  #emoji-button {
    width: 2.5em;
    height: 2.5em;
    padding: 1em;
    border-radius: 50%;
    transition: filter 0.2s;
    filter: brightness(100%);
  }

  #emoji-button:hover {
    filter: brightness(120%);
  }
</style>
