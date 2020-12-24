<template>
  <div class="mainpage">
    <headerBlock></headerBlock>
    <div class="main-box self-box">
      <div class="login-title">个人信息</div>

      <div class="reg-line">
        <div class="login-type">昵称</div>
        <div class="inputbox">
          <input
            type="text"
            name
            class="login-name"
            placeholder="输入昵称"
            maxlength="11"
            min="2"
            max="11"
            v-model="nickname"
          />
        </div>
      </div>

      <div class="reg-line">
        <div class="login-type">手机号</div>
        <div class="inputbox">
          <input
            type="text"
            name
            class="login-name"
            v-model="tel"
            placeholder="输入手机号"
            maxlength="11"
            min="11"
            max="11"
          />
        </div>
      </div>

      <div class="reg-line">
        <div class="login-type">密码(留空则不修改)</div>
        <div class="inputbox">
          <input
            type="text"
            name
            class="login-name"
            placeholder="输入密码"
            maxlength="13"
            min="3"
            max="13"
            v-model="psw"
          />
        </div>
      </div>

      <div class="reg-line">
        <div class="login-type">邮箱</div>
        <div class="inputbox">
          <input
            type="text"
            name
            class="login-name"
            placeholder="输入邮箱"
            maxlength="11"
            min="2"
            max="11"
            v-model="email"
          />
        </div>
      </div>

      <div class="reg-line">
        <div class="login-type">生日</div>
        <div class="inputbox">
          <input
            type="text"
            name
            class="login-name"
            placeholder="输入生日"
            maxlength="11"
            min="2"
            max="11"
            v-model="birday"
          />
        </div>
      </div>

      <div class="reg-line reg-sex">
        <div class="login-type">性别</div>
        <div class="inputbox">
          <input type="radio" id="one" value="1" v-model="sex" />
          <label for="one">男</label>
          <br />
          <input type="radio" id="two" value="2" v-model="sex" />
          <label for="two">女</label>
        </div>
      </div>

      <div class="reg-line">
        <div class="login-type">年龄</div>
        <div class="inputbox">
          <input
            type="text"
            number
            class="login-name"
            placeholder="输入年龄"
            maxlength="2"
            min="1"
            max="2"
            v-model="age"
          />
        </div>
      </div>

      <div class="reg-line">
        <div class="login-type">地址</div>
        <div class="inputbox">
          <input
            type="text"
            number
            class="login-name"
            placeholder="输入地址"
            maxlength="30"
            min="1"
            max="30"
            v-model="address"
          />
        </div>
      </div>

       <div class="reg-line head-sex">
        <div class="login-type">头像</div>
        <div class="inputbox">
            <div class="hot-img-img" :style="{backgroundImage:'url('+headimg+')'}"></div>
         <input class="upload" @change='add_img'  type="file">
        </div>
      </div>

      <div class="login-btn">
        <button class="loginbtn" v-on:click="LoginFn">修改</button>
      </div>
    </div>
    <footerBlock></footerBlock>
  </div>
</template>


<script>
import footerBlock from "./../components/block/footer";
import headerBlock from "./../components/block/header";

export default {
  name: "Myself",
  data() {
    return {
      email: "",
      nickname: "",
      tel: "",
      psw: "",
      birday: "",
      account: "",
      sex: "",
      age: "",
      address: "",
      headimg:"",
       imgs: [],
        imgData: {
            accept: 'image/gif, image/jpeg, image/png, image/jpg',
        },

      userinfo: {
        id: 5,
        username: "asd",
        account: "zxc",
        psd: "202cb962ac59075b964b07152d234b70",
        tel: "12345678900",
        email: null,
        birthday: null,
        sex: 1,
        age: null,
        address: null,
        profile: "/storage/profile/profile.jpe",
        lastlogin: "2020-12-21 23:58:54",
        registertime: "2020-12-21 23:58:54",
        loginip: null
      }
    };
  },
  components: {
    footerBlock,
    headerBlock
  },
  computed: {},
  methods: {
      add_img(event){  
            let reader =new FileReader();
            let img1=event.target.files[0];
            let type=img1.type;//文件的类型，判断是否是图片
            let size=img1.size;//文件的大小，判断图片的大小
            if(this.imgData.accept.indexOf(type) == -1){
                alert('请选择我们支持的图片格式！');
                return false;
            }
            if(size>3145728){
                alert('请选择3M以内的图片！');
                return false;
            }
            var uri = ''
            let form = new FormData(); 
            let url = buildUrl("/index/drug/upload");

            form.append('file',img1,img1.name);
            axios
        .post(url,form,{
                headers:{'Content-Type':'multipart/form-data'}
            }).then(response => {
                console.log(response.data)
                uri = response.data.url
                reader.readAsDataURL(img1);
                var that=this;
                reader.onloadend=function(){
                    that.imgs.push(uri);
                }
            }).catch(error => {
                alert('上传图片出错！');
            })    
},
    wxpage: function(id) {},
    gotoDrugPage: function(id) {
      console.log("drug" + id);
    },
    GetInfo: function() {
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
          let info = response.data.data.userIdex[0];
          console.log(info);
          if (response.data.code == "600000") {
            this.nickname = info.username;
            this.email = info.email;
            this.tel = info.tel;
            this.psw = "";
            this.birday = info.birthday;
            this.sex = info.sex;
            this.age = info.age;
            this.address = info.address;

            console.log("this.nickname" + this.nickname);
          } else {
            console.log("失败原因：" + response.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    LoginFn: function() {
      console.log(this.nickname);
      //   var tel = this.$refs.add_tel.value;
      //   var psw = this.$refs.add_psw.value;
      //   var nick = this.$refs.add_nick.value;
      //   var account = this.$refs.add_account.value;
      //   // console.log(name);
      //   // console.log(psw);
      //   // console.log(nick);
      //   // console.log(account);

      //   let url = buildUrl("/index/index/register");
      //   axios
      //     .post(url, {
      //       tel: tel,
      //       passwd: psw,
      //       username: nick,
      //       account: account
      //     })
      //     .then(response => {
      //       console.log(response.data);
      //       if (response.data.code == "600000") {
      //         console.log("成功");
      //         this.$router.push({
      //           name: "Login"
      //         });
      //       } else {
      //         console.log("失败原因：" + response.data.msg);
      //       }
      //     })
      //     .catch(error => {
      //       console.log(error);
      //     });
    }
  },
  mounted() {
    this.GetInfo();
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
