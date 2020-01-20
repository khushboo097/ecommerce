<template>
    <main>
        <div class="homebody">
            <div class="cards">
                <div class="images">
                    <img src="@/assets/dog.jpg">
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
                    <img src="@/assets/dog.jpg">
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
                    <img src="@/assets/dog.jpg">
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
                    <img src="@/assets/dog.jpg">
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
                    <img src="@/assets/dog.jpg">
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
                    <img src="@/assets/dog.jpg">
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

/* .homebody{
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    margin: 0px auto;
} */
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
