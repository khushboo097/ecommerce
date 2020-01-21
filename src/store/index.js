import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: {
      status: false
    },
    productById: {
      name: 'iphone6s',description:'this is iphone', price:'12000',category: 'mobile',prod_rating:4.5, url:'https://i.gadgets360cdn.com/products/large/1552901002_635_redmi_7.jpg' 
    },
       
  },
  mutations: {
    SET_PRODUCT_DETAILS(state, data) {
      state.productDetails = {
        ...data
      }
    }
  },
  actions: {
    
    // search(context, {data, success, fail}) {
    //   fetch('/api/search', {
    //     method: 'POST',
    //     body: data
    //   })
    //   .then(res => res.json())
    //   .then(res => {
    //     // commit changes related to user
    //     context.commit('SET_PRODUCT_DETAILS',res)
    //     success && success(res)
    //   })
    //   .catch(err => {
    //     window.console.log(err)
    //     fail && fail()
    //   })
    // }

  },
  getters: {
    product (state) {
      return state.productById
    },
    getImageUrl(state){
      return state.productDetails.url
    }
  },
  modules: {
  }
})
