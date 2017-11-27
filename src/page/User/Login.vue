<template>
  <div>
    <mu-content-block>
      <br/>
      <div id="r-logoin-logo">
        <img src="../../assets/maoyuedu_logo.png" style="width: 200px; height: auto">
      </div>
      <br/>
      <mu-text-field v-model="phone"　fullWidth label="手机" hintText="请输入密码" :errorText="inputPhoneErrorText" @blur="phoneInputError"  type="number" labelFloat/>
      <br/>
      <br/>
      <mu-text-field v-model="password"　fullWidth label="密码" :errorText="inputPasswordErrorText" hintText="请输入密码" type="password" labelFloat/>
      <br/>
      <br/>
      <mu-raised-button　@click="login" label="登录" fullWidth primary/>
      <div style="margin-top: 14px;">
        <router-link to="ResetPassword/">忘记密码</router-link>
        <div id="r-register"><router-link to="Register/">注册账号</router-link></div>
      </div>
    </mu-content-block>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      phone: "",
      password: "",
      inputPhoneErrorText: "",
      inputPasswordErrorText: ""
    }
  },
  computed: {
      //判断手机号码
      checkPhone: function(){
          return /^1\d{10}$/gi.test(this.phone)
      }
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    phoneInputError () {
      if (!this.checkPhone) {
        this.inputPhoneErrorText = '手机格式错误'
      }else {
        this.inputPhoneErrorText  = ''
      }
    },
    login () {
      if (this.checkPhone) {
          axios.get('/UserLoginAPIView/',{
            params: {
              phone: this.phone,
              password: this.password
            }
          })
          .then(res => {
            if ('true' == res.data.state) {
              this.$router.push('/UserCenter')
            }else{
              this.inputPasswordErrorText = "密码错误或用户不存在"
            }
          }
        )
      }
    }
  }
}
</script>

<style scoped>

#r-register{
  float: right;
  color: #2581FA;
}

#r-logoin-logo{
  text-align: center;
}
</style>
