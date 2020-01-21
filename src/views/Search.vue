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
      searchTerm() {
          return this.$route.query
      }
  },
  components: {
      SearchBody
  },
  watch: {
      searchTerm: function () {
          this.doSearch(this.$route.query)
      }
  },
  methods: {
      doSearch(key) {
          window.console.log(key)
          this.$store.dispatch('search', {
                search : this.searchinput,
                success: this.onLoginSuccess,
                fail: this.onLoginFail
            })
      }
  },
  created() {
      this.doSearch(this.searchTerm)
  }
    
}

</script>

