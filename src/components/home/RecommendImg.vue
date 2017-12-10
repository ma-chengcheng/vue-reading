<template>
  <div id="recommend-img">
    <mu-paper class="recommend-img-paper">

      <mu-flexbox>
        <mu-flexbox-item v-for="card in card_group">
          <mu-paper>
            <mu-card>
              <mu-card-media>
                <img v-bind:src="coverBaseUrl + card.cover" />
              </mu-card-media>
            </mu-card>
            <div class="book-name">
              <span>{{card.book_name}}</span>
            </div>
          </mu-paper>
        </mu-flexbox-item>
      </mu-flexbox>
    </mu-paper>
  </div>
</template>

<script>
import {coverBaseUrl} from '@/config/env'
export default {
  name: 'RecommendImg',
  data(){
    return {
        coverBaseUrl,
        card_group: {}
    }
  },
  created: function() {
    axios.get('/api/IndexAdBookViewAPI/')
    .then(res => {
        if (res.status === 200) {
            console.log('ok');
            this.card_group = res.data.ad_book;
            console.log(this.ad_book);
        }
      }
    )
  }
}
</script>

<style scoped>
.book-name{
  text-align: center;
  padding: 6px;
}

#recommend-img{
  text-align: center;
}

.recommend-img-paper {
  text-align: center;
  display: inline-block;
  width: 100%;
  padding: 15px;
}
</style>
