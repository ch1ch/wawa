<template>
  <div class="hello">
  <!-- <remote-js src="http://www.legendream.cn/myjs/tcplayer.js"></remote-js> -->
    <h1>{{ msg }}</h1>
    <div id="id_test_video" style="width:100%; height:auto;"></div>
  </div>
</template>


<script>

// import tcplayer from './../assets/js/tcvue.js'
//import('./../assets/js/tcplayer.js')
// var Showbo = require("exports?Showbo!./../assets/js/tcplayer.js");
export default {
  name: 'Livepage',
  data () {
    return {
      msg: 'live'
    }
  },
  components: {
   'remote-js': {
    render(createElement) {
      return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
      }
    }
  },
  mounted:function(){


  }
  
}
</script>



<style scoped>

</style>
