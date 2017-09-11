<template>
  <div class="live">
    
    <a href="./..">
      <div class="back">
        <img src="./../assets/images/live/back.png"> 
      </div>
    </a>
    <div class="livebox">
    </div>
    <third-js src="http://www.legendream.cn/myjs/tcplayer.js"></third-js>
    <div class="gamestart">
    </div>
    <div class="gameinfo"></div>
    <!-- <h1>{{ msg }}</h1> -->
    <div id="id_test_video"></div>
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
   'third-js': {
    render(createElement) {
      return createElement('script', { attrs: { type: 'text/javascript', src: "./../assets/js/tcplayer.js" }});
      }
    }
  },
  mounted:function(){


  }
  
}
</script>



<style scoped>

</style>
