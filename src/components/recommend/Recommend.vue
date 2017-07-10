<template>
<div class="recommend">
  <div class="recommend-content">
    <div class="slider-wrapper">
      <slider>
        <div v-for="(item, index) in sliderimg">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" class="needsclick" alt="">
          </a>
        </div>
      </slider>
    </div>
    <div class="recommend-list">
      <h1 class="list-title">热门推荐歌单</h1>
      <ul >
        <li v-for="item in dicList" class="item">
          <div class="icon">
            <img width="60" height="60" :src="item.imgurl" alt="">
          </div>
          <div class="text">
            <h2 class="name" v-html="item.creator.name"></h2>
            <p>{{item.dissname}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  import { getRecommend, getList } from '../../api/recommend'
  import Slider from '../../base/slider'
  export default{
    components: {
      Slider
    },
    data () {
      return {
        sliderimg: [],
        dicList: []
      }
    },
    created () {
      this._getRecommend()
      this._getList()
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === 0) {
            this.sliderimg = res.data.slider
          }
        })
      },
      _getList () {
        getList().then((res) => {
          console.log(res)
          if (res.code === 0) {
            this.dicList = res.data.list
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
.recommend{
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .recommend-content{
    height: 100%;
    overflow: hidden;
    .slider-wrapper{
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    .recommend-list{
      .list-title{
        height: 27px;
        line-height: 27px;
        text-align: center;
        font-size: 20px;
      }
      & > ul{
        padding: 0;
      }
      .item{
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;
        .text{
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: 14px;
          .name{
            margin-bottom: 10px
          }
        }
        .icon{
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
          text-align: left;
        }
      }
    }
  }
}
</style>
