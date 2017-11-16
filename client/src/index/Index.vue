<template>

  <router-view></router-view>

</template>

<script>
const BaseUrl = "http://47.94.236.45:9000/";

function buildUrl (url) {
  return BaseUrl + url;
}
 	

export default {
    name: 'app',
    data () {
	    return {
	        msg: ''
	        
	    }
    }
}

</script>

<style lang="less">
	@import './../assets/less/main.less';

</style>
