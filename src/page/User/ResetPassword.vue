<template>
  <div>
    <mu-appbar title="找回密码">
          <mu-icon-button icon="chevron_left" slot="left" @click="goBack"/>
    </mu-appbar>
    <mu-content-block>
      <mu-text-field　fullWidth label="手机" hintText="请输入密码" type="number" labelFloat/>
      <br/>
      <mu-text-field label="验证码" v-model="VeriCode" type="number" labelFloat fullWidth/>
      <mu-flat-button label="获取验证码" primary fullWidth　id="r-veri-code-btn"/>
      <br/>
      <mu-text-field　fullWidth label="输入新密码" hintText="请输入密码" type="password" labelFloat/>
      <br/>
      <br/>
      <mu-raised-button label="找回密码" fullWidth primary/>
    </mu-content-block>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  methods: {
    goBack () {
      this.$router.go(-1);
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
