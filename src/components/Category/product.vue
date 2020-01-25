<template>
  <main class="products">
      <!-- <h4> the category is {{ $route.params.category }} </h4> -->
        <ul class="container">
          <li v-for="(product, index) in productList" @click="routeToProductDescriptionPage(product)" class="child" :key="'productlist'+index">
            <img  :src="product.url1">
            <div class="product-info">
              <label>Product: {{ product.productName }}</label>
              <label>Mrp: {{product.price}}</label>
              <label>Seller's Price: {{product.sellingPrice}}</label>
             </div>
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
        }
    },
    computed: {
        ...mapGetters([
            'productList'
        ])
    },
    created() {
        // this.productCategorySearch()
    },
    methods:{
			routeToProductDescriptionPage (product) {
				window.console.log(product);
				const payload = {
					"categoryName": product.categoryName,
					"merchantAndProductId": product.merchantAndProductId,
					"productId": product.productId
				}
				localStorage.setItem('payload', JSON.stringify(payload));
				this.$store.dispatch('productSearch',{
					data: payload
				})
				this.$router.push('/productdescription')
			}
    }
}

</script>

<style scoped>
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
    margin: 5px;
    font-size: 14px;
    align-content: flex-start;
}
</style>