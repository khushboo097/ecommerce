<template>
  <main class="view">
        <div class="container">
            <div class="child">
              <img src="@/assets/iphone.png">
              <div class="user-info">
                <label>Name: getUser.userName}}</label>
                <label>Email: getUser.userEmail}}</label>
                <label>Address: getUser.address}}</label>
              </div>
            </div>
        </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
name:'ViewProfile',
computed: {
    ...mapGetters(['getUser'])
}

}
</script>

<style>
.user-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
img{
    height: 210px;
    width:210px;
} 
.container{
			/* border:1px solid red; */

			display: flex;
			flex-wrap: wrap;
            justify-content:  space-around;
            margin-top:20vh;
            
		}
		.child{
			border: 1px solid #1054a1;
            padding:40px;
            margin-bottom: 0px;
			/* flex-grow: 2; */
            /* display: flex; */
            /* flex-wrap: wrap; */
			/* align-items: flex-start; */
            justify-content: flex-start;
            /* border: solid 1px #CCC;
        box-shadow: 1px 1px 5px #999; */
		}
        .child:hover {
    border: solid 1px dodgerblue;box-shadow: 1px 1px 5px #093b73;
}
label{
    /* border:1px solid blue; */
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 18px;
    align-content: flex-start;
}
</style>