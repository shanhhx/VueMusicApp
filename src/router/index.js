import Vue from 'vue'
import Router from 'vue-router'
import Rank from '../components/rank/Rank'
import Recommend from '../components/recommend/Recommend'
import Search from '../components/search/Search'
import Tab from '../components/tab/Tab'
import Singer from '../components/singer/Singer'
import SingerDetial from '../components/singer-detial/SingerDetial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/tab',
      component: Tab
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetial
        }
      ]
    }
  ]
})
