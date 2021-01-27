<script lang="ts">
  export let contact = {
    name: "unnamed",
    profilePicture: "",
  };
</script>

<div id="contacts-container">
  <img
    class="profile-picture"
    src={`./images/${contact.profilePicture}`}
    alt="profile"
  />
  <p id="name">{contact.name}</p>
</div>

<style>
  #contacts-container {
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 0.6em;
    padding-left: 1em;
    box-sizing: border-box;
  }

  .profile-picture {
    width: 2.4em;
    height: 2.4em;
  }

  #name {
    color: white;
    font-size: 0.9em;
    padding-left: 1em;
  }
</style>
