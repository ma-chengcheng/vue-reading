<template>
  <div class="page">
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
        <router-link to="/forget/">忘记密码</router-link>
        <div id="r-register"><router-link to="/register/">注册账号</router-link></div>
      </div>
    </mu-content-block>
  </div>
</template>

<script>
import {accountLogin} from '../../../src/service/getData'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'login',
  data(){
    return{
      phone: "",
      password: "",
      inputPhoneErrorText: "",
      inputPasswordErrorText: "",

    }
  },
  computed: {
      //判断手机号码
      checkPhone: function(){
          return /^1\d{10}$/gi.test(this.phone)
      },
      ...mapState([
          'user_profile',
          'user_is_active'
      ]),
  },
  methods: {
    ...mapMutations([
      'RECORD_USERINFO',
    ]),
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
        const login = accountLogin(this.phone, this.password).then(res => {
          if ('true' == res.data.state) {
            this.RECORD_USERINFO(res.data.user_profile)
            this.$router.push('/')
          }else{
            this.inputPasswordErrorText = "密码错误或用户不存在"
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.page{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 203;
  background-color: #fff;
}

#r-register{
  float: right;
  color: #2581FA;
}

#r-logoin-logo{
  text-align: center;
}
</style>
