<template>
    <main class="search">
       <SearchBody></SearchBody>
    </main>
</template>

<script>
 import SearchBody from '../components/Search/SearchBody.vue';

export default {
  name: 'search',
  data: function(){
      return {
      message: ''
    }
  },
  computed: {
    //   inputData() {
    //       return data{
    //           inputData: this.searchinput
    //       }
    //   }
  },
  components: {
      SearchBody
  },
//   watch: {
//       name: function () {
//           this.doSearch(this.$route.query)
//       }
//   },
//   methods: {
//       doSearch(key) {
//           window.console.log(key)
//           this.$store.dispatch('search', {
//                 inputData : key,
//                 success: this.searchSuccess,
//                 fail: this.failSuccess
//             })
//       }
//   },
//   created() {
//       this.doSearch(this.inputData)
//   }
    
}

</script>

