<template>
  <div class="layout">
    <div class="header">
     
      <div class="title"><a href="#"><i class="material-icons arrow">keyboard_arrow_left</i></a>第一章 大闹天宫</div>
    </div>
    <div class="content">
      <div class="charpterContent">
        <div>
          <div class="showBottom" style="width: 100%; height: 40%; background-color: #AAA; position: fixed; left: 0; top: 30%; opacity:0" @click="openBottomSheet"></div>
          <h4 class="charpterTitle">第一章 vue的使用文档</h4>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南熟悉 Vue本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
          <p>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。</p>
        </div>
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
      </div>
      <div>
        <mu-drawer right :open="catalogOpen" @close="catalogToggle()" :docked="false" width="80%">
          <mu-appbar title="目 录"/>
          <mu-list>
            <mu-list-item title="Menu Item 1"/>
            <mu-list-item title="Menu Item 2"/>
            <mu-list-item title="Menu Item 3"/>
          </mu-list>
        </mu-drawer>
      </div>
    </div>
    <div class="footer">
      <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
        <div :style="showSet">
          <span class="fontReduce">调整字体大小: {{fontVal}}</span>
          <mu-slider v-model="fontVal" :step="1" class="demo-slider" :max="20" :min="10"/>
          <div class="adjustColor">
            <mu-raised-button class="demo-raised-button adjustColBUto" backgroundColor="rgb(222,206,169)"/>
            <mu-raised-button class="demo-raised-button adjustColBUto" backgroundColor="rgb(202,217,232)"/>
            <mu-raised-button class="demo-raised-button adjustColBUto" backgroundColor="rgb(209,237,209)"/>
            <mu-raised-button class="demo-raised-button adjustColBUto" backgroundColor="rgb(230,230,230)"/>
          </div>
        </div>
        <div :style="showPro">
          <span class="fontReduce">进度: {{progressVal}}%</span>
          <mu-slider v-model="nowCharpternum" :step="1" class="demo-slider" :max="charpterNumber" disabled/>
        </div>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="catalog" title="目录" icon="format_list_bulleted" class="bottomNavIcon"/>
          <mu-bottom-nav-item value="progrss" title="进度" icon="trending_flat" class="bottomNavIcon"/>
          <mu-bottom-nav-item value="setting" title="设置" icon="text_format" class="bottomNavIcon"/>
          <mu-bottom-nav-item value="day" title="日间" icon="wb_sunny" class="bottomNavIcon"/>
          <mu-bottom-nav-item value="night" title="夜间" icon="timelapse" class="bottomNavIcon"/>
        </mu-bottom-nav>
      </mu-bottom-sheet>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.scroller = this.$el
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
      fontVal: 10,
      charpterNumber: 100,
      nowCharpternum: 20,
      showSet: 'display:none;',
      showPro: 'display:none'
    }
  },
  methods: {
    loadMore: function(){
      //alert("加载中")
    },
    closeBottomSheet () {
      //关闭底部栏
      this.bottomSheet = false
      this.bottomNav = ''
      this.showPro = 'display:none'
    },
    openBottomSheet () {
      //打开底部栏
      this.bottomSheet = true
      this.progressVal = (this.nowCharpternum / this.charpterNumber) * 100
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
        this.showSet = 'display:block'
        this.showPro = 'display:none'
      }
    },
    catalogToggle () {
      //开关目录
      this.catalogOpen = !this.catalogOpen
      this.bottomNav = ''
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
    background: #DDD;
    color: rgba(0,0,0,.4);
    text-align: left;
    position: fixed;
    font-size: .85em;
    top: 0; 
  }
  .content{
    background-color: #DDD;
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
  .adjustColor{
    text-align: center;
    margin: 30px 0;
  }
  .adjustColBUto{
    width: 19%;
    margin: 0 2px;
  },
  .showBottom{
   
    width: 100%;
    height: 4000px;
    margin: 0 auto;
    background-color: #CCC;
    display: block;
  }
</style>