<script lang="ts">
  export let from: string;
  export let to: string;
  export let content: string;
  export let time: int;
</script>

<div id="block">
  <p id="message">{content}</p>
</div>

<style>
  #message {
    color: var(--message-text-color);
    background-color: var(--chat-bubble-bg);
    padding: 0.8em;
    margin: 0;
    border-radius: 0.5em;
    font-size: 0.9em;
    overflow-wrap: break-word;
  }

  #block {
    margin-right: 1.5em;
    margin-left: 1em;
    padding-bottom: 1em;
  }
</style>
