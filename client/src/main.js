// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('swiper/dist/css/swiper.css')


import Vue from 'vue'
import Index from './index/Index'
import router from './router'
import $ from 'jquery'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import flv_js from 'flv.js'
Vue.use(flv_js)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false


new Vue({
  el: '#main',
  router,
  template: '<Index/>',
  components: { Index }
})

