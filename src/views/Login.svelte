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
  <form id="login-form" on:submit={handleLogin}>
    <input
      class="text-input"
      bind:value={username}
      type="text"
      placeholder="username/email"
    />
    <input
      class="text-input"
      bind:value={password}
      type="password"
      placeholder="password"
    />
    <input id="submit-button" value="LOG IN" type="submit" />
  </form>
</main>

<style>
  #login-form {
    display: flex;
    flex-direction: column;
    width: 15em;
  }

  #login-form > input {
    border-radius: 10px;
    padding-top: 0.7em;
    padding-bottom: 0.7em;
    margin: 1em;
    border: none;
    outline: none;
  }

  .text-input {
    padding-left: 1em;
  }

  #submit-button {
    color: white;
    background-color: #4b9db2;
  }
</style>
