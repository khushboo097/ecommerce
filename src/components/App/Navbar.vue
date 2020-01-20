<template>
  <nav class="navbar">
    <router-link class="navbar-item" to="/">T9Bazaar</router-link>
    <input id="search" type="text" placeholder="Search Products" class="search">
        <span class="navbar-item-right">
        <router-link to="/login">Login</router-link>
        <router-link to="/cart">Cart</router-link>
        
        </span>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
   
    
}
</script>

<style scoped>
.navbar {
    border: 1px solid black;
    height: 10vh;
}

.search{
  padding: 10px;
  margin:10px;
  width: 500px;
  border: 1px solid #42b983;
}
</style>