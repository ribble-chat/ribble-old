<script lang="ts">
  import * as api from "api";
  import { currentUser } from "stores";

  let username: string;
  let password: string;

  function handleLogin(e: Event) {
    e.preventDefault();
    api.login(username, password);
    currentUser.set(true);
  }
</script>

<main>
  <form id="login-form" on:submit={handleLogin}>
    <input bind:value={username} type="text" placeholder="username/email" />
    <input bind:value={password} type="password" placeholder="password" />
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
    padding: 0.6em 0;
    margin: 1em;
    border: none;
    outline: none;
  }

  #login-form input[type="text"],
  #login-form input[type="password"] {
    padding: 0.6em 1em;
  }

  #submit-button {
    color: white;
    background-color: #0092ab;
  }
</style>
