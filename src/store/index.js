import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: {
      status: false
    },
     username:'shdd',
     password:'n sd d'
  },
  mutations: {
    // SET_USER_DETAILS(state, data) {
    //   state.userDetails = {
    //     ...data,
    //   }
    // }
  },
  actions: {
    loginUser(context, {data, success, fail}) {
      window.console.log([data, success, fail]);
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

    },
    newuser(context,{data,success,fail})
    {
window.console.log([data,success,fail]);
    }
  },
  getters: {
    loginCheck(state)
    {
      return state.username
    }
  },
  modules: {
  }
})
