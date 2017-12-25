<template>
    <div>
        <div class="header-operate">
            <div @click="$router.go(-1)">
                <i class="material-icons go-back">chevron_left</i>
            </div>
            <div class="input-box">
                <input  v-model:value="keyValue"  class="input" placeholder="书名/作者名">
            </div>
            <div @click="search" >
                <i class="material-icons search">search</i>
            </div>
        </div>
        <search-list :key_value="keyValue"></search-list>
    </div>
</template>

<script>
    import searchList from '@/components/search/searchList'
    import {mapState} from 'vuex'

    export default{
        components: {
            searchList
        },
        computed: {
            ...mapState([
                'searchBook'
            ])
        },
        data() {
            return{
                keyValue: "",
            }
        },
        methods: {
            search(){
                console.log(this.searchBook);
            }
        }
    }
</script>

<style scoped>
.header-operate{
    z-index: 200;
    display: flex;
    height: 50px;
    position: fixed;
    left: 0;
    right: 0;
    padding: 0 16px 0 16px;
    align-items: center;
}

.header-operate::before{
    content: "";
    height: 1px;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    background-color: #eee;
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
}

.go-back{
    line-height: inherit;
    padding-top: 7px;
    width: 32px;
    height: 50px;
    margin-right: 7px;
    color: rgb(29, 29, 29);
}

.input-box{
    width: 100%;
    border-radius: 50px;
    background: #f3f3f3;
}

.input{
    height: 35px;
    padding: 0 22px;
    background: transparent;
    border: 0;
    outline: 0;
}

.search{
    line-height: inherit;
    padding-top: 8px;
    width: 32px;
    height: 50px;
    margin-left: 7px;
    color: rgb(182, 182, 181)
}
</style>
