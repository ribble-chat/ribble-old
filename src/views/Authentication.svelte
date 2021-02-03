<script lang="ts">
  import Login from "./Login.svelte";
  import Register from "./Register.svelte";

  type Tab = "login" | "register";
  let currentTab: Tab = "register";

  function switchTab(tab: Tab) {
    if (tab === currentTab) return;
    currentTab = tab;
  }
</script>

<div id="background">
  <content id="form-background">
    <section id="navigation">
      <h2 id="ribble-title">Ribble</h2>

      <nav id="tab-buttons">
        {#if currentTab === "login"}
          <p id="selected-tab" on:click={() => switchTab("login")}>LOG IN</p>
          <p on:click={() => switchTab("register")}>REGISTER</p>
        {:else if currentTab === "register"}
          <p on:click={() => switchTab("login")}>LOG IN</p>
          <p id="selected-tab" on:click={() => switchTab("register")}>
            REGISTER
          </p>
        {/if}
      </nav>
    </section>

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

  #ribble-title {
    color: white;
  }

  #navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #tab-buttons {
    padding: 1em;
    display: flex;
  }

  #tab-buttons > p {
    color: white;
    padding: 1em;
    margin: 0;
  }

  #selected-tab {
    text-decoration: underline;
    text-decoration-color: var(--authentication-accent-col);
    text-underline-offset: 0.4em;
    text-decoration-thickness: 0.2em;
  }

  #form-background {
    height: 35em;
    width: 25em;
    border-radius: 10px;
    background-color: var(--login-form-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
