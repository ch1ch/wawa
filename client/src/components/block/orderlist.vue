<template>
  <div class="theorderlist">
    <ul class="orderlist">
     <!--  <div>
        敬请期待
      </div> -->
      <li
        v-for="item in results"
        v-bind:key="item.id" data-id="item.id">
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
            游戏时间：{{item.time}}
          </div>
          
          <div class="goodmore"></div>
         
          
        </a>
      </li>
    </ul>
    <div class="ordermore"  v-if="showorder==true">
      <div class="doll-img">
        <img src='http://doll.oss-cn-beijing.aliyuncs.com/data/head/75b98021fd844c578e89d49048717b58.jpg' alt="">
      </div>
      <div class="doll-name">{{ordername}}</div>
      <div class="doll-person">{{orderperson}}</div>
      <div class="doll-address">{{orderaddress}}</div>
      <div class="doll-phone">{{orderphone}}</div>
      <div class="statusbox">
           
        <div  class="wawastatus" v-if="thestatus==1">状态：游戏中</div>
        <div class="wawastatus" v-if="thestatus==2">状态：未抓到</div>
        <div class="wawastatus" v-if="thestatus==3">状态：抓取成功</div>
        <div class="wawastatus" v-if="thestatus==4">状态：已发货</div>
      </div>

      <div class="sure-btn" v-on:click="hideOrder()" ></div>
      <div class="fahuo-btn" v-on:click="faOrder()" v-if="needfa==true"></div>

    </div>

    <div class="logbox" v-if="logshow==true">
        <div class="msgbox">{{logs}}</div>

       <div class="log-btn" v-on:click="hidelog()" ></div>
    </div>
  </div>
</template>

<script>

var orderList={};

  export default {
    data(){
      return{
        msg: 'order',
        showorder:false,
        ordername:"",
        orderperson:"",
        orderaddress:"",
        orderphone:"",
        logs:"",
        logshow:false,
        orderid:0,
        needfa:false,
        thestatus:0,
        addresss:[],
        results: [
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
        ],
       
      } 
    },
    mounted() {
      var token=localStorage.openid;
      // token="0d40742f4aad4d82ad041ebdb6a6a391";
      // alert(token);
      let url = buildUrl('order/getUserOrder');
        axios.get(url, {
          params: {
            'token': token,
            'doll':1
          }
        }).then((response) => {
          console.log(response.data.data);
          this.results = response.data.data;
          orderList=response.data;
          for (var i = 0; i < this.results.length; i++) {
            this.results[i].conutid=i;
            this.results[i].time=getLocalTime(this.results[i].createTime);
             this.results[i].dollImg=this.results[i].dollImg?this.results[i].dollImg:require('../../assets/images/bear.jpg');
             this.results[i].dollName=this.results[i].dollName?this.results[i].dollName:"小猫咪";
            // this.results[i].machineImg=require('../../assets/images/bear.jpg');
          }
          console.log(this.results);
        }).catch( error => { console.log(error); });

        url = buildUrl('user/getUserAddress');
        axios.get(url, {
          params: {
            'token': token
          }
        }).then((response) => {
          console.log(response.data.data);
          this.addresss=response.data.data.address;
          // this.results = response.data.data;
    
          // console.log(this.results);
        }).catch( error => { console.log(error); });


     
    },
    methods:{
      gotoOrderPage:function(id){
        console.log(id);
        this.showorder=true;
        this.orderid=id;
        // id="0b298a5f630d4b5b80c753b13bac304b";
        let url = buildUrl('order/getOrderById');
        axios.get(url, {
          params: {
            'orderId': id
          }
        }).then((response) => {
          console.log(response.data.data);
          // this.results = response.data.data;
          if (response.data.code!=200) {
            that.logshow=true;
            that.logs=response.data.error;
          }
          this.ordername=response.data.data.dollName;
          var addressid=response.data.data.userAdressId?response.data.data.userAdressId:"0";
          this.orderperson=response.data.data[addressid]&&response.data.data[addressid].person?response.data.data[addressid].person:"";
          this.orderaddress=response.data.data[addressid]&&response.data.data[addressid].address?response.data.data[addressid].address:"";
          this.orderphone=response.data.data[addressid]&&response.data.data[addressid].mobile?response.data.data[addressid].mobile:"";
          this.needfa=response.data.data.status==3?true:false;
          this.thestatus=response.data.data.status;

          console.log(response.data.data.status);
        }).catch( error => { console.log(error); });

        // this.$router.push({
        //   name:'ordershowPage',
        //   params:{orderid:id}
        // })
      },
      faOrder:function(){
        let that=this;
        var token=localStorage.openid;

        let url = buildUrl('order/addExpress');
        let adressId=0;
        var orderid=this.orderid;
        axios.get(url, {
          params: {
            'token': token,
            adressId:adressId,
            orderId:orderid
          }
        }).then((response) => {
          console.log(response.data.data);
          if (response.data.code!=200) {
            that.logshow=true;
            that.logs=response.data.error;
          }else{
            that.logshow=true;
            that.logs=response.data.error;
          };
          // this.results = response.data.data;
    
          // console.log(this.results);
        }).catch( error => { console.log(error); });

      },
      hideOrder:function(){
        this.showorder=false;
      },
      hidelog:function(){
      this.logshow=false;
    },

     
    },
    created () {
     
    }


  }

  function getLocalTime(nS) {     
   return new Date(parseInt(nS) ).toLocaleString().replace(/:\d{1,2}$/,' ');     
  }
</script>