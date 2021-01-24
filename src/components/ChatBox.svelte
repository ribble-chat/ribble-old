<script lang="ts">
  import Message from "./Message.svelte";
  export let me: string;
  const messages = [
    {
      from: "Nibbles",
      to: "Jennifer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content: "thanks hehe",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "ok omw!",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content: "can you please feed me :(",
    },
  ];
</script>

<div id="chatbox">
  {#each messages as message}
    {#if me === message.from}
      <div class="message you">
        <Message {...message} />
      </div>
    {:else}
      <div class="message other">
        <Message {...message} />
      </div>
    {/if}
  {/each}
</div>

<style>
  #chatbox {
    background-color: var(--chat-box-bg);
    display: flex;
    flex: 1;
    flex-direction: column-reverse;
    overflow-y: scroll;
    position: relative;
  }

  .you {
    justify-content: end;
    justify-items: end;
  }

  .other {
    justify-items: start;
  }

  .message {
    display: grid;
    grid-template-columns: 70%;
  }
</style>
