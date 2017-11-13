<template>
  <div>
    <ReadHeader/>
    <div id="rank">
          <!-- 点击榜 -->
        <mu-card>
          <mu-sub-header class="title"><b>点击榜</b></mu-sub-header>
          <mu-list>
            <div v-for="(book_click_item, index) in book_click_list">
              <mu-divider/>
              <mu-list-item v-bind:title="book_click_item.bookName" to="/BookDetail/">
                <mu-avatar v-if="index < 3" slot="left" color="#ffffff" backgroundColor="#45494d" size="30">{{index + 1}}</mu-avatar>
                <mu-avatar v-else slot="left" color="#ffffff" size="30">{{index + 1}}</mu-avatar>
                <mu-icon slot="right" value="chevron_right"/>
              </mu-list-item>
            </div>
          </mu-list>
        </mu-card>

          <!-- 订阅榜 -->
        <mu-card>
          <mu-sub-header class="title"><b>订阅榜</b></mu-sub-header>
          <mu-list>
            <div v-for="(book_subscribe_itme, index) in book_subscribe_list">
              <mu-divider/>
              <mu-list-item v-bind:title="book_subscribe_itme.bookName" to="/BookDetail/">
                <mu-avatar v-if="index < 3" slot="left" color="#ffffff" backgroundColor="#45494d" size="30">{{index + 1}}</mu-avatar>
                <mu-avatar v-else slot="left" color="#ffffff" size="30">{{index + 1}}</mu-avatar>
                <mu-icon slot="right" value="chevron_right"/>
              </mu-list-item>
            </div>
          </mu-list>
        </mu-card>


          <!-- 追书榜 -->
        <mu-card>
          <mu-sub-header class="title"><b>追书榜</b></mu-sub-header>
          <mu-list>
          <div v-for="(book_run_item, index) in book_run_list">
            <mu-divider/>
            <mu-list-item v-bind:title="book_run_item.bookName" to="/BookDetail/">
              <mu-avatar v-if="index < 3" slot="left" color="#ffffff" backgroundColor="#45494d" size="30">{{index + 1}}</mu-avatar>
              <mu-avatar v-else slot="left" color="#ffffff" size="30">{{index + 1}}</mu-avatar>
              <mu-icon slot="right" value="chevron_right"/>
            </mu-list-item>
          </div>
          </mu-list>
        </mu-card>
    </div>
  <ReadFooter/>
  </div>
</template>

<script>
import ReadHeader from '@/components/header/Header'
import ReadFooter from '@/components/footer/Footer'

export default {
  name: 'Rank',
  components: {
    ReadHeader,
    ReadFooter
  },
  data(){
    return{
      book_run_list: {},
      book_click_list: {},
      book_subscribe_list: {}
    }
  },
  created: function () {
    axios.get('/RankListViewAPI/')
    .then(res => {
        if (res.status === 200) {
            this.book_run_list = res.data.listRun;
            this.book_click_list = res.data.listClick;
            this.book_subscribe_list = res.data.listPay;
        }
      }
    )
  }
}
</script>

<style scoped>
#rank{
  width: 100%;
  margin-top: 30px;
}
.title{
  color: #000000;
}

</style>
