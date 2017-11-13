<template>
  <div>
    <mu-card>
      <mobile-tear-sheet>
        <mu-list>
          <!-- 板块第一个书籍 -->
          <mu-sub-header id="title">热门书籍</mu-sub-header>
          <mu-divider/>
          <mu-list-item to="/BookDetail/">
            <mu-row gutter>
              <mu-col width="30" tablet="30" desktop="30">
                <mu-card>
                  <mu-card-media>
                    <img v-bind:src="'http://www.3roo.cn/static/coverImg/'+head_book.coverImg" />
                  </mu-card-media>
                </mu-card>
              </mu-col>
              <mu-col width="70" tablet="70" desktop="70">
                <mu-sub-header>{{head_book.bookName}}</mu-sub-header>
                <mu-content-block>
                  　{{head_book.describe}}
                </mu-content-block>
                <mu-content-block>
                  <div class="head_book_bottom">
                    <mu-icon value="person" :size="15"/>
                    <span>{{head_book.author}}</span>
                    <div class="head_book-type">
                      {{head_book.type}}
                    </div>
                </div>
                </mu-content-block>
              </mu-col>
            </mu-row>
          </mu-list-item>

          <!-- 板块书籍列表 -->
          <div  v-for="book_item in book_list">
            <mu-divider/>
            <mu-list-item v-bind:title="book_item.bookName" to="/BookDetail/">
              <mu-chip class="book-type"　slot="left">
                {{book_item.type}}
              </mu-chip>
            </mu-list-item>
          </div>
        </mu-list>
      </mobile-tear-sheet>
    </mu-card>
  </div>
</template>

<script>
export default {
  name: 'ＨotBook',
  data(){
    return {
      head_book: {},
      book_list: {}
    }
  },
  created: function () {
    axios.get('/HotRecommendViewAPI/')
    .then(res => {
        if (res.status === 200) {
            this.head_book = res.data.head_book;
            this.book_list = res.data.book_list;
        }
      }
    )
  }
}
</script>

<style scoped>
.book-type{
  height: 40%;
}


.head_book_bottom{
  font-size: 12px;
}

.head_book-type{
  float: right;
  color: rgba(0,0,0,.54);
  border: 1px solid #ddd;
}
</style>
