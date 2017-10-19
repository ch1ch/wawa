<template>
  <div class="footerbar">
      
      <div class="footerli" v-on:click="gotoHomePage()">首页</div>
      <div class="footerpaddig">|</div>
      <div class="footerli" v-on:click="gotoRankPage()">订单</div>
      <div class="footerpaddig">|</div>
      <div class="footerli" v-on:click="gotoMyPage()">我的</div>
      <div class="footerpaddig">|</div>
      <div class="footerli" v-on:click="gotoSetPage()">设置</div>
    </div>
</template>

<script>

  export default {
    name:"footer",
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
      gotoHomePage:function(){
      this.$router.push({
        name:'Home'
      })
      },
      gotoMyPage:function(){
        this.$router.push({
          name:'mypage'
        })
      },
      gotoSetPage:function(){
        this.$router.push({
          name:'Setpage'
        })
      },
      gotoRankPage:function(){
        this.$router.push({
          name:'orderpage'
        })
      },
       
    },
     


  }
</script>