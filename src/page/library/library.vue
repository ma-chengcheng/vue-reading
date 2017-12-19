<template>
  <div>
    <head-bar head_index='true' tab_value='library'></head-bar>
    <mu-flexbox class="nav-bar">
        <mu-flexbox-item v-for="navTitle in navTitles">
            <div v-on:click="handleChange(navTitle.icon)" v-bind:class="[navTitle.icon==activeNav?'nav-bar-active':'']">
                <i class="material-icons">{{navTitle.icon}}</i>
                <span>
                    {{navTitle.name}}
                </span>
            </div>
        </mu-flexbox-item>

        <!-- 书籍筛选 -->
        <mu-drawer right :open="open" :docked="docked" @close="toggle()" width="90%">
            <h3 class="drawer-title">筛选</h3>
          <div v-for="(tags, subject) in filterTags">
            <h4 class="sub-title">{{subject}}</h4>
            <mu-row>
              <mu-col v-for="(tagState, tagName) in tags" width="25" tablet="25" desktop="25">
                <div @click="selectFilter(subject, tagName)" v-bind:class="[tagState?'tag-selected':'tag-disselected']">
                  {{tagName}}
                </div>
              </mu-col>
            </mu-row>
            <mu-divider/>
          </div>
          <div class="bottom-drawer">
            <mu-flat-button backgroundColor="#f6f7f9" class="bottom-button" label="重置" @click="resetFilter"/>
            <mu-raised-button class="bottom-button" label="完成" primary @click="finshSet"/>
          </div>
        </mu-drawer>
    </mu-flexbox>

    <mu-divider/>

    <!-- 书籍列表 -->
    <mu-list>
         <mu-list-item　v-for="bookItem in bookList" to="/book/">
            <book-item :book="bookItem"></book-item>
        </mu-list-item>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loadingText="猫猫为您加载中"/>

  </div>
</template>

<script>
import headBar from '@/components/header/headBar'
import bookItem from '@/components/common/bookItem'

export default {
  name: 'Library',
  components: {
    headBar,
    bookItem,
  },
  data () {
    const navTitles = [
        {name: '人气', icon: 'favorite'},
        {name: '时间', icon: 'restore'},
        {name: '字数', icon: 'pie_chart'},
        {name: '订阅', icon: 'turned_in'},
        {name: '更多', icon: 'more_vert'},
    ]

    const filterTags = {
      '类型': {'仙剑': false, '玄幻': false, '悬疑': false, '奇幻': false,
              '军事': false, '历史': false, '竞技': false, '科幻': false,
              '校园': false, '社会': false, '其它': false, '': null},
      '属性': {'免费': false, 'VIP': false, '': null, '': null},
      '状态': {'连载': false, '完结': false, '': null, '': null},
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
      navTitles,
      filterTags,
      selectedTags,

      activeNav: 'favorite',

      bookList: [],
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
        case 'more_vert':
          this.open = !this.open
          this.docked = false
          break;
        default:
          this.activeNav =tag;
      }
    },
    toggle () {
      this.open = !this.open
    },
    loadMore () {
        this.loading = true
        setTimeout(() => {
        this.getBookList()
        this.num += 10
        this.loading = false
        }, 1500)
    },
    getBookList () {
      let bookList;
      axios.get('/api/LibraryBookViewAPI/', {
      params: {
        numPage: this.numPage
        }
      })
      .then(res => {
          if (res.status === 200) {
              bookList = res.data.book_items;
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

      // 对非空项进行筛选
      if (null != this.filterTags[subject][tagName]){
          //  对已选择重复点击情况,取消选中
          if (index == this.selectedTags[subject][1]) {
            this.filterTags[subject][tagName] = false;
            this.selectedTags[subject][1] = 0;
          }else {
              // 对未选择的情况,更换选择状态
              // 若已选择的情况,清空之前的选择
              if (0 != this.selectedTags[subject][1]) {
                  this.filterTags[subject][getTagName(this.selectedTags[subject][1])] = false;
              }
              this.filterTags[subject][tagName] = true;
              this.selectedTags[subject][1] = index;
          }
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

<style lang="scss" scoped>

  .tag-selected{
    margin: 0 8px 0 8px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }

  .tag-disselected{
    margin: 0 8px 0 8px;
    background-color: #ffffff;
    height: 35px;
    margin-bottom: 15px;
  }

  .bottom-drawer{
    position: sticky;
    padding-top: 50px;
    bottom: 0px;
    width: 100%;
    .bottom-button{
        width: 49%;
    }
  }

  .nav-bar{
      text-align: center;
      color: #969ba3;
      padding-top: 5px;
      i{
          font-size: 1.4rem;
      }
      span{
          display: block;
      }

  }

  .nav-bar-active{
      color: #ff4081;
  }

  .drawer-title{
      text-align: center;
      line-height: 48px;
      display: inline;
      padding: 0 16px 0 16px;
  }

  .drawer-title::after{
      content: "";
      height: 1px;
      position: absolute;
      top: 48px;
      left: 0;
      right: 0;
      background-color: #eee;
      box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
  }

  .sub-title{
      line-height: 38px;
      display: inline;
      padding: 0 16px 0 16px;
  }
  </style>
