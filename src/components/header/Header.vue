<template>
  <div>
    <div id="r-logo">
      <router-link to="Login"><div id="r-account-icon">
        <mu-icon value="account_circle" :size="35"/>
      </div></router-link>
    </div>
    <mu-tabs @change="handleTabChange">
        <mu-tab value="home" title="首页"/>
        <mu-tab value="rank" title="排行"/>
        <mu-tab value="library" title="书库"/>
        <mu-tab value="recharge" title="充值"/>
    </mu-tabs>
  </div>
</template>

<script>
export default {
  name: 'ReadHeader',
  methods: {
    handleTabChange (tab) {
      switch (tab) {
        case 'home':
          this.$router.push('/');
          break;
        case 'rank':
          this.$router.push('/rank/');
          break;
        case 'library':
          this.$router.push('/library/');
          break;
        case 'recharge':
          this.$router.push('/recharge/');
          break;
        default:
          this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>
#r-logo{
  height: 50px;
  padding: 5px 10px;
  margin-left: 15px;
  background: url(../../assets/maoyuedu_logo.png) no-repeat left center;
  background-size: 100px auto;
}

#r-account-icon{
  float: right;
}

</style>
