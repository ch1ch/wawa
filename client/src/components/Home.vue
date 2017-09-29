<template>
  <div class="homepage">
    <swiper :options="swiperOption" ref="mySwiper">
     <!-- slides -->
      <swiper-slide>
        <div class="headerimg">
            <img src="./../assets/images/header1.jpg">    
          </div>
      </swiper-slide>
      <swiper-slide>
        <div class="headerimg">
            <img src="./../assets/images/header1.jpg">    
          </div>
      </swiper-slide>
      <swiper-slide>
        <div class="headerimg">
            <img src="./../assets/images/header1.jpg">    
          </div>
      </swiper-slide>

     <!-- Optional controls -->
     <div class="swiper-pagination"  slot="pagination"></div>

     <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>

    <WawaList  v-bind:wawadata="wawadata"></WawaList>
  
 
    <div class="footerbar">
      <div class="footerli" v-on:click="wxpage()">设置</div>
      <div class="footerpaddig">|</div>
      <div class="footerli" v-on:click="gotoHomePage()">首页</div>
      <div class="footerpaddig">|</div>
      <div class="footerli">排行</div>
      <div class="footerpaddig">|</div>
      <div class="footerli" v-on:click="gotoMyPage()">我的</div>
    </div>
  </div>
</template>


<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import WawaList from './../components/wawalist'

export default {
  name: 'Home',
  data () {
    return {
      msg: '',
      wawadata: [
          { id: 0, text: ' 轻松熊',img:require('../assets/images/bear.jpg'),price:'33',status:'1' },
          { id: 1,text: ' 轻松熊1',img:require('../assets/images/bear.jpg'),price:'34',status:'0'},
          
        ],
          swiperOption: {  
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
          notNextTick: true,  
          pagination: '.swiper-pagination',  
          slidesPerView: 'auto',  
          centeredSlides: true,  
          paginationClickable: true,  
          spaceBetween: 30,  
              onSlideChangeEnd: swiper => {  
                  //这个位置放swiper的回调方法  
                  this.page = swiper.realIndex+1;  
                  this.index = swiper.realIndex;  
              }  
          }  
    }
  },
  components: {
    swiper,  
    swiperSlide,
    WawaList
  },
  computed: {  
  
        swiper() {  
          return this.$refs.mySwiper.swiper;  
        }  
  },  
  methods:{
    gotoHomePage:function(id){
      this.$router.push({
        name:'Home'
      })
    },
    gotoMyPage:function(id){
      this.$router.push({
        name:'mypage'
      })
    },
    wxpage:function(id){
      var address = 'mywawa';
      var call_back_uri = "http%3A%2F%2Fwww.legendream.cn%2F"+address+"%2Findex1.php";
        
      var grant_url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbb575a2aa9f43050&redirect_uri="+call_back_uri+"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
      location.href=grant_url;
      
    }
     
  },
  mounted () {  
     // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
