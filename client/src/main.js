require('swiper/dist/css/swiper.css')


import Vue from 'vue'
import Index from './index/Index'
import router from './router'
import VueAMap from 'vue-amap'
import $ from 'jquery'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '9f09829aef5277525615634617934091',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

Vue.config.productionTip = false


new Vue({
  el: '#main',
  router,
  template: '<Index/>',
  components: { Index }
})

