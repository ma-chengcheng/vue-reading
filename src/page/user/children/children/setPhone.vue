<template>
  <div class="page">
    <mu-appbar title="换绑手机">
          <mu-icon-button icon="chevron_left" slot="left" @click="goBack"/>
    </mu-appbar>
    <mu-content-block>
      <mu-list>
        <mu-list-item>
          <mu-text-field label="手机" fullWidth labelFloat/>
        </mu-list-item>
        <mu-list-item>
          <mu-text-field v-model="verifyCode" label="验证码" :errorText="inputVerifyCodeErrorText" @blur="checkVerifyCode"  type="number" labelFloat fullWidth/>
          <mu-flat-button :disabled="!rightPhone" @click="getVerifyCode" label="获取验证码" primary fullWidth　class="r-veri-code-btn" v-show="!computedTime"/>
          <mu-flat-button disabled :label="'已发送'+computedTime+'s'" primary fullWidth　class="r-veri-code-btn" v-show="computedTime"/>
        </mu-list-item>
        <mu-list-item>
          <mu-raised-button label="确认修改" fullWidth class="demo-raised-button" color="#e91e63"/>
        </mu-list-item>
      </mu-list>
    </mu-content-block>
  </div>
</template>

<script>
export default{
  name: 'setPhone',
  data () {
    return {

    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>
.page{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2050;
  background-color: #fff;
}

.r-veri-code-btn{
  float: right;
  margin-top: -3.7em;
}
</style>
