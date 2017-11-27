<template>
  <div>
    <mu-appbar title="个人中心">
          <mu-icon-button icon="chevron_left" slot="left" @click="goBack"/>
    </mu-appbar>
    <mu-content-block id="r-user-info">
      <mu-card class="UserCard-Top">
         <mu-list-item v-show="!userIsActive" to="/Login" class="Top-list-item" title="登录/注册" describeText="快登录吧，猫猫等你好久了～">
           <mu-avatar icon="person" slot="leftAvatar"/>
         </mu-list-item>
         <mu-list-item v-show="userIsActive" to="/user/modifydata" class="Top-list-item" :title="userName" :describeText="userDescribe">
           <mu-avatar src="../static/images/avatar/avatar.jpg" slot="leftAvatar"/>
         </mu-list-item>
         <mu-flexbox class="r-donate-flexbox">
           <mu-flexbox-item >
              <div class="r-border-right">
                <h4>猫币</h4>
                <span>{{balance}}</span><br/>
              </div>
           </mu-flexbox-item>
           <mu-flexbox-item>
             <div class="r-border-right">
               <h4>钻石票</h4>
               <span>{{diamondTicket}}</span><br/>
             </div>
           </mu-flexbox-item>
           <mu-flexbox-item>
             <div>
               <h4>推荐票</h4>
               <span>{{recommendTicket}}</span><br/>
             </div>
           </mu-flexbox-item>
         </mu-flexbox>
     </mu-card>

     <mu-card style="margin-top: 20px">
          <mu-list-item title="我的追书" @click="ToUser_issue('issue')">
            <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
          </mu-list-item>
          <mu-divider/>
          <mu-list-item title="我的订阅" to="/user/discuss">
            <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
          </mu-list-item>
          <mu-list-item title="我的评论" to="/user/discuss">
            <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
          </mu-list-item>
          <mu-list-item title="最近阅读" to="/user/discuss">
            <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
          </mu-list-item>
      </mu-card>

    <mu-card style="margin-top: 20px">
         <mu-list-item title="充值" @click="ToUser_issue('issue')">
           <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
         </mu-list-item>
         <mu-divider/>
     </mu-card>

     <br/>
     <mu-raised-button @click="logout" label="退出登录" fullWidth primary/>

   </mu-content-block>
   <ReadFooter/>
  </div>
</template>


<script>
import ReadFooter from '@/components/footer/Footer'

export default {
  name: 'UserCenter',
  components: {
    ReadFooter
  },
  data() {
    return{
      userIsActive: false,
      userName: '猫猫',
      userDescribe: '快来介绍下你自己吧～',
      balance: 0,             //猫币
      recommendTicket: 0,     //推荐票
      diamondTicket: 0        //钻石票
    }
  },
  created : function () {
    axios.get('/UserIsActiveAPIView/')
    .then(res => {
        if ('true' == res.data.state) {
            this.userIsActive = true;
            this.getUserPrpfile();
        }
      }
    )
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    getUserPrpfile(){
      axios.get('/UserProfileAPIView/')
      .then(res => {
          if ('true' == res.data.state) {
            this.userName = res.data.user_profile.user_name;
            if ('' != res.data.user_profile.user_describe) {
              this.userDescribe = res.data.user_profile.user_describe;
            }
            this.balance = res.data.user_profile.balance;
            this.recommendTicket = res.data.user_profile.recommend_ticket_num;
            this.diamondTicket = res.data.user_profile.diamond_ticket_num;
          }
        }
      )
    },
    logout () {
      axios.get('/UserLogoutAPIView/')
      .then(res => {
          if ('true' == res.data.state) {
            this.$router.push('/')
          }
        }
      )
    }
  }
}
</script>


<style scoped>
#r-user-info{
  margin-top: 25px;
}

.r-border-right{
  border-right: 1px solid #eeeeee;
}


.r-donate-flexbox{
  text-align: center;
}
</style>
