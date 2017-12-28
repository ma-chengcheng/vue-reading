<template>
    <div class="page">
        <head-bar head_bar='true' :head_title="head_title"></head-bar>
        <mu-list>
            <mu-list-item to="/reading/1/1">
                第一章 狄仁杰初探幽州地
            </mu-list-item>
            <mu-list-item to="/reading/1/2">
                第二章 探奇案狄公重出山
            </mu-list-item>
            <mu-list-item to="/reading/1/3">
                第三章 使团喋血记 第一章 突厥客喋血甘南道
            </mu-list-item>
            <mu-list-item to="/reading/1/4">
                第四章 金木兰洞中女皇梦
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
        padding-top: 60px;
        z-index: 203;
        background-color: #fff;
    }
</style>
