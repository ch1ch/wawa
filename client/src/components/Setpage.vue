<template>
  <div class="setpage">
    <div class="settop">
    </div>
    <div class="leftbox">
      <div class="setitem setitem2">
        <p><span>通</span>知中心</p>
      </div>

      <div class="setitem ">
        <p><span>邀</span>请奖励</p>
      </div>
      <div class="setitem setitem2">
        <p><span>输</span>入邀请码</p>
      </div>

      <div class="setitem ">
        <p><span>背</span>景音乐</p>
      </div>
      <div class="setitem setitem2">
        <p><span>音</span>效</p>
      </div>

      <div class="setitem">
        <p><span>问</span>题反馈</p>
      </div>
      <div class="setitem setitem2">
        <p><span>关</span>于我们</p>
      </div>

      <p class="copyright">
        <span>Copyright © 2016-2017</span>
        <br>
        <span>易创云（大连）科技有限公司</span>
      </p>

      
    </div>

    <div class="footerbar">
      <div class="footerli" v-on:click="gotoSetPage()">设置</div>
      <div class="footerpaddig">|</div>
      <div class="footerli" v-on:click="gotoHomePage()">首页</div>
      <div class="footerpaddig">|</div>
      <div class="footerli" v-on:click="gotoRankPage()">排行</div>
      <div class="footerpaddig">|</div>
      <div class="footerli" v-on:click="gotoMyPage()">我的</div>
    </div>

  </div>

</template>


<script>


export default {
  name: 'Setpage',
  data () {

    return {
      msg: 'live',
      headimgurl:'',
      nickname:'',
      openid:''

    }
  },
  components: {

  },
  computed:{

  },
  mounted:function(){
    console.log();
   

   
   
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

