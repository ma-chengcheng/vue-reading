<template>
    <div class="page">
        <head-bar head_bar='true' :head_title="head_title"></head-bar>

        <div class="content">
            <mu-card class="user-info-card padding-top">
                <mu-list-item　title="头像">
                    <input type="file" class="file-button"  @change="uploadAvatar">
                    <mu-avatar :src="avatarBaseUrl + avatar"　slot="rightAvatar"/>
                </mu-list-item>
                <mu-divider/>

                <mu-list-item to="/user/profile/username">
                    <span>用户名</span>
                    <span class="r-right-text">{{user_name}}</span>
                    <mu-icon slot="right" value="chevron_right"/>
                </mu-list-item>
                <mu-divider/>

                <mu-list-item　to="/user/profile/phone">
                    <span>手机号码</span>
                    <span class="r-right-text">{{phone}}</span>
                    <mu-icon slot="right" value="chevron_right"/>
                </mu-list-item>
            </mu-card>

            <mu-card class="user-info-card">
                <mu-list-item　style="font-size: 16px" to="/user/profile/userDescribe">
                    <span>个性签名</span>
                    <mu-icon slot="right" value="chevron_right"/>
                </mu-list-item>
            </mu-card>
        </div>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>

  </div>
</template>

<script>
    import {avatarBaseUrl} from '@/config/env'
    import headBar from '@/components/header/headBar'
    import {mapState, mapMutations, mapActions} from 'vuex'

    import Cookies from 'js-cookie'
    export default{
        name: 'profile',
        components: {
            headBar
        },
        data(){
            return{
                avatarBaseUrl,
                head_title: '个人信息',

                avatar: '',
                user_name: '',
                phone: '',
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
            initData(){
                this.avatar = this.user_profile.avatar
                this.phone = this.user_profile.phone
                this.user_name = this.user_profile.user_name
            },

            //上传头像
            async uploadAvatar(ev){
                let config = {
                    headers: {'X-CSRFtoken': Cookies.get('csrftoken')}
                }
                let avatar = new FormData();
                avatar.append('file', ev.target.files[0], ev.target.files[0].name);
                axios.post('/api/UploadAvatarAPIView/', avatar, config)
                .then(res=>{
                    console.log(res.data.message)
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
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 203;
      background-color: #c7ffec;
    }

    .content{
        margin-top: 56px;
    }

    .user-info-card{
      font-size: 16px;
      margin-top: 14px;
    }

    .r-right-text{
      float: right;
      color: #999;
      font-size: 13px;
    }

    .file-button{
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      opacity: 0;
    }

    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>
