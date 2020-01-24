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
        <tr v-for="(order,index) in getCart" :key="index">
            <td>order.allCartDetailsDTOS.productName<button>Remove</button></td>
            <td>order.allCartDetailsDTOS.sellingPrice<button>Remove</button></td>
            <td>order.allCartDetailsDTOS.description<button>Remove</button></td> 
            <td>order.allCartDetailsDTOS.productRating<button>Remove</button></td>
        </tr>
        
    </table>
    
    <router-link to="/"><button class="xyz">Continue Shopping</button></router-link>
    <router-link to="/review"><button>Pay Now</button></router-link>
    </div>


    
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name:'Shoppingcart',
    methods:{
        ...mapGetters(['getCart'])
    },
    data: function() {
    return {
      userEmail: 'a@gmail.com'
    };
  },
    created(){
        // var data = JSON.parse(localStorage.getItem('userId'));
        // let data = {
        //     userEmail:'a@gmail.com'
        // }
        // this.$store.dispatch('fetchCartDetails',{
        //     data: data
        // })
    }
    
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
td{
    border: 1px solid black;
}
button{
    background: green;
    color: white;
    padding: 5px;
    margin:5px;
}

 
</style>