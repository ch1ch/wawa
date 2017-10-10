<template>
  <div class="live">
    
    <a href="./..">
      <div class="back">
        <img src="~assets/images/live/back.png"> 
      </div>
    </a>
    <div class="livebox">
    </div>
    <video id="videoElement"></video>
    <div id="id_test_video"></div>
    <div class="gamestart" v-on:click="startGame" v-if="startsee">
      <div class="mycoin" v-on:click="addcoin"></div>
    </div>
    <div class="game_control" v-if="controlsee">
      <div class="zhua_up" v-on:click="front_zhua" ></div>
      <div class="zhua_left" v-on:click="left_zhua"></div>
      <div class="zhua_right" v-on:click="right_zhua"></div>
      <div class="zhua_down" v-on:click="back_zhua"></div>
    </div>

    <div class="game_downzhua" v-if="controlsee" v-on:click="down_zhua">
    </div>

    <div class="gameinfo">
    </div>
    <div class="wawalist">
      <div class="gamedetail">
        <div class="gamedetailtop"></div>
        <div class="gamedetailbottom"></div>
        <div>
          <img src="~assets/images/live/wawadetail1.jpg" alt="">
        </div>
        
        <div>
          <img src="~assets/images/live/wawadetail1.jpg" alt="">
        </div>
      </div>
      <div class="catchlist">
        <div class="historytop"></div>
        <div class="gamedetailbottom"></div>
        <div class="historylist">
          <div class="hitoryitem">
            <div class="headimg">
              <img src="~assets/images/live/head.jpg" alt="">
            </div>
            <p class="playername">玩家1</p>
            <p class="playertime">2小时前</p>
          </div>

          <div class="hitoryitem">
            <div class="headimg">
              <img src="~assets/images/live/head.jpg" alt="">
            </div>
            <p class="playername">玩家1</p>
            <p class="playertime">2小时前</p>
          </div>

          <div class="hitoryitem">
            <div class="headimg">
              <img src="~assets/images/live/head.jpg" alt="">
            </div>
            <p class="playername">玩家1</p>
            <p class="playertime">2小时前</p>
          </div>

          <div class="hitoryitem">
            <div class="headimg">
              <img src="~assets/images/live/head.jpg" alt="">
            </div>
            <p class="playername">玩家1</p>
            <p class="playertime">2小时前</p>
          </div>

          <div class="hitoryitem">
            <div class="headimg">
              <img src="~assets/images/live/head.jpg" alt="">
            </div>
            <p class="playername">玩家1</p>
            <p class="playertime">2小时前</p>
          </div>
         
        </div>
      </div>

    </div>
  </div>

</template>


<script>
// const BaseUrl = "http://192.168.1.229:9001/";
// const BaseUrl = "http://fjchao.vicp.io:9001/";

// const BaseUrl = "http://fjchao.7766.org:9001/";
// const BaseUrl = "http://90946475.800.si/";
//47.94.236.45:9000


function buildUrl (url,id) {
  var  BaseUrl;
  console.log(id);
  if (id=='1') {
    BaseUrl="http://185345i08w.51mypc.cn:35126/";
    BaseUrl="http://fjchao.in.3322.org:42404/";
    // BaseUrl="http://fjc.in.8866.org:42864/";
  }else{
    BaseUrl="http://fujx.zicp.net:28530/";
  }

  BaseUrl="http://fjchao.in.3322.org:42404/";
  BaseUrl="http://185345i08w.51mypc.cn:35126/";

  return BaseUrl + url;
}


export default {
  name: 'Livepage',
  data () {

    return {
      msg: 'live',
      startsee:true,
      controlsee:false,
      machineId:this.$route.params.liveid?this.$route.params.liveid:1

    }
  },
  components: {

  },
  computed:{

  },
  mounted:function(){
    var macid=this.$route.params.liveid;
    console.log(macid);

    // if (macid=='1') {
    //   var player =  new TcPlayer('id_test_video', {
    //     "m3u8": "http://10799.liveplay.myqcloud.com/live/10799_784387bddc_900.m3u8",
    //     "flv": "http://10799.liveplay.myqcloud.com/live/10799_784387bddc_900.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
    //     "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
    //     "coverpic" : "http://www.legendream.cn/myjs/start.png",
    //     "width" :  '960',//视频的显示宽度，请尽量使用视频分辨率宽度
    //     "height" : '540',//视频的显示高度，请尽量使用视频分辨率高度
    //     "h5_flv":true,
    //     "x5_player":true
     
    //   })
      
    // }else{
    //   var player =  new TcPlayer('id_test_video', {
    //     "m3u8": "http://10799.liveplay.myqcloud.com/live/10799_de258f20a1.m3u8",
    //     "flv": "http://10799.liveplay.myqcloud.com/live/10799_de258f20a1.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
    //     "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
    //     "coverpic" : "http://www.legendream.cn/myjs/start.png",
    //     "width" :  '960',//视频的显示宽度，请尽量使用视频分辨率宽度
    //     "height" : '540',//视频的显示高度，请尽量使用视频分辨率高度
    //     "h5_flv":true,
    //     "x5_player":true
     
    //   })
     
    // }

     var player =  new TcPlayer('id_test_video', {
        "m3u8": "http://10799.liveplay.myqcloud.com/live/10799_784387bddc_900.m3u8",
        "flv": "http://10799.liveplay.myqcloud.com/live/10799_784387bddc_900.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
        "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
        "coverpic" : "http://www.legendream.cn/myjs/120.png",
        "width" :  '960',//视频的显示宽度，请尽量使用视频分辨率宽度
        "height" : '540',//视频的显示高度，请尽量使用视频分辨率高度
        "h5_flv":true,
        "x5_player":true
     
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
        axios.get("http://47.94.236.45:9000/order/createOrder?machineId="+this.machineId).then((response) => {
          console.log(response);
        }).catch( error => { console.log(error); });

        let url = buildUrl('start',this.machineId);
        axios.get(url).then((response) => {
          console.log(response);
          this.startsee=false;
          this.controlsee=true;
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
      front_zhua:function() {
        let url = buildUrl('action?action=1&time=150',this.machineId);

        axios.get(url).then((response) => {
          console.log(response);
          console.log('front')
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
      back_zhua:function() {
        let url = buildUrl('action?action=2&time=150',this.machineId);

        axios.get(url).then((response) => {
          console.log(response);
          console.log('back')
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
      left_zhua:function() {
        let url = buildUrl('action?action=3&time=150',this.machineId);

        axios.get(url).then((response) => {
          console.log(response);
          console.log('left')
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
      right_zhua:function() {
        let url = buildUrl('action?action=4&time=150',this.machineId);

        axios.get(url).then((response) => {
          console.log(response);
          console.log('right')
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
      down_zhua:function() {
        let url = buildUrl('action?action=6&time=200',this.machineId);

        axios.get(url).then((response) => {
          console.log(response);
          console.log('down');
           this.startsee=true;
          this.controlsee=false;
          this.results = response.data.results;

        }).catch( error => { console.log(error); });
      },
      addcoin:function(){

      }
     
    },
    created () {
     // this.startGame();
    }
  
}
</script>



<style scoped>

</style>

