<template>
<div class="tab">
  <router-link tag="div" class="tab-item" to="/recommend">推荐</router-link>
  <router-link tag="div" class="tab-item" to="/singer">歌手</router-link>
  <router-link tag="div" class="tab-item" to="/rank">排行</router-link>
  <router-link tag="div" class="tab-item" to="/search">搜索</router-link>
</div>

</template>

<script>
  export default{
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
.tab{
  margin-top: 10px;
  height: 40px;
  .tab-item{
    float: left;
    color: #fff;
    font-size: 16px;
    width:25%;
    line-height: 40px;
  }
  .router-link-active{
    border-bottom: 2px solid #ffcd32;
    color: #ffcd32;
  }
}
</style>
