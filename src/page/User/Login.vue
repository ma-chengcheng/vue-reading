<template>
  <div>
    <mu-content-block>
      <br/>
      <div id="r-logoin-logo">
        <img src="../../assets/maoyuedu_logo.png" style="width: 200px; height: auto">
      </div>
      <br/>
      <mu-text-field　fullWidth label="手机" hintText="请输入密码" type="number" labelFloat/>
      <br/>
      <br/>
      <mu-text-field　fullWidth label="密码" hintText="请输入密码" type="password" labelFloat/>
      <br/>
      <br/>
      <mu-raised-button label="登录" to="UserCenter/" fullWidth primary/>
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
  methods: {
    goBack () {
      this.$router.go(-1);
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
