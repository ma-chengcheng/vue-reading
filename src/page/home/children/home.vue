<template>
  <div>
    <div id="home-page">
      <!-- 搜索 -->
      <!-- <div id="search">
        <mu-text-field fullWidth="true" hintText="搜索你想看的书籍～" icon="search"/>
      </div> -->

      <!-- 搜索下方的热推 -->
      <RecommendImg/>

      <!-- 热门推荐 -->
      <HotBook class="card-column"/>

      <!-- 免费书籍 -->
      <FreeBook class="card-column"/>

      <!-- 精品书籍 -->
      <QualityBook class="card-column"/>

      <!-- 热门书籍 -->
      <NewBook class="card-column"/>

      <!-- 排行榜 -->
    </div>
    <ReadFooter/>
  </div>
</template>

<script>
import FreeBook from '@/components/home/FreeBook'
import NewBook from '@/components/home/NewBook'
import HotBook from '@/components/home/HotBook'
import QualityBook from '@/components/home/QualityBook'
import RecommendImg from '@/components/home/RecommendImg'
import ReadFooter from '@/components/footer/Footer'



export default {
  name: 'Home',
  components: {
    RecommendImg,
    HotBook,
    QualityBook,
    NewBook,
    FreeBook,
    ReadFooter
  }
}
</script>

<style scoped>
#home-page{
  width: 100%;
}

.card-column{
  margin-top: 20px;
}

</style>
