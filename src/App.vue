<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css' // 使用 carbon 主题


Vue.use(MuseUI)

import ReadHeader from '@/components/header/Header'
import ReadFooter from '@/components/footer/Footer'

export default {
  name: 'app'
}
</script>

<style>
</style>
