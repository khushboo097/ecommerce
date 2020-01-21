<template>
  <main class="home">
    <Homebody></Homebody>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Homebody from '@/components/Home/Homebody'

export default {
  name: 'home',
  components: {
    Homebody
  }
}
</script>

<style scoped>
.home {
  box-sizing: border-box;
  display: block;
  /* border: 10px solid black; */
  overflow: hidden;
}
</style>
