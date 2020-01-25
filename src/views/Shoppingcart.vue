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
            <th></th>
        </tr>
        <!-- <t r> -->
        <tr v-for="(order, index) in getCart.allCartDetailsDTOS" :key="order.cartId">
            <td>{{index}}</td>
            <td>{{order.productName}}</td>
            <td>{{order.sellingPrice}}</td>
            <td><button @click="decrease" style="width:18px;padding:5px;border-radius:8px;">-</button>{{order.cartQuantity}}<button @click="increase" style="width:18px;padding:5px;border-radius:8px;">+</button></td> 
            <td>{{order.productRating}}</td>
            <td></td>
            <td><button @click="remove">Remove</button></td>
        </tr>
        
    </table>
    
    <router-link to="/"><button class="xyz">Continue Shopping</button></router-link>
    <router-link to="/review"><button>Place your order</button></router-link>
    </div>


    
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name:'Shoppingcart',
    data: function(){
        return {
            cartQuantity:''
        }
    },
    computed: {
        ...mapGetters(['getCart'])
    },
    methods:{
        increase(){
            this.cartQuantity++;
        },
        decrease(){
            if(this.cartQuantity>2)
                this.cartQuantity--;
        }
    },
    mounted(){
        // var data = JSON.parse(localStorage.getItem('userId'));
        const data = {
            userEmail:'a@gmail.com'
        }
        this.$store.dispatch('fetchCartDetails',{
            data: data
        })
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