<template>
  <div class="rankpage">
    <div class="rankbox">
      <p>敬请期待</p>
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
  name: 'Rankpage',
  data () {

    return {
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
    }
     
  },
  created () {
   // this.startGame();
  }
  
}
</script>



<style scoped>

</style>

