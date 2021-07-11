<script lang="ts">
import ControlPanel from "./lib/controlPanel.svelte/ControlPanel.svelte";

import Editor from "./lib/editor/editor.svelte";

import Page from "./lib/page/Page.svelte";

</script>

<div class="container">
  <ControlPanel />
  
  <main>
    <Editor /> 
    <div class="page-w">

      <Page />
    </div>

  </main>
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
    display: flex;
  }

  .page-w {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

</style>
