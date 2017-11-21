<template>
  <div class="mypage">
    <div class="topbar">
    </div>
    <div class="leftbox">
      <div class="headimg">
         <img v-bind:src="headimgurl" alt="">
      </div>
      <div class="nickname">
        <p>{{nickname}}</p>
      </div>
      <div class="catchwawanum">
        <p>共抓到{{wawanumber}}次</p>
      </div>
       <div class="moneynum">
        <p>{{mymoney}}</p>
      </div>
      <div class="address"  v-on:click="showAddress">
        
      </div>
     
    </div>
    
    <div class="address-all" v-if="showadd">
      <ul class="address-list">
        <li
      v-for="item in addresss"
      v-bind:key="item.id" class="address-item" >

          <div class="addr-person">姓名：{{item.person}}</div>
          <div class="addr-mobile">电话：{{item.mobile}}</div>
          <div class="addr-address">地址：{{item.address}}</div>
          <div class="addr-del" v-on:click="delAddress(item.id)" >
          </div>
        </li>
      </ul>

      <div class="sure-btn" v-on:click="hideAddress()" ></div>
      <div class="addadd-btn" v-on:click="showAddAddress()" ></div>
    </div>

    <div class="address-box" v-if="showaddadd">
        <input type="text" name="name" ref="add_name" class="name-input" maxlength="8" min="2" max="10" placeholder="输入姓名">
        <input type="text" name="phone" ref="add_phone" class="phone-input" min="8" max="13" maxlength="13" placeholder="输入手机号">
        <textarea name="adddress" ref="add_address" rows="4" cols="20" placeholder="详细地址" class="addresstext"></textarea>
        <div class="addressbtn" v-on:click="editAddress"></div>
    </div>

    <div class="wawalist">
      <div class="list-title">抓到的娃娃</div>
      <div class="wawabox"
      v-for="item in mywawalist"
      v-bind:key="item.id">
        <div class="wawaitem1">
           <img v-bind:src="item.wawa1" alt="">
        </div>
        <div class="wawaitem2">
           <img v-bind:src="item.wawa2" alt="">
        </div>  
      </div>
    </div>

    <footerBlock></footerBlock>
   

  </div>

</template>
<script>
import footerBlock from './../components/block/footer'


export default {
  name: 'Mypage',
  data () {
    return {
      msg: 'mypage',
      add_name:null,
      add_phone:null,
      add_address:null,
      headimgurl:'',
      nickname:'',
      openid:'',
      wawanumber:'0',
      mymoney:0,
      showadd:false,
      showaddadd:false,
      canaddadd:true,
      mywawalist:[
      ],
      addresss:[{
        "id": 20,
        "userId": 4131,
        "person": "张三",
        "mobile": "13512345678",
        "address": "北京朝阳区西大望路1号文特来中心A座"
        },
        {
        "id": 20,
        "userId": 4131,
        "person": "张三",
        "mobile": "13512345678",
        "address": "北京朝阳区西大望路1号文特来中心A座北京朝阳区西大望路1号文特来中心A座北座"
        }
      ]

    }
  },
  components: {
    footerBlock

  },
  computed:{

  },
  mounted:function(){

    var token=localStorage.openid;

    let url = buildUrl('user/getUserInfo');
    axios.get(url, {
      params: {
        'token': token
       
      }
    }).then((response) => {
      console.log(response.data.data);
      this.headimgurl=response.data.data.headUrl;
      this.nickname=response.data.data.nickName;
      this.mymoney=response.data.data.gameMoney;
      this.wawanumber=response.data.data.dollCount;

    }).catch( error => { console.log(error); });


    url = buildUrl('order/getUserOrder');
      axios.get(url, {
        params: {
          'token': token,
          'doll':1
        }
      }).then((response) => {
        console.log("my zhuaed")
        console.log(response.data.data);
        this.results = response.data.data;
        for (var i = 0; i < this.results.length; i+=2) {
          var wawaitem={
            "wawa1":this.results[i].dollImg
          }
          if (this.results[i+1]&&this.results[i+1].dollImg) {
            wawaitem.wawa2=this.results[i+1].dollImg;
          };
          this.mywawalist.push(wawaitem);
           // this.results[i].dollImg=this.results[i].dollImg?this.results[i].dollImg:require('../../assets/images/bear.jpg');
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
        this.addresss=response.data.data;
        if(this.addresss.length>=4){
          this.canaddadd=false;
        }
         localStorage.def_add_id=this.addresss[0].id;
        // this.results = response.data.data;
  
        console.log(localStorage.def_add_id);
      }).catch( error => { console.log(error); });


   
  },
  //1 前 2后 3左 4右 0
  methods:{
    showAddress:function(){
      this.showadd=true;
    },
    hideAddress:function(){
      this.showadd=false;
    },
    showAddAddress:function(){
      this.showaddadd=true;
    },
    delAddress:function(addid){
      var token=localStorage.openid;

      let url = buildUrl('user/deleteAddress');
 
        axios.get(url, {
          params: {
            'token': token,
            'id':addid
          }
        }).then((response) => {
          console.log(response.data);
          
          url = buildUrl('user/getUserAddress');
          axios.get(url, {
            params: {
              'token': token
            }
          }).then((response1) => {
            console.log(response1.data.data);
            this.addresss=response1.data.data;
            if(this.addresss.length>=4){
              this.canaddadd=false;
            }
             localStorage.def_add_id=this.addresss[0].id;
            // this.results = response.data.data;
      
            console.log(localStorage.def_add_id);
          }).catch( error1 => { console.log(error1); });

         
          // console.log(this.results);
        }).catch( error => { console.log(error); });
    },

    editAddress:function(){
      var token=localStorage.openid;
      // token="0d40742f4aad4d82ad041ebdb6a6a391";
      let url = buildUrl('user/addUserAddress');
      var name= this.$refs.add_name.value;
      var phone= this.$refs.add_phone.value;
      var address= this.$refs.add_address.value;
 
        axios.get(url, {
          params: {
            'token': token,
            'person':name,
            'mobile':phone,
            'address':address,

          }
        }).then((response) => {
          console.log(response.data);
          this.showaddadd=false;
          // this.results = response.data.data;
          url = buildUrl('user/getUserAddress');
          axios.get(url, {
            params: {
              'token': token
            }
          }).then((response) => {
            console.log(response.data.data);
            this.addresss=response.data.data;
            // this.results = response.data.data;
      
            // console.log(this.results);
          }).catch( error => { console.log(error); });

         
          // console.log(this.results);
        }).catch( error => { console.log(error); });
    },
     
  },
  created () {
   // this.startGame();
  }
  
}
</script>



<style scoped>

</style>

