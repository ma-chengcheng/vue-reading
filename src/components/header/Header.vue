<template>
  <div>
    <mu-tabs @change="handleTabChange">
        <mu-tab value="logo"/>
        <mu-tab value="home" title="首页"/>
        <mu-tab value="rank" title="排行"/>
        <mu-tab value="library" title="书库"/>
        <mu-tab value="recharge" title="充值"/>
    </mu-tabs>
    <!-- <div>
      <mu-avatar slot="right" icon="person"/>
      <mu-avatar slot="right" icon="dns"/>
    </div> -->
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

</style>
