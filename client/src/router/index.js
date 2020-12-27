import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
// import Home from '@/components/Home'

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
import Historypage from '@/components/MyHistory'


Vue.use(Router)

export default new Router({
  routes: [
   
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
      path: '/myhistory',
      name: 'MyHistory',
      component: Historypage
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
   
  ]
})
