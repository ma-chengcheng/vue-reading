<template>
    <div class="search-list">
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
            }
        }
    }
</script>

<style>
.search-list{
    padding-top: 38px;
}
</style>
