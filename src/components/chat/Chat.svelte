<script lang="ts">
  import MenuBar from "./MenuBar.svelte";
  import ChatBox from "./ChatBox.svelte";
  import ChatBar from "./ChatBar.svelte";
  import * as api from "../../api";

  const person = {
    name: "Nibbles",
    profilePicture: "nibbles.png",
  };

  const me = "Jennifer";
</script>

<div id="chat-container">
  <MenuBar {person} />
  <ChatBox {me} />
  <ChatBar />
</div>

<style>
  #chat-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
