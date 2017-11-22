<template>
  <div>
    <mu-appbar title="个人中心">
          <mu-icon-button icon="chevron_left" slot="left" @click="goBack"/>
    </mu-appbar>
    <mu-content-block>
      <mu-card class="UserCard-Top">
         <mu-list-item to="/user/modifydata" class="Top-list-item" title="小马" describeText="活在现实主义的理想主义者～">
           <mu-avatar src="../static/images/avatar/avatar.jpg" slot="leftAvatar"/>
         </mu-list-item>
         <mu-flexbox class="r-donate-flexbox">
           <mu-flexbox-item >
              <div class="r-border-right">
                <h4>猫币</h4>
                <span>1</span><br/>
              </div>
           </mu-flexbox-item>
           <mu-flexbox-item>
             <div class="r-border-right">
               <h4>钻石票</h4>
               <span>1</span><br/>
             </div>
           </mu-flexbox-item>
           <mu-flexbox-item>
             <div class="User-Top-Btn">
               <h4>推荐票</h4>
               <span>1</span><br/>
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
     <mu-raised-button label="退出登录" fullWidth primary/>

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
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.r-border-right{
  border-right: 1px solid #eeeeee;
}


.r-donate-flexbox{
  text-align: center;
}
</style>
