<template>
  <div id="header">
  	
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

	 <div class="swiper-scrollbar"   slot="scrollbar"></div>
	</swiper>
	
	<div class="goodlist">
		
	</div>


  
    <router-view></router-view>
  </div>
</template>

<script>

 import { swiper, swiperSlide } from 'vue-awesome-swiper'  

export default {
    name: 'app',
    data () {
	    return {
	        msg: 'Welcome to Your Vue.js App',
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
		swiperSlide  
	},
    computed: {  
  
        swiper() {  
          return this.$refs.mySwiper.swiper;  
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

<style lang="less">
	@import './../assets/less/main.less';

</style>
