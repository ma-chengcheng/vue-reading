<template>
    <div class="page">
        <head-bar head_bar='true' :head_title="head_title"></head-bar>

        <mu-content-block class="content">
            <div class="grid-list">
                <div class="grid" v-for="book_item, book_id in user_profile.chase_book">
                    <router-link :to="'/book/' +  book_id">
                        <img :src="coverBaseUrl + book_item.cover"/>
                        <figcaption>{{book_item.book_name}}</figcaption>
                    </router-link>
                </div>
            </div>
          <p>{{chaseBookCount}}本最近阅读</p>
        </mu-content-block>
    </div>
</template>

<script>
import {coverBaseUrl} from '@/config/env'
import headBar from '@/components/header/headBar'
import {mapState} from 'vuex'

export default{
  name: 'bookFollow',
  components: {
      headBar
  },
  data () {
    return {
        coverBaseUrl,
        head_title: '最近阅读'
    }
  },
  computed: {
    ...mapState([
      'user_profile',
    ]),
    chaseBookCount (){
        return Object.keys(this.$store.state.user_profile.chase_book).length
    }
  }
}
</script>

<style lang="scss" scoped>
    .page{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 200;
      background-color: #fff;

          .content{
              margin-top: 70px;

              .grid-list{

                  .grid{
                      width: calc((100% / 3);
                      display: inline-block;
                      vertical-align: top;
                      padding: 10px;

                      img{
                          width: 100%;
                          height: auto;
                          border-radius: 2px;
                          box-shadow: 0 1px 6px rgba(0,0,0,.3), 0 1px 4px rgba(0,0,0,.3);
                      }
                      figcaption{
                          font-size: 0.825rem;
                          line-height: 1.25;
                          overflow: hidden;
                          margin: .5rem 0 .125rem;
                      }
                  }
              }

              p{
                  text-align: center;
                  padding-bottom: 30px;
                  color: #686868;
              }
          }
}
</style>
