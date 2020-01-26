/* eslint-disable no-debugger */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    productDetails: [
      // {productName:'iphone',price:'45000',url1:'https://img2.exportersindia.com/product_images/bc-full/2019/7/4839355/mobiles-1563967697-5014066.jpeg'}
      {
      }
    ],
    orderDetails:[
      { orderid:101,name:'iphone Xr',date:'21 Jul 2019',price:'42,000'}
    ],
    productById: {  
    },
    // status: '',
    userDetails: {},
    NewuserDetails: [],
    profileDetails: [],
    search:[],
    merchantDetails:[],
    cartDetails:{},
    cartStatus:{
      "status":false,
      "orderDetails":[
      {
        cartId:2,
        status:'true',
        stockQty:'1'
      },
      {
        cartId:3,
        status:'false',
        stockQty:'4'
      }
    ]
    }
  },
  mutations: {
    SET_PRODUCT_DETAILS(state, data) {
      state.productDetails = data
    },
    SET_USER_DETAILS(state, data) {
      state.userDetails = data
    },
    SET_NEW_DETAILS(state, data) {
      state.NewuserDetails = data
    },
    SET_PROFILE_DETAILS(state, data) {
      state.profileDetails = data
    },
    SET_ORDER_DETAILS(state, data) {
      state.orderDetails = data
    },
    SET_SPECIFIC_PRODUCT(state,data){
      state.productById = data
    },
    SET_SEARCH(state,data){
      state.search = data
    },
    SET_MERCHANT_DETAILS(state,data){
      state.merchantDetails = data
    },
    SET_CART_DETAILS(state, data){
      state.cartDetails= data
      // window.console.log(state.cartDetails)
    }
  },
  actions: {
    //SEARCH BY PRODUCT CATEGORY
    productCategorySearch(context, {data, success, fail}) {
      fetch('http://10.177.68.16:8082/merchantAndProduct/get/'+data, {
        method: 'GET',
      })
      .then(res => res.json())
      .then(res => {
        window.console.log(res)
        context.commit('SET_PRODUCT_DETAILS',res)
        // window.console.log(res)
        success && success(res)
      })
      .catch(err => {
        window.console.log(err)
        fail && fail()
      })
    },
    productDetailsbyMerchant(context,{data}){
      fetch('backend/merchantAndProduct/get/product', {
        method: 'POST',
        credentials:'include',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(res => {
        window.console.log(res)
        context.commit('SET_MERCHANT_DETAILS',res)
        // success && success(res)
      })
    },
    //USER LOGIN
    loginUser(context, { data, success, fail }) {
      // window.console.log([data, success, fail]);

      fetch('backend/user/login', {
        method: 'POST',
        credentials:'include',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
          window.console.log(res)
          context.commit('SET_USER_DETAILS', res)
          success && success(res)
        })
        .catch(err => {
          window.console.log(err)
          // window.alert('You entered wrong credentials')
          fail && fail()
        })

    },
    // logout(){
    //   fetch('http://10.177.68.16:8080/user/logout',{
    //     method:'GET'
    //   }).then(res=>res.json())
    //   .then(res=> {
    //     debugger
    //       window.console.log(res)
    //       localStorage.setItem('status',JSON.stringify(res.loginStatus));
    //       // this.$router.push('/logout')
    //   })
    // },
    //SEARCH BY PRODUCT NAME
    search(context, { data, success, fail }) {
      debugger
      window.console.log(data);
      fetch('http://10.177.69.130:8000/solr-search/search/bySearch', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
          window.console.log(res)
          context.commit('SET_SEARCH',res)
          success && success(res)
        })
        .catch(err => {
          window.console.log(err)
          // alert('You entered wrong credentials')
          fail && fail()
        })

    },
    //ADD USER
    profile(context, { data, success, fail }) {
      fetch('http://10.177.68.16:8080/user/add', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
          context.commit('SET_USER_DETAILS', {
            ...res
          }

          )
          success && success(res)
        })
        .catch(err => {
          debugger
          window.console.log(err)
          fail && fail()
        })
    },
    //DELETE THIS IF NO USE
    newuser(context, { data, success, fail }) {
      // TODO
      // Complete this function ...
      fetch('', {
        method: 'GET',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
          context.commit('SET_PROFILE_DETAILS', res)
          window.console.log(res)
          success && success(res)
        })
        .catch(err => {
          window.console.log(err)
          fail && fail()
        })
    },
    //DETAILS OF USER'S ORDER HERE
    userOrderDetails(context, {data, success, fail}) {
      //CHANGE API TO GET USER'S ORDER DETAILS
      fetch('http://10.177.68.16:8081/order/get/' + data, {
        method: 'GET',
      })
      .then(res => res.json())
      .then(res => {
        window.console.log(res)
        context.commit('SET_ORDER_DETAILS',res)
        success && success(res)
      })
      .catch(err => {
        window.console.log(err)
        fail && fail()
      })
  },
  //ALL MERCHANTS FOR SAME PRODUCT
    merchantDetails(context, {data}) {
      //CHANGE API
      fetch('http://10.177.68.16:8082/merchantAndProduct/display', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(res => {
        window.console.log(res)
        context.commit('SET_MERCHANT_DETAILS',res)
        // localStorage.setItem('products', JSON.stringify(res));
        // success && success(res)
      })
      // .catch(err => {
      //   window.console.log(err)
      //   fail && fail()
      // })
    },
    //GET SPECIFIC PRODUCT DETAILS
  productSearch(context, { data }){
    
    fetch('http://10.177.68.16:8082/merchantAndProduct/get/product',{
      method:'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      context.commit('SET_SPECIFIC_PRODUCT',res)
    })
    },
    removeFromCart(context,{data,success,fail}){
      fetch('http://10.177.68.16:8081/cart/delete/'+data,{
      method:'DELETE',
    }).then(res=>res.json()).then(res =>{
      window.console.log(res)
      success && success(res)
      })
      .catch(err => {
        window.console.log(err)
        fail && fail()
      })

    },
    //FETCH CART
      fetchCartDetails(context, { data }){
    
      fetch('http://10.177.68.16:8081/cart/get',{
        method:'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(res => {
        context.commit('SET_CART_DETAILS',res)
        window.console.log('in fetch',res)
      })
      },
      addToCart(context,{data}){
        
        fetch('http://10.177.68.16:8081/cart/add' ,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then(res => {
                window.console.log(res)
                context.commit('SET_CART_DETAILS',{
                  ...res})
                
            })
      },
      checkCart(context,{data,success,fail}){
        fetch('http://10.177.68.16:8081/cart/check',{
          method:'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type':'application/json'
          }
        })
        .then(res=> res.json())
        .then(res=>{
          window.console.log(res)
          success && success(res)
      })
      .catch(err => {
        window.console.log(err)
        fail && fail()
      })
      }
  },
  getters: {
    productList (state) {
      return state.productDetails || []
    },
    OrderList(state){
      return state.orderDetails || []
    },
    product (state) {
      return state.productById
    },
    getMerchantDetails(state){
      return state.merchantDetails
    },
    loginCheck(state) {
      return state.userDetails.status
    },
    getProductById(state){
      return state.productById
    },
    getCart(state){
      window.console.log('get called',state.cartDetails)
      return state.cartDetails || {}
    },
    getSearch(state){
      return state.search
    },
    getStatus(){
      var payload = JSON.parse(localStorage.getItem('status'));
      
      return payload
    },
    getCartStatus(state){
      return state.cartStatus
    }
  },
})
