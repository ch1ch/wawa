import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Livepage from '@/components/Livepage'
import Mypage from '@/components/Mypage'
import Setpage from '@/components/Setpage'
import Orderpage from '@/components/OrderPage'
import Worldpage from '@/components/World'
import Freepage from '@/components/Free'
import Drugpage from '@/components/Drug'
import OrdershowPage from '@/components/OrderShowPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/world',
      name: 'World',
      component: Worldpage
    },
    {
      path: '/drug',
      name: 'Drug',
      component: Drugpage
    },
    {
      path: '/free',
      name: 'free',
      component: Freepage
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
    },
    {
      path: '/set',
      name: 'Setpage',
      component: Setpage
    },
    {
      path: '/order',
      name: 'orderpage',
      component: Orderpage
    },
    {
      path: '/ordershow',
      name: 'ordershowPage',
      component: OrdershowPage
    }
  ]
})
