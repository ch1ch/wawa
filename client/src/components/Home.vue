<template>
  <div class="homepage">
    <div class="topbar">
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
     <!-- slides -->
      <swiper-slide>
        <div class="headerimg">
          <a href="../study.html">
            <img src="~assets/images/header1.jpg" alt="">
            <!-- <img src="http://efun-oss.oss-cn-beijing.aliyuncs.com/banner/banner-1.jpg">     -->
          </a>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="headerimg" v-on:click="doQuest()">
            <img src="~assets/images/header2.jpg" alt="">         
        </div>
      </swiper-slide>
     

     <div class="swiper-pagination"  slot="pagination"></div>

     <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>

    <WawaList  v-bind:wawadata="wawadata"></WawaList>
  
    <footerBlock v-bind:hover="1"></footerBlock>

    <div class="activebox" v-if="showquest==true">
      <div class="quest-box">
        <div class="quest-text">{{questtext}}</div>
        <input type="text" name="name" ref="answer" class="answer-input" maxlength="10" min="1" max="10" placeholder="输入答案">

        <div class='answer-btn'  v-on:click="subAnswer()" ></div>
        <div class='close-btn'  v-on:click="hideQuest()" ></div>
      </div>

    </div>
    
   
  </div>
</template>


<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import WawaList from './../components/block/wawalist'
import footerBlock from './../components/block/footer'

export default {
  name: 'Home',
  data () {
    return {
      msg: '',
      questid:0,
      questtext:"",
      showquest:false,
      wawadata: [
          { id: 0, text: ' 轻松熊',img:require('../assets/images/bear.jpg'),price:'33',status:'1' },
          { id: 1,text: ' 轻松熊1',img:require('../assets/images/bear.jpg'),price:'34',status:'0'},
          
        ],
          swiperOption: {  
           
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
    WawaList,
    footerBlock
  },
  computed: {  
        swiper() {  
          return this.$refs.mySwiper.swiper;  
        }  
  },  
  methods:{

    subAnswer:function(){
      var answer= this.$refs.answer.value;
      console.log(answer);


      function tureAnswer(){
        console.log("yes")
        alert("回答正确～");
        // localStorage.openid="0d40742f4aad4d82ad041ebdb6a6a391";
        var token=localStorage.openid;
        let url = buildUrl('order/recharge');
            axios.get(url, {
              params: {
                'token': token            
              }
        }).then((response) => {
          console.log(response.data);
          var data=response.data;
          if (data.code==6001) {
            alert(data.error);
            console.log(data.error)
          }
        }).catch( error => { 
          console.log(error); 
        });

      }
      function falseAnswer(){
        console.log("no");
        alert("回答错误～")
      }
       
    },
    wxpage:function(id){
     
      
    },
    doQuest:function(id){
      this.showquest=true;
      
    },

    hideQuest:function(id){
      this.showquest=false;
    },

    getUserInfo:function(){
    },

  },
  mounted () {  
    var now=Date.now();
    
  
  },
  created () {
    this.getUserInfo();
  }
}
</script>


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
