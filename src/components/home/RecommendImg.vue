<template>
  <div id="recommend-img">
    <mu-paper class="recommend-img-paper" :zDepth="2">

      <mu-flexbox>
        <mu-flexbox-item v-for="card in card_group">
          <mu-paper :zDepth="2">
            <mu-card>
              <mu-card-media>
                <img v-bind:src="'http://www.3roo.cn/static/coverImg/'+card.coverImg" />
              </mu-card-media>
            </mu-card>
            <div class="book-name">
              <span>{{card.bookName}}</span>
            </div>
          </mu-paper>
        </mu-flexbox-item>
      </mu-flexbox>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'RecommendImg',
  data(){
    return {
      card_group: {}
    }
  },
  created: function() {
    axios.get('/ShowImgViewAPI/')
    .then(res => {
        if (res.status === 200) {
            console.log('ok');
            this.card_group = res.data.showImg;
            console.log(this.card_group);
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
