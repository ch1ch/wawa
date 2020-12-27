<template>
  <div class="footerr">
      
     <p><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001">{{icp}}</a>  |  任何关于疾病和药品的信息仅供参考，不能代替专业医生药师的意见。</p>
    </div>
</template>

<script>

  export default {
    name:"footer",
    // props: {
    //   'hover':{
    //   type: Number,
    //   required : true
    //   }
    // },
    data () {

      return {
        msg: 'live',
        headimgurl:'',
        nickname:'',
        openid:'',
        icp:""

      }
    },
    components: {

    },
    computed:{

    },
    mounted:function(){
      console.log();
      
    let url = buildUrl("/index/index/baseinfo");
    axios
      .post(url, {
        uid: localStorage.uid
      })
      .then(response => {
        // console.log(response.data.data);
        if (response.data.code == "600000") {
          // console.log("成功");
          this.icp=response.data.data[10].value;
        } else {
          console.log("失败原因：" + response.data.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
     
    },
    methods:{
      
    },

  }
</script>