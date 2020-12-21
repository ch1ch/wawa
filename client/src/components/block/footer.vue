<template>
  <div class="footerr">
      
     <p>京ICP备20017696号-2  |  任何关于疾病和药品的信息仅供参考，不能代替专业医生药师的意见。</p>
    </div>
</template>

<script>

  export default {
    name:"footer",
    // props: {
    //   'hover':{
    //   type: Number,
    //   required : true
    //   }
    // },
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