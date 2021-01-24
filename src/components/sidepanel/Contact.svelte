<script lang="ts">
  export let contact = {
    name: "unnamed",
    profilePicture: "",
  };
</script>

<div id="contacts-container">
  <img src={`./images/${contact.profilePicture}`} alt="profile" />
  <p>{contact.name}</p>
</div>

<style>
  #contacts-container {
    display: flex;
    align-items: center;
    width: 10em;
  }

  img {
    width: 2.5em;
    height: 2.5em;
    padding: 1em;
    border-radius: 50%;
  }

  p {
    color: white;
  }
</style>
