<template>
  <div class="mainpage">
    <headerBlock></headerBlock>

    <searchBlock></searchBlock>

    <div class="main-box about-box">
      <div class="about-title">公司简介</div>
      <div
        class="about-des"
      >药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简介药得公司简</div>
      <div class="about-title">联系我们</div>
      <div class="about-des">联系电话：400-1241-1147</div>
      <div class="about-title">企业地址</div>
      <div class="about-des">
          <div class="about-map"></div>
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
  name: "about",
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
    wxpage: function(id) {},

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
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    // this.InitData();
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
