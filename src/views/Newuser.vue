/* eslint-disable no-console */
<template>
  <main class="newUser">
    <div class="main">
      <div class="container">
        <img
          src="https://dp5zphk8udxg9.cloudfront.net/wp-content/uploads/2016/09/Verification-e1474861482103.jpg"
          alt="Avatar"
          class="avatar"
        />
      </div>

      <label>Email</label>
      <input v-model="userEmail" type="email" />
      <br />
      <label>
        <button @click="sendOTP">SendOTP</button>
      </label>
      <br />
      <input id="partitioned" type="text" maxlength="4" v-model="OTP" />
      <!-- <br>-->
      <button @click="verify">Verify</button>
      <br />
      <!-- <router-link tag="button">Next</router-link> -->
    </div>
  </main>
</template>

<script>
export default {
  data: function() {
    return {
      userEmail: "",
			OTP: '',
			userOtp:''
    };
  },
  methods: {
    sendOTP() {
			const data = {
				userEmail: this.userEmail
			}
			// eslint-disable-next-line no-console
			console.log(JSON.stringify(data))
      fetch('http://10.177.69.98:8081/otp/get', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          window.console.log(res);
          this.userOtp = res.otp
        });
		},
		verify() {
			if (this.userOtp!=''&& (this.userOtp === this.OTP)) this.$router.push("/profile");
			else{
				this.$router.push({name:'error'})
			}
		},
    Newuser() {
      const data = {
        username: this.username,
        password: this.password,
        confirmpassword: this.confirmpassword
      };

      this.$store.dispatch("newuser", {
        data,
        success: this.onLoginSuccess,
        fail: this.onLoginFail
      });
    },
    onLoginSuccess() {
      this.$router.push({ name: "profile" });
    },
    onLoginFail() {
      this.$router.push({ name: "error" });
    }
  }
};
</script>

<style scoped>
#partitioned {
  padding-left: 15px;
  letter-spacing: 42px;
  border: 0;
  background-image: linear-gradient(
    to left,
    black 70%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 50px 1px;
  background-repeat: repeat-x;
  background-position-x: 35px;
  width: 220px;
}
.main {
  border: 1.5px solid black;
  width: 50%;
  margin-left: 25%;
  margin-top: 60px;
}
input {
  width: 100%;
  height: 30px;
}
button {
  background-color: green;
  width: 100%;
  height:30px;
}
img {
  height: 300px;
}
</style>