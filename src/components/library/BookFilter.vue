<template>
  <div>
    <mu-bottom-nav :value="bottomNav"  @change="handleChange">
      <mu-bottom-nav-item value="people" title="人气" icon="favorite"/>
      <mu-bottom-nav-item value="favorites" title="时间" icon="restore"/>
      <mu-bottom-nav-item value="nearby" title="字数" icon="pie_chart"/>
      <mu-bottom-nav-item value="recents" title="订阅" icon="turned_in"/>
      <mu-bottom-nav-item value="more" title="更多" icon="more_vert"/>
      <mu-drawer right :open="open" :docked="docked" @close="toggle()" width="90%">
        <mu-sub-header id="head-title"><b>筛选</b></mu-sub-header>
        <hr/>
          <mu-sub-header class="title"><b>类型</b></mu-sub-header>
          <mu-row class="row">
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                仙剑
              </mu-chip>
            </mu-col>
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                玄幻
              </mu-chip>
            </mu-col>
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                悬疑
              </mu-chip>
            </mu-col>
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                奇幻
              </mu-chip>
            </mu-col>
          </mu-row>
          <mu-row class="row">
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                军事
              </mu-chip>
            </mu-col>
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                历史
              </mu-chip>
            </mu-col>
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                竞技
              </mu-chip>
            </mu-col>
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                科幻
              </mu-chip>
            </mu-col>
          </mu-row>
          <mu-row>
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                校园
              </mu-chip>
            </mu-col>
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                社会
              </mu-chip>
            </mu-col>
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                其它
              </mu-chip>
            </mu-col>
            <mu-col width="25" tablet="25" desktop="25">
            </mu-col>
          </mu-row>
          <mu-sub-header class="title"><b>属性</b></mu-sub-header>
          <mu-row>
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                免费
              </mu-chip>
            </mu-col>
            <mu-col width="25" tablet="25" desktop="25">
              <mu-chip class="tag">
                VIP
              </mu-chip>
            </mu-col>
            <mu-col width="50" tablet="50" desktop="50">
            </mu-col>
          </mu-row>
        <mu-sub-header class="title"><b>字数</b></mu-sub-header>
        <mu-row>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-chip class="tag">
              30万以下
            </mu-chip>
          </mu-col>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-chip class="tag">
              30～50万
            </mu-chip>
          </mu-col>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-chip class="tag">
              50～100万
            </mu-chip>
          </mu-col>
        </mu-row>
        <mu-row>
        <mu-col width="33" tablet="33" desktop="33">
          <mu-chip class="tag">
            100～200万
          </mu-chip>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <mu-chip class="tag">
            200万以上
          </mu-chip>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
        </mu-col>
      </mu-row>
        <mu-sub-header class="title"><b>状态</b></mu-sub-header>
        <mu-row>
          <mu-col width="25" tablet="25" desktop="25">
            <mu-chip class="tag">
              连载
            </mu-chip>
          </mu-col>
          <mu-col width="25" tablet="25" desktop="25">
            <mu-chip class="tag">
              完结
            </mu-chip>
          </mu-col>
          <mu-col width="50" tablet="50" desktop="50">
          </mu-col>
        </mu-row>
        <mu-sub-header class="title"><b>时间</b></mu-sub-header>
        <mu-row>
          <mu-col width="25" tablet="25" desktop="25">
            <mu-chip class="tag">
              三日内
            </mu-chip>
          </mu-col>
          <mu-col width="25" tablet="25" desktop="25">
            <mu-chip class="tag">
              七日内
            </mu-chip>
          </mu-col>
          <mu-col width="25" tablet="25" desktop="25">
            <mu-chip class="tag">
              半月内
            </mu-chip>
          </mu-col>
          <mu-col width="25" tablet="25" desktop="25">
            <mu-chip @click="selectFilter(4)" :class="[updateTimeTag===4?'':'tag']">
              一月内
            </mu-chip>
          </mu-col>
        </mu-row>
        <mu-tabs id="bottom-tabs" :value="activeTab" @change="handleTabChange">
          <mu-tab value="tab1" title="重置"/>
          <mu-tab value="tab2" title="完成"/>
        </mu-tabs>
      </mu-drawer>
    </mu-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'Library',
  data () {
    const bookList = [];

    const selectTab = 1;
    const bookTypeTag = [
      false, false, false, false, false, false, false, false, false, false, false
    ];
    const isFreeTag = true;
    const wordNumberTag = 0;
    const bookStateTag = 0;
    const updateTimeTag = 0;

    const filter = [
      'bookType': ['仙剑', '玄幻', '悬疑', '奇幻', '军事', '历史', '竞技', '科幻', '校园', '社会', '其它'],
      'isFree': ['免费', 'VIP'],
      'wordNumber': ['30万以下', '30~50万', '50~100万', '100~200万', '200万以上'],
      'bookState': ['连载', '完结'],
      'upadateTime': ['三日内', '七日内', '半月内', '一月内']
    ]

    selectTag: {
      backgroundColor: '#000000'
    }

    return {
      selectTab,
      bookTypeTag,
      isFreeTag: true,
      wordNumberTag,
      bookStateTag,
      updateTimeTag,

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
      }
    },
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
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
    selectFilter(flag){
      this.updateTimeTag = flag
    },
    removerFilter(){

    },
    resetFilter(){

    }
  }
}
</script>

<style scoped>
.title{
  color: #000000;
}

#head-title{
  color: #000000;
  font-size: 20px;
}

.row{
  padding-bottom: 10px;
}

.tag{
  background-color: #ffffff;
  height: 25px;
}

.head_book_bottom{
  font-size: 12px;
}

.head_book-type{
  float: right;
  color: rgba(0,0,0,.54);
}

#bottom-tabs{
  margin-top: 60px;
}
</style>
