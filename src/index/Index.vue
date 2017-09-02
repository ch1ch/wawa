<template>
  <div id="header">
  	<div class="headerimg">
  		<img src="./../assets/images/header1.jpg">		
  	</div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
	@import './../assets/less/main.less';
</style>]
