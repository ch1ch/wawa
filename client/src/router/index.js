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
import Free2page from '@/components/Free2'
import Drugpage from '@/components/Drug'
import Loginpage from '@/components/Login'
import Regpage from '@/components/Reg'
import Experpage from '@/components/Exper'
import Aboutpage from '@/components/About'
import Centerpage from '@/components/My'
import Artpage from '@/components/Artlist'
import ArtDespage from '@/components/Artdes'
import Myselfpage from '@/components/Myself'


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
      path: '/exper',
      name: 'Exper',
      component: Experpage
    },
    {
      path: '/drug',
      name: 'Drug',
      component: Drugpage
    },
    {
      path: '/login',
      name: 'Login',
      component: Loginpage
    },
    {
      path: '/myself',
      name: 'Myself',
      component: Myselfpage
    },
    
    {
      path: '/reg',
      name: 'Reg',
      component: Regpage
    },
    {
      path: '/free',
      name: 'free',
      component: Freepage
    },
    {
      path: '/center',
      name: 'center',
      component: Centerpage
    },
    {
      path: '/about',
      name: 'about',
      component: Aboutpage
    },
    {
      path: '/artlist',
      name: 'Artlist',
      component: Artpage
    },
    {
      path: '/artdes',
      name: 'Artdes',
      component: ArtDespage
    },
    {
      path: '/free2',
      name: 'free2',
      component: Free2page
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
