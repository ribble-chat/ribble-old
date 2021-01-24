<script lang="ts">
  import ChatList from "./ChatList.svelte";
  let contacts = [
    {
      name: "Nibbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Ribbles",
      profilePicture: "nibbles.png",
    },
  ];
</script>

<div>
  <ChatList {contacts} />
</div>

<style>
  div {
    height: 100%;
  }
</style>
