<template>
  <div class="page">
    <mu-appbar title="设置个性签名">
          <mu-icon-button icon="chevron_left" slot="left" @click="goBack"/>
    </mu-appbar>
    <mu-content-block>
      <mu-list>
        <mu-list-item>
          <mu-text-field v-model="new_user_describe" :hintText="user_profile.user_describe" fullWidth="true" multiLine :rows="4" :rowsMax="4" maxLength="20"/><br/>
        </mu-list-item>
        <mu-list-item>
          <mu-raised-button v-on:click="submit" label="提交" fullWidth="true" color="#e91e63"/>
        </mu-list-item>
      </mu-list>
    </mu-content-block>
    <dialog-message :message="message" :dialog="dialog"></dialog-message>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import dialogMessage from '@/components/common/dialogMessage'

export default{
  name: 'setUserDescribe',
  components: {
    dialogMessage
  },
  computed: {
      ...mapState([
          'user_profile'
      ])
  },
  data(){
      return{
          new_user_describe: '',
          message: '修改成功',
          dialog: false
      }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    submit(){
        this.$store.dispatch('setUserDescribeAction', this.new_user_describe)
        console.log(this.message)
        this.dialog = true
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
