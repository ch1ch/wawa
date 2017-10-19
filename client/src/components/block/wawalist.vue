<template>
  <ul class="goodlist">
    <li
      v-for="item in results"
      v-bind:key="item.id">
      <!-- <button v-on:click='getList'>close</button> -->
      <a v-on:click="gotoLivePage(item.conutid)">
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
        <div class="wawaname">
          {{item.machineName}}
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
const BaseUrl = "http://47.94.236.45:9000/";

function buildUrl (url) {
  return BaseUrl + url;
}

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
            this.results[i].machineImg=require('../../assets/images/bear.jpg');
          }
          console.log(this.results);
        }).catch( error => { console.log(error); });
    },
    methods:{
      getList:function() {
        
      },
      gotoLivePage:function(id){
        console.log(id);
        console.log(machineList[id]);
        var str= JSON.stringify(machineList[id]); 
        joinRoom(str);
        
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