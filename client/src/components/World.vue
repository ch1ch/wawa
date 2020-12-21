<template>
  <div class="mainpage">
    <headerBlock></headerBlock>

   <searchBlock></searchBlock>

    <div class="main-box world-box">
        
          <div class="worlddrug-typelist">
            <div class="worlddrug-ico"></div>
            <div class="worlddrug-line"></div>
            <div class="worlddrug-box" id="worlddrug-box">
                <div class="drug-box" v-for="item in durgList" v-bind:key="item.id">
                    <div class="drug-title">{{item.dname}}:</div>
                    <div class="drug-list" >
                        <div class="drug-item" v-for="subitem in item.drug" v-bind:key="subitem.id">
                          <a v-on:click="gotoDrugPage(subitem.id)">{{subitem.c_name}}</a>
                          </div>
                      
                    </div>
                </div>
            </div>
        </div>

       <!-- <div class="worlddrug-list">
            <div class="drug-item">
                    <div class="drug-title">鲨肝醇片</div>
                    <div class="drug-des">规格：200mg*100s</div>
                    <div class="drug-zheng">适应症： 暂无 </div>
                    <div class="drug-liang">用法用量：暂无 </div>
                    <div class="drug-chang">生产厂商： 江苏鹏鹞药业有限公司</div>
                    
                    <div class="drug-image"></div>
            </div>
        </div> -->

    </div>
    <footerBlock></footerBlock>
  </div>
</template>


<script>
import footerBlock from "./../components/block/footer";
import headerBlock from "./../components/block/header";
import searchBlock from "./../components/block/search";

export default {
  name: "world",
  data() {
    return {
      msg: "",
      drugtypelist: [],
      experList: [],
      artList: [],
      durgList:[]
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
      console.log("drug"+id);
       this.$router.push({
          name:'Drug',
          params:{drugid:id}
        })
    }
  },
  mounted() {
    let url = buildUrl("/index/drug/index");
    axios
      .get(url, {
        params: {
          // 'fid': 0
        }
      })
      .then(response => {
        console.log(response.data.data);
        this.drugtypelist = response.data.data;

        this.drugtypelist.forEach(element => {
          // element.showimg = buildUrl(element.pic[0].url);
          element.list.forEach(subelement => {
              this.durgList.push(subelement);
          });
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
