<template>
  <div >
      You have logged out.
  </div>
</template>

<script>
export default {
  created(){
    this.$store.status = false;
  }

}
</script>

<style>

</style>