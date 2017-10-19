<template>
  <div class="mypage">
    <div class="topbar">
    </div>
    <div class="leftbox">
      <div class="headimg">
         <img v-bind:src="headimgurl" alt="">
      </div>
      <div class="nickname">
        <p>{{nickname}}</p>
      </div>
      <div class="catchwawanum">
        <p>共抓到{{wawanumber}}次</p>
      </div>
       <div class="moneynum">
        <p>{{mymoney}}</p>
      </div>
     
    </div>
    <div class="wawalist">
      <div class="wawabox">
        <div class="wawaitem1">
          <img src="~assets/images/bear.jpg" alt="">
        </div>
        <div class="wawaitem2">
          <img src="~assets/images/bear.jpg" alt="">
        </div>
      </div>
      <div class="wawabox">
        <div class="wawaitem1">
          <img src="~assets/images/bear.jpg" alt="">
        </div>
        <div class="wawaitem2">
          <img src="~assets/images/bear.jpg" alt="">
        </div>
      </div>
    </div>

    <footerBlock></footerBlock>
   

  </div>

</template>
<script>
import footerBlock from './../components/block/footer'

export default {
  name: 'Mypage',
  data () {
    return {
      msg: 'live',
      headimgurl:'',
      nickname:'',
      openid:'',
      wawanumber:'0',
      mymoney:0

    }
  },
  components: {
    footerBlock

  },
  computed:{

  },
  mounted:function(){
    // alert(localStorage.openid);
    // alert(localStorage.nickname);
    // alert(localStorage.headimgurl);

    var headimgurl=localStorage.headimgurl?localStorage.headimgurl:'http://wx.qlogo.cn/mmopen/mia54phWuEaibj8eNcMVuBMBCwh6qfD6LbXFKiazNdK7GxssznMcx4F6atFO164rW2k2V1QE7BASuOWPibR17SicN7w/0';
    var nickname=localStorage.nickname?localStorage.nickname:'传传';
    var openid=localStorage.openid?localStorage.openid:'oIrAps3LRdZIvvEHLQfKAx67pZiI';
    var gameMoney=localStorage.gameMoney?localStorage.gameMoney:0;
    var dollcount=localStorage.dollCount;

    this.headimgurl=headimgurl;
    this.nickname=nickname;
    this.openid=openid;
    this.mymoney=gameMoney;
    this.wawanumber=dollcount;

    function getCookie(c_name){
      if (document.cookie.length>0)
        {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
          { 
          c_start=c_start + c_name.length+1 
          c_end=document.cookie.indexOf(";",c_start)
          if (c_end==-1) c_end=document.cookie.length
          return unescape(document.cookie.substring(c_start,c_end))
          } 
        }
      return ""
    }

   
  },
  //1 前 2后 3左 4右 0
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
    gotoSetPage:function(id){
      this.$router.push({
        name:'Setpage'
      })
    },
    gotoRankPage:function(){
      this.$router.push({
        name:'Rankpage'
      })
    }
     
  },
  created () {
   // this.startGame();
  }
  
}
</script>



<style scoped>

</style>

