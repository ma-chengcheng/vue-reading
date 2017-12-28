<template>
  <div>
    <head-bar head_index='true' tab_value='rank'></head-bar>

    <rank-module module_title="点击榜" rank_name='click_rank'></rank-module>
    <rank-module module_title="订阅榜" rank_name='subscriber_rank'></rank-module>
    <rank-module module_title="捧场榜" rank_name='reward_rank'></rank-module>
    <rank-module module_title="新书榜" rank_name='new_book_rank'></rank-module>
    <rank-module module_title="追书榜" rank_name='chase_rank'></rank-module>

  <ReadFooter/>
  </div>
</template>

<script>
import ReadFooter from '@/components/footer/Footer'
import headBar from '@/components/header/headBar'
import rankModule from '@/components/rank/rankModule'

export default {
  name: 'Rank',
  components: {
    ReadFooter,
    headBar,
    rankModule
  },
  data(){
    return{
      book_run_list: {},
      book_click_list: {},
      book_subscribe_list: {}
    }
  },
  // created: function () {
  //   axios.get('/api/RankListViewAPI/', {
  //       params: {
  //           rank_name: this.rank_name
  //       }
  //   })
  //   .then(res => {
  //       if (res.status === 200) {
  //           this.book_run_list = res.data.run_rank;
  //           this.book_click_list = res.data.click_rank;
  //           this.book_subscribe_list = res.data.pay_rank;
  //       }
  //     }
  //   )
  // }
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
