<template>
  <main class="category">
      <!-- this is category page...  -->
      <!-- <h4> the category is {{ $route.params.category }} </h4> -->
      <product/>
  </main>
</template>

<script>

import product from '@/components/Category/product.vue';
import { mapActions } from 'vuex';
export default {


    name: 'Category',
    computed: {
        category () {
            return this.$route.params.category
        }
    },
    watch: {
        category: function () {
            this.fetchCategoryDetails(this.category)
        }
    },
    components: {
      product
    },
    methods: {
        ...mapActions([
            'productCategorySearch'
        ]),
        fetchCategoryDetails(category) {
            
            // Dispatch action to fetch deatils related to one category
            this.productCategorySearch ({
                data: category,
            })
            // window.console.log(category)

        }
    },
    created () {
        this.fetchCategoryDetails(this.category)
    }
}
</script>

<style>

</style>