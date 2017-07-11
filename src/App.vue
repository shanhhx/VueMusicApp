<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
      <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/header.vue'
  import Tab from 'components/tab/Tab'
  export default {
    name: 'app',
    components: {
      MHeader, Tab
    }
  }
</script>

<style>
  body{
    background: #222;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
