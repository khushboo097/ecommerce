<template>
  <main class="orders">
      <ul>
            <li class="orderlist" v-for="order in OrderList" :key="order.orderid">
                <!-- <img  :src="order.url"> -->
                <span class="pname">
                <p>{{ order.name }} <br>{{order.description}} <br> {{order.price}}
                </p> 
                </span>
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
    }
}

</script>

<style>

</style>