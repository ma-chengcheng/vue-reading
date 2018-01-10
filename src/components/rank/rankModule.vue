<template>
    <div>
      <h3 class="sub_title">{{module_title}}</h3>
      <swiper :options="swiperOption" class="swiper_list">
            <swiper-slide class="book" v-for="(book_item, index) in module_data.book_items">
                <router-link :to="'/book/' +  book_item.id">
                      <div class="sign">
                          <span>{{index+1}}</span>
                      </div>
                      <img :src="coverBaseUrl + book_item.cover"/>
                  <div class="book-name">{{book_item.book_name}}</div>
                  <div class="book-score">3.5</div>
                </router-link>
            </swiper-slide>
      </swiper>
      <mu-divider/>
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
    props: ['module_title',　'module_data'],
    data() {
          return {
            coverBaseUrl,
            swiperOption: {
              slidesPerView: 10,
              spaceBetween: 4,
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

<style lang="scss" scoped>
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



.book{

    .sign{
        font-size: 1rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        transform: rotate(45deg) translate(-50%,-50%);
        transform-origin: top left;

        span{
            position: absolute;
            top: 2px;
            left: -14px;
            transform-origin: top left;
            color: #000;
            font-family: "Arial","Microsoft YaHei","黑体";
            font-size: 20px;
            transform: rotate(-45deg);
        }
    }

    .sign::after{
        content: '';
        position: absolute;
        top: -7px;
        bottom: -7px;
        right: 0;
        width: 2px;
        background: #fff;
    }

    img{
        height: 7rem;
        width: 5.25rem;
        border-radius: 2px;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    }

    .book-name{
      padding-top: .4rem;
      font-size: 0.8rem;
    }

    .book-score{
        padding-top: .2rem;
        font-size: 0.6rem;
        color: rgb(247, 186, 42);
    }
}
</style>
