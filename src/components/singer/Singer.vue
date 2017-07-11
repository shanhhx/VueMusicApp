<template>
  <div class="singer">
    <list-view @selectItem="selectItem" :data="singerList"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getSingerList} from 'api/singer'
  import ListView from 'base/listview'
  const HOT_SINGER_LEN = 10
  const HOT_NAME = '热门'

  export default {
    data () {
      return {
        singerList: []
      }
    },
    created () {
      this._getSingerList()
    },
    methods: {
      _getSingerList () {
        getSingerList().then((res) => {
          if (res.code === 0) {
            this.singerList = this._normalizeSinger(res.data.list)
          }
        })
      },
      _normalizeSinger (list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push({
              id: item.Fsinger_id,
              name: item.Fother_name,
              avatar: `http://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
            })
          }
          const key = item.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push({
            id: item.Fsinger_id,
            name: item.Fother_name,
            avatar: `http://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
          })
          console.log(item.Fsinger_mid)
        })
//        有序列表
        let ret = []
        let hot = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === '热门') {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      },
      selectItem (singer) {
        this.$router.push({
          path: `/singer/${singer.id}`
        })
      }
    },
    components: {
      ListView
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
.singer{
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>
