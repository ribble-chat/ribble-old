<script lang="ts">
    export let person = {
        "nickname": "unnamed",
        "image": "unamed"
    }
</script>

<style>
    #menu-bar {
        margin-bottom: auto;
        height: 60px;
        color: white;
        background-color: var(--bar-bg);
        display: flex;
        align-items: center;
    }

    #person {
        display: flex;
        padding-left: 0.05em;
    }

    #name {
        padding-top: 0.4em;
        font-size: 1.1em;
        font-weight: bold;
    }

    #buttons {
        margin-left: auto;
        margin-right: 1em;
    }

    img {
        width: 2.5em;
        height: 2.5em;
        padding: 1em;
        border-radius: 50%;
    }
</style>

<div id="menu-bar">
    <div id="person">
        <img src={`./images/${person.image}`} alt=".">
        <p id="name">{person.nickname}</p>
    </div>

    <div id="buttons">
        <button class="icon-button"><i class="fas fa-phone-alt"></i></button>
        <button class="icon-button"><i class="fas fa-search"></i></button>
        <button class="icon-button"><i class="fas fa-cog"></i></button>
    </div>
</div>
