import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: {
      status: false
    },
    NewuserDetails: [],
    ProfileDetails: []
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
    }
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
    
    
  },
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
      })
     .then(res => res.json())
     .then(res => {
        // commit changes related to user
       
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
  getters: {
    loginCheck(state) {
      return state.userDetails.status
    }
  },
  modules: {
  }
})
