<template>
    <mu-dialog :open="dialog" :title="title">
        {{message}}
    </mu-dialog>
</template>

<script>
export default {
    props: ['message', 'dialog'],
    data(){
        return{
            title: '提示',
        }
    }
}
</script>

<style>
</style>
