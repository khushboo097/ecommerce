<template>
    <div align="center" >
        <div class="abc">
	
    Email<br><br><input type="text" placeholder="enter mail" text size="40px" class="inputbox"><br><br>
	New Password<br><br><input type="password" placeholder="enter password" text size="40px" class="inputbox"><br><br>
	<button>Send OTP</button><br><br>
    <input type="numbers" placeholder="enter otp" text size="40px" class="inputbox"><br><br>
	<button>Update Password</button>
    </div>
</div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
div{
    text-align: center;
    padding-bottom: 100px;
    padding-top: 100px;
    border: 2px solid  black;
   
 

}
input{
border: 1px solid #464646;
padding: 5px;
width: 300px;
color: #464646;
background-color: #fff;
border-radius: 5px;
transition: all 0.5s;
font-weight: normal;
}
.abc{
    border: 1px solid blue;
    margin-left: 450px;
    margin-right: 450px;
    border-radius: 50px;

}


</style>