<template>
  <div class="mainpage">
    <headerBlock></headerBlock>

    <searchBlock></searchBlock>

    <div class="main-box my-box">
      <div class="my-boxs">
        <div class="left-menu">
         
          <div class="menu-item" v-on:click="gotoCenterPage()">
            我的收藏
            <span></span>
          </div>
          <div class="menu-item choose" v-on:click="gotoHistoryPage()">
            浏览历史
            <span></span>
          </div>
          <div class="menu-item">
            意见反馈
            <span></span>
          </div>
           <div class="menu-item">
            我的咨询
            <span></span>
          </div>
          <div class="menu-item" v-on:click="gotoSelfPage()">
            个人信息
            <span></span>
          </div>
        </div>
        <div class="right-list">
          <!-- <div class="right-ico"></div>
          <div class="right-line"></div>
          <div class="right-collect">
            <table class="labs-table" id="labs-table">
           

              <tr v-for="item in collectlist" v-bind:key="item.id">
                <td style="width: 150px;" v-if="item.type==1">药品</td>
                <td style="width: 150px;" v-if="item.type==2">实验</td>
                <td style="width: 150px;" v-if="item.type==3">文章</td>

                <td style="width: 450px;" v-if="item.type==1">{{item.c_name}}</td>
                <td style="width: 450px;" v-if="item.type==2">{{item.title}}</td>
                <td style="width: 450px;" v-if="item.type==3">{{item.title}}</td>

                <td style="width: 250px;">{{item.datetime}}</td>
              </tr>
            </table>
          </div> -->

          <div class="right-ico2"></div>
          <div class="right-line"></div>
          <div class="right-collect">
            <table class="labs-table" id="labs-table">
              <!-- <thead>
                <td style="width: 150px;">类别</td>
                <td style="width: 450px;">名称</td>
                <td style="width: 250px;">时间</td>
              </thead> -->
              <tr v-for="item in borwnlist" v-bind:key="item.id">
                <td style="width: 150px;" v-if="item.type==1">药品</td>
                <td style="width: 150px;" v-if="item.type==2">实验</td>
                <td style="width: 150px;" v-if="item.type==3">文章</td>

                <td style="width: 450px;" v-if="item.type==1">{{item.c_name}}</td>
                <td style="width: 450px;" v-if="item.type==2">{{item.title}}</td>
                <td style="width: 450px;" v-if="item.type==3">{{item.title}}</td>

                <td style="width: 250px;">{{item.datetime}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <footerBlock></footerBlock>
  </div>
</template>


<script>
import footerBlock from "./../components/block/footer";
import headerBlock from "./../components/block/header";
import searchBlock from "./../components/block/search";

export default {
  name: "center",
  data() {
    return {
      msg: "",
      collectlist: [],
      borwnlist: []
    };
  },
  components: {
    footerBlock,
    headerBlock,
    searchBlock
  },
  computed: {},
  methods: {
    InitData: function() {
      var experid = this.$route.params.experid;
      console.log("drug=" + experid);

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
          console.log(response.data.data);
          this.collectlist = response.data.data.collect;
          for (let index = this.collectlist - 1; index >= 0; index) {
            const element = array[index];
            if (element.id) {
            } else {
              this.collectlist.splice(index, 1);
            }
          }

          this.borwnlist = response.data.data.browse;
          for (let index = this.borwnlist - 1; index >= 0; index) {
            const element = array[index];
            if (element.id) {
            } else {
              this.borwnlist.splice(index, 1);
            }
          }
          console.log(this.collectlist);
        })
        .catch(error => {
          console.log(error);
        });
    },
    gotoRegPage: function() {
      console.log("gotoLoginPage");
      this.$router.push({
        name: "Login"
      });
    },
    gotoSelfPage: function() {
      console.log("gotoMyselfPage");
      this.$router.push({
        name: "Myself"
      });
    },
     gotoHistoryPage: function() {
      console.log("gotoMyHistoryPage");
      this.$router.push({
        name: "MyHistory"
      });
    },
     gotoCenterPage: function() {
      console.log("gotoMyHistoryPage");
      this.$router.push({
        name: "center"
      });
    },
  },
  mounted() {
    // console.log("localStorage.token"+localStorage.token);
    // console.log("localStorage.token"+localStorage.token.length);
    if (localStorage.token.length > 2) {
      this.InitData();
    } else {
      this.gotoRegPage();
    }
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
