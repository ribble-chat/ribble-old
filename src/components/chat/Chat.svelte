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

<body>
  <div id="chat-container">
<<<<<<< HEAD
    <button on:click={() => api.callServer("user", "hiretard")}
      >click me lul</button
    >
    <MenuBar {person} on:click={() => console.log("ur mum")} />
    <ChatBox {me} />
=======
    <button on:click="{() => api.callServer('user', 'hiretard')}"
      >click me lul</button
    >
    <MenuBar person="{person}" on:click="{() => console.log('ur mum')}" />
    <ChatBox me="{me}" />
>>>>>>> 132832bcfb96307978d647cba01857e66ee6f915
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
