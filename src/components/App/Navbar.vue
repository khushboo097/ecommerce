<template>
  <nav class="navbar">
    <router-link class="navbar-item" to="/">T9Bazaar</router-link>
    <input id="search" v-model="searchinput" type="text" placeholder="Search Products" class="search">
    <button class="search-btn" @click=search>Search</button>
        <span class="navbar-item-right">
        <router-link to="/login" class="login">Login</router-link>
        <router-link to="/cart" class="cart">Cart</router-link>
        </span>
  </nav>
</template>

<script>
export default {
    name:'Navbar',
    data: function(){
        return {
            searchinput:''
        }
    },
    methods: {
        search: function(){
            // window.console.log(this.searchinput);

            if (this.$route.query.key != this.searchinput) {
                this.$router.push({
                    name: 'search',
                    query: {
                        key: this.searchinput
                    }
                })
            } else {
                return
            }

            // this.$store.dispatch('search', {
            //     search : this.searchinput,
            //     success: this.onLoginSuccess,
            //     fail: this.onLoginFail
            // })
        }
    },
    computed: {
    }
}
</script>

<style scoped>
.navbar {
    border: 1px solid orange;
    background: orange;
    height: 8vh;
}

.search{
  padding: 10px;
  margin:10px;
  width: 500px;
  border: 1px solid orange;
}
.navbar-item
{
    align-items: left; 
    text-decoration: none;
}
.navbar-item-right{
    margin-left:240px;
    text-decoration: none;
}
.cart{
    margin-left: 60px;
    text-decoration: none;
}
.login{
    text-decoration: none;
}
.search-btn{
    padding: 5px;
    border-radius: 3px solid orange;
    background: white;
}

</style>