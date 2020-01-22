<template>

    <div class="abc">
        <h1> Yours order has been placed!</h1>
        <router-link to="/"><button> Continue Shopping</button></router-link>

    </div>
</template>
<script>

export default {
    
    
}

</script>
<style scoped>
 .abc{
    /* background: red; */
    padding-top: 220px;
    padding-bottom: 220px;
} 
h1{
    text-align: center;
    border: 1px solid black;
    border-radius: 20px;
    padding: 20px;
    margin-left: 450px;
    margin-right: 450px;
    

}
button{
    font-size: 25px;
    background-color: red;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    
}



</style>