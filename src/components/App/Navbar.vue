<template>
  <nav class="navbar">
    <router-link class="navbar-item" to="/">T9Cart</router-link>
    <input id="search" v-model="searchinput" type="text" placeholder="Search Products" class="navbar-item search" required>
    <button class="search-btn navbar-item" @click="search">Search</button>
    <span v-if="getStatus" class="navbar-item-right">
        <router-link to="/account" class="login">My Account</router-link>
        <router-link to="/history" class="login">Orders</router-link>
                <!-- <router-link to="/profile navbar-item">View Profile</router-link> -->
                <router-link to="/Shoppingcart" class="cart">Cart</router-link>
                <button @click="logout" class="logout"> Logout</button> 
        
    </span>
    <span v-else class="navbar-item-right">
        <router-link to="/login" class="login">Login</router-link>
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
        },
        logout(){
            // eslint-disable-next-line no-debugger
            debugger
            fetch('http://10.177.68.16:8080/user/logout',{
            method:'GET'
        }).then(res=>res.json())
        .then(res=> {
            // eslint-disable-next-line no-debugger
            debugger
            window.console.log(res)
            localStorage.setItem('status',JSON.stringify(false));
          // this.$router.push('/logout')
      })
    }
    }
}
</script>

<style scoped>
.navbar {
    border: 1px solid dodgerblue;
    background: dodgerblue;
    height: 8vh;
}

.search{
  padding: 10px;
  margin:10px;
  width: 500px;
  border-radius: 3px solid dodgerblue;
  background: rgb(251, 248, 248);
  color:  dodgerblue;
}
.search-btn{
    border-radius: 5px solid dodgerblue;
    color:  white;
    cursor: pointer;
    padding: 7px;
    margin-left: 5px;
    font-size: 12px;
    font-weight: 400;
    background: #000;
}
.search-btn:hover{
    background:  dodgerblue;
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
.login:hover{
    color:white;
}
.cart:hover{
    color:white;
}
.dropbtn{
    height: 20px;
    width: 20px;
    
}
.logout{
    margin-left:30px;
    padding:8px;
    border: 1px solid dodgerblue;
    background: black;
    font-weight:400;
    color: white;
}
.logout:hover{
    background:  dodgerblue;
    color: white;
    cursor: pointer;
    border: 1px solid white;
}
.cart{
    margin-left: 30px;
}

.login{
    margin-left:30px;
}
/* .navbar{
     display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
router-link{
     width: 100%;
    text-align: center;
    order: 3;
    display: none;
} */
</style>