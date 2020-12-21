<template>
  <div class="mainpage">
    <headerBlock></headerBlock>

    <searchBlock></searchBlock>

    <div class="main-box world-box">
      <div class="worlddrug-typelist">
        <div class="worlddrug-ico"></div>
        <div class="worlddrug-line"></div>
        <div class="worlddrug-box" id="worlddrug-box">
          <div class="drug-box">
            <div class="drug-title">疾病:</div>
            <div class="drug-list">
              <div class="drug-item"> <a v-on:click="getListPage(1,0)">不限</a></div>
              <div
                class="drug-item"
                v-for="subitem in drugtypelist"
                v-bind:key="subitem.id"
              >{{subitem.dname}}</div>
            </div>
          </div>
          <div class="drug-box">
            <div class="drug-title">分类:</div>
            <div class="drug-list">
              <div class="drug-item">免费实验用药</div>
              <div class="drug-item">慈善赠药</div>
            </div>
          </div>
        </div>
      </div>

      <div class="worlddrug-list">
        <div class="drug-item">
          <div class="drug-title">鲨肝醇片</div>
          <div class="drug-des">规格：200mg*100s</div>
          <div class="drug-zheng">适应症： 暂无</div>
          <div class="drug-liang">用法用量：暂无</div>
          <div class="drug-chang">生产厂商： 江苏鹏鹞药业有限公司</div>

          <div class="drug-image"></div>
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
      drugtypelist: [],
      experList: [],
      artList: []
    };
  },
  components: {
    footerBlock,
    headerBlock,
    searchBlock
  },
  computed: {},
  methods: {
    wxpage: function(id) {

    },
    getListPage: function(listType,CharitableID) {

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
