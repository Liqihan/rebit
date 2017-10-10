<template>
  <div id="app">
    <layout-header />
    <div class="body">
      <layout-left-side />
      <div class="editor-center">编辑</div>
      <layout-right-side />
    </div>
    <div>家居安静asdfaf</div>

  </div>
</template>

<script>
import layoutHeader from './editor/layout-header'
import layoutLeftSide from './editor/layout-left-side';
import layoutRightSide from './editor/layout-right-side';
export default {
  name: 'app',
  components: {
    layoutHeader,
    layoutLeftSide,
    layoutRightSide
  },

}
</script>

<style>
  @import "../style/icon.less";
  @import "../style/layout.less";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .body{
    display: flex;
    position: relative;
    overflow: hidden;
    height: calc(100vh - 60px);
  }
  .editor-center{
    flex: 1;
  }
</style>
