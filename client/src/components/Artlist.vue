<template>
  <div class="mainpage">
    <headerBlock></headerBlock>

    <searchBlock></searchBlock>

    <div class="main-box art-box">
      <div class="news-list">
        <div class="news-ico"></div>
        <div class="news-line"></div>
        <div class="news-box" id="news-box">
          <div
            class="news-item"
            v-for="item in artList"
            v-bind:key="item.id"
            v-on:click="gotoArtPage(item.id)"
          >
            <div class="new-title">{{item.title}}</div>
            <div class="new-des">{{item.describtion}}</div>
            <div class="new-time">
              <div class="new-timeico"></div>
              {{item.createtime}}
            </div>
            <div class="news-image" :style="{backgroundImage:'url('+item.showimg+')'}"></div>
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
  name: "Artdes",
  data() {
    return {
      msg: "",
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
    wxpage: function(id) {},
    gotoArtPage: function(id) {
      console.log("art=" + id);
      this.$router.push({
        name: "Artdes",
        params: { artid: id }
      });
    }
  },
  mounted() {
    let url = buildUrl("/index/article/index");
    axios
      .get(url, {
        params: {
          // 'fid': 0
        }
      })
      .then(response => {
        console.log(response.data.data);
        this.artList = response.data.data.data;
        this.artList.forEach(element => {
          element.showimg = buildUrl(element.img_url);
        });
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
