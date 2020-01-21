<template>
  <main class="home">
    <Homebody></Homebody>
  </main>
</template>

<script>
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
  overflow: hidden;
}
</style>
