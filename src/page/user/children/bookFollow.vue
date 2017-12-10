<template>
  <div class="page">
    <head-bar head_bar='true' :head_title="head_title"></head-bar>

    <mu-content-block class="content">
      <mu-row gutter>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="book-grid">
            <img class="book-cover" style="width: 100%" src="https://qidian.qpic.cn/qdbimg/349573/1003779332/150"/>
            <span>巫神纪</span>
          </div>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="book-grid">
            <img class="book-cover" style="width: 100%" src="https://qidian.qpic.cn/qdbimg/349573/1001800553/150"/>
            <span>巫神纪</span>
          </div>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="book-grid">
            <img class="book-cover" style="width: 100%" src="https://qidian.qpic.cn/qdbimg/349573/1003354631/150"/>
            <span>巫神纪</span>
          </div>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="book-grid">
            <img class="book-cover" style="width: 100%" src="https://qidian.qpic.cn/qdbimg/349573/1004049449/150"/>
            <span>巫神纪</span>
          </div>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="book-grid">
            <img class="book-cover" style="width: 100%" src="https://qidian.qpic.cn/qdbimg/349573/3552978/150"/>
            <span>巫神纪</span>
          </div>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="book-grid">
            <img class="book-cover" style="width: 100%" src="https://qidian.qpic.cn/qdbimg/349573/1004179514/150"/>
            <span>巫神纪</span>
          </div>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="book-grid">
            <img class="book-cover" style="width: 100%" src="https://qidian.qpic.cn/qdbimg/349573/1004185492/150"/>
            <span>巫神纪</span>
          </div>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="book-grid">
            <img class="book-cover" style="width: 100%" src="https://qidian.qpic.cn/qdbimg/349573/1004608738/150"/>
            <span>巫神纪</span>
          </div>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="book-grid">
            <img class="book-cover" style="width: 100%" src="https://qidian.qpic.cn/qdbimg/349573/1004967523/150"/>
            <span>巫神纪</span>
          </div>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="book-grid">
            <img class="book-cover" style="width: 100%" src="https://qidian.qpic.cn/qdbimg/349573/1010047490/150"/>
            <span>巫神纪</span>
          </div>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="book-grid">
            <img style="width: 100%" src="https://qidian.qpic.cn/qdbimg/349573/1009438258/150"/>
            <span>巫神纪</span>
          </div>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div style="text-align: center; padding-top: 30px;">
            <mu-icon value="add" size="60" color="#e8e8e8"/>
          </div>
        </mu-col>
      </mu-row>
      <p style="text-align: center; padding-bottom: 30px; color: #686868">21本加入追书</p>
    </mu-content-block>
  </div>
</template>

<script>
import headBar from '@/components/header/headBar'
export default{
  name: 'bookFollow',
  components:{
    headBar,
  },
  data () {
    return {
        head_title: '我的追书',
    }
  },
  methods: {

  }
}
</script>

<style>
    .page{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2050;
      background-color: #fff;
    }

    .content{
        margin-top: 70px;
    }

    .book-grid{
      text-align: left;
      margin: 0px 10px 22px 10px;
    }

    .book-cover{
      width: 100%;
      box-shadow: 0 1px 6px rgba(0,0,0,.3), 0 1px 4px rgba(0,0,0,.3);
    }
</style>
