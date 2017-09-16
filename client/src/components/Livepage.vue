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
    <div class="gamestart">
    </div>
    <div class="gameinfo"></div>

    <!-- <div id="id_test_video"></div> -->
    
  </div>

</template>


<script>
const BaseUrl = "http://192.168.1.229:9001/";
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
    // var player =  new TcPlayer('id_test_video', {
    //     "m3u8": "http://10799.liveplay.myqcloud.com/live/10799_784387bddc.m3u8",
    //     "flv": "http://10799.liveplay.myqcloud.com/live/10799_784387bddc.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
    //     "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
    //     "coverpic" : "http://www.legendream.cn/myjs/start.png",
    //     "width" :  '480',//视频的显示宽度，请尽量使用视频分辨率宽度
    //     "height" : '320'//视频的显示高度，请尽量使用视频分辨率高度
     
    // })
    // console.log(flvjs)

      if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'http://10799.liveplay.myqcloud.com/live/10799_784387bddc.flv'
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
  },
  methods:{
      getList:function() {
        let url = buildUrl('action?action=1&time=100');
        axios.get(url).then((response) => {
          console.log(response);
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
     
    },
    created () {
      this.getList();
    }
  
}
</script>



<style scoped>

</style>

