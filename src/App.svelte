<script lang="ts">
  import { Main, Login } from "views";
  import { currentUser } from "stores";
</script>

<div id="main-container">
  {#if $currentUser}
    <Main />
  {:else}
    <Login />
  {/if}
</div>

<style lang="scss" global>
  @import "./styles/global.scss";

  #main-container {
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
  }
</style>
