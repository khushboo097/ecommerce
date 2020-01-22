<template>
    <main class="abc" >
        <div class="xyz">
            <div class="slideshow-container">

                <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="../assets/iphone.png" width="500px" height="500px">
                <!-- <div class="text">Caption Text</div> -->
                </div>

                <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="https://images.idgesg.net/images/article/2018/04/iphone-8-project-red-100754506-large.jpg" width="500px" height="500px">
                <!-- <div class="text">Caption Two</div> -->
                </div>

                <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidphelan%2Ffiles%2F2018%2F04%2FiPhone8-iPhone8PLUS-PRODUCT-RED_front-back_041018-1200x1440.jpg" width="500px" height="500px">
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
            <h1> {{product.name}}</h1>
            <!-- <h3>In Stock</h3> -->
            <span>
                <h2 style="display:inline;">Price: </h2>
                <h2 style="display:inline;">{{product.price}}</h2>
            </span>
            <h3>Description:</h3>
            <dl>
                <dt>{{product.description}}</dt>
            </dl>
            <select @change="changeMerchant($event)">
                <option >Select Merchant</option>
                <option v-for="(merchant, index) in merchants" :key="index" :value="merchant.id">
                    {{ merchant.name }}
                </option>
            </select><br>
            <label for="quantity" class="a-native-dropdown">Quantity:</label>
            <select name="quantity" autocomplete="off" id="quantity" tabindex="0" class="a-native-dropdown">
                     <option value="1" selected="">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="3">4</option>
                     <option value="3">5</option>
            </select><br><br>
            <router-link to="/Shoppingcart"><button>Add To Cart</button></router-link>
            <router-link to="/Review"><button>Buy Now</button></router-link>
        </div>
    </main>   
</template>
<script>

import { mapGetters } from 'vuex';

export default {
    name: 'product',
    data:function(){
    return {
        slideIndex: 1,
        // productId :'',
        merchants: [
        {
            id: 1,
            name: "merchants-4.2"
        },
        {
            id: 2,
            name: "merchants-4.7"
        },
        {
            id: 3,
            name: "merchants-4.4"
        },
        {
            id: 4,
            name: "merchants-4.6"
        }
        ],
            imageLink: 'https://img2.exportersindia.com/product_images/bc-full/2019/7/4839355/mobiles-1563967697-5014066.jpeg'
        }
    },
    computed: {
        ...mapGetters([
            'product'
        ])
    },
    mounted () {
        window.console.log(this.slideIndex)
        this.showSlides(this.slideIndex)
    },
    methods: {
        changeMerchant(event) {
            window.console.log(event.target.value)
            //action 
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

