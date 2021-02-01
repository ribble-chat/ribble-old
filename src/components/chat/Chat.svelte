<script lang="ts">
  import MenuBar from "./MenuBar.svelte";
  import ChatBox from "./ChatBox.svelte";
  import ChatBar from "./ChatBar.svelte";
  import type { Group } from "types";

  const group: Group = {
    name: "Nibbles",
    picture: "nibbles.png",
  };

  const me = "Jennifer";
</script>

<div id="chat-container">
  <MenuBar {group} />
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
