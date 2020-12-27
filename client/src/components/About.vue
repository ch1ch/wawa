<template>
  <div class="mainpage">
    <headerBlock></headerBlock>

    <searchBlock></searchBlock>

    <div class="main-box about-box">
      <div class="about-title">公司简介</div>
      <div class="about-des" v-html="company.value"></div>
      <div class="about-title">联系我们</div>
      <div class="about-des">联系电话：{{tel.value}}</div>
      <div class="about-title">企业地址</div>
      <div class="about-des">{{addr.value}}</div>

      <div class="about-des">
        
       <el-amap class="about-map" :vid="'amap-vue'" :center="center"
        :zoom="zoom">
        <el-amap-marker vid="component-marker" :position="componentMarker.position" :content-render="componentMarker.contentRender" ></el-amap-marker>
       </el-amap>
       
      </div>
    </div>
    <footerBlock></footerBlock>
  </div>
</template>


<script>
import footerBlock from "./../components/block/footer";
import headerBlock from "./../components/block/header";
import searchBlock from "./../components/block/search";

 const exampleComponents = {
      props: ['text'],
      template: `<div>{{text}}</div>`
    }

export default {
  name: "about",
  data() {
    return {
      msg: "",
      company: "",
      tel: "",
      addr: "",
       center: [116.55927658, 39.7759939],
       zoom: 12,
     componentMarker: {
            position: [116.55927658, 39.7759939],
            contentRender: (h, instance) => h(exampleComponents,{style: {backgroundColor: '#fff'}, props: {text: '药得'}}, ['xxxxxxx'])
          },
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
    Getbase: function() {
      let url = buildUrl("/index/index/baseinfo");
      axios
        .post(url, {
          uid: localStorage.uid
        })
        .then(response => {
          console.log(response.data.data);
          if (response.data.code == "600000") {
            // console.log("成功");
            this.company = response.data.data[3];
            this.tel = response.data.data[4];
            this.addr = response.data.data[5];
          } else {
            console.log("失败原因：" + response.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
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
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    // this.InitData();
    this.Getbase();
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
