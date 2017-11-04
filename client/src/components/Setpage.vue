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



      <div class="setitem">
        <p><span>问</span>题反馈</p>
      </div>

      
    </div>

    <footerBlock></footerBlock>

  </div>

</template>


<script>
import footerBlock from './../components/block/footer'


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
    footerBlock

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

