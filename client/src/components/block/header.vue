<template>
  <div class="headerbar">
    <div class="header-box">
      <div class="logo" v-on:click="gotoIndexPages()"></div>
      <div class="login-box">
        <a href="/#/center/"
          v-on:click="gotCenterPage()"
          
          @mouseenter="focusThis()"
          @mouseleave="blurThis()"
        >
          我的中心
          <span class="arrow"></span>
        </a>
        |
        <a href="#">我的咨询</a>
        |
        <a href="#" @mouseenter="focusQR()" @mouseleave="blurQR()">手机药得</a>
        |
        <a href="#"> 联系客服</a>
        |
        <span v-if="!islogin">
          <a href="/#/reg/" v-on:click="gotoRegPage()">注册</a>
          /
          <a href="/#/login/" v-on:click="gotoLoginPage()">登录</a>
        </span>

        <span v-if="islogin">
          <a v-on:click="LoginOut()" href="#">{{username}} 退出</a>
        </span>
        <div class="centerbox" v-if="isshowpop" @mouseenter="focusThis()" @mouseleave="blurThis()">
          <div class="popbox">
            <div class="popitem" v-on:click="gotCenterPage()"><a href="/#/center/"> 我的收藏</a></div>
            <div class="popitem" v-on:click="gotoHistoryPage()"><a href="/#/myhistory/">浏览历史</a></div>
          </div>
        </div>

        <div class="qrcode" v-if="isshowqr" @mouseenter="focusQR()" @mouseleave="blurQR()"></div>
      </div>
    </div>
    <div class="nav-box">
      <div class="nav-list">
        <div class="nav-item" v-on:click="gotoWorldPages()"  v-bind:class="[showtype==0 ? 'ischoose' : '', ]"><a href="./#/">首页</a></div>
        <span>|</span>
        <a href="./#/world/"><div class="nav-item" v-bind:class="[showtype==1 ? 'ischoose' : '', ]"  v-on:click="gotoWorldPage()">
          全球找药
          <div class="hotico"></div>
        </div></a>
        <span>|</span>
        <div class="nav-item" v-on:click="gotoFreePage()" v-bind:class="[showtype==2 ? 'ischoose' : '', ]" ><a href="/#/free/">免费用药</a></div>
        <span>|</span>
         <div class="nav-item" v-on:click="gotoArtlistPage()" v-bind:class="[showtype==5 ? 'ischoose' : '', ]">
          <a href="/#/artlist/">最新资讯</a>
          <div class="newico"></div>
        </div> 
        <span>|</span>
        <div class="nav-item" v-on:click="gotCenterPage()" v-if="islogin" v-bind:class="[showtype==4 ? 'ischoose' : '', ]"><a href="/#/center/">个人中心</a></div>
        <span v-if="islogin">|</span>
        <div class="nav-item" v-on:click="gotoAboutPage()" v-bind:class="[showtype==3 ? 'ischoose' : '', ]"><a href="/#/about/">关于药得</a></div>
       
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
      islogin: false,
      isshowpop: false,
      isshowqr: false,
      username:"",
      showtype:0
    };
  },
  components: {},
  computed: {},
  mounted: function() {
    // console.log("header"+localStorage.token);
    if (localStorage.token.length > 10) {
      // console.log("token="+localStorage.token);
      // console.log("token="+localStorage.token.length);
      this.islogin = true;
      let url = buildUrl("/index/center/index");
      axios
        .post(
          url,
          {},
          {
            headers: { token: localStorage.token }
          }
        )
        .then(response => {
          // console.log(response.data);
          if (response.data.code == 600000) {
            this.islogin = true;
            this.username=response.data.data.userIdex[0].username;
            // console.log(response.data.data.userIdex[0]);
            // console.log(" this.username"+ this.username);
          } else {
            this.islogin = false;
            localStorage.token = "";
          }
          // this.drugitem.pic.forEach(element => {
          //   element.showimg = buildUrl(element.url);
          // });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log("未登录");
      this.islogin = false;
    }

    let url = buildUrl("/index/index/baseinfo");
    axios
      .post(url, {
        uid: localStorage.uid
      })
      .then(response => {
        // console.log(response.data);
        if (response.data.code == "600000") {
          // console.log("成功");
        } else {
          console.log("失败原因：" + response.data.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });

      //
      console.log(this.$route.path);
      if (this.$route.path=="/world"||this.$route.path=="/drug") {
        this.showtype=1;
      }else  if (this.$route.path=="/free"||this.$route.path=="/exper") {
        this.showtype=2;
      }else  if (this.$route.path=="/about") {
        this.showtype=3;
      }else  if (this.$route.path=="/center"||this.$route.path=="/myhistory"||this.$route.path=="/myself"||this.$route.path=="/reg"||this.$route.path=="/login") {
        this.showtype=4;
      }else  if (this.$route.path=="/artlist"||this.$route.path=="/artdes") {
        this.showtype=5;
      }else{
        this.showtype=0;
      }
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      console.log(to);
      console.log(from);
    }
  },
   beforeRouteUpdate (to, from, next) {
    console.log(to);
    console.log(from);
    console.log(next);
  },
  methods: {
    focusQR: function() {
      this.isshowqr = true;
    },
    blurQR: function() {
      this.isshowqr = false;
    },
    focusThis: function() {
      // console.log("focusThis");
      this.isshowpop = true;
    },
    blurThis: function() {
      this.isshowpop = false;
    },
    gotoIndexPages: function() {
      console.log("gotoIndexPage");
      this.showtype=0;
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
      this.showtype=1;
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
    gotoHistoryPage: function() {
      console.log("gotoMyHistoryPage");
     
      if (localStorage.token.length > 10) {
        this.$router.push({
        name: "MyHistory"
      });
      } else {
        this.$router.push({
          name: "Login"
        });
      }
    },
    gotCenterPage: function() {
      console.log("gotocenterPage");
      if (localStorage.token.length > 10) {
        this.$router.push({
          name: "center"
        });
      } else {
        this.$router.push({
          name: "Login"
        });
      }
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
          uid: localStorage.uid
        })
        .then(response => {
          console.log(response.data);
          if (response.data.code == "600000") {
            // console.log("成功");
            localStorage.account = "";
            localStorage.token = "";
            localStorage.uid = "";
            localStorage.username = "";
            this.islogin = false;
          } else {
            console.log("失败原因：" + response.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>