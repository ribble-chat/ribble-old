<script lang="ts">
  import Chat from "./components/Chat.svelte";
  import SidePanel from "./components/SidePanel.svelte";
</script>

<div id="app-container">
  <SidePanel />
  <Chat />
</div>

<style lang="scss" global>
  @import "./styles/global.scss";

  #app-container {
    height: 100vh;
    display: flex;
  }
</style>
