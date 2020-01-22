<template>
    <div class="abc">
        <div class="xyz">
            <img src="@/assets/giphy.gif" height="150" class="CToWUd a6T" tabindex="0">
            <h1> Yours order has been placed!</h1>
        </div>
        <router-link to="/"><button> Continue Shopping</button></router-link>
        <!-- <button><router-link to="/">Go to Home</router-link></button> -->
    </div>
</template>
<script>
export default {
     methods:{
        callFunction: function () {
            // var v = this;
            setTimeout(function () {
                this.$router.push('/');
            }, 3000);
        }
    },
    mounted () {
      this.callFunction()
    }
}
</script>
<style scoped>
 .abc{
    /* background: red; */
    padding-top: 220px;
    padding-bottom: 220px;
    /* background-image: url('../assets/76997.jpg') */
}
.xyz{
    text-align: center;
    border: 2px solid skyblue;
    border-radius: 20px;
    padding: 20px;
    margin-left: 450px;
    margin-right: 450px;
    background-color: white;
}
button{
    font-size: 25px;
    background-color:rgba(255, 78, 47, 0);
    border: none;
    color: green;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
}
</style>