<template>
    <div>
      <h3 class="sub_title">{{module_title}}</h3>
      <swiper :options="swiperOption" class="swiper_list">
            <swiper-slide v-for="book_item in module_data.book_items">
                <router-link :to="'/book/' +  book_item.id">
                  <div class="book-cover">
                      <img :src="coverBaseUrl + book_item.cover"/>
                  </div>
                  <div class="book-name">{{book_item.book_name}}</div>
                  <div class="book-author">{{book_item.author}}</div>
              </router-link>
            </swiper-slide>
      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {coverBaseUrl} from '@/config/env'

  export default {
    components: {
        swiper,
        swiperSlide
    },
    props: ['module_data'],
    data() {
          return {
            coverBaseUrl,
            module_title: '新书力捧',

            swiperOption: {
              slidesPerView: 4,
              spaceBetween: 8,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              },
              breakpoints: {
                768: {
                    slidesPerView: 7,
                },
                640: {
                  slidesPerView: 4,
                },
                375: {
                  slidesPerView: 3,
                }
              }
          }
        }
    }
  }
</script>

<style scoped>
.swiper_list{
    padding: 16px 16px 10px 16px;
    overflow: visible;
}


.sub_title{
    line-height: 48px;
    display: inline;
    padding: 0 16px 0 16px;
}

.sub_title::before{
    display: inline-block;
    content: "";
    vertical-align: -0.22ex;
    height: 1rem;
    width: 0.625rem;
    border-left: 3px solid #2196f3;
}


.book-cover img{
    display: block;
    height: auto;
    width: 100%;
    border-radius: 2px;
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
}

.book-name{
  padding-top: .4rem;
  font-size: 0.8rem;
}

.book-author{
    padding-top: .2rem;
    font-size: 0.rem;
    color: #999;
}
</style>
