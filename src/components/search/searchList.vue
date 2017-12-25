<template>
    <div class="search-list">
        <mu-content-block  v-if="!bookList || bookList == ''">
            <div class="no-find">
                <img src="http://img3.zhangyue.com/fh/common/static/i/xiaoi_upset_ae8a590.png">
                <div class="text">未找的相关书籍</div>
            </div>
        </mu-content-block>
        <mu-list>
             <mu-list-item　v-for="bookItem in bookList" to="/book/">
                <book-item :book="bookItem"></book-item>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
    import bookItem from '@/components/common/bookItem'
    import {mapState} from 'vuex'

    export default{
        components: {
            bookItem,
        },
        props: ['key_value'],
        data(){
            return {
                bookList: []
            }
        },
        created(){
            // this.initData();
        },
        computed: {
            ...mapState([
                'searchBook'
            ])
        },
        watch: {
            key_value: function (new_key_value) {
                this.$store.dispatch('searchBookAction', new_key_value)
            },
            searchBook: function(new_search_book){
                this.bookList = new_search_book;
                console.log(this.bookList);
            }
        }
    }
</script>

<style lang="scss" e scoped>
.search-list{
    padding-top: 38px;
}

.no-find{
    margin-top: 80px;
    text-align: center;
    img{
        width: 200px;
        height: auto;
    }
    .text{
        position: relative;
        text-align: center;
        color: #999;
        font-size: 1rem;
    }
}
</style>
