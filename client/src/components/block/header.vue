<template>
  <div class="headerbar">
    <div class="header-box">
      <div class="logo"></div>
      <div class="login-box">
        <a href="/#/center/"
          v-on:click="gotCenterPage()"
          v-if="islogin"
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
          <a v-on:click="LoginOut()" href="#">退出</a>
        </span>
        <div class="centerbox" v-if="isshowpop" @mouseenter="focusThis()" @mouseleave="blurThis()">
          <div class="popbox">
            <div class="popitem" v-on:click="gotCenterPage()"><a href="/#/center/"> 我的收藏</a></div>
            <div class="popitem" v-on:click="gotCenterPage()"><a href="/#/center/">浏览历史</a></div>
          </div>
        </div>

        <div class="qrcode" v-if="isshowqr" @mouseenter="focusQR()" @mouseleave="blurQR()"></div>
      </div>
    </div>
    <div class="nav-box">
      <div class="nav-list">
        <div class="nav-item" v-on:click="gotoWorldPages()"><a href="./#/">首页</a></div>
        <span>|</span>
        <a href="./#/world/"><div class="nav-item" v-on:click="gotoWorldPage()">
          全球找药
          <div class="hotico"></div>
        </div></a>
        <span>|</span>
        <div class="nav-item" v-on:click="gotoFreePage()"><a href="/#/free/">免费用药</a></div>
        <span>|</span>
        <div class="nav-item" v-on:click="gotoAboutPage()"><a href="/#/about/">关于药得</a></div>
        <span>|</span>
        <div class="nav-item" v-on:click="gotCenterPage()"><a href="/#/center/">个人中心</a></div>
        <span>|</span>
        <div class="nav-item" v-on:click="gotoArtlistPage()">
          <a href="/#/artlist/">最新资讯</a>
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
      islogin: false,
      isshowpop: false,
      isshowqr: false
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