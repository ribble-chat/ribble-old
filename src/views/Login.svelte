<script lang="ts">
  import * as api from "api";

  let username: string;
  let password: string;

  function handleLogin(e: Event) {
    e.preventDefault();
    api.login(username, password);
  }
</script>

<main>
  <form on:submit={handleLogin}>
    <input bind:value={username} type="text" placeholder="username/email" />
    <input bind:value={password} type="password" placeholder="password" />
    <input type="submit" />
  </form>
</main>
