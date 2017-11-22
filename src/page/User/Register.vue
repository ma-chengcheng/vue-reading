<template>
  <div>
    <mu-appbar title="注册">
          <mu-icon-button icon="chevron_left" slot="left" @click="goBack"/>
    </mu-appbar>
    <mu-content-block>
      <mu-text-field　v-model="phone" fullWidth label="手机" :errorText="inputErrorText" @blur="phoneInputError" type="number" labelFloat/>
      <br/>
      <mu-text-field label="验证码"  type="number" labelFloat fullWidth/>
      <mu-flat-button label="获取验证码" primary fullWidth　id="r-veri-code-btn"/>
      <br/>
      <mu-text-field　fullWidth label="密码" hintText="请输入密码" type="password" labelFloat/>
      <br/>
      <br/>
      <mu-raised-button label="注册" fullWidth primary/>
    </mu-content-block>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data(){
    return {
      phone: "",
      inputErrorText: ""
    }
  },
  computed: {
      //判断手机号码
      rightPhoneNumber: function(){
          return /^1\d{10}$/gi.test(this.phone)
      }
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    phoneInputError(){
      this.inputErrorText = this.rightPhoneNumber ? '' : '手机格式错误';
    }

  }
}
</script>

<style scoped>

#r-veri-code-btn{
  float: right;
  margin-top: -3.7em;
}
</style>
