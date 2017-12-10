<template>
  <ul class="goodlist">
    <li
      v-for="item in results"
      v-bind:key="item.id">
      <!-- <button v-on:click='getList'>close</button> -->
      <a v-on:click="gotoLivePage(item.conutid)">
        <div class="wawaname">
          {{item.dollName}}
        </div>
        <div class="titlebar">
          <div class="titleimg">
            <img src="~assets/images/zhua1.png" alt="">
          </div>
          <div class="wawastatus" v-if="item.status==2">游戏中</div>
          <div  class="wawastatus" v-if="item.status==1">空闲中</div>

          <div class="wawaprice">{{item.gameMoney}}/次</div>
        </div>

        <div class="wawaimg">
          <img v-bind:src="item.machineImg" alt="">
        </div>
       
      </a>
    </li>
  </ul>
</template>

<script>

var machineList={};

  export default {
    props: {
      wawadata:  {
      type: Array,
      required : true
      }
    },
    data(){
      
      return{
        results: [
      { id: 0, text: ' 轻松熊',machineImg:require('../../assets/images/bear.jpg'),price:'33',status:'1' }]
      }
    },
    mounted() {
      let url = buildUrl('machine/getMachineList');
        axios.get(url).then((response) => {
          console.log(response.data.data);
          this.results = response.data.data;
          machineList=response.data.data;
          for (var i = 0; i < this.results.length; i++) {
            this.results[i].conutid=i;

            // this.results[i].machineImg=require('../../assets/images/bear.jpg');
          }
          console.log(this.results);
        }).catch( error => { console.log(error); });
    },
    methods:{
      getList:function() {
        
      },
      gotoLivePage:function(id){
        // console.log(id);
        console.log(machineList[id]);
        // alert(machineList[id])

        if(machineList[id].video3==null || machineList[id].video3=='<null>' ||machineList[id].video3==''){
          machineList[id].video3='10799.liveplay.myqcloud.com/live/10799_784387bddc';
        }
        // console.log( machineList[id].video1)
        // console.log( machineList[id].video3)
        var str= JSON.stringify(machineList[id]); 
        if (typeof (androidApp) !="undefined") {
          androidApp.joinRoom(str);
        }else{
          joinRoom(str);
        }
        
        // this.$router.push({
        //   name:'livepage',
        //   params:{liveid:id}
        // })
      }
     
    },
    created () {
      this.getList();
    }


  }
</script>