<script lang="ts">
  import { Chat } from "./components/chat";
  import { SidePanel } from "./components/sidepanel";
  import { initializeGRPC } from "./grpc";
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
    overflow: hidden;
  }
</style>
