<template>
  <div>
    <mu-list>
      <template v-for="book_item in list">
        <mu-list-item>
          <mu-row gutter>
            <mu-col width="30" tablet="30" desktop="25">
              <mu-card>
                <mu-card-media>
                  <img v-bind:src="https://qidian.qpic.cn/qdbimg/349573/3552978/150" />
                </mu-card-media>
              </mu-card>
            </mu-col>
            <mu-col width="70" tablet="30" desktop="25">
              <mu-sub-header>{{book_item.bookName}}</mu-sub-header>
              <mu-content-block>
                {{book_item.describe}}
              </mu-content-block>
            </mu-col>
          </mu-row>
        </mu-list-item>
        <mu-divider/>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data () {
    const book_list = []
    return {
      book_list,
      book_num: 10,
      page_num: 1,

      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
  },
  created: function() {
    this.loadMore();
  },
  methods: {
    initData () {

    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 10; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 10
        this.loading = false
      }, 2000)
    },
    getBookList () {
      axios.get('/FreeCompetitiveViewAPI/')
      .then(res => {
          if (res.status === 200) {
              this.head_book = res.data.head_book;
              this.book_list = res.data.book_list;
          }
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
