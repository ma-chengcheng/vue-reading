<template>
    <div class="page">
        <head-bar head_bar='true' :head_title="head_title"></head-bar>
        <mu-list>
            <mu-list-item>
                第一章
            </mu-list-item>
            <mu-list-item>
                第二章
            </mu-list-item>
            <mu-list-item>
                第三章
            </mu-list-item>
            <mu-list-item>
                第四章
            </mu-list-item>
            <mu-list-item>
                第五章
            </mu-list-item>
            <mu-list-item>
                第六章
            </mu-list-item>
            <mu-list-item>
                第七章
            </mu-list-item>
            <mu-list-item>
                第八章
            </mu-list-item>
            <mu-list-item>
                第九章
            </mu-list-item>
            <mu-list-item>
                第十章
            </mu-list-item>
            <mu-list-item>
                第十一章
            </mu-list-item>
            <mu-list-item>
                第十一章
            </mu-list-item>
            <mu-list-item>
                第十一章
            </mu-list-item>
            <mu-list-item>
                第十一章
            </mu-list-item>
            <mu-list-item>
                第十一章
            </mu-list-item>
            <mu-list-item>
                第十一章
            </mu-list-item>
            <mu-list-item>
                第十一章
            </mu-list-item>
            <mu-list-item>
                第十一章
            </mu-list-item>
            <mu-list-item>
                第十一章
            </mu-list-item>
            <mu-list-item>
                第十一章
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
import headBar from '@/components/header/headBar'
export default{
    components: {
        headBar
    },
    data(){
        return{
            head_title: '修仙神探'
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
        padding-top: 1.95rem;
        z-index: 203;
        background-color: #fff;
    }
</style>
