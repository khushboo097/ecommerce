<template>
  <main class="login">
    <div class="container">
      <div class="imgcontainer">
        <img
          src="https://cdn3.iconfinder.com/data/icons/e-commerce-trading/512/Customer-512.png"
          alt="Avatar"
          class="avatar"
        />
      </div>

      <label>Email</label>
      <input v-model="userEmail" type="email" />
      <br />
      <label>Password</label>
      <input type="password" v-model="userPassword" />
      <br />

      <br />
      <button @click="initiateLogin">Submit</button>
      <br />
   

      
      <Facebook ></Facebook>
      <Google></Google>
      <br />
      <router-link to="/newuser">New user?</router-link>
      <br />
      <br />
    </div>
    <div>
   
    </div>
  </main>
</template>

<script>
import Facebook from '@/components/Facebook'
import Google from '@/components/Google'
export default {
  components:{
Facebook,Google
},
  data: function() {
    return {
      userEmail: "",
      userPassword: "",
          
    }
    
    
  },
  methods: {
    
    initiateLogin() {
      const data = {
        userEmail: this.userEmail,
        userPassword: this.userPassword
      }
      this.$store.dispatch("loginUser", {
        data,
        success: this.onLoginSuccess,
        fail: this.onLoginFail
      })
    },
    onLoginSuccess(res) {
      if (res.loginStatus) {
        this.$router.push({ name: "home" });
      } else {
        window.console.log("You entered wrong credentials...");
      }
    },
    onLoginFail() {
      window.console.log("Something went wrong...")
      // this.$router.push({name: 'error'});
    }
  }
}

</script>
 
<style  scoped>
.container {
  border: 4px solid black;
  width: 50%;
  margin-left: 25%;
  margin-top: 10%;
}
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #4caf50;
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
  width: 20%;
  border-radius: 50%;
}
.loginBtn--facebook {
  background-color: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);

  text-shadow: 0 -1px 0 #354c8c;
  width:100%;
}
.loginBtn--google {
  background: #dd4b39;
 
}
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}

</style>








Client ID
180429750525-nldu3dbkaj5bcs3mul9aia0gtv0l35ek.apps.googleusercontent.com
Client secret
Pengz7VWgYloz7Ywfq_C4Wfx
Creation date
January 22, 2020 at 12:52:50 PM GMT+5
Total usage (last 30 days)
0