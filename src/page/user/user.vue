<template>
    <div class="page">
        <head-bar head_bar='true' :head_title="head_title"></head-bar>
        <div class="content">
            <mu-card class="user-card">
                <mu-list-item v-show="user_is_active" to="/user/profile">
                    <img class="r-user-avatar" :src="avatarBaseUrl + avatar">
                    <p>{{user_name}}</p>
                    <span>{{user_describe}}</span>
                </mu-list-item>
                <mu-list-item v-show="!user_is_active" to="/login">
                    <mu-icon value="account_circle" size='80' color="#fff"/>
                    <p>点击登录</p>
                </mu-list-item>
            </mu-card>

            <mu-card style="padding-bottom: 10px;">
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

            <mu-card class="item-card">
                <mu-list-item title="个人信息"  to="/user/profile">
                    <i slot="right" class="material-icons">chevron_right</i>
                </mu-list-item>
                <mu-divider/>
                <mu-list-item title="我的追书" to="/user/bookHistory">
                    <i slot="right" class="material-icons">chevron_right</i>
                </mu-list-item>
                <mu-divider/>
                <mu-list-item title="我的订阅" to="/user/bookFollow">
                    <i slot="right" class="material-icons">chevron_right</i>
                </mu-list-item>
            </mu-card>

            <mu-card class="item-card">
                <mu-list-item title="充值" @click="pay">
                    <i slot="right" class="material-icons">chevron_right</i>
                </mu-list-item>
            　</mu-card>
        </div>

        <mu-raised-button @click="logout" label="退出登录" fullWidth primary/>

         <transition name="r-router-slid" mode="out-in">
             <router-view></router-view>
         </transition>
     </div>
</template>


<script>
    import {avatarBaseUrl} from '@/config/env'
    import {signout} from '../../../src/service/getAccountData'
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
            pay(){
                if (!this.user_is_active) {
                        this.toast = true
                        setTimeout(() => {
                              this.toast = false;
                              this.$router.push('/pay/');
                          }, 1500)

                    }else  {
                         this.$router.push('/pay/');
                    }
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


<style lang="scss" scoped>
    .page{
        background-color: #c7ffec;
    }
    .content{
        margin-top: 56px;

        .item-card{
            margin: 10px 0 10px 0;

            i{
                color: #9e9e9e;
            }
        }
    }

    .user-card{
        background: url(../../assets/images/bg/user.jpg) no-repeat center;
        background-size: 100% auto;
        text-align: center;
        // -moz-filter: blur(2px);
        // -webkit-filter: blur(2px);
        // -o-filter: blur(2px);
        // -ms-filter: blur(2px);
        // filter: blur(2px);

        p{
            filter: initial;
            font-size: .9rem;
            font-weight: bold;
            color: #fff;
            z-index: 1px;
        }

        span{
            font-size: .625rem;
            color: #fff;
        }
    }

    .r-user-avatar{
    border-radius: 50%;
    width: 60px;
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
