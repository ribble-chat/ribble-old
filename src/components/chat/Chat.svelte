<script lang="ts">
  import MenuBar from "./MenuBar.svelte";
  import ChatBox from "./ChatBox.svelte";
  import ChatBar from "./ChatBar.svelte";

  const group = {
    name: "Nibbles",
    groupPicture: "nibbles.png",
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
