<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 carbon 主题
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(MuseUI)
// Vue.use(ElementUI)

import ReadHeader from '@/components/header/Header'
import ReadFooter from '@/components/footer/Footer'

export default {
  name: 'App'
}
</script>

<style>
</style>
