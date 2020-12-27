<template>
  <div class="mainpage">
    <headerBlock></headerBlock>

    <searchBlock></searchBlock>

    <div class="main-box artdes-box">
        <div class="art-title">
            {{artitem.title}}
        </div>
         <div class="favor-box" v-if="artitem.collect==0&&islogin" v-on:click="FavorThis()">
           <div class="favico"></div>
        </div>
        <div class="favor-box"  v-if="artitem.collect==1&&islogin" v-on:click="CancelFavorThis()">
         <div class="favico2"></div>
        </div>
        <div class="art-time">
            {{artitem.createtime}}
        </div>
        <div class="art-des" v-html="artitem.content">
            <!-- {{artitem.content}} -->
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
      artitem: {},
      islogin:false
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
      if (this.artitem.id > 0 && localStorage.token.length > 10) {
        let url = buildUrl("/index/article/cancel_collect");
        axios
          .post(
            url,
            {
              // token: localStorage.token,
              id: this.artitem.id
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
      if (this.artitem.id > 0 && localStorage.token.length > 10) {
        let url = buildUrl("/index/article/collect");
        axios
          .post(
            url,
            {
              id: this.artitem.id
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
    Initdata: function() {
      var artid = this.$route.params.artid;
      console.log("artid=" + artid);

      let url = buildUrl("/index/article/detail");
      axios
      .post(
            url,
            {
             id: artid
            },
            {
              headers: { token: localStorage.token }
            }
          )
      
        .then(response => {
          console.log(response.data.data);
          this.artitem=response.data.data;
        //   this.drugitem = response.data.data;

        //   this.drugitem.pic.forEach(element => {
        //     element.showimg = buildUrl(element.url);
        //   });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
   this.Initdata();
   if (localStorage.token.length>10) {
      this.islogin=true;
    }else{
      this.islogin=false;
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
