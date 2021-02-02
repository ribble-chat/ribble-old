<script lang="ts">
  import { Chat, SidePanel } from "components";
</script>

<div id="main-container">
  <SidePanel />
  <Chat />
</div>

<style lang="scss" global>
  #main-container {
    height: 100vh;
    display: flex;
    overflow: hidden;
  }
</style>
