<template>
  <div class="search-box">
     <div class="search-type">
        <div class="search-type-item ischoose">查药品</div>

        <div class="search-type-item" style="margin-left:30px;">查实验</div>
      </div>
      <div class="search-input-box">
        <div class="search-input-ico"></div>
        <input type="text" class="search-input" placeholder="输入药物名称" />
      </div>

      <div class="search-hot-box">
        <div class="search-hot-ico"></div>
        <div class="search-list" id="search-hotlist">
            <span v-for="item in searchList" v-bind:key="item.id">{{item.c_name}}</span>
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
      headimgurl: "",
      nickname: "",
      openid: "",
      searchList:[]
    };
  },
  components: {},
  computed: {},
  mounted: function() {
    console.log();
    let url = buildUrl("/index/index/hotDrugs");
    axios
      .get(url, {
        params: {
          // 'token': token
        }
      })
      .then(response => {
        console.log(response.data.data);
        this.searchList=response.data.data;
        // this.druglist = response.data.data.drugList;
        // this.druglist.forEach(element => {
        //   element.showimg = buildUrl(element.pic[0].url);
        // });
      

      
      
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
   
  }
};
</script>