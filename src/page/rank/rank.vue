<template>
  <div>
    <head-bar head_index='true' tab_value='rank'></head-bar>

    <rank-module module_title="点击榜" :module_data="book.rank.click_rank"></rank-module>
    <rank-module module_title="订阅榜" :module_data="book.rank.subscriber_rank"></rank-module>
    <rank-module module_title="捧场榜" :module_data="book.rank.reward_rank"></rank-module>
    <rank-module module_title="新书榜" :module_data="book.rank.new_book_rank"></rank-module>
    <rank-module module_title="追书榜" :module_data="book.rank.chase_rank"></rank-module>
  <ReadFooter/>
  </div>
</template>

<script>
import ReadFooter from '@/components/footer/Footer'
import headBar from '@/components/header/headBar'
import rankModule from '@/components/rank/rankModule'
import {mapState, mapActions} from 'vuex'

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
  computed: {
      ...mapState([
          'book'
          ])
      },
    mounted() {
        this.initData()
    },
    methods: {
        ...mapActions([
            'getRankBookAction'
        ]),
        initData(){
            this.getRankBookAction()
        }
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
