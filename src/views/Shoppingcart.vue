<template>
<main class="maincart">
    <div class="container">
    <!-- <div class="child"> -->
        <!-- <h3>Shopping Cart</h3> -->
    <table>
        <tr>
            <!-- <th>S.No</th> -->

            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
        </tr>
        <!-- <t r> -->
        <tr v-for="(order, index) in getCart" :key="order.cartId" id="delete">
            <td class="container">{{order.productName}}</td>
            <td>{{order.sellingPrice}}</td>
            <td ><input type="button" @click="decrease(order,index)" style="width:18px;padding:5px;border-radius:8px;" value='-'/>{{order.cartQuantity}}<input type="button"  @click="increase(order,index)" style="width:18px;padding:5px;border-radius:8px;" value='+'/></td> 
            <td @click="total(order)">{{ order.cartQuantity*order.sellingPrice }}</td>
            <td><button :value="order.cartId" @click="remove($event)" >Remove</button></td>
            <!-- <p style="color:red;" id="alert"></p> -->
        </tr>
        
        
    </table>
    <!-- </div> -->
    <div class="container1">
    <router-link to="/"><button class="xyz">Continue Shopping</button></router-link>
    <button style="padding:11px;" @click="placeOrder">Place your order</button>
    </div>
    </div>
</main>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name:'Shoppingcart',
    data: function(){
        return {
            cartQuantity:'',
            cartDetails: [],
            total: [] ,
            msg:''
        }
    },
    computed: {
        ...mapGetters(['getCart']),
        array:function()
        {
            // var s= this.cartDetails.sellingPrice;
            var end= this.cartDetails.length;
            var total=[];
            for(var i=0;i<=end;i++)
            {
                total[i] = this.cartDetails[i].sellingPrice
            }
            window.console.log(total)
            return total;
        }
    },
    methods:{
        increase(order,index){
            if(order.cartQuantity<5)
            {
                order.cartQuantity++;
                const data={
                    cartId: order.cartId,
                    userEmail: 'a@gmail.com',
                    merchantAndProductId: order.merchantAndProductId,
                    cartQuantity: +1

                }
                window.console.log('adding',data)
                this.$store.dispatch('addOnetoCart',{
                data:data})
                fetch('http://10.177.68.16:8081/cart/add',{
                    method:'PUT',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
            }
            else
                window.alert('Max Quantity allowed is 5!!')
            this.total[index] = order.cartQuantity*order.sellingPrice;
        },
        decrease(order,index){
            window.console.log(index)
            if(order.cartQuantity>1)
            {
                order.cartQuantity--;
                const data={
                    cartId: order.cartId,
                    userEmail: 'a@gmail.com',
                    merchantAndProductId: order.merchantAndProductId,
                    cartQuantity: -1

                }
                window.console.log('removing',data)
                fetch('http://10.177.68.16:8081/cart/add',{
                    method:'PUT',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
            }
            this.total[index] = order.cartQuantity*order.sellingPrice
        },
        // total(order){
            
        //     return (order.cartQuantity)*(order.sellingPrice)

        // },
        getAmount(cartArray){
            var amount;
            for(var i=0;i<cartArray.length;i++){
                amount = this.cartArray[i].sellingPrice*(this.cartArray[i].cartQuantity)
            }
            return amount
        },
        remove(event){
            window.console.log(event.target.value)
            this.$store.dispatch('removeFromCart',{
                data: event.target.value,
                success: this.onCartRemoveSuccess,
                fail: this.onCartRemoveFail
            })
        },
        onCartRemoveSuccess(res){
            window.console.log(res.status)
            if(res.status==true){
                var elem = document.getElementById("delete");
                elem.remove();
            }
        },
        placeOrder(){
            window.console.log(this.cartDetails)
            // const data = {
            // userEmail:'a@gmail.com'
            // }
            var cook = this.$cookies.get('newUuid')
            window.console.log(cook)
            var s = JSON.parse(localStorage.getItem('status'))
            if(s==true)
                {
                    //send cookie
                        this.$store.dispatch('checkCart',{
                        data: cook,
                        success: this.checkSuccess,
                        fail:this.checkFail
                    })
                    // getter 
                    // $store.getter.cartstatus;
                    if(this.$store.state.cartStatus.status)
                        this.$router.push('/paymnet')
                    else
                    {
                    this.getCart.forEach(element => {
                        // window.console.log('element',element)
                        this.$store.state.cartStatus.orderDetails.forEach(item=>{
                            // window.console.log('item',item)
                            if(element.cartId==item.cartId&&item.status=="false"){
                                this.msg = element.productName + ' is out of stock. It has only ' + item.stockQty
                                // this.$alert("out of stock",element.productName)
                                this.$alert(this.msg)
                            }
                        })

                    });
                    }
                    // this.$router.push('/payment')
                }
            else
                {
                    this.$alert('You need to login first',"Warning","warning")
                    this.$router.push('/login')
                }
            //FIRST CHECK IF QUANTITY IS THERE API
            //ACTION CALL TO UPDATE CART
        },
        checkSuccess(res){
            if(res.status==true)
                this.$router.push('/payment')
            else{
                this.$alert('check your cart, some items are out of stock!',"Sorry","warning")
            }
            // for(cartId in getCartStatus)
            // {
            //     window.console
            // }
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

    },
    created(){
        // this.cartDetails = this.getCart
        // total(order)
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
    /* border: 1px solid black; */
    /* margin-right: 900px; */
    padding: 11px;
}

.abcd{
    border: 1px solid black;
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
.container{
    margin-top: 200px;
    margin-left:280px;
}
.container1{
    display: flex;
    margin-top: 100px; 
    justify-content: flex-start;
}
table{
    border: 1px solid black;
    width: 900px;
}
td img{
    width: 100px;
    height: 100px;
}
h3{
    left:-100px;
}
/* .container{
    display: flex;
    border: 1px solid red;
    justify-content: center;
}
.child{
    border:1px solid green;
} */

 
</style>