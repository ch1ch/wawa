<template>
  <div class="hello">
 
    <h1>{{ msg }}</h1>
    <div id="id_test_video" style="width:100%; height:auto;"></div>
    <video id="videoElement"></video>
  </div>
</template>


<script>
import { flvjs } from 'flv.js'


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
        "m3u8": "http://10799.liveplay.myqcloud.com/live/10799_784387bddc.m3u8",
        "flv": "http://10799.liveplay.myqcloud.com/live/10799_784387bddc.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
        "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
        "coverpic" : "http://www.test.com/myimage.jpg",
        "width" :  '480',//视频的显示宽度，请尽量使用视频分辨率宽度
        "height" : '320'//视频的显示高度，请尽量使用视频分辨率高度
     
    })
    console.log(flvjs);

    //   if (flvjs.isSupported()) {
    //     var videoElement = document.getElementById('videoElement');
    //     var flvPlayer = flvjs.createPlayer({
    //         type: 'flv',
    //         url: 'http://example.com/flv/video.flv'
    //     });
    //     flvPlayer.attachMediaElement(videoElement);
    //     flvPlayer.load();
    //     flvPlayer.play();
    // }
  }
  
}
</script>



<style scoped>

</style>

