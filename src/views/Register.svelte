<main>
  <form id="register-form">
    <input type="text" placeholder="email" />
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <input type="submit" value="REGISTER" />
  </form>
</main>

<style>
  #register-form {
    display: flex;
    flex-direction: column;
    width: 15em;
  }

  #register-form > input {
    border-radius: 10px;
    padding: 0.6em;
    margin: 1em;
    border: none;
    outline: none;
  }

  #register-form input[type="text"],
  #register-form input[type="password"] {
    padding: 0.6em 1em;
  }

  #register-form input[type="submit"] {
    color: white;
    background-color: #0092ab;
  }
</style>
