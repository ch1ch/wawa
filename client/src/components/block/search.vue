<template>
  <div class="search-box">
    <div class="search-type">
      <div
        class="search-type-item"
        v-bind:class="[sertchtype==1 ? 'ischoose' : '', ]"
        v-on:click="ShowSubType(1)"
      >查药品</div>

      <div
        class="search-type-item"
        style="margin-left:30px;"
        v-bind:class="[sertchtype==2 ? 'ischoose' : '', ]"
        v-on:click="ShowSubType(2)"
      >查实验</div>
    </div>
    <div class="search-input-box" @mouseenter="focusThis()" @mouseleave="blurThis()">
      <div class="search-input-ico"></div>
      <input
        type="text"
        class="search-input"
        placeholder="输入名称"
        v-model="keyword"
        v-on:input="searchKey"
      />
    </div>
    <div
      class="searchpopbox"
      v-if="isshowsearch"
      @mouseenter="focusThis()"
      @mouseleave="blurThis()"
    >
      <div class="searchbox" v-if="sertchtype==1">
        <div
          class="serach-item"
          v-for="item in searchList"
          v-bind:key="item.id"
          v-on:click="gotoDrugPage(item.id)"
        >{{item.c_name}}</div>
      </div>
      <div class="searchbox" v-if="sertchtype==2">
        <div
          class="serach-item"
          v-for="item in searchList"
          v-bind:key="item.id"
          v-on:click="gotoExperPage(item.id)"
        >{{item.title}}</div>
      </div>
    </div>

    <div class="search-hot-box">
      <div class="search-hot-ico"></div>
      <div class="search-list" id="search-hotlist">
        <span
          v-for="item in searchHotList"
          v-bind:key="item.id"
          v-on:click="gotoDrugPage(item.id)"
        > <a href=""> {{item.c_name}}</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  // props: {
  //   'hover':{
  //   type: Number,
  //   required : true
  //   }
  // },
  data() {
    return {
      msg: "live",
      sertchtype: 1,
      isshowsearch: false,
      isshowpop: false,
      keyword: "",
      searchHotList: [],
      searchList: []
    };
  },
  components: {},
  computed: {},
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      console.log(to);
      console.log(from);
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(next);
  },

  mounted: function() {
    console.log();
    let url = buildUrl("/index/index/hotDrugs");
    axios
      .get(url, {
        params: {}
      })
      .then(response => {
        this.searchHotList = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    gotoDrugPage: function(id) {
      console.log("drug=" + id);
      this.$router.push({
        name: "Drug",
        params: { drugid: id }
      });
    },
    gotoExperPage: function(id) {
      console.log("experid=" + id);
      this.$router.push({
        name: "Exper",
        params: { experid: id }
      });
    },
    searchKey: function(key) {
      console.log(key.target.value);
      // console.log(key.data);
      let url = buildUrl("/index/index/searchDrugs");
      if (this.sertchtype == 2) {
        url = buildUrl("/index/index/serachExpers");
        axios
          .post(url, {
            title: key.target.value
          })
          .then(response => {
            console.log(response.data.data);
            this.searchList = response.data.data.data;
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        axios
          .post(url, {
            name: key.target.value
          })
          .then(response => {
            console.log(response.data.data);
            this.searchList = response.data.data.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    ShowSubType: function(typeid) {
      console.log("sertchtype=" + typeid);
      this.sertchtype = typeid;
      this.keyword = "";
    },

    gotoDrugPage: function(id) {
      console.log("drug=" + id);
     this.$router.push({ path: `/drug?drugid=${id}` });
      // this.$router.push({
      //   name: "Drug",
      //   params: { drugid: id }
      // });
    },

    focusThis: function() {
      this.isshowsearch = true;
      // this.searchList=[];
    },
    blurThis: function() {
      this.isshowsearch = false;
    }
  }
};
</script>