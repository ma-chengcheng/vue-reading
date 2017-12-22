<template>
    <div v-bind:class="{'head-bar': head_bar}">
        <!-- 首页头部 -->
        <div v-if="head_index">
            <div class="header-index">
                <div class="header-operate">
                    <router-link to="/search">
                        <span style="padding-right: 8px;">
                            <i class="material-icons head-icon">search</i>
                        </span>
                    </router-link>
                    <router-link to="/user">
                        <span>
                            <i v-if="!user_is_active" class="material-icons head-icon">perm_identity</i>
                            <img v-if="user_is_active" class="user-avatar" :src="avatarBaseUrl + avatar">
                        </span>
                    </router-link>
                </div>
            </div>

            <mu-tabs :value="tab_value" @change="handleTabChange">
                <mu-tab value="home" title="首页"/>
                <mu-tab value="rank" title="排行"/>
                <mu-tab value="library" title="书库"/>
                <mu-tab value="recharge" title="充值"/>
            </mu-tabs>
        </div>

        <!-- 二级头部 -->
        <mu-appbar class="header-bar" v-if="head_bar" :title="head_title">
            <mu-icon-button icon="chevron_left" slot="left" @click="$router.go(-1)"/>
        </mu-appbar>
    </div>
</template>

<script>
    import {avatarBaseUrl} from '@/config/env'
    import {mapState, mapActions} from 'vuex'
    export default{
        name: 'headBar',
        data(){
            return{
                avatar: '',
                avatarBaseUrl
            }
        },
        props: ['head_title', 'head_bar', 'head_index', 'tab_value'],
        mounted() {
          // 获取用户信息
          this.getUserPrpfile();
          this.initData();
        },
        computed :{
            ...mapState([
                'user_is_active',
                'user_profile'
            ])
        },
        methods: {
          ...mapActions([
            'getUserPrpfile'
          ]),
          initData(){
              this.avatar = this.user_profile.avatar
          },
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
                    　　this.$router.push('/pay/');
                        break;
                　default:
                　　　　　this.$router.push('/');
            }
          }
      },
      watch: {
          user_profile: function (val) {
              this.initData()
          }
      }
  }
</script>

<style scoped>
    .material-icons.head-icon{
        color: #47b2d8;
        font-size: 26px;
    }

    .head-bar{
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 400;
    }


    .header-index{
        padding: 10px 15px 10px 15px;
        height: 45px;
        margin-left: 15px;
        background: url(../../assets/maoyuedu_logo.png) no-repeat left center;
        background-size: 100px auto;
    }

    .header-operate{
        line-height: 40px;
        float: right;
    }


    .user-avatar{
        border-radius: 50%;
        height: 26px;
        width: 26px;
    }
</style>
