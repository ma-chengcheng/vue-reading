<template>
  <div>
    <head-bar head_index='true' tab_value='home'></head-bar>
    <div id="home-page">

     <!-- 热门推荐 -->
      <swiper-module></swiper-module>

      <!-- 新书推荐 -->
      <list-module module_title="新书上架"></list-module>

      <!-- 免费书籍 -->
      <list-module module_title="免费书籍"></list-module>

      <!-- 精品书籍 -->
      <list-module module_title="精品书籍"></list-module>

      <!-- 热门书籍 -->
      <list-module module_title="热门书籍"></list-module>

    </div>
    <ReadFooter/>
  </div>
</template>

<script>
import headBar from '@/components/header/headBar'
import ReadFooter from '@/components/footer/Footer'
import swiperModule from '@/components/home/swiperModule'
import listModule from '@/components/home/listModule'

export default {
  name: 'Home',
  components: {
    headBar,
    ReadFooter,
    listModule,
    swiperModule
  }
}
</script>

<style scoped>
#home-page{
  width: 100%;
}


</style>
