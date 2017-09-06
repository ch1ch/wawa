<template>
  <ul class="goodlist">
    <li
      v-for="item in wawadata"
      v-bind:key="item.id">
      
      <div class="titlebar">
        <div class="titleimg">
          <img src="~assets/images/zhua1.png" alt="">
        </div>
        <div class="wawastatus" v-if="item.status==1">游戏中</div>
        <div  class="wawastatus" v-if="item.status==0">空闲中</div>

        <div class="wawaprice">{{item.price}}/次</div>
      </div>

      <div class="wawaimg">
        <img v-bind:src="item.img" alt="">
      </div>
      <div class="wawaname">
        {{item.text}}
      </div>
      
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      wawadata:  {
      type: Array,
      required : true
      },
    }

  }
</script>