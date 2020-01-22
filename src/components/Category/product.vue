<template>
  <main class="products">
      <!-- <h4> the category is {{ $route.params.category }} </h4> -->
      <ul>
        <li v-for="(product, index) in productList" @click="routeToProductDescriptionPage(product)" class="productlist" :key="'productlist'+index">
          <img  :src="product.url1">
              <span class="pname">
                <p>
                  <label>Product: {{ product.productName }}</label>
									<!-- <br> -->
									<label>Mrp: {{product.price}}</label>
									<!-- <br> -->
									<label>Seller's Price: {{product.sellingPrice}}</label>
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
.productlist{
    border-bottom: 1px solid orange;
    padding: 10px;
    list-style-type: none;
		list-style-position:inside;
    margin:0;
		display: flex;
    
}
li{
	list-style-type: none;
		list-style-position:inside;
    margin:0;
		padding: 0;
}
.pname p{
	/* border: 1px solid red; */
	display: inline;
	margin:100px;
	
}
img{
	/* border: 1px solid green; */
	display: flex;
    height: 200px;
    width:200px;
}
label{
	margin-bottom: 2px;
	/* border: 1px solid salmon; */
	display: block;
	margin-left: 50px;
}

</style>