<template>
  <div class="mainpage">
    <headerBlock></headerBlock>

       <searchBlock></searchBlock>


    <div class="main-box">
      <div class="hot-list">
        <div class="hot-ico"></div>
        <div class="hot-line"></div>
        <div class="hot-box" id="hot-box">
          <div class="hot-item" v-for="item in druglist" v-bind:key="item.id" v-on:click="gotoDrugPage(item.id)">
            <div class="hot-img">
              <div class="hot-img-img" :style="{backgroundImage:'url('+item.showimg+')'}"></div>
            </div>
            <div class="hot-name">{{item.c_name}}</div>
          </div>
        </div>
      </div>

      <div class="labs-list">
        <div class="labs-ico"></div>
        <div class="labs-line"></div>
        <div class="labs-box" id="labs-box">
          <table class="labs-table" id="labs-table">
            <thead>
              <td style="width: 250px;">试验治疗方案</td>
              <td style="width: 100px;">治疗阶段</td>
              <td style="width: 250px;">药物名称</td>
              <td style="width: 100px;">招募状态</td>
              <td style="width: 250px;">适应症</td>
            </thead>

            <tr v-for="item in experList" v-bind:key="item.id" v-on:click="gotoExperPage(item.id)">
              <td style="width: 250px;">{{item.title}}</td>
              <td style="width: 100px;">一线（初治）</td>
              <td style="width: 250px;">{{item.shorttitle}}</td>
              <td style="width: 100px;" v-if="item.recruit==0">招募中</td>
              <td style="width: 100px;" v-if="item.recruit==1">未招募</td>
              <td style="width: 250px;">{{item.adaptation}}</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="news-list">
        <div class="news-ico"></div>
        <div class="news-line"></div>
        <div class="news-box" id="news-box">
          <div class="news-item" v-for="item in artList" v-bind:key="item.id">
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
  name: "Index",
  data() {
    return {
      msg: "",
      druglist: [],
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
    wxpage: function(id) {},
     gotoDrugPage:function(id){
      console.log("drug="+id);
       this.$router.push({
          name:'Drug',
          params:{drugid:id}
        })
    },
      gotoExperPage:function(id){
      console.log("experid="+id);
       this.$router.push({
          name:'Exper',
          params:{experid:id}
        })
    },

    
  },
  mounted() {
    let url = buildUrl("/index/index/index");
    axios
      .get(url, {
        params: {
          // 'token': token
        }
      })
      .then(response => {
        console.log(response.data.data);
        this.druglist = response.data.data.drugList;
        this.druglist.forEach(element => {
          element.showimg = buildUrl(element.pic[0].url);
        });
        this.experList = response.data.data.experList;
        this.artList = response.data.data.artList;
        this.artList.forEach(element => {
          element.showimg = buildUrl(element.img_url);
        });

        // this.headimgurl=response.data.data.headUrl;
        // this.nickname=response.data.data.nickName;
        // this.mymoney=response.data.data.gameMoney;
        // this.wawanumber=response.data.data.dollCount;
        // console.log(this.druglist);
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
