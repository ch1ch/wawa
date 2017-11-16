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

    <div class="address-box" v-if="showadd">
        <input type="text" name="name" ref="add_name" class="name-input" maxlength="8" min="2" max="10" placeholder="输入姓名">
        <input type="text" name="phone" ref="add_phone" class="phone-input" min="8" max="13" maxlength="13" placeholder="输入手机号">
        <textarea name="adddress" ref="add_address" rows="4" cols="20" placeholder="详细地址" class="addresstext"></textarea>
        <div class="addressbtn" v-on:click="editAddress"></div>
    </div>

    <div class="wawalist">
     <!--  <div class="wawabox">
        <div class="wawaitem1">
          <img src="~assets/images/bear.jpg" alt="">
        </div>
        <div class="wawaitem2">
          <img src="~assets/images/bear.jpg" alt="">
        </div>
      </div> -->
    <!--   <div class="wawabox">
        <div class="wawaitem1">
          <img src="~assets/images/bear.jpg" alt="">
        </div>
        <div class="wawaitem2">
          <img src="~assets/images/bear.jpg" alt="">
        </div>
      </div> -->
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

    }
  },
  components: {
    footerBlock

  },
  computed:{

  },
  mounted:function(){
    // alert(localStorage.openid);
    // alert(localStorage.nickname);
    // alert(localStorage.headimgurl);

    var headimgurl=localStorage.headimgurl?localStorage.headimgurl:'http://wx.qlogo.cn/mmopen/mia54phWuEaibj8eNcMVuBMBCwh6qfD6LbXFKiazNdK7GxssznMcx4F6atFO164rW2k2V1QE7BASuOWPibR17SicN7w/0';
    var nickname=localStorage.nickname?localStorage.nickname:'传传';
    var openid=localStorage.openid?localStorage.openid:'oIrAps3LRdZIvvEHLQfKAx67pZiI';
    var gameMoney=localStorage.gameMoney?localStorage.gameMoney:0;
    var dollcount=localStorage.dollCount;

    this.headimgurl=headimgurl;
    this.nickname=nickname;
    this.openid=openid;
    this.mymoney=gameMoney;
    this.wawanumber=dollcount;

    function getCookie(c_name){
      if (document.cookie.length>0)
        {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
          { 
          c_start=c_start + c_name.length+1 
          c_end=document.cookie.indexOf(";",c_start)
          if (c_end==-1) c_end=document.cookie.length
          return unescape(document.cookie.substring(c_start,c_end))
          } 
        }
      return ""
    }

   
  },
  //1 前 2后 3左 4右 0
  methods:{
    showAddress:function(){
      this.showadd=true;
    },
    editAddress:function(){
      var token=localStorage.openid;
      token="0d40742f4aad4d82ad041ebdb6a6a391";
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
          this.showadd=false;
          // this.results = response.data.data;
         
          // console.log(this.results);
        }).catch( error => { console.log(error); });
    },
    gotoHomePage:function(id){
      this.$router.push({
        name:'Home'
      })
    },
    gotoMyPage:function(id){
      this.$router.push({
        name:'mypage'
      })
    },
    gotoSetPage:function(id){
      this.$router.push({
        name:'Setpage'
      })
    },
    gotoRankPage:function(){
      this.$router.push({
        name:'Rankpage'
      })
    }
     
  },
  created () {
   // this.startGame();
  }
  
}
</script>



<style scoped>

</style>

