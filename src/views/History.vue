<template>
  <main class="history">
      <OrderDetails/>
  </main>
</template>

<script>
import OrderDetails from '@/components/History/OrderDetails.vue';
export default {


    name: 'History',
    computed: {
        userid () {
            return this.$route.params.userid
        }
    },
    watch: {
        userid: function () {
            this.fetchOrderDetails(this.userid)
        }
    },
    components: {
      OrderDetails
    },
    methods: {
        fetchOrderDetails(userid) {
            
            // Dispatch action to fetch deatils related to one category
            this.$store.dispatch('userOrderDetails', {
                data : userid
                // success: this.onLoginSuccess,
                // fail: this.onLoginFail
            })
            window.console.log(userid)
        }
    },
    created () {
        this.fetchOrderDetails(this.userid)
    }
}
</script>

<style>

</style>