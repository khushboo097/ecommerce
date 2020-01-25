/* eslint-disable no-debugger */
<template>
    <main class="abc" >
        <div class="xyz">
            <div class="slideshow-container">

                <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img :src="getProductById.url1" width="500px" height="500px">
                <!-- <div class="text">Caption Text</div> -->
                </div>

                <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img :src="getProductById.url2" width="500px" height="500px">
                <!-- <div class="text">Caption Two</div> -->
                </div>

                <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img :src="getProductById.url3" width="500px" height="500px">
                <br>
                <!-- <div class="text">Caption Three</div> -->
                </div>

                <!-- <a class="prev" @click="plusSlides(-1)">&#10094;</a> -->
                <a class="next" @click="plusSlides(1)">&#10095;</a>

            </div>
<br>

<div style="text-align:center">
  <span class="dot" @click="currentSlide(1)"></span> 
  <span class="dot" @click="currentSlide(2)"></span> 
  <span class="dot" @click="currentSlide(3)"></span> 
</div>
</div>
        <div class="abcd">
            <h1> {{getProductById.name}}</h1>
            <!-- <h3>In Stock</h3> -->
            <span>
                <h2 style="display:inline;">MRP: </h2>
                <h2 style="display:inline;">{{getProductById.price}}</h2>
                <br>
                <h2 style="display:inline;">Discounted Price: </h2>
                <h2 style="display:inline;">{{getProductById.sellingPrice}}</h2>
            </span>
            <h3>Description:</h3>
            <dl>
                <dt>{{getProductById.description}}</dt>
            </dl>
            <select @change="changeMerchant($event)">
                <option >Select Merchant</option>
                <option v-for="(merchant, index) in getMerchantDetails" :key="index" :value="merchant.merchantAndProductId">
                    <label>{{ merchant.merchantName }}</label><label>  {{merchant.merchantRating}}</label>
                </option>
            </select><br>
            <label for="quantity" class="a-native-dropdown">Quantity:</label>
            <select v-bind:value="cartQuantity" v-on:change="cartQuantity = $event.target.value" name="quantity" autocomplete="off" id="quantity" tabindex="0" class="a-native-dropdown">
                     <option value="1" selected="">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="3">4</option>
                     <option value="3">5</option>
            </select><br><br>
            <button @click="addtoCart">Add To Cart</button>
            <router-link to="/Review"><button>Buy Now</button></router-link>
        </div>
    </main>   
</template>
<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'product',
    data:function(){
    return {
        slideIndex: 1,
        // productId :'',
        cartQuantity:''
        }
    },
    computed: {
        ...mapGetters([
            'product',
            'getProductById',
            'getMerchantDetails'
        ]),
        ...mapActions([
            'productSearch'
        ]),
        productId () {
            return this.$store.productById
        }
    },
    mounted () {
        window.console.log(this.slideIndex)
        this.showSlides(this.slideIndex)
        var payload = JSON.parse(localStorage.getItem('payload'));
        this.$store.dispatch('productSearch',{
					data: payload
                })
        const data ={
            productId: payload.productId
        }
        this.$store.dispatch('merchantDetails',{
            data :data
        })

    },
    methods: {
        changeMerchant(event) {
            // let payload = this.getProductById
            window.console.log(event.target.value)
            window.console.log(this.cartQuantity)
            //action 
            const data ={
                categoryName: this.product.categoryName,
                merchantAndProductId : event.target.value,
                productId: this.product.productId
            }
            // const data = event.target.value
            this.$store.dispatch('productSearch',data)
        },
        addtoCart(){
            var payload = JSON.parse(localStorage.getItem('payload'));
            let data = {
                merchantAndProductId: payload.merchantAndProductId,
                cartQuantity:this.cartQuantity
            }
            
            this.$store.dispatch('addToCart',{
                data: data
            })
            window.console.log(this.cartQuantity)
        },
        plusSlides(n) {
            this.showSlides(this.slideIndex += n)
        },
        currentSlide(n) {
            this.showSlides(this.slideIndex = n)
        },
        showSlides(n) {
            var i = 0
            var slides = document.getElementsByClassName("mySlides")
            window.console.log('slides', slides.length)
            var dots = document.getElementsByClassName("dot")
            if (n > slides.length) {this.slideIndex = 1}    
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                window.console.log('slide loop')
                slides[i].style.display = "none" 
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "")
            }
            slides[this.slideIndex-1].style.display = "block" 
            dots[this.slideIndex-1].className += " active"
        }
    }
    // created () {
    //     this.fetchProductDetails(this.productdata)
    // },
    // watch: {
    //     productId: function () {
    //         this.fetchProductDetails(this.productdata)
    //     }
    // }
}

</script>
<style scoped>
* {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}
.mySlides {display: none}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
button{
    margin-left:10px;
    background: green;
    color: white;
}
/* button:hover{

} */

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: antiquewhite;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

.class{
    width: 100%;
}  
.abc{
    display: flex;
}
.abcd{
    width: 50%;
    margin: 5%;
}
button{
    font-size: 15px;
    
}
</style>
