import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Rank from '@/page/rank/Rank'
import Library from '@/page/library/Library'
import BookDetail from '@/page/BookDetail/BookDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/library',
      name: 'library',
      component: Library
    },
    {
      path: '/BookDetail',
      name: 'BookDetail',
      component: BookDetail
    },
    // {
    //   path: '/recharge/',
    //   name: 'library',
    //   component: library
    // }
  ]
})
