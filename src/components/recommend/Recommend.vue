<template>
<div class="recommend">


    <v-scroll  class="recommend-content">
      <div>
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
            <img width="60" height="60" v-lazy="item.imgurl" alt="">
          </div>
          <div class="text">
            <div class="name">{{ item.creator.name}}</div>
            <div class="msg">{{item.dissname}}</div>
          </div>
        </li>
      </ul>
    </div>
      </div>
  </v-scroll>

</div>
</template>

<script>
  import { getRecommend, getList } from '../../api/recommend'
  import Slider from '../../base/slider'
  import VScroll from '../../base/scroll'

  export default{
    components: {
      Slider, VScroll
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
          console.log('img')
          if (res.code === 0) {
            this.sliderimg = res.data.slider
          }
        })
      },
      _getList () {
        getList().then((res) => {
          if (res.code === 0) {
            this.dicList = res.data.list
            console.log('list')
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
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: 14px;
          color: #fff;
          .name{
            margin-bottom: 10px;
            text-align: left;
            font-size: 16px;
          }
          .msg{
            text-align: left;
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
