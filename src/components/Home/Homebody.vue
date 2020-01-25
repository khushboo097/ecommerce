<template>
    <main>
        <div class="products">
            <div class="cards">
                <div class="images">
                    <img src="https://i.gadgets360cdn.com/products/large/1544013796_635_nokia_8_1.jpg">
                </div>
                <div class="title">
                    <h2>Mobiles</h2>
                </div>
                <div class="description">
                    <router-link tag="button" :to="{name: 'category',params: {
                        category: 'mobile'}}">View Mobiles
                    </router-link>
                </div>
            </div>
            <div class="cards">
                <div class="images">
                    <img src="https://images.idgesg.net/images/article/2019/07/aspire5slim-100806682-large.jpg">
                </div>
                <div class="title">
                    <h2>Laptops</h2>
                </div>
                <div class="description">
                    <router-link tag="button" :to="{name: 'category',params: {
                        category: 'laptop'}}">View Laptops
                    </router-link>
                </div>
            </div>
            <div class="cards">
                <div class="images">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61hMebwwIsL._UL1200_.jpg">
                </div>
                <div class="title">
                    <h2>Watches</h2>
                </div>
                <div class="description">
                    <router-link tag="button" :to="{name: 'category',params: {
                        category: 'watch'}}">View Watches
                    </router-link>
                </div>
            </div>
            <div class="cards">
                <div class="images">
                    <img src="https://cdn7.dissolve.com/p/D23_25_489/D23_25_489_1200.jpg">
                </div>
                <div class="title">
                    <h2>Apparel</h2>
                </div>
                <div class="description">
                    <router-link tag="button" :to="{name: 'category',params: {
                        category: 'apparel'}}">View Apparel
                    </router-link>
                </div>
            </div>
            <div class="cards">
                <div class="images">
                    <img src="https://miro.medium.com/max/1200/1*Gql-Vlc4BQJz_x8GhJXX2A.jpeg">
                </div>
                <div class="title">
                    <h2>Books</h2>
                </div>
                <div class="description">
                    <router-link tag="button" :to="{name: 'category',params: {
                        category: 'books'}}">View Books
                    </router-link>
                </div>
            </div>
            <div class="cards">
                <div class="images">
                    <img src="https://cdn.vox-cdn.com/thumbor/m1EbpsARCTue95rGv8QUQxEbOeI=/0x0:970x693/1200x800/filters:focal(408x269:562x423)/cdn.vox-cdn.com/uploads/chorus_image/image/63703718/adidas-instagram.0.1467742174.0.jpg">
                </div>
                <div class="title">
                    <h2>Shoes</h2>
                </div>
                <div class="description">
                    <router-link tag="button" :to="{name: 'category',params: {
                        category: 'shoes'}}">View Shoes
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

.cards{
    width:31.5%;
    float: left;
    background-color: rgb(230, 227, 227);
    border: 1px solid black;
    margin: 12px;
    height: 430px;
}
.cards img{
    width: 100%;
    height: 300px;
}
.title{
    text-align: center;
    margin: 0px;
}
.description{
    text-align: center;
}
button{
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px ;
    background: #fff; 
}
</style>
<script>
export default {
    name:'Homebody',
    data: function(){
        return {
            searchinput:''
        }
    },
    methods: {
        search: function(){
            // window.console.log(this.searchinput);

            if (this.$route.query.key != this.searchinput) {
                this.$router.push({
                    name: 'search',
                    query: {
                        key: this.searchinput
                    }
                })
            } else {
                return
            }

            // this.$store.dispatch('search', {
            //     search : this.searchinput,
            //     success: this.onLoginSuccess,
            //     fail: this.onLoginFail
            // })
        }
    },
    computed: {
    }
}
</script>
