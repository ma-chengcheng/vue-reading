<template>
  <div>
    <mu-appbar title="修仙神探">
      <mu-icon-button icon="chevron_left" slot="left" @click="goBack"/>
    </mu-appbar>
    <mu-content-block>
    <mu-row gutter>
      <mu-col width="30" tablet="30" desktop="25">
        <mu-card>
          <mu-card-media>
            <img src="https://qidian.qpic.cn/qdbimg/349573/3552978/150" />
          </mu-card-media>
        </mu-card>
      </mu-col>
      <mu-col width="70" tablet="70" desktop="70">
        <mu-sub-header>修仙神探</mu-sub-header>
        <mu-content-block>
          　当历史变成传说当传说变成神话当神话
        </mu-content-block>
        <mu-content-block>
          <div class="head_book_bottom">
            <mu-icon value="person" :size="15"/>
            <span>帅的无可救药</span>
            <div class="head_book-type">
              仙剑
            </div>
        </div>
        </mu-content-block>
      </mu-col>
    </mu-row>
    <br/>
    <mu-raised-button class="r-bottom-button"　label="开始阅读" primary/>
    <mu-flat-button class="r-bottom-button" label="追书"/>
    <mu-flat-button class="r-bottom-button" label="自动订阅"/>
  </mu-content-block>
  <mu-divider/>
  <mu-list>
      <mu-list-item title="目录">
        <mu-icon slot="right" value="chevron_right"/>
      </mu-list-item>
      <mu-divider/>
      <mu-list-item title="【最新】第10章 月色">
        <mu-icon slot="right" value="lock"/>
      </mu-list-item>
  </mu-list>
  <mu-divider/>
  <br>
  <mu-divider/>
  <!-- 打赏 -->
  <mu-list>
      <mu-list-item title="去打赏" @click="openBottomSheet">
        <mu-icon slot="right" value="monetization_on"/>
      </mu-list-item>
      <mu-divider/>
      <mu-list-item>
        <mu-flexbox>
          <mu-flexbox-item　class="r-donate-flexbox">
            <img class="r-donate-object" src="../../assets/images/donate/1.png">
            <br/><span>1</span><br/>个
          </mu-flexbox-item>
          <mu-flexbox-item class="r-donate-flexbox">
            <img class="r-donate-object" src="../../assets/images/donate/2.png">
            <br/><span>9</span><br/>个
          </mu-flexbox-item>
          <mu-flexbox-item class="r-donate-flexbox">
            <img class="r-donate-object" src="../../assets/images/donate/3.png">
            <br/><span>12</span><br/>个
          </mu-flexbox-item>
          <mu-flexbox-item class="r-donate-flexbox">
            <img class="r-donate-object" src="../../assets/images/donate/4.png">
            <br/><span>8</span><br/>个
          </mu-flexbox-item class="r-donate-flexbox">
          <mu-flexbox-item class="r-donate-flexbox">
            <img class="r-donate-object" src="../../assets/images/donate/5.png">
            <br/><span>6</span><br/>个
          </mu-flexbox-item>
          <mu-flexbox-item class="r-donate-flexbox">
            <img class="r-donate-object" src="../../assets/images/donate/6.png">
            <br/><span>1</span><br/>个
          </mu-flexbox-item>
        </mu-flexbox>
      </mu-list-item>
  </mu-list>
  <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
    <mu-list>
      <mu-sub-header>
        捧场
      </mu-sub-header>
      <mu-list-item>
        <mu-radio label="猫球　100猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images//donate/1.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="猫薄荷　500猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images//donate/2.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="逗猫棒　1000猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images//donate/3.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="鱼　3000猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images//donate/4.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="猫粮　5000猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images//donate/5.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="猫窝　10000猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images//donate/6.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-text-field label="数量" fullWidth="true" labelFloat/><br/>
      </mu-list-item>
      <mu-list-item>
        <mu-raised-button @click="closeBottomSheet"  class="demo-raised-button" label="打赏" fullWidth="true" secondary/>
      </mu-list-item>
    </mu-list>
  </mu-bottom-sheet>
  <mu-divider/>

  <!-- 评论 -->
  <mu-list>
      <mu-list-item title="书友评论" @click="openBottomCommentSheet">
        <mu-icon slot="right" value="create"/>
      </mu-list-item>
      <mu-divider/>
      <mu-list-item title="Alex Qin" describeText="八月 28, 2014">
         <mu-avatar src="../static/images/avatar/avatar.jpg" slot="leftAvatar"/>
         <span>
           <br/>
           我们去看电影，最近有部烂片上映，又有吐槽的了
         </span>
       </mu-list-item>
       <mu-divider/>
       <mu-list-item title="Alex Qin" describeText="八月 28, 2014">
          <mu-avatar src="../static/images/avatar/avatar.jpg" slot="leftAvatar"/>
          <span>
            <br/>
            我们去看电影，最近有部烂片上映，又有吐槽的了
          </span>
        </mu-list-item>
        <mu-divider/>
        <mu-list-item title="Alex Qin" describeText="八月 28, 2014">
           <mu-avatar src="../static/images/avatar/avatar.jpg"  slot="leftAvatar"/>
           <span>
             <br/>
             我们去看电影，最近有部烂片上映，又有吐槽的了
           </span>
         </mu-list-item>
       <mu-divider inset/>
  </mu-list>
  <mu-bottom-sheet :open="bottomCommentSheet" @close="closeBottomCommentSheet">
    <mu-list>
      <mu-list-item>
        <mu-text-field fullWidth="true"　label="评论 :" multiLine :rows="4" :rowsMax="4" maxLength="20" labelFloat/><br/>
      </mu-list-item>
      <mu-list-item>
        <mu-raised-button @click="closeBottomCommentSheet"  class="demo-raised-button" label="评论" fullWidth="true" secondary/>
      </mu-list-item>
    </mu-list>
  </mu-bottom-sheet>
  <mu-divider/>
  <ReadFooter/>
  </div>
</template>

<script>
import ReadFooter from '@/components/footer/Footer'

export default {
  name: 'BookDetail',
  components: {
    ReadFooter
  },
  data () {
    return {
      bottomSheet: false,
      bottomCommentSheet: false
    }
  },
  methods: {
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet () {
      this.bottomSheet = true
    },
    closeBottomCommentSheet () {
      this.bottomCommentSheet = false
    },
    openBottomCommentSheet () {
      this.bottomCommentSheet = true
    },
    goBack () {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.head_book_bottom{
  font-size: 12px;
}

.head_book-type{
  float: right;
  color: rgba(0,0,0,.54);
  border: 1px solid #ddd;
}

.r-bottom-button{
 width: 32%;
}

.r-donate-object{
  width: 80%;
}

.r-donate-flexbox{
text-align: center;
}
</style>
