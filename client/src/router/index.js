import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Livepage from '@/components/Livepage'
import Mypage from '@/components/Mypage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/live',
      name: 'livepage',
      component: Livepage
    },
    {
      path: '/my',
      name: 'mypage',
      component: Mypage
    }
  ]
})
