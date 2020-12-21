<template>
  <div class="headerbar">
    <div class="header-box">
      <div class="logo"></div>
      <div class="login-box">
        <a href="sign.html">
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
        <a href="sign.html">注册</a>
        /
        <a href="login.html">登录</a>
      </div>
    </div>
    <div class="nav-box">
      <div class="nav-list">
        <div class="nav-item">首页</div>
        <span>|</span>
        <div class="nav-item">
          全球找药
          <div class="hotico"></div>
        </div>
        <span>|</span>
        <div class="nav-item">免费用药</div>
        <span>|</span>
        <div class="nav-item">关于药得</div>
        <span>|</span>
        <div class="nav-item">个人中心</div>
        <span>|</span>
        <div class="nav-item">
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
      msg: "live",
      headimgurl: "",
      nickname: "",
      openid: ""
    };
  },
  components: {},
  computed: {},
  mounted: function() {
    console.log();
  },
  methods: {
   
  }
};
</script>