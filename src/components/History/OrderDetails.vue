<template>
  <main class="orders">
            <!-- <li class="child" v-for="(product, index) in getSearch" :key="'productlist'+index">
                <img  :src="product.url1">
                <div class="product-info">
                    <label>{{product.productName}}</label><label> {{product.price}}</label>
                    <label>{{product.productRating}}</label>
                </div>
            </li> -->
        <ul class="container">
            <li v-for="order in OrderList" :key="order.orderId" class="child">
                <img  :src="order.url1">
                <div class="product-info">
                    <label>{{ order.name }} </label><label>{{order.description}}</label><label>{{order.price}}</label>
                </div>
            </li>
        </ul>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'OrderDetails',
    data:function(){
        return {
            // imageLink: 'https://img2.exportersindia.com/product_images/bc-full/2019/7/4839355/mobiles-1563967697-5014066.jpeg'
        }
    },
    computed: {
        ...mapGetters([
            'productList',
            'OrderList'
        ])
    },
    created() {
        this.$store.dispatch('userOrderDetails')
    }
}

</script>

<style>
.product-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
img{
    height: 210px;
    width:210px;
} 
.container{
			/* border:1px solid red; */
			display: flex;
			flex-wrap: wrap;
            justify-content:  space-around;
            
            
		}
		.child{
			border: 1px solid #1054a1;
			/*flex-grow: 1;*/
            display: flex;
            flex-wrap: wrap;
			/* align-items: flex-start; */
            justify-content: flex-start;
            border: solid 1px #CCC;
        box-shadow: 1px 1px 5px #999;
		}
		li{
			list-style:none; 
			margin: 10px;
			padding: 8px;
		}
        ul{
            margin: 0;
            padding: 0;
        }
        .child:hover {
    border: solid 1px dodgerblue;box-shadow: 1px 1px 15px #093b73;
}
label{
    /* border:1px solid blue; */
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 18px;
    align-content: flex-start;
}
</style>