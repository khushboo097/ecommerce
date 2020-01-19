import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: {
      status: false
    },
    productDetails: {}
  },
  mutations: {
    SET_USER_DETAILS(state, data) {
      state.userDeatils = {
        ...data,
      }
    }
  },
  actions: {
    loginUser(context, {data, success, fail}) {
      fetch('/users/login', {
        method: 'POST',
        body: data
      })
      .then(res => res.json())
      .then(res => {
        // commit changes related to user
        success && success(res)
      })
      .catch(err => {
        window.console.log(err)
        fail && fail()
      })
    }
  },
  getters: {
    isLoggedIn (state) {
      return state.userDetails.status || false
    }
  },
  modules: {
  }
})
