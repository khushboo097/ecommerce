<template>
<main >
   <div class="imgcontainer">
    <img src="https://dp5zphk8udxg9.cloudfront.net/wp-content/uploads/2016/09/Verification-e1474861482103.jpg" alt="Avatar" class="avatar">
  </div> 
    <div class="main">
   <label >Email</label><input v-model="email" type="email" >
    <br>
    <label >Password</label><input type="password" v-model="password" >
    <br>
    <label >Confirm Password</label><input type="password" v-model="confirmpassword" >
     <br>
    <label ><button > SendOTP</button></label>
    <br>
    <input id="partitioned" type="text" maxlength="4" />
    <br>
    <button @click="Newuser">Create Account</button>
    </div>
</main>
</template>

<script>
export default {
    data:function()
    {
        return {
    
            password: '',
            // confirmpassword:''
        }
    },
methods:{
  Newuser() {
            const data = {
                username: this.username,
                password: this.password,
                confirmpassword:this.confirmpassword
            }

            this.$store.dispatch('newuser', {
                data,
                success: this.onLoginSuccess,
                fail: this.onLoginFail
            })
        },
        onLoginSuccess () {
            this.$router.push({name: 'profile'})
        },
        onLoginFail () {
            this.$router.push({name: 'errorPage'});
        }    
}
}
</script>

<style>
#partitioned {
  padding-left: 15px;
  letter-spacing: 42px;
  border: 0;
  background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 50px 1px;
  background-repeat: repeat-x;
  background-position-x: 35px;
  width: 220px;
}
.main{
border: 0.5px solid black;
    padding: 10px;
  box-shadow: 5px 10px;
  border: 1px solid black;
}
main{
    border: 1px solid black;
    margin-left: 300px;
    margin-right: 300px;
    padding-top: 250px;

}

</style>