<template>
  <div class="mainpage">
    <headerBlock></headerBlock>

    <searchBlock></searchBlock>

    <div class="main-box exper-box">
      <div class="exper-titlebox">
        <div class="tilte-title">{{experitem.title}}</div>
        <!-- <div class="title-en">品牌及其他姓名：{{drugitem.e_name}}</div>
        <div class="title-en">类别：抗肿瘤药物，抗HER2；抗肿瘤药物，酪氨酸激酶抑制剂；抗肿瘤药物，EGFR抑制剂</div>
        <div class="favor-box">
          <button v-on:click="FavorThis()">收藏</button>
        </div>-->
      </div>

      <div class="exper-des-type">
        <div class="des-type choosetype">免费试验用药</div>
        <div class="des-type">慈善赠药</div>
      </div>

      <div class="exper-des-des">
        <div class="exper-des-state">
          招募状态
          <span>免费入组</span>
        </div> 
       
        <div class="exper-des-des-state" v-if="experitem.recruit==0">招募中</div>
        <div class="exper-des-des-state" v-if="experitem.recruit==1">未招募</div>
        <div class="exper-des-des-state2">提示：找不到相关临床试验项目？没关系，联系我们，为您精准匹配！</div>
        <div class="favor-box" v-if="experitem.collect==0">
          <button v-on:click="FavorThis()">收藏</button>
        </div>
         <div class="favor-box" v-if="experitem.collect==1">
          <button v-on:click="CancelFavorThis()">取消收藏</button>
        </div>
      </div>

      <div class="exper-des-box">
        <div class="des-type">
          <div class="type-item choose">试验详情</div>
          <div class="type-item">项目介绍</div>
        </div>
        <div class="des-des">
         {{experitem.content}}
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
  name: "exper",
  data() {
    return {
      msg: "",
      experitem: {},
      ActiveType: 1,
      ActiveSbuType: 1
      //   activeClass:"activeClass"
    };
  },
  components: {
    footerBlock,
    headerBlock,
    searchBlock
  },
  computed: {},
  methods: {
      CancelFavorThis: function() {
      if (this.experitem.id > 0 && localStorage.token.length > 10) {
        let url = buildUrl("/index/exper/cancel_collect");
        axios
          .post(
            url,
            {
              // token: localStorage.token,
              id: this.experitem.id
            },
            {
              headers: { token: localStorage.token }
            }
          )
          .then(response => {
            console.log(response.data);
            if (response.data.code == "600000") {
              console.log("成功");

              this.InitData();
            } else {
              console.log("失败原因：" + response.data.msg);
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log("信息有问题");
      }
    },
    FavorThis: function() {
      if (this.experitem.id > 0 && localStorage.token.length > 10) {
        let url = buildUrl("/index/exper/collect");
        axios
          .post(
            url,
            {
              // token: localStorage.token,
              id: this.experitem.id
            },
            {
              headers: { token: localStorage.token }
            }
          )
          .then(response => {
            console.log(response.data);
            console.log(response.data.code);
            if (response.data.code == "600000") {
              console.log("成功");

              this.InitData();
            } else {
              console.log("失败原因：" + response.data.msg);
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log("信息有问题");
      }
    },
    wxpage: function(id) {},
    gotoDrugPage: function(id) {
      // this.$router.push({
      //   name:'livepage',
      //   params:{liveid:id}
      // })
    },
    ShowDesType: function(typeid) {
      this.ActiveType = typeid;
    },
    ShowSubType: function(typeid) {
      console.log("ShowSubType=" + typeid);
      this.ActiveSbuType = typeid;
    },
    InitData: function() {
      var experid = this.$route.params.experid;
    console.log("drug=" + experid);

    let url = buildUrl("/index/exper/detail");
    axios
      .post(
            url,
            {
              id: experid
            },
            {
              headers: { token: localStorage.token }
            }
          )
      .then(response => {
        console.log(response.data.data);
        this.experitem = response.data.data;

        // this.drugitem.pic.forEach(element => {
        //   element.showimg = buildUrl(element.url);
        // });
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
  mounted() {
    this.InitData();
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
