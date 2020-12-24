<template>
  <div class="headerbar">
    <div class="header-box">
      <div class="logo"></div>
      <div class="login-box">
        <a v-on:click="gotCenterPage()">
          我的中心
          <span class="arrow"></span>
        </a>
        |
        <a href="sign.html">我的咨询</a>
        |
        <a href="sign.html">手机药得</a>
        |
        <a href="sign.html">联系客服</a>
        |
        <span v-if="!islogin"><a v-on:click="gotoRegPage()">注册</a>
        /
        <a v-on:click="gotoLoginPage()">登录</a></span>

        <span v-if="islogin"><a v-on:click="LoginOut()">退出</a>
        </span>
      </div>
    </div>
    <div class="nav-box">
      <div class="nav-list">
        <div class="nav-item" v-on:click="gotoWorldPages()">首页</div>
        <span>|</span>
        <div class="nav-item" v-on:click="gotoWorldPage()">
          全球找药
          <div class="hotico"></div>
        </div>
        <span>|</span>
        <div class="nav-item" v-on:click="gotoFreePage()">免费用药</div>
        <span>|</span>
        <div class="nav-item" v-on:click="gotoAboutPage()">关于药得</div>
        <span>|</span>
        <div class="nav-item" v-on:click="gotCenterPage()">个人中心</div>
        <span>|</span>   
        <div class="nav-item" v-on:click="gotoArtlistPage()">
          最新资讯
          <div class="newico"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  // props: {
  //   'hover':{
  //   type: Number,
  //   required : true
  //   }
  // },
  data() {
    return {
      nickname: "",
      islogin:false
    };
  },
  components: {},
  computed: {},
  mounted: function() {
    // console.log("header"+localStorage.token);
    if (localStorage.token.length>10) {
      // console.log("token="+localStorage.token);
      // console.log("token="+localStorage.token.length);
      this.islogin=true;
      let url = buildUrl("/index/center/index");
      axios
        .post(
          url,
          {
            
          },
          {
            headers: { token: localStorage.token }
          }
        )
        .then(response => {
          console.log(response.data);
          if (response.data.code==600000) {
             this.islogin=true;
          }else{
             this.islogin=false;
             localStorage.token="";
          }
          // this.drugitem.pic.forEach(element => {
          //   element.showimg = buildUrl(element.url);
          // });
        })
        .catch(error => {
          console.log(error);
        });
    }else{
      console.log("未登录");
      this.islogin=false;
    }



    let url = buildUrl("/index/index/baseinfo");
      axios
        .post(url, {
            uid: localStorage.uid,
        })
        .then(response => {
          console.log(response.data);
          if (response.data.code=="600000") {
              // console.log("成功");
             
          }else{
              console.log("失败原因："+response.data.msg);
          }
         
        })
        .catch(error => {
          console.log(error);
        });


  },
  methods: {
     gotoIndexPages: function() {
      console.log("gotoIndexPage");
      this.$router.push({
        name: "Index"
      });
    },
    gotoFreePage: function() {
      console.log("gotoFreePage");
      this.$router.push({
        name: "free"
      });
    },
    gotoWorldPage: function() {
      console.log("gotoWorldPage");
      this.$router.push({
        name: "World"
      });
    },
    gotoWorldPages: function() {
      console.log("gotoWorldPage");
      this.$router.push({
        name: "Index"
      });
    },
    gotoAboutPage: function() {
      console.log("gotoaboutPage");
      this.$router.push({
        name: "about"
      });
    },
      gotCenterPage: function() {
      console.log("gotocenterPage");
      this.$router.push({
        name: "center"
      });
    },

    gotoRegPage: function() {
      console.log("gotoRegPage");
      this.$router.push({
        name: "Reg"
      });
    },
     gotoArtlistPage: function() {
      console.log("gotoArtlistPage");
      this.$router.push({
        name: "Artlist"
      });
    },
    gotoLoginPage: function() {
      console.log("gotoLoginPage");

      this.$router.push({
        name: "Login"
      });
    },
     gotoLoginPagess: function() {
      console.log("gotoIndexIndexPage");

      this.$router.push({
        name: "Login"
      });
    },
    
    LoginOut: function() {
      let url = buildUrl("/index/index/logout");
      axios
        .post(url, {
            uid: localStorage.uid,
        })
        .then(response => {
          console.log(response.data);
          if (response.data.code=="600000") {
              // console.log("成功");
              localStorage.account="";
              localStorage.token="";
              localStorage.uid="";
              localStorage.username="";
               this.islogin=false;
             
          }else{
              console.log("失败原因："+response.data.msg);
          }
         
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>