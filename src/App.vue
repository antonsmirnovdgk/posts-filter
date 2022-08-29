<template>
  <div id="app">
    <VPublications/>
  </div>
</template>

<script>
import VPublications from "./views/VPublications";

export default {
  name: 'App',
  components: {
    VPublications
  }
}
</script>

<style>
@import "assets/styles/style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
