import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Rank from '@/page/rank/Rank'
import Library from '@/page/library/Library'
import BookDetail from '@/page/BookDetail/BookDetail'
import Login from '@/page/User/Login'
import Register from '@/page/User/Register'
import ResetPassword from '@/page/User/ResetPassword'
import UserCenter from '@/page/User/UserCenter'


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
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ResetPassword',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter
    },
    // {
    //   path: '/recharge/',
    //   name: 'library',
    //   component: library
    // }
  ]
})
