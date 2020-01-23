<template>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
</template>
 
 <script>

export default {

  data () {
    return {
    googleSignInParams: {
       client_id: '180429750525-nldu3dbkaj5bcs3mul9aia0gtv0l35ek.apps.googleusercontent.com'
      }

     }
  },
  methods:{
    onSignInSuccess (googleUser) 
    {
      window.console.log(googleUser)
      
    },
  
    onSignInError (error) {
      // `error` contains any error occurred.
      window.console.log('OH NOES', error)
    }


  
}

//}
}
 </script>

 <style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
   padding: 4px 8px;
   border-radius: 3px;
   background-color: #3c82f7;
   color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
 }
 </style> 

