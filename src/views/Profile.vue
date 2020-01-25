<template>
  <main>
     <div class="container">
      <div class="imgcontainer">
      <img src="https://cdn0.iconfinder.com/data/icons/food-online/512/membership-register-customer-user-card-512.png" alt="Avatar" class="avatar">
    </div>
        <!-- <label>Email</label><input type="email" v-model="userEmail"> -->
        <!-- <br> -->
        <label>Name</label><input type="text" v-model="userName"> 
        <br>
        <label>Password</label><input type="password" v-model="userPassword">
        <br>
        <label>ConfirmPassword</label><input type="password">
        <br>
        <label>Address</label><input type="text" v-model="userAddress">
        <br>
        <label>Enter image Url</label>
        <input type="text" v-model="userImgUrl">
        <button type="submit" @click="Profile">Create Account</button>
      </div>
<br>

<!-- <div v-if='!image'>
  <h3>Select an image</h3>
    <input type="file" name="" @change="onFileChange">
</div>
    <div v-else>
<img:src="image"/>
<button @click="removeImage($event)">Remove</button>

    </div> -->



  </main>
</template>

<script>
export default {
data:function()
{
 return {
   userEmail: JSON.parse(localStorage.getItem('userEmail')),
   userName:'',
   userAddress:'',
   userImgUrl:'',
   userPassword:''

 }
},
methods: {

  Profile() {
            const data = {
                "userEmail": this.userEmail,
                "userName": this.userName,
                "userAddress": this.userAddress,
                "userImgUrl": this.userImgUrl,
                "userPassword": this.userPassword
            }

            this.$store.dispatch('profile', {
                data,
                success: this.onAddSuccess,
                fail: this.onAddFail
            })
        },
        onAddSuccess (res) {
            if(res.status == true)
            this.$router.push({name: 'home'})
            else
            this.$router.push({name: 'error'})
        },
        onAddFail () {
            this.$router.push({name: 'error'});
        }    
}



        // initiateLogin() {
        //     const data = {
        //         username: this.username,
        //         password: this.password
        //     }

        //     this.$store.dispatch('Profile', {
        //         data,
        //         success: this.onLoginSuccess,
        //         fail: this.onLoginFail
        //     })
        // },
        // onLoginSuccess () {
        //     this.$router.push({name: 'login'})
        // },
        // onLoginFail () {
        //     this.$router.push({name: 'errorPage'});
        // }
//         onFileChange(e)
//         {
// var files=e.target.files||e.dataTransfer.files;
// if(!files.length)
// return;
// this.createImage(files[0]);
//         }
//     },
//     createImage(file){
//       var image=new Image();
//       var reader=new FileReader();
//       var vm=this;
//       reader.onload=(e)=>{
//         vm.image=e.target.result;
//       }
//       reader.readAsDataURL(file);
//     }
//     ,
//     removeImage:function(e)
//     {
//       this.image='';
// //     }
}

</script>

<style scoped>
input[type=email], input[type=password],input[type=text]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;

}
img{
  height: 350px;
  width:400px;
}
.container
{
  border: 4px solid black;
  width: 50%;
  margin-left: 25%;
  margin-top: 10%;
  height: 60%;
}
label{
  margin-right: 5px;
}
button{
  background: green;
  color:white;
}
</style>