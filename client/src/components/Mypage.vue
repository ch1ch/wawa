<template>
  <div class="mypage">
    <div class="topbar">
    </div>

    <div class="footerbar">
      <div class="footerli">设置</div>
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


export default {
  name: 'Mypage',
  data () {

    return {
      msg: 'live'

    }
  },
  components: {

  },
  computed:{

  },
  mounted:function(){
    console.log()
   
  },
  //1 前 2后 3左 4右 0
  methods:{
    gotoHomePage:function(id){
      this.$router.push({
        name:'Index'
      })
    },
    gotoMyPage:function(id){
      this.$router.push({
        name:'mypage'
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

