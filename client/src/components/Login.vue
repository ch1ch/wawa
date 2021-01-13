<template>
  <div class="mainpage">
    <headerBlock></headerBlock>
    <div class="main-box logins-box">
      <div class="login-title">登录</div>
      <div class="login-type2"></div>
      <input
        type="text"
        name
        id="username"
        class="login-name"
        ref="add_name"
        placeholder="输入手机号"
        maxlength="11"
        min="11"
        max="11"
      />
      <div class="login-type2"></div>
      <input
        type="password"
        name
        id="password"
        class="login-name"
        ref="add_psw"
        placeholder="输入密码"
        maxlength="13"
        min="3"
        max="13"
      />
      <div class="login-btn">
        <button class="loginbtn" v-on:click="LoginFn">登录</button>
      </div>
    </div>
    <footerBlock></footerBlock>
  </div>
</template>


<script>
import footerBlock from "./../components/block/footer";
import headerBlock from "./../components/block/header";

export default {
  name: "login",
  data() {
    return {
      msg: "",
      durgList: [],
      username: "",
      password: "",
      add_name: "",
      add_psw: ""
    };
  },
  components: {
    footerBlock,
    headerBlock
  },
  computed: {},
  methods: {
    wxpage: function(id) {},
    gotoDrugPage: function(id) {
      console.log("drug" + id);
      //    this.$router.push({
      //       name:'Drug',
      //       params:{drugid:id}
      //     })
    },
    LoginFn: function() {
      var name = this.$refs.add_name.value;
      var psw = this.$refs.add_psw.value;
      // console.log(name);
      // console.log(psw);

      let url = buildUrl("/index/index/login");
      axios
        .post(url, {
          tel: name,
          passwd: psw
        })
        .then(response => {
          console.log(response.data);
          if (response.data.code == "600000") {
            console.log("login成功"+localStorage.token);
            localStorage.account = response.data.data.account;
            localStorage.token = response.data.data.token;
            localStorage.uid = response.data.data.uid;
            localStorage.username = response.data.data.username;
            this.$router.push({
              name: "Index"
            });
          } else {
            console.log("失败原因：" + response.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    // let url = buildUrl("/index/drug/index");
    // axios
    //   .get(url, {
    //     params: {
    //       // 'fid': 0
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data.data);
    //     this.drugtypelist = response.data.data;
    //     this.drugtypelist.forEach(element => {
    //       // element.showimg = buildUrl(element.pic[0].url);
    //       element.list.forEach(subelement => {
    //           this.durgList.push(subelement);
    //       });
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
