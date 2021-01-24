<script lang="ts">
  import MenuBar from "./MenuBar.svelte";
  import ChatBox from "./ChatBox.svelte";
  import ChatBar from "./ChatBar.svelte";

  const person = {
    name: "Nibbles",
    profilePicture: "nibbles.png",
  };

  const me = "Jennifer";
</script>

<body>
  <div>
    <MenuBar {person} />
    <ChatBox {me} />
    <ChatBar />
  </div>
</body>

<style>
  div {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
