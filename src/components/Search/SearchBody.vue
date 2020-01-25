<template>
    <div class="searchbody">
         <ul class="container">
            <!-- <li class="child" v-for="(product, index) in getSearch" :key="'productlist'+index">
                <img  :src="product.url1">
                <div class="product-info">
                    <label>{{product.productName}}</label><label> {{product.price}}</label>
                    <label>{{product.productRating}}</label>
                </div>
            </li> -->
            <li class="child">
                <img src="https://www.91-img.com/pictures/134124-v5-oppo-k3-mobile-phone-large-1.jpg">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
            <li class="child">
                <img src="https://www.gizmochina.com/wp-content/uploads/2018/07/Oppo-A3s.png">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
            <li class="child">
                <img src="@/assets/iphone.png">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
            <li class="child">
                <img src="@/assets/iphone.png">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
            <li class="child">
                <img src="@/assets/iphone.png">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
            <li class="child">
                <img src="@/assets/iphone.png">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
            <li class="child">
                <img src="@/assets/iphone.png">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
            <li class="child">
                <img src="@/assets/iphone.png">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
            <li class="child">
                <img src="@/assets/iphone.png">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
            <li class="child">
                <img src="@/assets/iphone.png">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
            <li class="child">
                <img src="@/assets/iphone.png">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
            <li class="child">
                <img src="@/assets/iphone.png">
                <div class="product-info">
                    <label>product.productName</label><label> product.price</label>
                    <label>product.productRating</label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SearchBody',
    data:function(){
        return {
            // imageLink: 'https://img2.exportersindia.com/product_images/bc-full/2019/7/4839355/mobiles-1563967697-5014066.jpeg'
        }
    },
    computed: {
        ...mapGetters([
            'getSearch'
        ])
    },
    created() {
        // eslint-disable-next-line no-console
        // eslint-disable-next-line no-debugger
        window.console.log(this.getSearch)
    }
}
</script>

<style scoped>
/* .productlist{
    border-bottom: 1px solid orange;
    padding: 10px;
    list-style-type: none;
    margin:0;
    
}
.pname{
    border: 1px solid black;
}*/
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