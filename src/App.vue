<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Notice /> -->
  </div>
</template>

<script>
// import Notice from './components/Notice.vue'

export default {
  name: 'App',
  components: {
    // Notice
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
