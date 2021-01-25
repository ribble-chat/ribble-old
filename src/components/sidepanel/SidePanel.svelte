<script lang="ts">
  import { Title } from "./";
  import { ContactsList } from "./";
  let contacts = [
    {
      name: "Nibbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Nibbles",
      profilePicture: "nibbles.png",
    },
    {
      name: "Nibbles",
      profilePicture: "nibbles.png",
    },
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

<div id="side-panel-container">
  <Title />
  <ContactsList {contacts} />
</div>

<style>
  #side-panel-container {
    min-width: 12em;
    max-width: 12em;
    height: 100%;
  }
</style>
