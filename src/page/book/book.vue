<template>
  <div>
      <head-bar head_bar='true' :head_title="head_title"></head-bar>
      <!-- 书籍基本信息 -->
      <mu-content-block style="padding-top: 70px;">
          <div class="book-detail-info">

              <img class="cover" src="https://qidian.qpic.cn/qdbimg/349573/3552978/150"/>
              <div class="describe">
                  <h2 class="book-name">修仙神探</h2>
                  <div class="book-author">胡小蒙</div>
                  <div class="book-rate">
                      <el-rate v-model="rate" disabled show-score text-color="#969ba3" score-template="{value}分"></el-rate>
                  </div>
                  <div class="book-meta">玄幻</div>
                  <div class="book-meta">13.2万字｜连载</div>
              </div>
        </div>
    </mu-content-block>

    <mu-divider/>
    <!-- 书籍简介 -->
    <mu-content-block>
      <section class="brief-info" :style="{maxHeight}" v-on:click="expandMore">
          <content>内容简介：爱黄金，爱白银，更爱星光璀璨的宝石。枪械，珠宝，还有贵金属，收藏家的世界怎么能少了古董？仓库拍卖，旧货交易，房产收售，还有淘金挖矿，其实要想赚钱那么寻找传说中的宝藏才是王道。麾下坐镇虎猫、苍狼和安第斯神鹰，身边还有忠心猎犬、暴躁巨猿和非洲愣子平头哥，谁说捡宝鉴宝只能靠人？！</content>
          <span class="expand-more" :style="{visibility}">
              <mu-icon value="expand_more"></mu-icon>
          </span>
      </section>
    </mu-content-block>

    <mu-divider/>

    <!-- 章节目录 -->
    <mu-list>
      <mu-list-item title="目录" to="/book/catalog">
        <mu-icon slot="right" value="chevron_right"/>
      </mu-list-item>
      <mu-divider/>
      <mu-list-item to="/reading/1/5">
        <span class="book-meta">【最新】第5章 月色 </span>
        <mu-icon slot="right" value="lock" size='14'/>
      </mu-list-item>
      <mu-divider/>
    </mu-list>
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

  <!-- 打赏弹出框 -->
  <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
    <mu-list>
      <mu-sub-header>
        捧场
      </mu-sub-header>
      <mu-list-item>
        <mu-text-field label="数量" fullWidth="true" labelFloat/><br/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="猫球　100猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images/donate/1.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="猫薄荷　500猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images/donate/2.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="逗猫棒　1000猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images/donate/3.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="鱼　3000猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images/donate/4.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="猫粮　5000猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images/donate/5.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="猫窝　10000猫币/个" name="group" nativeValue="simple1" v-model="value"/>
        <mu-avatar src="../static/images/donate/6.png" slot="rightAvatar"/>
      </mu-list-item>
      <mu-list-item>
        <mu-raised-button @click="closeBottomSheet"  class="demo-raised-button" label="打赏" fullWidth="true" secondary/>
      </mu-list-item>
    </mu-list>
  </mu-bottom-sheet>
  <mu-divider/>

  <!-- 评论 -->
  <mu-list style="padding-bottom: 50px;">
      <mu-list-item title="书友评论" @click="openCommentDialog">
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
         <mu-divider/>
         <mu-list-item>
             <mu-raised-button label="查看全部书评" fullWidth/>
         </mu-list-item>
       <mu-divider inset/>
  </mu-list>

  <mu-dialog :open="dialogComment" @close="closeCommentDialog">
    <mu-list>
      <mu-list-item>
        <mu-text-field fullWidth="true"　label="评论 :" multiLine :rows="4" :rowsMax="4" maxLength="20" labelFloat/><br/>
      </mu-list-item>
      <mu-list-item>
        <mu-raised-button @click="closeCommentDialog"  class="demo-raised-button" label="评论" fullWidth="true" secondary/>
      </mu-list-item>
    </mu-list>
  </mu-dialog>
  <mu-divider/>
  <div style="position: fixed; bottom: 0px;background-color: #ffffff; width: 100%;">
        <mu-flat-button label="追书" style="width: 32%; height: 45px;"/>
        <mu-raised-button　label="开始阅读" style="width: 32%; height: 50px;" primary/>
        <mu-flat-button label="自动订阅" style="width: 32%; height: 45px;"/>
  </div>
  <transition name="router-slid" mode="out-in">
      <router-view></router-view>
  </transition>
  </div>

</template>

<script>
    import Vue from 'vue'
    import headBar from '@/components/header/headBar'
    import { Rate } from 'element-ui'
    Vue.use(Rate)

    export default {
      name: 'book',
      components: {
        headBar
      },
      data () {
        return {
          maxHeight: '72px',        // 书籍简介行数
          visibility: 'visible',    // 简介更多图标是否可见

          head_title: '修仙神探',
          rate: 3.7,
          dialogComment: false,
          bottomSheet: false,
          bottomCommentSheet: false
        }
      },
      methods: {
        expandMore () {
            console.log("点击");
            this.maxHeight = this.maxHeight != 'none' ? 'none' : '72px'
            this.visibility = this.visibility != 'hidden' ? 'hidden' : 'visible'
        },
        closeBottomSheet () {
          this.bottomSheet = false;
        },
        openBottomSheet () {
          this.bottomSheet = true;
        },
        closeBottomCommentSheet () {
          this.bottomCommentSheet = false;
        },
        openBottomCommentSheet () {
          this.bottomCommentSheet = true;
        },
        openCommentDialog () {
          this.dialogComment = true;
        },
        closeCommentDialog () {
          this.dialogComment = false;
        },
        goBack () {
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>

.book-detail-info{
    position: relative;
    display: block;
}

.cover{
    float: left;
    margin-right: 10px;
    width: 5.25rem;
    height: 7.2rem;
    border-radius: 2px;
}


.describe{
    position: relative;
    line-height: 1.4rem;
}

.book-name{
    overflow: ellipsis;
    font-size: 100%;
    margin: 0;
}

.book-rate{
    font-size: .75rem;
}

.book-author{
    font-size: 0.75rem;
    margin-top: 0.2rem;
    color: #33373d;
}

.book-meta{
    margin-top: 0.15rem;
    font-size: 0.75rem;
    color: #33373d;
}



.brief-info{
    position: relative;
    line-height: 24px;
    overflow: hidden;
}

.expand-more {
    position: absolute;
    right: 0rem;
    width: 3rem;
    height: 1.5rem;
    bottom: 0px;
    color: #969ba3;
    text-align: right;
    background: linear-gradient(to right,rgba(255,255,255,0),#fff 1rem)
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

.r-comment-sheet{
  position: fixed;
  top: 0px;
}

.router-slid-enter-active, .router-slid-leave-active {
  transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
