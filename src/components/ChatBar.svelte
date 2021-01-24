<script lang="ts">
    export let emoji: string = "nibbles.png";

    function clickEmoji() {
        console.log("clicked emoji");
    }
</script>

<style>
    #chat-form {
        grid-area: chat-form;
        width: 100%;
        padding-left: 1em;
        margin: 1em 0;
        border-radius: 0.5em;
        outline: none;
        border: none;
        background-color: #222222;
        color: white;
        font-size: 1em;
    }

    ::placeholder {
        color: #9f9f9f;
    }

    div {
        margin-top: auto;
        padding-left: 1em;
        display: flex;
        background-color: var(--bar-bg);
        height: 70px;
    }

    img {
        width: 2.5em;
        height: 2.5em;
        padding: 1em;
        border-radius: 50%;
        transition: filter 0.2s;
        filter: brightness(100%);
    }

    img:hover {
        filter: brightness(120%);
    }
</style>

<div>
    <button class="icon-button"><i class="fas fa-plus-circle"></i></button>
    <input id="chat-form" type="text" placeholder="type a message..."/>
    <img src={`./images/${emoji}`} alt="." on:click={clickEmoji} />
</div>
