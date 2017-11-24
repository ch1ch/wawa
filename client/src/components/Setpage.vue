<template>
  <div class="setpage">
    <div class="settop">
    </div>
    <div class="leftbox">
      <div class="setitem setitem2">
        <p><span>通</span>知中心</p>
      </div>

      <div class="setitem " v-on:click="gotoMyInve()">
        <p><span>邀</span>请奖励</p>
      </div>
      <div class="setitem setitem2" v-on:click="gotoInve()">
        <p><span>输</span>入邀请码</p>
      </div>



      <div class="setitem" v-on:click="gotoHelp()"  >
        <p><span>问</span>题反馈</p>
      </div>      
    </div>

    <div class="helpbox" v-on:click="hideHelp()" v-if="helpshow==true"></div>

    <div class="invebox" v-if="inveshow==true">
       <input type="text" name="name" ref="add_inve" class="inve-input" maxlength="10" min="2" max="10" placeholder="输入邀请">

       <div class="inte-btn" v-on:click="hideInve()" ></div>

    </div>

    <div class="logbox" v-if="logshow==true">
        <div class="msgbox">{{logs}}</div>

       <div class="log-btn" v-on:click="hidelog()" ></div>
    </div>

    <div class="myinvebox" v-if="myinveshow==true">
        <div class="msgbox">{{myinves}}</div>

       <div class="log-btn" v-on:click="hideMyinve()" ></div>
    </div>

    <footerBlock></footerBlock>

  </div>

</template>


<script>
import footerBlock from './../components/block/footer'


export default {
  name: 'Setpage',
  data () {

    return {
      msg: 'setting',
      headimgurl:'',
      nickname:'',
      openid:'',
      helpshow:false,
      inveshow:false,
      myinveshow:false,
      myinves:"",
      logs:"",
      logshow:false,
    }
  },
  components: {
    footerBlock

  },
  computed:{

  },
  mounted:function(){
    console.log();
    var token=localStorage.openid;

    let url = buildUrl('user/getUserInfo');
      axios.get(url, {
        params: {
          'token': token
         
        }
      }).then((response) => {
        console.log(response.data.data);
        this.myinves=response.data.data.invitationCode;
      
      }).catch( error => { console.log(error); });
  },
  methods:{
    gotoHelp:function(){
      this.helpshow=true;
    },
    hideHelp:function(){
      this.helpshow=false;
    },
    gotoInve:function(){
      this.inveshow=true;
    },
    hideInve:function(){
      var that=this;
      that.inveshow=false;
      var token=localStorage.openid;
      // this.myinves=localStorage.invitationCode;

      // token="0d40742f4aad4d82ad041ebdb6a6a391";
      let url = buildUrl('user/invitation');
      var code= this.$refs.add_inve.value;
 
        axios.get(url, {
          params: {
            'token': token,
            'code':code,

          }
        }).then((response) => {
          console.log(response.data);
          that.showadd=false;
          if (response.data.code!=200) {
            that.logshow=true;
            that.logs=response.data.error;
          };
          // this.results = response.data.data;
          // console.log(this.results);
        }).catch( error => { 
          console.log(error.error);
          
        });

    },

    hidelog:function(){
      this.logshow=false;
    },

    gotoMyInve:function(){
      this.myinveshow=true;
    },

    hideMyinve:function(){
      this.myinveshow=false;
    },
     
  },
  created () {
   // this.startGame();
  }
  
}
</script>



<style scoped>

</style>

