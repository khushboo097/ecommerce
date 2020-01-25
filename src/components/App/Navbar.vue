<template>
  <nav class="navbar">
    <router-link class="navbar-item" to="/">T9Cart</router-link>
    <input id="search" v-model="searchinput" type="text" placeholder="Search Products" class="search" required>
    <button class="search-btn" @click="search">Search</button>
    <span v-if="getStatus" class="navbar-item-right">
        <router-link to="/login" class="login">Login</router-link>
            <div class="dropdown">
                <button class="dropbtn"><img class="dropbtn" src="@/assets/drop.png"></button>
                <div class="dropdown-content">
                    <router-link to="/profile">View Profile</router-link>
                    <router-link to="/logout">Logout</router-link>
                </div>
            </div> 
        <router-link to="/Shoppingcart" class="cart">Cart</router-link>
    </span>
    <span v-else class="navbar-item-right">
        <router-link to="/login" class="login">Login</router-link>
            <!-- <div class="dropdown">
                <button class="dropbtn"><img src="@/assets/drop.png"></button>
                <div class="dropdown-content">
                    <router-link to="/profile">View Profile</router-link>
                    <router-link to="/logout">Logout</router-link>
                </div>
            </div>  -->
        <router-link to="/Shoppingcart" class="cart">Cart</router-link>
    </span>
  </nav>
  <!-- <SearchBody></SearchBody> -->
</template>

<script>
import { mapGetters } from 'vuex'
//  import SearchBody from '@/componesnts/Search/SearchBody.vue';
export default {
    name:'Navbar',
    data: function(){
        return {
            searchinput:''
        }
    },
    computed:{
        // SearchBody
        ...mapGetters(['getStatus'])
    },
    methods: {
        search: function(){
                    const data ={
                    inputData: this.searchinput
                }
                this.$store.dispatch('search',{
                    data: data,
                    success: this.searchSuccess,
                    fail: this.failSuccess
                })
            // if (this.$route.query.key != this.searchinput) {
            //     this.$router.push({
            //         name: 'search',
            //         query: {
            //             key: this.searchinput
            //         }
            //     })
            // } else {
            //     return
            // }
        },
        searchSuccess(){
            window.console.log('success')
            this.$router.push('/search')
        },
        failSuccess(){
            window.console.log('fail')
        }
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
    /* margin-left: 60px; */
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
a:visited{
    text-decoration: none;
    color: black;
    font-size: 14px;
}
a:hover{
    color:white;
}
.dropbtn{
    height: 20px;
    width: 20px;
    
}
</style>