<template>
  <div id="app">
    <ReadHeader/>
    <router-view/>
    <ReadFooter/>
  </div>
</template>

<script>
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题

import 'whatwg-fetch'

Vue.use(MuseUI)

import ReadHeader from '@/components/header/Header'
import ReadFooter from '@/components/footer/Footer'

export default {
  name: 'app',
  components: {
    ReadHeader,
    ReadFooter
  }
}
</script>

<style>
</style>
