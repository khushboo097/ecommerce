<template>
  <main class="login" >
      <div class="imgcontainer">
    <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-trading/512/Customer-512.png" alt="Avatar" class="avatar">
  </div>
     <div class="container">
      <label >Email</label><input v-model="username" type="email" >
<br>
<label >Password</label><input type="password" v-model="password">
<br>
  </div>
<br>
<button @click="initiateLogin" >Submit</button>
<br>

 <button>Login with facebook</button>
 
 <button>Login with Email</button>
 <br>
 <router-link to="/newuser"> New user?</router-link>
 <br>

 <br>
   
  </main>
</template>

<script>

export default {
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

            this.$store.dispatch('loginMerchant', {
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
 
<style >

input[type=email], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}
img.avatar {
  width: 40%;
  border-radius: 50%;
}

</style>