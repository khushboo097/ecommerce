<template>
  <main class="error">
    <div class="child">
      Oh no,
      Something went wrong.
    </div>
  </main>
</template>

<script>
export default {
name:'error'
}
</script>

<style scoped>
.error{
  display: flex;
  justify-content: center;
  align-items: center;
}
.child{
  border: 1px solid darkblue;
  padding: 5px;
  font-size: 18px;
}
</style>