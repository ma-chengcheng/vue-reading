<template>
  <div>
    <ReadHeader/>
    <div id="home-page">
      <!-- 搜索 -->
      <div id="search">
        <mu-text-field fullWidth="true" hintText="搜索你想看的书籍～" icon="search"/>
      </div>

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
      <Rank class="card-column"/>
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
import Rank from '@/components/home/Rank'
import ReadHeader from '@/components/header/Header'
import ReadFooter from '@/components/footer/Footer'



export default {
  name: 'Home',
  components: {
    RecommendImg,
    HotBook,
    QualityBook,
    NewBook,
    FreeBook,
    Rank,
    ReadHeader,
    ReadFooter
  }
}
</script>

<style scoped>
#home-page{
  width: 100%;
}

#search{
  padding-right: 16px;
}

.card-column{
  margin-top: 20px;
}

</style>
