<template>
  <button v-facebook-signin-button="appId" class="facebook-signin-button"> Continue with Facebook</button>
</template>

<script>
import FacebookSignInButton from 'vue-facebook-signin-button-directive'
export default {
  directives: {
    FacebookSignInButton
  },
  data: () => ({
    appId: '115017333196252'
  }),
  methods: {
    OnFacebookAuthSuccess () {
      // Receive the idToken and make your magic with the backend
    },
     OnFacebookAuthFail (error) {
      window.console.log(error)
   }
  }
}
</script>

<style>
.facebook-signin-button {
  color: white;
  background-color: #3b5998;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>