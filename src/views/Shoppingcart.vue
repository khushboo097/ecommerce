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
            <td></td>
            <td></td>
            <td></td>
            <td>subtotal</td>
            <td>78000</td>
        </tr>
         <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>total</td>
            <td>78000</td>
        </tr>
        
    </table>
    
    <router-link to="/"><button class="xyz">Continue Shopping</button></router-link>
    <button>Pay Now</button>
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


 
</style>