import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '@/page/home/home'
import rank from '@/page/rank/rank'
import library from '@/page/library/library'
import pay from '@/page/pay/pay'
import book from '@/page/book/book'
import catalog from '@/page/book/children/catalog'
import reading from '@/page/reading/reading'
import search from '@/page/search/search'


import user from '@/page/user/user'
import profile from '@/page/user/children/profile'
import setUserName from '@/page/user/children/children/setUserName'
import setPhone from '@/page/user/children/children/setPhone'
import setUserDescribe from '@/page/user/children/children/setUserDescribe'
import bookFollow from '@/page/user/children/bookFollow'
import bookHistory from '@/page/user/children/bookHistory'



import login from '@/page/account/login'
import register from '@/page/account/register'
import forget from '@/page/account/forget'

Vue.use(Router)
const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/index'
      },
      {
        path: '/index',
        component: Home
      },
      {
        path: '/rank',
        component: rank
      },
      {
        path: '/library',
        component: library
      },
      {
          path: '/pay',
          component: pay
      },
      {
        path: '/login',
        component: login
      },
      {
        path: '/register',
        component: register
      },
      {
        path: '/forget',
        component: forget
      },
      {
        path: '/search',
        component: search
      },
      {
        path: '/user',
        component: user,
        children: [
          {
            path: 'bookFollow',
            component: bookFollow
          },
          {
            path: 'bookHistory',
            component: bookHistory
          },
          {
            path: 'profile',
            component: profile,
            children: [
              {
                path: 'username',
                component: setUserName
              },
              {
                path: 'phone',
                component: setPhone
              },
              {
                path: 'userDescribe',
                component: setUserDescribe
              }
            ]
          }
        ]
      }
    ]
  },

  {
    path: '/book',
    component: book,
    children: [
        {
            path: 'catalog',
            component: catalog
        }
    ]
  },
  {
      path: '/reading/:booId/:charpterId',
      component: reading
  }
]

export default new Router({
  mode: 'history',
  routes
})
