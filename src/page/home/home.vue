<template>
  <div>
    <head-bar head_index='true' tab_value='home'></head-bar>
    <div id="home-page">

     <!-- 热门推荐 -->
      <swiper-module :module_data="book.index.recommend_book"></swiper-module>
      <!-- 新书推荐 -->
      <list-module module_title="新书上架" module_name="new_book" :module_data="book.index.new_book"></list-module>

      <!-- 免费书籍 -->
      <list-module module_title="免费书籍" module_name="free_book" :module_data="book.index.free_book"></list-module>

      <!-- 精品书籍 -->
      <list-module module_title="精品书籍" module_name="supreme_book" :module_data="book.index.superme_book"></list-module>

      <!-- 热门书籍 -->
      <list-module module_title="热门书籍" module_name="hot_book" :module_data="book.index.hot_book"></list-module>

    </div>
    <ReadFooter/>
  </div>
</template>

<script>
import headBar from '@/components/header/headBar'
import ReadFooter from '@/components/footer/Footer'
import swiperModule from '@/components/home/swiperModule'
import listModule from '@/components/home/listModule'
import {mapState, mapActions} from 'vuex'


export default {
  name: 'Home',
  components: {
    headBar,
    ReadFooter,
    listModule,
    swiperModule
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
          'getIndexBookAction'
      ]),
      initData(){
          this.getIndexBookAction()
      }
  }
}
</script>

<style scoped>
#home-page{
  width: 100%;
}


</style>
