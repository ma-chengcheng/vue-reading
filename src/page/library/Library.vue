<template>
  <div>
    <ReadHeader/>
    <mu-bottom-nav :value="bottomNav"  @change="handleChange">
      <mu-bottom-nav-item value="people" title="人气" icon="favorite"/>
      <mu-bottom-nav-item value="favorites" title="时间" icon="restore"/>
      <mu-bottom-nav-item value="nearby" title="字数" icon="pie_chart"/>
      <mu-bottom-nav-item value="recents" title="订阅" icon="turned_in"/>
      <mu-bottom-nav-item value="more" title="更多" icon="more_vert"/>
      <mu-drawer right :open="open" :docked="docked" @close="toggle()" width="90%">
        <mu-sub-header id="head-title"><b>筛选</b></mu-sub-header>
        <hr/>
        <div v-for="(tags, subject) in filterTags">
          <mu-sub-header class="subject-title"><b>{{subject}}</b></mu-sub-header>
          <mu-row>
            <mu-col v-for="(tagState, tagName) in tags" width="25" tablet="25" desktop="25">
              <mu-chip @click="selectFilter(subject, tagName)" v-bind:class="[tagState?'r-tag-selected':'r-tag-disselected']">
                {{tagName}}
              </mu-chip>
            </mu-col>
          </mu-row>
          <mu-divider/>
        </div>

        <div id="r-bottom-drawer">
          <mu-flat-button backgroundColor="#f6f7f9" class="r-bottom-button" label="重置" @click="resetFilter"/>
          <mu-raised-button class="r-bottom-button" label="完成" primary @click="finshSet"/>
        </div>
      </mu-drawer>
    </mu-bottom-nav>
    <mu-divider/>

    <mu-list>
        <mu-list-item　v-for="bookItem in bookList" to="/BookDetail/">
          <mu-row gutter class="r-row">
            <mu-col width="30" tablet="30" desktop="30">
              <mu-card>
                <mu-card-media>
                  <img src="https://qidian.qpic.cn/qdbimg/349573/3552978/150" />
                </mu-card-media>
              </mu-card>
            </mu-col>
            <mu-col width="70" tablet="70" desktop="70">
              <mu-sub-header>{{bookItem.bookName}}</mu-sub-header>
              <mu-content-block>
                　当历史变成传说当传说变成神话当神话
              </mu-content-block>
              <mu-content-block>
                <div class="head_book_bottom">
                  <mu-icon value="person" :size="15"/>
                  <span>{{bookItem.author}}</span>
                  <div class="head_book-type">
                    {{bookItem.type}}
                  </div>
                </div>
              </mu-content-block>
            </mu-col>
          </mu-row>
          <mu-divider/>
        </mu-list-item>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loadingText="猫猫为您加载中"/>
  </div>
</template>

<script>
import ReadHeader from '@/components/header/Header'

export default {
  name: 'Library',
  components: {
    ReadHeader,
  },
  data () {
    const bookList = [];

    const filterTags = {
      '类型': {'仙剑': false, '玄幻': false, '悬疑': false, '奇幻': false, '军事': false,
              '历史': false, '竞技': false, '科幻': false, '校园': false, '社会': false,
              '其它': false, '': false},
      '属性': {'免费': false, 'VIP': false, '': false, '': false},
      '字数': {'30万以下': false, '30~50万': false, '50~100万': false, '100~200万': false,
              '200万以上': false},
      '状态': {'连载': false, '完结': false, '': false, '': false},
      '更新时间': {'三日内': false, '七日内': false, '半月内': false, '一月内': false}
    }

    const selectedTags = {
      '类型': ['type', 0],
      '属性': ['bookState', 0],
      '字数': ['wordNumber', 0],
      '状态': ['bookState', 0],
      '更新时间': ['updateTime', 0]
    }

    return {
      filterTags,
      selectedTags,

      bookList,
      numPage: 1,
      num: 10,

      loading: false,
      scroller: null,

      open: false,
      docked: true,
      bottomNav: 'people',
      bottomNavColor: 'people'
    }
  },
  created () {
    this.initData();
  },
  mounted () {
    this.scroller = this.$el
  },
  methods: {
    initData () {
      this.getBookList()
    },
    handleChange (tag) {
      switch (tag) {
        case 'more':
          this.open = !this.open
          this.docked = false
          break;
        default:
          this.bottomNav = tag
          console.log(tag);
      }
    },
    toggle () {
      this.open = !this.open
    },
    loadMore () {
      this.loading = true
      // this.numPage += 1
      setTimeout(() => {
        this.getBookList()
        this.num += 10
        this.loading = false
      }, 1000)
    },
    getBookList () {
      let bookList;
      axios.get('/BookListAPIView/', {
      params: {
        numPage: this.numPage
        }
      })
      .then(res => {
          if (res.status === 200) {
              bookList = res.data.bookList;
              for (let i in bookList) {
                  this.bookList.push(bookList[i])
              }
          }
        }
      )
    },
    selectFilter(subject, tagName){

      const getIndex = () => {
          let index = 0, name;
          for(let cur in this.filterTags[subject]){
            index++;
            if(tagName == cur){
              return index;
            }
          }
        }

      const getTagName = (index) => {
          let i = 0, name;
          for(let cur in this.filterTags[subject]){
            i++;
            if(index == i){
              name = cur;
              return name;
            }
          }
        }

      let  index = getIndex()

      if (index == this.selectedTags[subject][1]) {
        this.filterTags[subject][tagName] = false;
        this.selectedTags[subject][1] = 0;
      }else {
        if (0 != this.selectedTags[subject][1]) {
          this.filterTags[subject][getTagName(this.selectedTags[subject][1])] = false;
        }
        this.filterTags[subject][tagName] = true;
        this.selectedTags[subject][1] = index;
      }

    },
    resetFilter(){
      for (let index in this.selectedTags) {
        this.selectedTags[index][1] = 0;
      }
      for (var subject in this.filterTags) {
        for (var tagName in this.filterTags[subject]) {
          this.filterTags[subject][tagName] = false;
        }
      }
    },
    finshSet () {
      this.toggle()
    }
  }
}
</script>

<style scoped>
.r-row{
  margin-bottom: 15px;
}

  #head-title{
    color: #000000;
    font-size: 20px;
  }

  .subject-title{
    color: #000000;
  }

  .r-tag-selected{
    background-color: #fffff;
    height: 25px;
    margin-bottom: 15px;
  }

  .r-tag-disselected{
    background-color: #ffffff;
    height: 25px;
    margin-bottom: 15px;
  }

  .head_book_bottom{
    font-size: 12px;
  }

  .head_book-type{
    float: right;
    color: rgba(0,0,0,.54);
    border: 1px solid #ddd;
  }

  #r-bottom-drawer{
    margin-top: 60px;
  }

  .r-bottom-button{
    width: 49%;
  }
</style>
