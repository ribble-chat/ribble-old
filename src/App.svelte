<script lang="ts">
  import Chat from "./components/Chat.svelte";
  import SidePanel from "./components/SidePanel.svelte";
</script>

<div>
  <SidePanel />
  <Chat />
</div>

<style lang="scss" global>
  @import "./styles/global.scss";

  div {
    display: flex;
  }
</style>
