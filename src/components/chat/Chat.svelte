<script lang="ts">
  import { MenuBar, ChatBox, ChatBar } from ".";

  const person = {
    name: "Nibbles",
    profilePicture: "nibbles.png",
  };

  const me = "Jennifer";
</script>

<body>
  <div id="chat-container">
    <MenuBar {person} />
    <ChatBox {me} />
    <ChatBar />
  </div>
</body>

<style>
  #chat-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
