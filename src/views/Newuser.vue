<template>
<main >
   <div class="imgcontainer">
    <img src="https://dp5zphk8udxg9.cloudfront.net/wp-content/uploads/2016/09/Verification-e1474861482103.jpg" alt="Avatar" class="avatar">
  </div> 
    <div class="main">
   <label >Email</label><input v-model="userEmail" type="email" >
     <br>
    <label ><button @click="sendOTP"> SendOTP</button></label>
    <br>
    <input id="partitioned" type="text" maxlength="4" v-model="OTP"/>
    <!-- <br>-->
    <button >Verify</button>
    <br>
    <!-- <router-link tag="button">Next</router-link> -->
    </div>
</main>
</template>

<script>
export default {
    data:function()
    {
        return {
            userEmail: '',
            OTP:''
        }
    },
methods:{
    sendOTP() {
        const data = this.userEmail
        
        fetch('http://192.168.43.203:8081/otp/get/' + data, {
            method: 'GET'
        })
            .then(res=> res.json())
            .then(res=>{
                window.console.log(res);
                // if (res.get('otp') === this.OTP)
                //     this.$router.push('/profile');
        })
         
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