<template>
    <div>
        <mu-list>
            <mu-divider/>
            <h3 class="sub_title">{{module_title}}</h3>

            <!-- 顶部书籍 -->
            <mu-list-item :to="'/book/' +  module_data.top_book.id">
                <book-item :book="module_data.top_book"></book-item>
            </mu-list-item>

            <!-- 板块书籍列表 -->
            <mu-list-item v-for="book_item in module_data.book_items" :to="'/book/' + book_item.id">
                <div class="tag">{{book_item.book_type}}</div>
                <div class="item">
                    {{book_item.book_name}}
                    <span class="item-author">{{book_item.author}}</span>
                </div>
                <div class="score">
                    {{book_item.book_rank}}分
                </div>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
import {coverBaseUrl} from '@/config/env'
import bookItem from '@/components/common/bookItem'
import {mapState} from 'vuex'
export default {
    components: {
        bookItem
    },
    props: ['module_title', 'module_name', 'module_data'],
    data(){
        return {
            coverBaseUrl
        }
    }
}
</script>

<style scoped>
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

.tag{
    font-size: 0.8rem;
    display: inline-block;
    position: relative;
    float: left;
    padding: 0 8px 0 8px;
    margin-right: 12px;
    color: rgba(0,0,0,.54);
    border: 1px solid #ddd;
    border-radius: 10px;
}

.item{
    float: left;
    font-size: 0.9rem;
}

.item-author{
    color: #999;
    font-size: 0.8rem;
    margin-left: 6px;
}

.item-author::before{
    display: inline-block;
    content: "";
    vertical-align: -0.22ex;
    height: 1rem;
    padding-left: 6px;
    border-left: 0.125rem solid #ddd;
}

.score{
    display: inline-block;
    position: relative;
    float: right;
    color: rgb(247, 186, 42);
}

</style>
