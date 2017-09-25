<template>
  <div class="indexpage">
      <div class="wxlogin" onclick="WXLoginEvent('');"></div>
  </div>
</template>


<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: '',
     
         
    }
  },
  components: {

  },
  computed: {  
  
  },  
  methods:{
  
    wxpage:function(id){
      var address = 'mywawa';
      var call_back_uri = "http%3A%2F%2Fwww.legendream.cn%2F"+address+"%2Findex1.php";
        
      var grant_url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbb575a2aa9f43050&redirect_uri="+call_back_uri+"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
      location.href=grant_url;
      
    }
     
  },
  mounted () {  

  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
