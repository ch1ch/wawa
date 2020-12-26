<template>
  <div class="mainpage">
    <headerBlock></headerBlock>

    <searchBlock></searchBlock>

    <div class="main-box free-box">
      <div class="worlddrug-typelist">
        <!-- <div class="worlddrug-ico"></div> -->
        <!-- <div class="worlddrug-line"></div> -->
        <div class="worlddrug-box" id="worlddrug-box">
          <div class="drug-box">
            <div class="drug-title">疾病:</div>
            <div class="drug-list">
              <div class="drug-item" v-bind:class="[durgtype==0 ? 'choose' : '', ]">
                <a v-on:click="GetDrugList(0)">不限</a>
              </div>
              <div
                class="drug-item"
                v-bind:class="[durgtype==subitem.id ? 'choose' : '', ]"
                v-for="subitem in drugtypelist"
                v-bind:key="subitem.id"
                v-on:click="GetDrugList(subitem.id)"
              >{{subitem.dname}}</div>
            </div>
          </div>
          <div class="drug-box">
            <div class="drug-title">分类:</div>
            <div class="drug-list">
              <div
                class="drug-item"
                v-bind:class="[durgsubtype==1 ? 'choose' : '', ]"
                v-on:click="GetSubtype(1)"
              >免费实验用药</div>
              <div
                class="drug-item"
                v-bind:class="[durgsubtype==2 ? 'choose' : '', ]"
                v-on:click="GetSubtype(2)"
              >慈善赠药</div>
            </div>
          </div>
          <div class="drug-box-line"></div>
        </div>
      </div>

      <div class="expnum-box" v-if="showexper">
        共匹配到
        <span>{{expnum}}</span>个项目
      </div>

      <div class="labs-list" v-if="showexper">
        <!-- <div class="labs-ico"></div>
        <div class="labs-line"></div>-->
        <div class="labs-box" id="labs-box">
          <table class="labs-table" id="labs-table">
            <thead>
              <td style="width: 250px;">试验治疗方案</td>
              <td style="width: 100px;">治疗阶段</td>
              <td style="width: 250px;">药物名称</td>
              <td style="width: 100px;">招募状态</td>
              <td style="width: 250px;">适应症</td>
            </thead>

            <tr v-for="item in experlist" v-bind:key="item.id" v-on:click="gotoExperPage(item.id)">
              <td style="width: 250px;">{{item.title}}</td>
              <td style="width: 100px;">一线（初治）</td>
              <td style="width: 250px;">{{item.shorttitle}}</td>
              <!-- <td style="width: 100px;" v-if="item.recruit==0">招募中</td>
              <td style="width: 100px;" v-if="item.recruit==1">未招募</td>-->
              <td style="width: 100px;">{{item.pharmacology}}</td>
              <td style="width: 250px;">{{item.effect}}</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="worlddrug-list" v-if="!showexper">
        <div
          class="drug-item"
          v-for="item in druglist"
          v-bind:key="item.id"
          v-on:click="GetExperList(item.drug_id)"
        >
          <div class="drug-title">{{item.drug.c_name}}</div>
          <div class="drug-des">规格：{{item.drug.dose}}</div>
          <div class="drug-zheng">适应症： {{item.drug.effect}}</div>
          <div class="drug-liang">用法用量：{{item.drug.p_info}}</div>
          <!-- <div class="drug-chang">生产厂商： {{item.dose}}</div> -->

          <div class="drug-image" :style="{backgroundImage:'url('+item.showimg+')'}"></div>
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
  name: "free",
  data() {
    return {
      msg: "",
      durgtype: 0,
      durgsubtype: 1,
      experlist: [],
      drugtypelist: [],
      druglist: [],
      showdrug: false,
      showexper: false,
      expnum: 0
    };
  },
  components: {
    footerBlock,
    headerBlock,
    searchBlock
  },
  computed: {},
  methods: {
    wxpage: function(id) {},
    getListPage: function(listType, CharitableID) {},

    gotoExperPage: function(id) {
      console.log("experid=" + id);
      this.$router.push({
        name: "Exper",
        params: { experid: id }
      });
    },

    GetSubtype: function(subid) {
      this.durgsubtype = subid;
      this.GetDrugList(0);
    },

    GetDrugList: function(drseaseid) {
      this.durgtype = drseaseid;
      this.showexper = false;
      let url = buildUrl("/index/Charitable/index");
      let drsease_id = this.durgtype == 0 ? "" : this.durgtype;
      axios
        .get(url, {
          params: {
            drsease_id: drsease_id,
            iteam: this.durgsubtype
          }
        })
        .then(response => {
          console.log(response.data.data.data);
          this.druglist = response.data.data.data;

          this.druglist.forEach(element => {
            element.showimg = buildUrl(element.drug.pic[0].url);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    GetExperList: function(drugid) {
      this.showexper = true;
      let url = buildUrl("/index/exper/index");
      let drsease_id = this.durgtype == 0 ? "" : this.durgtype;
      axios
        .get(url, {
          params: {
            drug_id: drugid
          }
        })
        .then(response => {
          console.log(response.data.data.data);
          this.experlist = response.data.data.data;
          if (this.experlist.length == 0) {
            this.showexper = false;
          }
          // this.druglist.forEach(element => {
          //   element.showimg = buildUrl(element.pic[0].url);
          // });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    let url = buildUrl("/index/Charitable/disease");
    axios
      .get(url, {
        params: {}
      })
      .then(response => {
        console.log(response.data.data);
        this.drugtypelist = response.data.data;

        // this.druglist.forEach(element => {
        //   element.showimg = buildUrl(element.pic[0].url);
        // });
      })
      .catch(error => {
        console.log(error);
      });

    this.GetDrugList(0);
    // this.GetDrugList(1);
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
