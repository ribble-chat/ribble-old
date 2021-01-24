<script lang="ts">
  import ContactsList from "./ContactsList.svelte";
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
  <ContactsList {contacts} />
</div>

<style>
  div {
    height: 100%;
  }
</style>
