<template>
  <div id="rank">
    <mu-card>
        <!-- 排行榜tab -->
        <mu-tabs :value="activeTab" @change="handleTabChange">
          <mu-tab value="click" title="点击榜"/>
          <mu-tab value="subscribe" title="订阅榜"/>
          <mu-tab value="run" title="追书榜"/>
        </mu-tabs>

        <!-- 点击榜 -->
        <div v-if="activeTab === 'click'">
          <mu-list>
            <div v-for="(book_click_item, index) in book_click_list" >
              <mu-list-item v-bind:title="book_click_item.bookName" to="/BookDetail/">
                <mu-avatar v-if="index < 3" slot="left" color="#ffffff" backgroundColor="#45494d" size="30">{{index + 1}}</mu-avatar>
                <mu-avatar v-else slot="left" color="#ffffff" size="30">{{index + 1}}</mu-avatar>
                <mu-icon slot="right" value="chevron_right"/>
              </mu-list-item>
              <mu-divider/>
            </div>
          </mu-list>
        </div>

        <!-- 订阅榜 -->
        <div v-if="activeTab === 'subscribe'">
          <mu-list>
            <div v-for="(book_subscribe_itme, index) in book_subscribe_list">
              <mu-list-item v-bind:title="book_subscribe_itme.bookName" to="/BookDetail/">
                <mu-avatar v-if="index < 3" slot="left" color="#ffffff" backgroundColor="#45494d" size="30">{{index + 1}}</mu-avatar>
                <mu-avatar v-else slot="left" color="#ffffff" size="30">{{index + 1}}</mu-avatar>
                <mu-icon slot="right" value="chevron_right"/>
              </mu-list-item>
              <mu-divider/>
            </div>
          </mu-list>
        </div>

        <!-- 追书榜 -->
        <div v-if="activeTab === 'run'">
          <mu-list>
            <div v-for="(book_run_item, index) in book_run_list">
              <mu-list-item　v-bind:title="book_run_item.bookName" to="/BookDetail/">
                <mu-avatar v-if="index < 3" slot="left" color="#ffffff" backgroundColor="#45494d" size="30">{{index + 1}}</mu-avatar>
                <mu-avatar v-else slot="left" color="#ffffff" size="30">{{index + 1}}</mu-avatar>
                <mu-icon slot="right" value="chevron_right"/>
              </mu-list-item>
              <mu-divider/>
            </div>
          </mu-list>
        </div>


    </mu-card>
  </div>
</template>

<script>
export default {
  name: 'Rank',
  data(){
    return{
      activeTab: 'click',
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
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>

<style scoped>
#rank{
  width: 100%;
  margin-top: 30px;
}

</style>
