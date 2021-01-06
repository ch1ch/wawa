<template>
  <div class="mainpage">
    <headerBlock></headerBlock>

    <searchBlock></searchBlock>

    <div class="main-box drugdes-box">
      <div class="drug-title">
        <div class="tilte-title">{{drugitem.c_name}}</div>
        <div class="title-en">品牌及其他姓名：{{drugitem.e_name}}</div>
        <div class="title-en">类别：抗肿瘤药物，抗HER2；抗肿瘤药物，酪氨酸激酶抑制剂；抗肿瘤药物，EGFR抑制剂</div>
        <div class="favor-box" v-if="drugitem.collect==0 &&islogin">
          <button v-on:click="FavorThis()">收藏</button>
        </div>
        <div class="favor-box" v-if="drugitem.collect==1&&islogin">
          <button v-on:click="CancelFavorThis()">取消收藏</button>
        </div>
      </div>
      <div class="drug-des-box">
        <div class="drug-des-left">
          <div
            v-bind:class="[ActiveType==1 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(1)"
          >使用信息</div>
          <div
            v-bind:class="[ActiveType==13 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(13)"
          >剂量说明</div>
           <div
            v-bind:class="[ActiveType==14 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(14)"
          >适应症</div>

          <div
            v-bind:class="[ActiveType==2 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(2)"
          >药物互相作用</div>
          <div
            v-bind:class="[ActiveType==3 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(3)"
          >副作用</div>
          <div
            v-bind:class="[ActiveType==4 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(4)"
          >注意事项</div>
          <div
            v-bind:class="[ActiveType==5 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(5)"
          >孕妇注意</div>
          <div
            v-bind:class="[ActiveType==6 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(6)"
          >药理</div>
          <div
            v-bind:class="[ActiveType==7 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(7)"
          >用前须知</div>
          <div
            v-bind:class="[ActiveType==9 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(9)"
          >服用方法</div>
          <div
            v-bind:class="[ActiveType==10 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(10)"
          >服用过量处理</div>
         
          <div
            v-bind:class="[ActiveType==8 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(8)"
          >药品图片</div>
          <!-- <div
            v-bind:class="[ActiveType==8 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(11)"
          >免费用药临床试验</div>
          <div
            v-bind:class="[ActiveType==8 ? 'activeClass' : '', ]"
            class="drug-des-left-item"
            v-on:click="ShowDesType(12)"
          >厂家赠药信息</div>-->
        </div>

        <div class="drug-des-right">
          <div class="drug-type" v-if="ActiveType==1">
            <div class="type-title">使用信息</div>
            <div class="type1-type">
              <div
                class="type1-subtype"
                v-on:click="ShowSubType(1)"
                v-bind:class="[ActiveSbuType==1 ? 'type1-subtypeA' : '', ]"
              >成人</div>
              <div
                class="type1-subtype"
                v-on:click="ShowSubType(2)"
                v-bind:class="[ActiveSbuType==2 ? 'type1-subtypeA' : '', ]"
              >儿童</div>
            </div>
            <div class="type-des" v-if="ActiveSbuType==1" v-html="drugitem.p_info"></div>
            <div class="type-des" v-if="ActiveSbuType==2" v-html="drugitem.c_info"></div>
          </div>

          <div class="drug-type" v-if="ActiveType==2">
            <div class="type-title">药物互相作用</div>
            <div class="type-des" v-html="drugitem.interactions"></div>
          </div>

          <div class="drug-type" v-if="ActiveType==3">
            <div class="type-title">副作用</div>
            <div class="type-des" v-html="drugitem.effect"></div>
          </div>

          <div class="drug-type" v-if="ActiveType==4">
            <div class="type-title">注意事项</div>
            <div class="type-des" v-html="drugitem.waring"></div>
          </div>

          <div class="drug-type" v-if="ActiveType==5">
            <div class="type-title">孕妇注意</div>
            <div class="type-des" v-html="drugitem.pregnant"></div>
          </div>

          <div class="drug-type" v-if="ActiveType==6">
            <div class="type-title">药理</div>
            <div class="type-des" v-html="drugitem.pharmacology"></div>
          </div>

          <div class="drug-type" v-if="ActiveType==7">
            <div class="type-title">用前须知</div>
            <div class="type-des" v-html="drugitem.before"></div>
          </div>

          <div class="drug-type" v-if="ActiveType==9">
            <div class="type-title">服用方法</div>
            <div class="type-des" v-html="drugitem.method"></div>
          </div>

          <div class="drug-type" v-if="ActiveType==10">
            <div class="type-title">服用过量处理</div>
            <div class="type-des" v-html="drugitem.treatment"></div>
          </div>

          <div class="drug-type" v-if="ActiveType==13">
            <div class="type-title">剂量说明</div>
            <div class="type-des" v-html="drugitem.dose"></div>
          </div>

           <div class="drug-type" v-if="ActiveType==14">
            <div class="type-title">适应症</div>
            <div class="type-des" v-html="drugitem.adaptation"></div>
          </div>

          <div class="drug-type" v-if="ActiveType==8">
            <div class="type-title">药品图片</div>
            <div class="pic-list">
              <div class="pic-item" v-for="item in drugitem.pic" v-bind:key="item.id">
                <div class="pic-item-img" :style="{backgroundImage:'url('+item.showimg+')'}"></div>
              </div>
            </div>
          </div>

          <!-- <div class="drug-type" v-if="ActiveType==11">
            <div class="type-title">免费用药临床试验</div>
            <div class="type-des">{{drugitem.waring}}</div>
          </div>

          <div class="drug-type" v-if="ActiveType==12">
            <div class="type-title">厂家赠药信息</div>
            <div class="type-des">{{drugitem.waring}}</div>
          </div>-->
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
  name: "drug",
  data() {
    return {
      msg: "",
      drugitem: {},
      ActiveType: 1,
      ActiveSbuType: 1,
      islogin: false,
      drugidquery:"",
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
      // console.log(this.drugitem.id.length);
      // console.log(this.drugitem.id);
      // console.log(localStorage.token.length);
      if (this.drugitem.id > 0 && localStorage.token.length > 10) {
        let url = buildUrl("/index/drug/cancel_collect");
        axios
          .post(
            url,
            {
              // token: localStorage.token,
              id: this.drugitem.id
            },
            {
              headers: { token: localStorage.token }
            }
          )
          .then(response => {
            console.log(response.data);
            if (response.data.code == "600000") {
              console.log("成功");
              this.Initdata();
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
      // console.log(this.drugitem.id.length);
      // console.log(this.drugitem.id);
      // console.log(localStorage.token.length);
      if (this.drugitem.id > 0 && localStorage.token.length > 10) {
        let url = buildUrl("/index/drug/collect");
        axios
          .post(
            url,
            {
              // token: localStorage.token,
              id: this.drugitem.id
            },
            {
              headers: { token: localStorage.token }
            }
          )
          .then(response => {
            console.log(response.data);
            if (response.data.code == "600000") {
              console.log("成功");
              this.Initdata();
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
    Initdata: function() {
      var drugid = this.$route.params.drugid;
      // console.log(this.drugidquery);
      if (this.drugidquery.length>0) {
        drugid=this.drugidquery;
      }
      // console.log("drug=" + drugid);

      let url = buildUrl("/index/drug/detail");
      axios
        .post(
          url,
          {
            id: drugid
          },
          {
            headers: { token: localStorage.token }
          }
        )

        .then(response => {
          console.log(response.data.data);
          this.drugitem = response.data.data;

          this.drugitem.pic.forEach(element => {
            element.showimg = buildUrl(element.url);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      // console.log(to);
      // console.log(from);
    }
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(to);
    // console.log(to.query);
    // console.log(from);
    // console.log(next);
    this.drugidquery=to.query.drugid;
    // console.log("drugidquery="+this.drugidquery);
    this.Initdata();
  },
  updated: function () {
  this.$nextTick(function () {
    // console.log("updata");
  })
},
  mounted() {
    this.Initdata();
    if (localStorage.token.length > 10) {
      this.islogin = true;
    } else {
      this.islogin = false;
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
