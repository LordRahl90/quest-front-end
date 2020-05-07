<!-- @format -->

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .ant-layout-header {
    padding-left: 20px !important;
  }
  .ant-timeline-item {
    padding: 10px 0 0;
    /* margin: 16px 0px; */
  }
  input {
    height: 50px !important;
    width: 100%;
  }
  select {
    height: 50px !important;
    width: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    background-color: #fff;
  }
  select:focus {
    outline: none;
  }
</style>
