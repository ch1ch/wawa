<template>
  <div class="mainpage">
    <headerBlock></headerBlock>
    <div class="main-box reg-box">
      <div class="login-title">注册</div>

      <div class="reg-line">
        <div class="login-type2"></div>
        <div class="inputbox">
          <input
            type="text"
            name
            id="nickname"
            class="login-name"
            ref="add_nick"
            placeholder="输入昵称"
            maxlength="11"
            min="2"
            max="11"
          />
        </div>
      </div>

      <div class="reg-line">
        <div class="login-type2"></div>
        <div class="inputbox">
          <input
            type="text"
            name
            id="useraccount"
            class="login-name"
            ref="add_account"
            placeholder="输入帐号"
            maxlength="11"
            min="2"
            max="11"
          />
        </div>
      </div>

      <div class="reg-line">
        <div class="login-type2"></div>
        <div class="inputbox">
          <input
            type="text"
            name
            id="username"
            class="login-name"
            ref="add_tel"
            placeholder="输入手机号"
            maxlength="11"
            min="11"
            max="11"
          />
        </div>
      </div>

      <div class="reg-line">
        <div class="login-type2"></div>
        <div class="inputbox">
          <input
            type="text"
            name
            id="password"
            class="login-name"
            ref="add_psw"
            placeholder="输入密码"
            maxlength="13"
            min="3"
            max="13"
          />
        </div>
      </div>

      <div class="login-btn">
        <button class="loginbtn" v-on:click="LoginFn">注册</button>
      </div>
    </div>
    <footerBlock></footerBlock>
  </div>
</template>


<script>
import footerBlock from "./../components/block/footer";
import headerBlock from "./../components/block/header";

export default {
  name: "reg",
  data() {
    return {
      username: "",
      password: "",
      add_tel: "",
      add_psw: "",
      add_nick: "",
      add_account: ""
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
      var tel = this.$refs.add_tel.value;
      var psw = this.$refs.add_psw.value;
      var nick = this.$refs.add_nick.value;
      var account = this.$refs.add_account.value;
      // console.log(name);
      // console.log(psw);
      // console.log(nick);
      // console.log(account);

      let url = buildUrl("/index/index/register");
      axios
        .post(url, {
          tel: tel,
          passwd: psw,
          username: nick,
          account: account
        })
        .then(response => {
          console.log(response.data);
          if (response.data.code == "600000") {
            console.log("成功");
            this.$router.push({
              name: "Login"
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
