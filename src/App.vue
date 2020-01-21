<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/App/Navbar'
import Footer from './components/App/Footer'


export default {
  name: 'App',
  components: {
    Footer,
    Navbar
  }
}
</script>

<style>
body {
  margin: 0px;
}
main {
  min-height: 90vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
