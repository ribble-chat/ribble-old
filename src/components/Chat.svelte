<script lang="ts">
    import MenuBar from './MenuBar.svelte';
    import ChatBox from './ChatBox.svelte';
    import ChatBar from './ChatBar.svelte';

    let person = {
        "nickname": "Nibbles",
        "image": "nibbles.png"
    };

    let me = "Jennifer"
    
</script>

<style>
    div {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>

<body>
    <div>
        <MenuBar person={person} />
        <ChatBox me={me} />
        <ChatBar />
    </div>
</body>
