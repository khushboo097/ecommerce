<template>
  <nav class="navbar">
    <router-link class="navbar-item" to="/">T9Bazaar</router-link>
    <input id="search" type="text" placeholder="Search Products" class="search">
        <span class="navbar-item-right">
        <router-link to="/login">Login</router-link>
        <router-link to="/cart">Cart</router-link>
        <router-link to="/payment">Payment</router-link>
        <router-link to="/forgot">Forgot</router-link>
        <router-link to="/product">Product</router-link>
        </span>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data: function () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        initiateLogin() {
            const data = {
                username: this.username,
                password: this.password
            }

            this.$store.dispatch('loginUser', {
                data,
                success: this.onLoginSuccess,
                fail: this.onLoginFail
            })
        },
        onLoginSuccess () {
            this.$router.push({name: 'login'})
        },
        onLoginFail () {
            this.$router.push({name: 'errorPage'});
        }
    }
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