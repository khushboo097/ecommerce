<template>
  <main class="products">
      <!-- <h4> the category is {{ $route.params.category }} </h4> -->
      <ul>
            <li class="productlist" v-for="(product, index) in productList" :key="'productlist'+index">
                <img  :src="product.url1">
                <span class="pname">
                <p>{{ product.productName }} <br>{{product.price}}
                </p> 
                </span>
            </li>
        </ul>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'product',
    data:function(){
        return {
            // imageLink: 
            // imageLink: 'https://img2.exportersindia.com/product_images/bc-full/2019/7/4839355/mobiles-1563967697-5014066.jpeg'
        }
    },
    computed: {
        ...mapGetters([
            'productList'
        ])
    },
    created() {
    }
}

</script>

<style>
.productlist{
    border-bottom: 1px solid orange;
    padding: 10px;
    list-style-type: none;
    margin:0;
    
}
/* .pname{
    border: 1px solid black;
} */
img{
    height: 200px;
    width:200px;
}

</style>