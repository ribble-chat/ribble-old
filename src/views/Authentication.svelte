<script lang="ts">
  import Login from "./Login.svelte";
  import Register from "./Register.svelte";

  type Tab = "login" | "register";
  let currentTab: Tab = "login";
</script>

<div id="background">
  <content id="form-background">
    <h2 id="ribble-title">Ribble</h2>
    {#if currentTab === "login"}
      <Login />
    {:else if currentTab === "register"}
      <Register />
    {/if}
  </content>
</div>

<style>
  #background {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--authentication-bg);
  }

  #form-background {
    height: 25em;
    width: 20em;
    border-radius: 10px;
    background-color: var(--login-form-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #ribble-title {
    color: white;
  }
</style>
