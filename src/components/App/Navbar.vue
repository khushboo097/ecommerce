<template>
  <nav class="navbar">
    <router-link class="navbar-item" to="/">T9Bazaar</router-link>
    <input id="search" v-model="searchinput" type="text" placeholder="Search Products" class="search" required>
    <button class="search-btn" @click=search>Search</button>
    <span class="navbar-item-right">
        <router-link to="/login" class="login">Login</router-link>
        <!-- <div class="dropdown">
            <button class="dropbtn"><img src="@/assests/drop.png"></button>
            <div class="dropdown-content">
                <router-linkk to="/profile">View Profile</router-link>
                -->
                <!-- <router-link to="/history" @click="userOrderDetails($store.userid)">Order History</router-link> -->
                <!--<router-linkk to="/logout">Logout</router-link>
            </div>
        </div> -->
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
  border-radius: 3px solid orange;
  background: white;
  color: orange;
}
.search-btn{
    border-radius: 5px solid orange;
    color: orange;
    cursor: pointer;
    padding: 8px;
    margin-left: 5px;
    font-size: 12px;
    font-weight: 800;
    background: #fff;
}
.search-btn:hover{
    background: orange;
    color: white;
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
    color: black;
}
.login{
    text-decoration: none;
    color: black;
}
.login:visited,.cart:visited{
    color: black;
}
/* .search-btn{
    padding: 5px;
    border-radius: 3px solid orange;
    background: white;
} */
a:visited{
    text-decoration: none;
    color: black;
    font-size: 14px;
}
a:hover{
    color:white;
}
</style>