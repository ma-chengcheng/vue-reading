<template>
    <div class="page">
        <head-bar head_bar='true' :head_title="head_title"></head-bar>
        <mu-list>
            <mu-list-item :title="'共' + chapter_num + '章'" @click="reverse">
                <mu-icon slot="right" value="swap_vert"/>
            </mu-list-item>
            <mu-list-item v-for="book_chapter in book_chapters">
                {{book_chapter.chapter}}
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
import headBar from '@/components/header/headBar'
import {getBookCatalog} from '../../../../src/service/getBookData'

export default{
    components: {
        headBar
    },
    data(){
        return{
            book_chapters: [],
            chapter_num: 0,
            head_title: ''
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init(){
            let book_id = this.$route.params.book_id;
            const bookCatalog = getBookCatalog(book_id).then(res => {
                this.book_chapters = res.data.catalog_items
                this.chapter_num = this.book_chapters.length
            })
        },
        reverse(){
            this.book_chapters.reverse();
        }
    }
}
</script>

<style  scoped>
.page{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: auto;
        padding-top: 60px;
        z-index: 203;
        background-color: #fff;
    }
</style>
