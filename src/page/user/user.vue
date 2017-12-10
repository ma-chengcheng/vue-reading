<template>
    <div>
        <head-bar head_bar='true' :head_title="head_title"></head-bar>
        <mu-content-block class="content">
            <mu-card class="r-user-card">
                <mu-list-item v-show="user_is_active" to="/user/profile" class="Top-list-item">
                    <div style="text-align: center; width: 100%">
                        <img class="r-user-avatar" :src="avatarBaseUrl + avatar">
                        <p>{{user_name}}</p>
                        <span style="color: #757575">{{user_describe}}</span>
                    </div>
                </mu-list-item>
                <mu-list-item v-show="!user_is_active" to="/login" class="Top-list-item">
                    <div style="text-align: center; width: 100%">
                        <mu-icon value="account_circle" size='80' color="rgb(158, 158, 158)"/>
                        <p>点击登录</p>
                    </div>
                </mu-list-item>
            </mu-card>

            <mu-card style="margin-top: 15px; padding-bottom: 10px;">
                <mu-flexbox class="r-donate-flexbox">
                    <mu-flexbox-item >
                        <div>
                            <h4>猫币</h4>
                            <span>{{balance}}</span><br/>
                        </div>
                    </mu-flexbox-item>
                    <mu-flexbox-item>
                        <div>
                            <h4>钻石票</h4>
                            <span>{{diamond_ticket_num}}</span><br/>
                        </div>
                    </mu-flexbox-item>
                    <mu-flexbox-item>
                        <div>
                            <h4>推荐票</h4>
                            <span>{{recommend_ticket_num}}</span><br/>
                        </div>
                    </mu-flexbox-item>
                </mu-flexbox>
            </mu-card>

            <mu-card style="margin-top: 15px">
                <mu-list-item title="个人信息"  to="/user/profile">
                    <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
                </mu-list-item>
                <mu-divider/>
                <mu-list-item title="我的追书" to="/user/bookFollow">
                    <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
                </mu-list-item>
                <mu-divider/>
                <mu-list-item title="最近阅读" to="/user/bookHistory">
                    <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
                </mu-list-item>
            </mu-card>

            <mu-card style="margin-top: 20px">
                <mu-list-item title="充值">
                    <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
                </mu-list-item>
            　</mu-card>
            　<br/>
             <br/>
             <mu-raised-button @click="logout" label="退出登录" fullWidth primary/>
         </mu-content-block>
         <transition name="r-router-slid" mode="out-in">
             <router-view></router-view>
         </transition>
     </div>
</template>


<script>
    import {avatarBaseUrl} from '@/config/env'
    import {signout} from '../../../src/service/getData'
    import headBar from '@/components/header/headBar'
    import {mapState, mapMutations, mapActions} from 'vuex'

    export default {
      name: 'user',
      components: {
        headBar
      },
      data() {
        return{
          head_title: '个人中心',

          user_name: '',
          avatar: 'avatar_default.jpg',
          user_describe: '',
          balance: 0,               //猫币
          recommend_ticket_num: 0,
          diamond_ticket_num: 0,

          avatarBaseUrl
        }
      },
      mounted(){
          this.initData();
      },
      computed: {
        ...mapState([
          'user_profile',
          'user_is_active'
        ])
      },
      methods: {
            ...mapMutations([
                'OUT_LOGIN', 'SAVE_AVANDER'
            ]),
            initData(){
                this.user_name = this.user_profile.user_name
                this.user_describe = this.user_profile.user_describe
                this.balance = this.user_profile.balance
                this.recommend_ticket_num = this.user_profile.recommend_ticket_num
                this.diamond_ticket_num = this.user_profile.diamond_ticket_num
            },
            logout () {
                this.OUT_LOGIN();
                signout().then(res=>{
                  if ('true' == res.data.state) {
                    this.$router.push('/user')
                  }
                })
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
    .content{
        margin-top: 70px;
    }

    .r-user-card{
      padding-top: 5px;
    }

    .r-user-avatar{
    border-radius: 50%;
    width: 20%;
    height: auto;
    }

    .r-donate-flexbox{
    text-align: center;
    }

    .r-router-slid-enter-active, .r-router-slid-leave-active {
      transition: all .4s;
    }
    .r-router-slid-enter, .r-router-slid-leave-active {
      transform: translate3d(2rem, 0, 0);
      opacity: 0;
    }
</style>
