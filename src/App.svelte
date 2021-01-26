<script lang="ts">
  import { Chat } from "./components/chat";
  import { SidePanel } from "./components/sidepanel";
</script>

<style lang="scss" global>
  @import "./styles/global.scss";

  #app-container {
    height: 100vh;
    display: flex;
    overflow: hidden;
  }
</style>

<div id="app-container">
  <SidePanel />
  <Chat />
</div>
