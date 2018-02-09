<template>
    <div>
        <head-bar head_index='true' tab_value='library'></head-bar>

        <mu-flexbox class="nav-bar">
            <!-- 顶部 -->
            <mu-flexbox-item v-for="(nav, nav_key) in navs">
                <div v-on:click="handleChange(nav_key)" v-bind:class="[nav_key==activeNav?'nav-bar-active':'']">
                    <i class="material-icons">{{nav.icon}}</i>
                    <span>{{nav.label}}</span>
                </div>
            </mu-flexbox-item>

            <!-- 书籍筛选 -->
            <mu-drawer right :open="open" :docked="docked" @close="open = !open" width="90%">
                <h3 class="drawer-title">筛选</h3>
                <div v-for="(sub, sub_key) in filterTags">
                    <h4 class="sub-title">{{sub.sub_title}}</h4>
                    <mu-row>
                        <mu-col v-for="(tag, tag_key) in sub.content" width="25" tablet="25" desktop="25">
                            <div @click="selectTag(sub_key, tag_key)" v-bind:class="[tag_key == selectedTags[sub_key]?'tag-selected':'tag-disselected']">
                                {{tag.label}}
                            </div>
                        </mu-col>
                    </mu-row>
                    <mu-divider/>
                </div>
                <div class="bottom-drawer">
                    <mu-flat-button backgroundColor="#f6f7f9" class="bottom-button" label="重置" @click="resetTag"/>
                    <mu-raised-button class="bottom-button" label="完成" primary @click="open = false"/>
                </div>
            </mu-drawer>
        </mu-flexbox>

        <mu-divider/>

        <!-- 书籍列表 -->
        <mu-list>
            <mu-list-item :to="'/book/' +  book_item.id"　v-for="book_item in bookList">
                <book-item :book="book_item"></book-item>
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
    // 顶部导航栏
    const navs = {
        favorite:
            {label: '人气', icon: 'favorite'},
        date:
            {label: '时间', icon: 'restore'},
        word_number:
            {label: '字数', icon: 'pie_chart'},
        subscribe:
            {label: '订阅', icon: 'turned_in'},
        more:
            {label: '更多', icon: 'more_vert'}
    }


    // 更多－过滤标签
    const filterTags = {
        book_type: {
            sub_title: '类型',
            content:
                {
                    0: {label: '仙剑'}, 1: {label: '玄幻'},
                    2: {label: '悬疑'}, 3: {label: '奇幻'},
                    4: {label: '军事'}, 5: {label: '历史'},
                    6: {label: '竞技'}, 7: {label: '科幻'},
                    8: {label: '校园'}, 9: {label: '社会'},
                    10: {label: '其它'}
                },
        },
        is_free: {
            sub_title: '状态',
            content:
                {
                    0: {label: '免费'}, 1: {label: 'VIP'}
                }
        },
        update_state: {
            sub_title: '类型',
            content:
                {
                    0: {label: '连载'}, 1: {label: '完结'}
                }
        },
        update_date: {
            sub_title: '更新时间',
            content:
                {
                    0: {label: '三日内'}, 1: {label: '七日内'},
                    2: {label: '半月内'}, 3: {label: '一月内'}
                }
        }
    }

    return {
            navs,
            activeNav: 'favorite',

            filterTags,

            selectedTags: {
                normal: 'favorite',
                book_type: '',
                is_free: '',
                update_state: '',
                update_date: ''
            },


            bookList: [],
            numPage: 1,
            num: 10,

            loading: false,
            scroller: null,

            open: false,
            docked: true,
        }
    },
    mounted () {
        this.init()
        this.scroller = this.$el
    },
    methods: {
        // 初始化
        init () {
            this.numPage = 1
            this.bookList = []
            localStorage.setItem('selectedTags', null)
            // console.log(JSON.parse(localStorage.getItem('selectedTags')))
            this.getBookList()
        },
        // 顶部导航栏
        handleChange (navName) {
            switch (navName) {
                case 'more':
                    this.open = !this.open
                    this.docked = false
                    break;
                default:
                    this.activeNav = navName
                    this.selectedTags.normal = navName
                    this.init()
          }
        },
        // 加载更多
        loadMore () {
            this.loading = true
            setTimeout(() => {
                this.getBookList()
                this.num += 10
                this.loading = false
            }, 1500)
        },
        // 获取书籍
        getBookList () {
            let bookList;
            axios.get('/api/LibraryBookViewAPI/', {
                params: {
                        numPage: this.numPage,
                        normal: this.selectedTags.normal,
                        book_type: this.selectedTags.book_type,
                        is_free: this.selectedTags.is_free,
                        update_state:this.selectedTags.update_state,
                        update_date: this.selectedTags.update_date
                    }
                })
                .then(res => {
                    if (res.status === 200) {
                        this.numPage += 1;
                        bookList = res.data.book_items;
                        for (let i in bookList) {
                            this.bookList.push(bookList[i])
                        }
                    }
                }
            )
        },
        // 选中标签
        selectTag(sub, tag){
            this.selectedTags[sub]  = (this.selectedTags[sub] == tag) ? '' : tag
            this.init()
        },
        // 重置标签
        resetTag(){
            for (let key in this.selectedTags) {
                this.selectedTags[key] = (key == 'normal') ? this.selectedTags[key] : ''
            }
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
