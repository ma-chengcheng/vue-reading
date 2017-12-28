<template>
  <div class="layout">
    <div class="header">
      <div :class="'title' + ' ' + controlColor"><a href="#"><i class="material-icons arrow">keyboard_arrow_left</i></a>第{{charpterNumber}}章 {{charpterTitle}}</div>
    </div>
    <div :class="'content' + ' ' + controlColor">
      <div class="showBottom" style="width: 100%; height: 80%; background-color: #AAA; position: fixed; left: 0; top: 10%; opacity:0" @click="openBottomSheet"></div>
      <div v-for="charpter in charpterAll">
        <h4 class="charpterTitle">第{{charpter.number}}章 {{charpter.title}}</h4>
        <div :style="'fontSize:' + fontVal + 'px'">
          <p v-for="charpterContent in charpter.content">{{charpterContent}}</p>
          <!-- <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/> -->
        </div>
        
      </div>
      <button class="nextCharpter" @click="nextCharpter()" :disabled="nextButton">加载下一章</button>
      <div>
        <mu-drawer right :open="catalogOpen" @close="catalogToggle()" :docked="false" width="80%">
          <mu-appbar title="目 录"/>
          <mu-list>
            <mu-list-item v-for="directory in directorys" :title="'第' + directory.charpterNumber + '章  ' + directory.charpterTitle" @click="changeCharpter(directory.charpterNumber)" :titleClass="{'charpterListStyle': directory.chapterType}"/>
          </mu-list>
        </mu-drawer>
      </div>
    </div>

    <div class="footer">
      <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
        <div :style="showSet">
          <div class="fontSizes"><span @click="fontVal = fontVal-1">A -</span> <span @click="fontVal = fontVal+1;">A +</span></div>
          <mu-slider v-model="fontVal" :step="1" class="demo-slider" :max="22" :min="12" style="display: none"/>
          
          <div class="adjustColor">
            <button class="demo-raised-button adjustColBUto" style="background-color: rgb(222,206,169)" @click="changeColor('oneColor')"/>
            <button class="demo-raised-button adjustColBUto" style="background-color: rgb(202,217,232); width=20%;" @click="changeColor('twoColor')"/>
            <button class="demo-raised-button adjustColBUto" style="background-color: rgb(209,237,209)" @click="changeColor('threeColor')"/>
            <button class="demo-raised-button adjustColBUto" style="background-color: rgb(230,230,230)" @click="changeColor('fourColor')"/>
          </div>
        </div>
        <div :style="showPro">
          
          <span class="fontReduce">进度: {{progressVal}}%</span>
          <div class="demo-slider">
            <mu-slider v-model="charpterNumber" :step="1" :min="1" :max="allCharpterNumber" @input="sliderChange(charpterNumber)"/>
          </div>

          <div><span class="frontChar allChangeChar" @click="charpterNumber--">上一章</span> <span class="nextChar allChangeChar" @click="charpterNumber++">下一章</span></div>
        </div>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="catalog" title="目录" icon="format_list_bulleted" class="bottomNavIcon"/>
          <mu-bottom-nav-item value="progrss" title="进度" icon="trending_flat" class="bottomNavIcon"/>
          <mu-bottom-nav-item value="setting" title="设置" icon="text_format" class="bottomNavIcon"/>
          <mu-bottom-nav-item value="day" title="日间" icon="wb_sunny" class="bottomNavIcon" :style="'display:'+dayStyle"/>
          <mu-bottom-nav-item value="night" title="夜间" icon="timelapse" class="bottomNavIcon" :style="'display:'+nightStyle"/>
        </mu-bottom-nav>
      </mu-bottom-sheet>
    </div>
    <mu-dialog :open="purchaseCharper" title="提示" @close="purchaseCharper = false">
      当前章节未购买，是否立即购买?
      <mu-flat-button slot="actions" @click="purchaseCharper = false" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="makeSurePurchase()" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  mounted() {
    this.scroller = this.$el
    if(this.storageGetter('fontVal')){
      this.fontVal = this.storageGetter('fontVal')
    }
    if(this.storageGetter('controlColor')){
      this.controlColor = this.storageGetter('controlColor')
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: false,
      scroller: null,
      bottomSheet: false,
      bottomNav: '',
      catalogOpen: false,
      progressVal: '',
      fontVal: 16,
      allCharpterNumber: 5,
      //所有章节数
      charpterNumber: 1,
      //当前章节数
      showSet: 'display:none;',
      showPro: 'display:none',
      controlColor: 'oneColor',
      controlColorChange: 'oneColor',
      //内容绑定
      charpterTitle: '大闹天宫',
      charpterAll: [],
      bookName: '西游记',
      charpterContents: ["大闹天宫", "vue的使用文档"],
      bookId: '',
      //书籍Id
      directorys: [{
        charpterNumber: 10,
        charpterTitle: 'vue的使用文档',
        bookId: '10' ,
        chapterType: 0
      }],
      nextButton: false,
      dayStyle: 'none',
      nightStyle: 'block',
      chapterType: 0,
      //章节类型，0为免费，1为付费
      purchaseCharper: false
      //是否购买章节的提示内容
    }
  },
  computed: {
    ...mapState([
      'user_is_active'
    ])
  },
  mounted: function(){
    this.bookId = this.$route.params.bookId
    this.charpterNumber = this.$route.params.charpterId
    console.log(this.$route.params)
    axios({
      method: 'get',
      url: '/static/mock/reading_dev1.json',
      data: {
        
      }
    })
    .then((response) => {
      response = response.data
      this.directorys = response.directorys
      this.changeCharpter(this.charpterNumber)
    })
    this.scroller = this.$el
  },
  watch: {
    fontVal: function(val){
      this.storageSetter('fontVal', val)
    },
    charpterNumber: function(){
      //进度改变
      this.progressVal = (this.charpterNumber / this.allCharpterNumber) * 100
    }
  },
  methods: {
    isLogin(){
      //登陆状态的请求判断(请求1)
      //var isLogin = false
      if (!this.user_is_active) {
        return false
      }else{
        return true
      }
      //return isLogin
    },
    isRead(){
      //阅读权限判断请求(请求2)
      var isRead = false
      axios({
        method: 'get',
        url: urls,
        params: {
          //发送书籍Id，章节Id
          bookId: this.bookId,
          charpterNumber: this.charpterNumber
        }
      })
      .then((response) => {
        response = response.data
        if(response){
          //返回值为真代表有阅读权限
          isRead = true
        }else{
          //否则代表没有阅读权限
          isRead = false
        }
      })
      return isRead
    },
    nowAfford(){
      //支付请求(请求4)
      var ifAfford = false
      axios({
        method: 'get',
        url: urls,
        params: {
          //发送书籍Id，章节Id
          bookId: this.bookId,
          charpterNumber: this.charpterNumber
        }
      })
      .then((response) => {
        response = response.data
        if(response){
          //返回值为真代表支付成功
          isRead = true
        }else{
          //否则代表余额不足支付失败
          isRead = false
        }
      })
      return ifAfford
    },
    makeSurePurchase(){
      //是否购买提示消息的确认点击
      this.purchaseCharper = false
      this.$router.push('/pay');    //演示效果使用
      if(this.nowAfford){
        //支付成功请求章节内容
        this.requstCharpter(this.charpterNumber)
      }else{
        //余额不足支付失败,跳转充值界面
        this.$router.push('/pay')


      }
    },
    payCharpterHandle(val){
      //当前章节为需要付费章节的处理,
      //val为需要处理的章节数
      if(this.isLogin()){
        //用户已登录时
        if(this.isRead()){
          //用户有权限阅读
          this.requstCharpter(val)
        }else{
          //用户没有权限阅读,提示购买
          this.purchaseCharper = true
          //逻辑进入makeSurePurchase函数
        }
      }else{
        //用户没有登录跳转到登录页面
        this.$router.push('/login');
        alert('付费章节，请先登录')

      }
    },
    changeCharpter(val) {
      //改变章节
      
        if(val > 0 && val < (this.allCharpterNumber + 1)){
          if(!this.directorys[val - 1].chapterType){
            //当前请求章节未免费章节
            console.log(val)
            this.charpterNumber = val
            this.charpterAll = []
            this.requstCharpter(val)
          }else{
            //当前为付费章节
            this.purchaseCharper = true     //演示效果用
            this.payCharpterHandle(val)
          }

        }
    },
    sliderChange(val) {
      //章节滑动框改变
      console.log(val)
      this.changeCharpter(val)
    },
    cahngePage(response){
      //更新页面
      this.allCharpterNumber = response.allCharpterNumber
      this.charpterNumber = response.charpterNumber
      this.chapterType = response.chapterType
      this.charpterContents = response.charpterContents
      this.charpterTitle = response.charpterTitle
      this.bookId = response.bookId
      this.directorys = response.directorys
      this.charpterAll.push({title: this.charpterTitle, content: this.charpterContents, number: this.charpterNumber})
    },
    nextCharpter(){
      //点击下一章节
      if(this.charpterNumber < this.allCharpterNumber){
        if(!this.directorys[this.charpterNumber].chapterType){
          //当前为免费章节
          this.charpterNumber = this.charpterNumber + 1
          this.nextButton = true
          this.requstCharpter(this.charpterNumber)
        }else{
          //当前为付费章节
          this.purchaseCharper = true     //演示效果用
          this.payCharpterHandle(this.charpterNumber+1)
        }
        
      }else{
        alert('已到最后一章')
      }
    },
    requstCharpter(val){
      //章节内容请求(请求3)
      let urls = '/static/mock/reading_dev'
      urls = urls + val + '.json'
      axios({
        method: 'get',
        url: urls,
        data: {
          
        }
      })
      .then((response) => {
        response = response.data
        this.cahngePage(response)
        this.nextButton = false
      })
    },
    closeBottomSheet () {
      //关闭底部栏
      this.bottomSheet = false
      this.bottomNav = ''
      this.showPro = 'display:none'
      this.showSet = 'display:none'
    },
    openBottomSheet () {
      //打开进度栏
      this.bottomSheet = true
      this.progressVal = (this.charpterNumber / this.allCharpterNumber) * 100
    },
    handleChange (val) {
      //选择底部栏操作处理
      this.bottomNav = val
      if(val == "catalog"){
        this.catalogOpen = true
        this.bottomSheet = false
        this.showPro = 'display:none'
        this.showSet = 'display:none'
      }
      if(val == "progrss"){
        //进度栏
        this.showPro = 'display:block'
        this.showSet = 'display:none'
      }
      if(val == "setting"){
        //设置栏
        this.showSet = 'display:block'
        this.showPro = 'display:none'
      }
      if(val == "day"){
        this.controlColor = this.controlColorChange
        this.storageSetter('controlColor', this.controlColor)
        this.dayStyle = 'none'
        this.nightStyle = 'block'
      }
      if(val == "night"){
        this.controlColor = 'nightStyle'
        this.storageSetter('controlColor', this.controlColor)
        this.dayStyle = 'block'
        this.nightStyle = 'none'
      }
    },
    catalogToggle () {
      //开关目录
      this.catalogOpen = !this.catalogOpen
      this.bottomNav = ''
    },
    changeColor(val) {
      //改变背景颜色
      this.controlColor = val,
      this.controlColorChange = val
      this.storageSetter('controlColor', val)
    },
    storageGetter(key){
      //取缓存内容
      const prefix = 'html5_reader_'
      return localStorage.getItem(prefix + key);
    },
    storageSetter(key, val){
      //设置缓存
      const prefix = 'html5_reader_'
      localStorage.setItem(prefix + key, val)
    }
  }
}
</script>
<style>
  html{
    font-size: 16px;
  }
  .mu-item-content{
    text-align: left;
    position: absolute;
  }
  .arrow{
    float: left;
    line-height: 40px;
    padding: 0 10px;
    color: rgba(0,0,0,.4);
  }
  .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: rgba(0,0,0,.4);
    text-align: left;
    position: fixed;
    font-size: .85em;
    top: 0; 
  }
  .content{
    padding: 16px;
  }
  .charpterTitle{
    padding: 56px 0 16px 0;
    font-size: 1.4em;
    text-align: left;
  }
  p{
    text-align: left;
    text-indent: 2em;
    margin: 10px 0;
    /*font-size: 18px;*/
  }
  .demo-slider{
    width: 80%;
    margin: 0 auto;
  }
  .fontReduce{
    width: 100%;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    padding-top: 20px;
  }
  .nextCharpter{
    width: 80%;
    height: 40px;
    border-radius: 30px;
    background-color: #ed424b;
    color: #FFF;
    box-shadow: none;
    border: none;
    text-align: center;
    line-height: 40px;
    margin-top: 10px;
    margin-left: 34px;
  }
  .adjustColor{
    text-align: center;
    margin: 20px 0 30px 0;
  }
  .adjustColBUto{
    width: 20%;
    height: 34px;
    margin: 0 2px;
    border: none;
    border-radius: 6px;
  },
  .charptersContent{
    height: 100px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .showBottom{
    width: 100%;
    height: 4000px;
    margin: 0 auto;
    background-color: #CCC;
    display: block;
  }
  .oneColor{
    background-color: rgb(222,206,169);
    color: rgba(0,0,0,.85);
  }
  .twoColor{
    background-color: rgb(202,217,232);
    color: rgba(0,0,0,.85);
  }
  .threeColor{
    background-color: rgb(209,237,209);
    color: rgba(0,0,0,.85);
  }
  .fourColor{
    background-color: rgb(230,230,230);
    color: rgba(0,0,0,.85);
  }
  .nightStyle{
    background-color: #1a1a1a;
    color: rgba(255,255,255,.5);
  }
  .fontSizes{
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
  }
  .fontSizes span{
    display: inline-block;
    font-size: 20px;
    line-height: 36px;
    border: 1px solid #BBB;
    width: 40%;
    height: 36px;
    border-radius: 8px;  
    background-color: #BBB;
    color: #FFF;
    margin-left: 6px;
    text-align: center;
  }
  .allChangeChar{
    width: 20%;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    text-align: center;
    background-color: #CCC;
    color: #FFF;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .frontChar{
    margin-left: 10%;
  }
  .nextChar{
    margin-left: 40%;
  }
  .charpterListStyle{
    color: #AAA;
  }
</style>