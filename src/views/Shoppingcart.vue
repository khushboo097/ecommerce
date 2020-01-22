<template>
<div class="abcd">

    <h1>Shopping Cart</h1>
    <table class="abc">
        <tr>
            <th>S.No</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
        <tr> 
            <td>1</td>
            <td>Moblie</td>
            <td>24000</td>
            <td>1</td>
            <td>24000</td>
        </tr>
         <tr> 
            <td>2</td>
            <td>sofa</td>
            <td>54000</td>
            <td>1</td>
            <td>54000</td>
        </tr>
        <tr>
            <td colspan="4" class="right">Sub Total</td>
            <td>78000</td>
        </tr>
         <tr>
        
            <td colspan="4" class="right">Total</td>
            <td>78000</td>
        </tr>
        
    </table>
    
    <router-link to="/"><button class="xyz">Continue Shopping</button></router-link>
    <router-link to="/Review"><button>Place Order</button></router-link>
    </div>


    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.abc{
     border: 1px solid black;
  border-collapse:collapse;
  width: 100%;
}
.xyz{
    margin-right: 900px;
}
.abcd{
    padding-top: 200px;
    padding-bottom: 200px;
}
table,tr,th,td{
    border:2px solid
}
button{
    font-size: 20px;
    margin-top: 20px;
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
.right{
    padding-left: 900px;
}


 
</style>