<template>
  <div class="orderpage">
    <div class="orderbox">
      订单详情～{{orderid}}
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
      orderid:this.$route.params.orderid?this.$route.params.orderid:1,
      

    }
  },
  components: {
    footerBlock,
  },
  computed:{

  },
  mounted:function(){
    var orderid=this.$route.params.orderid;
    console.log(orderid);
    console.log();
   
  },
  methods:{
  
     
  },
  created () {
  }
  
}
</script>



<style scoped>

</style>

