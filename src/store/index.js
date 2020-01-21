/* eslint-disable no-debugger */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: {
      status: false
    },
<<<<<<< HEAD
    productDetails: [
    //   {
    //     "_id": "",
    //     "merchantAndProductId": "",
    //     "productId": "",
    //     "merchantId": "",
    //     "productName": "iphone",
    //     "description": "",
    //     "productRating": '',
    //     "categoryName": "",
    //     "price": '',
    //     "sellingPrice": '',
    //     "url1": "",
    //     "url2": "",
    //     "url3": ""
    // }
    ],
    orderDetails:[
      { orderid:101,name:'iphone Xr',date:'21 Jul 2019',price:'42,000'}
    ]
  },
  mutations: {
    SET_PRODUCT_DETAILS(state, data) {
      state.productDetails = data
    },
    SET_ORDER_DETAILS(state,data){
      state.orderDetails = {
=======
    productById: {
      name: 'iphone6s',description:'this is iphone', price:'12000',category: 'mobile',prod_rating:4.5, url:'https://i.gadgets360cdn.com/products/large/1552901002_635_redmi_7.jpg' 
    },
       
  },
  mutations: {
    SET_PRODUCT_DETAILS(state, data) {
      state.productDetails = {
>>>>>>> afcfdf2a575f2936f8f302d18118643b1da765c7
        ...data
      }
    }
  },
  actions: {
    
<<<<<<< HEAD
    productCategorySearch(context, {data, success, fail}) {
    // eslint-disable-next-line no-debugger
    debugger
      fetch('http://192.168.43.203:8080/merchantAndProduct/get/'+data, {
        method: 'GET',
        // body: data
      })
      .then(res => res.json())
      .then(res => {
        // commit changes related to product
        window.console.log(res)
        context.commit('SET_PRODUCT_DETAILS',res)
        success && success(res)
      })
      .catch(err => {
        window.console.log(err)
        fail && fail()
      })
    },
    userOrderDetails(context, {data, success, fail}) {
      // eslint-disable-next-line no-debugger
      //CHANGE API TO GET USER'S ORDER DETAILS
        fetch('http://192.168.43.203:8080/merchantAndProduct/get/' + data, {
          method: 'GET',
          // body: data
        })
        .then(res => res.json())
        .then(res => {
          window.console.log(res)
          // debugger
          context.commit('SET_ORDER_DETAILS',res)
          success && success(res)
        })
        .catch(err => {
          window.console.log(err)
          fail && fail()
        })
      }
    // search(context, {data, success, fail}) {
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
    OrderList(state){
      return state.orderDetails || []
=======
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
>>>>>>> afcfdf2a575f2936f8f302d18118643b1da765c7
    }
  }
})
