<template>
  <div class="rankpage">
    <div class="rankbox">
      <p>敬请期待</p>
    </div>

    <footerBlock></footerBlock>

  </div>

</template>


<script>
import footerBlock from './../components/block/footer'


export default {
  name: 'Rankpage',
  data () {

    return {
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
    }
     
  },
  created () {
   // this.startGame();
  }
  
}
</script>



<style scoped>

</style>

