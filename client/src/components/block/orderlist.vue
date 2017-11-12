<template>
  <ul class="orderlist">
   <!--  <div>
      敬请期待
    </div> -->
    <li
      v-for="item in orderlist.data"
      v-bind:key="item.id">
      <a v-on:click="gotoOrderPage(item.id)">
        <div class="titleimg">
            <img v-bind:src="item.dollImg" alt="">
        </div>
        <div class="goodname">
          娃娃名称：{{item.dollName}}
        </div>
        <div></div>

        <div class="statusbox">
         
          <div  class="wawastatus" v-if="item.status==1">状态：游戏中</div>
          <div class="wawastatus" v-if="item.status==2">状态：未抓到</div>
          <div class="wawastatus" v-if="item.status==3">状态：抓取成功</div>
          <div class="wawastatus" v-if="item.status==4">状态：已发货</div>
        </div>

        <div class="timebox">
          游戏时间：{{item.createTime}}
        </div>
        
        <button class="goodmore">查看更多</button>
       
        
      </a>
    </li>
  </ul>
</template>

<script>
const BaseUrl = "http://47.94.236.45:9000/";

function buildUrl (url) {
  return BaseUrl + url;
}
var orderList={};

  export default {
    data(){
      
      return{
        orderlist:{
        "code": 200,
        "error": "正常",
        "data": [
            {
                "id": "0299dce0b3454101a527ab42b45ac103",
                "userId": 1,
                "userName": "hexu",
                "commodityId": null,
                "commodityName": null,
                "machineId": 1,
                "machineName": "小叮当",
                "userAdressId": null,
                "gameMoneyPrice": 20,
                "dollName": "小叮当",
                "dollIntroduce": null,
                "dollImg": "http://legendream.cn/myjs/bear.jpg",
                "gamevideo":null,
                "status":2,
                "createTime": "2017-09-10 02:29:06"
            },
            {
                "id": "31cf3bd2f58449aa8ce36b1351412064",
                "userId": 1,
                "userName": "hexu",
                "commodityId": null,
                "commodityName": null,
                "machineId": 2,
                "machineName": "小猫咪",
                "userAdressId": null,
                "gameMoneyPrice": 20,
                "dollName": "小猫咪",
                "dollIntroduce": null,
                "dollImg": "http://legendream.cn/myjs/bear.jpg",
                "gamevideo":null,
                "status": 3,
                "createTime": "2017-09-10 02:22:30"
            }
        ]
      }
      }
      
    },
    mounted() {
      var token=localStorage.openid;
      let url = buildUrl('order/getUserOrder');
        axios.get(url, {
          params: {
            'token': 4128,
            'doll':1
          }
        }).then((response) => {
          console.log(response);
          this.results = response.data;
          orderList=response.data;
          // alert(response.code);
          // alert(response.data);
          for (var i = 0; i < this.results.length; i++) {
            // this.results[i].conutid=i;
            // this.results[i].machineImg=require('../../assets/images/bear.jpg');
          }
          console.log(this.results);
        }).catch( error => { console.log(error); });
     
    },
    methods:{
      gotoOrderPage:function(id){
        console.log(id);
        console.log(this.orderlist.data[id]);
        this.$router.push({
          name:'ordershowPage',
          params:{orderid:id}
        })
      }
     
    },
    created () {
     
    }


  }
</script>