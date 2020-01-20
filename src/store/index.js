/* eslint-disable no-debugger */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: {
      status: false
    },
    productDetails: [
        { name: 'iphone6s',description:'this is iphone', price:'12000',category: 'mobile',prod_rating:4.5, url1:'https://i.gadgets360cdn.com/products/large/1552901002_635_redmi_7.jpg' },
        { name: 'samsung ', description:'this is samsung', price:'18000',category: 'mobile',prod_rating:4.3, url1:'https://i.gadgets360cdn.com/products/large/1552901002_635_redmi_7.jpg'},
        { name: 'lenovo yoga', description:'this is lenovo', price:'15000',category: 'mobile',prod_rating:4.2 , url1:'https://i.gadgets360cdn.com/products/large/1552901002_635_redmi_7.jpg'}
    ]
  },
  mutations: {
    SET_PRODUCT_DETAILS(state, data) {
      state.productDetails = {
        ...data
      }
    }
  },
  actions: {
    
    search(context, {data, success, fail}) {
    // eslint-disable-next-line no-debugger
      fetch('http://192.168.43.203:8080/merchantAndProduct/get/'+data, {
        method: 'GET',
        // body: data
      })
      .then(res => res.json())
      .then(res => {
        // commit changes related to user
        window.console.log(res)
        debugger
        context.commit('SET_PRODUCT_DETAILS',res)
        success && success(res)
      })
      .catch(err => {
        window.console.log(err)
        fail && fail()
      })
    }
    // productCategory(context, {data, success, fail}) {
    //     fetch('/api/search', {
    //       method: 'POST',
    //       body: data
    //     })
    //     .then(res => res.json())
    //     .then(res => {
          
    //       success && success(res)
    //     })
    //     .catch(err => {
    //       window.console.log(err)
    //       fail && fail()
    //     })
    //   }
  },
  getters: {
    productList (state) {
      return state.productDetails || []
    },
    getImageUrl(state){
      return state.productDetails.url
    }
  },
  modules: {
  }
})
