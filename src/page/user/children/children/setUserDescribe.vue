<template>
  <div class="page">
    <mu-appbar title="设置个性签名">
          <mu-icon-button icon="chevron_left" slot="left" @click="goBack"/>
    </mu-appbar>
    <mu-content-block>
      <mu-list>
        <mu-list-item>
          <mu-text-field fullWidth="true" multiLine :rows="4" :rowsMax="4" maxLength="20"/><br/>
        </mu-list-item>
        <mu-list-item>
          <mu-raised-button label="提交" fullWidth="true" color="#e91e63"/>
        </mu-list-item>
      </mu-list>
    </mu-content-block>
  </div>
</template>

<script>
export default{
  name: 'setUserDescribe',
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
  z-index: 205;
  background-color: #fff;
}
</style>
