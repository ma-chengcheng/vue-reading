<template>
  <div>
    <head-bar head_index='true' tab_value='home'></head-bar>
    <div id="home-page">
      <!-- 搜索 -->
      <!-- <div id="search">
        <mu-text-field fullWidth="true" hintText="搜索你想看的书籍～" icon="search"/>
      </div> -->

      <!-- 搜索下方的热推 -->
      <recommendImg/>

      <!-- 热门推荐 -->
      <hotBook class="card-column"/>

      <!-- 免费书籍 -->
      <freeBook class="card-column"/>

      <!-- 精品书籍 -->
      <qualityBook class="card-column"/>

      <!-- 热门书籍 -->
      <newBook class="card-column"/>

    </div>
    <ReadFooter/>
  </div>
</template>

<script>
import freeBook from '@/components/home/freeBook'
import newBook from '@/components/home/newBook'
import hotBook from '@/components/home/hotBook'
import qualityBook from '@/components/home/qualityBook'
import recommendImg from '@/components/home/recommendImg'
import headBar from '@/components/header/headBar'
import ReadFooter from '@/components/footer/Footer'



export default {
  name: 'Home',
  components: {
    recommendImg,
    hotBook,
    qualityBook,
    newBook,
    freeBook,
    headBar,
    ReadFooter
  }
}
</script>

<style scoped>
#home-page{
  width: 100%;
}

/*#search{
  padding-right: 16px;
}*/

.card-column{
  margin-top: 20px;
}

</style>
