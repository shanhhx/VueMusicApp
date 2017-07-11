<template>
<scroll class="listview" :data="data">
  <div>
  <ul>
    <li  v-for="group in data" class="list-group">
      <h2 class="list-group-title">{{group.title}}</h2>
      <ul>
        <li @click="selectItem(item)" class="list-group-item" v-for="(item, index) in group.items">
          <img class="avatar" :src="item.avatar" >
          <span class="name">{{item.name}}</span>
        </li>
      </ul>
    </li>
  </ul></div>
</scroll>
</template>
<script>
  import Scroll from 'base/scroll'
  export default {
    components: {
      Scroll
    },
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    methods: {
      selectItem (singer) {
        this.$emit('selectItem', singer)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  @import "../assets/stylus/main.less";

  .listview{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .list-group{
      padding-bottom: 30px;
      .list-group-title{
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        background: #333;
        text-align: left;
      }
      .list-group-item{
        display: flex;
        align-items: center;
        padding: 20px 0 0 30px;
        .avatar{
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .name{
          margin-left: 20px;
          color: @color-text-l;
          font-size: @font-size-medium;
        }
      }
    }
    .list-shortcut{
      position: absolute;
      z-index: 30;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      padding: 20px 0;
      border-radius: 10px;
      text-align: center;
      background: rgba(0, 0, 0, 0.3);
      font-family: Helvetica;
      .item{
        padding: 3px;
        line-height: 1;
        color: @color-text-l;
        font-size: @font-size-small;
      }
    }
  }

</style>
