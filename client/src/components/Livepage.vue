<template>
  <div class="live">
    
    <a href="./..">
      <div class="back">
        <img src="./../assets/images/live/back.png"> 
      </div>
    </a>
    <div class="livebox">
    </div>
    <video id="videoElement"></video>
    <div class="gamestart" v-on:click="front_zhua">
    </div>
    <div class="game_control">
      
    </div>
    <div class="gameinfo"></div>

    <div id="id_test_video"></div>

  </div>

</template>


<script>
// const BaseUrl = "http://192.168.1.229:9001/";
// const BaseUrl = "http://fjchao.vicp.io:9001/";
const BaseUrl = "http://fjchao.in.3322.org:42404/";
// const BaseUrl = "http://fjchao.7766.org:9001/";
// const BaseUrl = "http://90946475.800.si/";
//47.94.236.45:9000


function buildUrl (url) {
  return BaseUrl + url;
}


export default {
  name: 'Livepage',
  data () {
    return {
      msg: 'live'
    }
  },
  components: {

  },
  mounted:function(){
    var player =  new TcPlayer('id_test_video', {
        // "m3u8": "http://10799.liveplay.myqcloud.com/live/10799_784387bddc.m3u8",
        "flv": "http://10799.liveplay.myqcloud.com/live/10799_784387bddc.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
        "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
        "coverpic" : "http://www.legendream.cn/myjs/start.png",
        "width" :  '480',//视频的显示宽度，请尽量使用视频分辨率宽度
        "height" : '320'//视频的显示高度，请尽量使用视频分辨率高度
     
    })


    //   if (flvjs.isSupported()) {
    //     var videoElement = document.getElementById('videoElement');
    //     var flvPlayer = flvjs.createPlayer({
    //         type: 'flv',
    //         url: 'http://10799.liveplay.myqcloud.com/live/10799_784387bddc.flv'
    //     });
    //     flvPlayer.attachMediaElement(videoElement);
    //     flvPlayer.load();
    //     flvPlayer.play();
    // }
  },
  //1 前 2后 3左 4右 0
  methods:{
      startGame:function() {
        let url = buildUrl('start');
        axios.get(url).then((response) => {
          console.log(response);
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
      front_zhua:function() {
        let url = buildUrl('action?action=1&time=100');

        axios.get(url).then((response) => {
          console.log(response);
          console.log('front')
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
      back_zhua:function() {
        let url = buildUrl('action?action=2&time=100');

        axios.get(url).then((response) => {
          console.log(response);
          console.log('front')
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
      left_zhua:function() {
        let url = buildUrl('action?action=3&time=100');

        axios.get(url).then((response) => {
          console.log(response);
          console.log('front')
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
      right_zhua:function() {
        let url = buildUrl('action?action=4&time=100');

        axios.get(url).then((response) => {
          console.log(response);
          console.log('front')
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
      down_zhua:function() {
        let url = buildUrl('action?action=6&time=100');

        axios.get(url).then((response) => {
          console.log(response);
          console.log('front')
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      }
     
    },
    created () {
     // this.startGame();
    }
  
}
</script>



<style scoped>

</style>

