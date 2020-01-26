<template>
  <div id="app">
    <!-- <button @click="secondRequest">Second Request</button> -->
    <Navbar />
    <router-view></router-view>
    <Footer />

  </div>
</template>

<script>
import Navbar from './components/App/Navbar'
import Footer from './components/App/Footer'


export default {
  name: 'App',
  components: {
    Footer,
    Navbar
  },
  created() {
    // var cook = this.$cookies.get('newUuid');

    // window.console.log(cook)
    fetch('backend/user/demo', {
      method:'GET'
    })
  },
      // .then(res => res.json())
      // .then(res => {
      //   window.console.log(res)
      // })
  // },
  methods: {
    secondRequest () {
      fetch('/backend/user/demo1',{
        method:'POST'
      })
        .then(res => res.json())
        .then(res => {
          window.console.log(res)
        })
    }
  }
}
</script>

<style>
/* *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #24252a;
} */
/* li,a,button{
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #edf0f1;
  text-decoration: none;

}
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:30px 10%;

}
.navbar-links{
  list-style-type: none;
}
.navbar-links router-link{
  display: inline-block;
  padding:0p 20px;
  transition:all 0.3s ease 0s;

}
.navbar-links:hover{
  color: #0088a9;
}
button{
  padding:9px 25px;
  background-color: rgba(0,136,169,1);
  border:none;
  border-radius:10px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
button:hover{
  background-color: rgba(0,136,169,0.8);
} */
body {
  margin: 0px;
}
main {
  min-height: 90vh;
}
#app{
  text-align: center;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */


</style>
