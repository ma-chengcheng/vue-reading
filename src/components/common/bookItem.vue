<template>
    <div>
        <div class="book-cover">
              <img :src="coverBaseUrl + book.cover" />
        </div>
        <div class="book-info">
            <h4 class="book-name">{{book.book_name}}</h4>
            <div class="score">
                3.2分
            </div>
            <p class="book-brief">
                {{book.describe}}
            </p>
            <div class="book-mate">
                <div class="book-mate-l">
                    <span>
                        <i class="material-icons user-icon">perm_identity</i>
                        {{book.author}}
                    </span>
                </div>
                <div class="book-mate-r">
                    <span>{{book.type}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {coverBaseUrl} from '@/config/env'
export default{
    props: ['book'],
    data(){
        return{
            coverBaseUrl
        }
    }
}
</script>

<style scoped>

    .book-cover{
        height: 8rem;
        width: 6rem;
        margin-right: 12px;
        position: relative;
        float: left;
    }

    .book-cover img{
        height: 8rem;
        width: 6rem;
        border-radius: 2px;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    }

    .book-name{
        display: inline;
        line-height: 1.4;
    }

    .book-brief{
        line-height: 1.1875rem;
        height: 2.375rem;
        overflow: hidden;
        color: #969ba3;
    }

    .book-mate{
        color: #969ba3;
    }

    .book-mate-l{
        float: left;
        font-size: .75rem;
    }

    .user-icon{
        font-size: 16px;
        vertical-align: -.15ex;
    }

    .book-mate-r{
        float: right;
    }

    .book-mate-r span{
      color: rgba(0,0,0,.54);
      border: 1px solid #ddd;
    }


    .score{
        display: inline-block;
        position: relative;
        float: right;
        color: rgb(247, 186, 42);
    }
</style>
