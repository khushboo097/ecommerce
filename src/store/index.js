/* eslint-disable no-debugger */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: {
      status: false
    },
    NewuserDetails: [],
    ProfileDetails: [],
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
    SET_USER_DETAILS(state, data) {
    state.userDetails = data
      } 
    ,
    SET_NEW_DETAILS (state, data) {
      state.NewuserDetails= data
    },
    SET_PROFILE_DETAILS(state, data){
      state.SET_PROFILE_DETAILS = data
    },
    SET_PRODUCT_DETAILS(state, data) {
      state.productDetails = data
    },
    SET_ORDER_DETAILS(state,data){
      state.orderDetails = data
    }
    
  },
    //state.MerchantDetails:
    //{
     // ...data
    //}
    //,
    //state.NewMerchantDetails:
   // {
     // ...data
    //}
    // }
    //
    
  actions: {
    loginUser(context, {data, success, fail}) {
      window.console.log([data, success, fail]);
      fetch('http://10.177.7.62:8080/user/login', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
          'Content-Type': 'application/json'
        }
       })
       .then(res => res.json())
      .then(res => {
        context.commit('SET_USER_DETAILS', {
          ...res,
          status: true
        })
        success && success()
       })
       .catch(err => {
         window.console.log(err)
         fail && fail()
       })

    },
    newuser(context,{data,success,fail})
    {
    // window.console.log([data,success,fail]);
      fetch('', {
         method: 'GET',
         body:JSON.stringify(data),
         headers: {
          'Content-Type': 'application/json'
        }
       })
     .then(res => res.json())
       .then(res => {
        // commit c
        window.console.log(res)
        context.commit('SET_NEW_DETAILS',res)
         success && success(res)
       })
       .catch(err => {
         window.console.log(err)
         fail && fail()
       })
    },

    //,
    profile(context,{data,success,fail})
    {
//window.console.log([data,success,fail]);
      fetch('http://10.177.7.62:8080/user/addProfile', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
        context.commit('SET_PROFILE_DETAILS',res)
        window.console.log(res)
         success && success(res)
       })
       .catch(err => {
         window.console.log(err)
         fail && fail()
     })
    }
    //,
    //newMerchant(context,{data,success,fail})
    //{
//window.console.log([data,success,fail]);
// fetch('/users/login', {
      //   method: 'POST',
      //   body: data
      // })
      // .then(res => res.json())
      // .then(res => {
      //   // commit changes related to user
      //   success && success(res)
      // })
      // .catch(err => {
      //   window.console.log(err)
      //   fail && fail()
      // })
   // }

  },  
    productCategorySearch(context, {data, success, fail}) {
    // eslint-disable-next-line no-debugger
//     debugger
      fetch('http://192.168.43.203:8080/merchantAndProduct/get/'+data, {
        method: 'GET',
        // body: data
      })
     .then(res => res.json())
     .then(res => {
        // commit changes related to user
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
          // commit changes related to user
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
    },
       loginCheck(state) {
      return state.userDetails.status
  },
  modules: {
  }
})
