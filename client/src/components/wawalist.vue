<template>
  <ul class="goodlist">
    <li
      v-for="item in wawadata"
      v-bind:key="item.id">
      <button v-on:click='getList'>close</button>
      <a href="./#/live">
        <div class="titlebar">
          <div class="titleimg">
            <img src="~assets/images/zhua1.png" alt="">
          </div>
          <div class="wawastatus" v-if="item.status==1">游戏中</div>
          <div  class="wawastatus" v-if="item.status==0">空闲中</div>

          <div class="wawaprice">{{item.price}}/次</div>
        </div>

        <div class="wawaimg">
          <img v-bind:src="item.img" alt="">
        </div>
        <div class="wawaname">
          {{item.text}}
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
const BaseUrl = "http://testapi.legendream.cn/api/machine/";
//47.94.236.45:9000


function buildUrl (url) {
  return BaseUrl + url 
}

  export default {
    props: {
      wawadata:  {
      type: Array,
      required : true
      },
    },
    data(){
      results: []
      return{

      }
    },
    mounted() {
      // axios.get("http://47.94.236.45:9000/machine/getMachineList")
      // .then(response => {this.results = response.data.results})
    },
    methods:{
      getList:function() {
        let url = buildUrl('getMachineList');
        axios.get(url).then((response) => {
          console.log(response);
          this.results = response.data.results;
        }).catch( error => { console.log(error); });
      },
      _getList: function () {
        console.log(this)
        this.$http.get('http://47.94.236.45:9000/machine/getMachineList').then(function (response) {
          console.log(response);
          
          }, function (response) {
            // console.log(response)
        });
      }
    },
    created () {
      this.getList();
    }


  }
</script>