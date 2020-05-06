import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Recommend from 'comp/recommend/Recommend'
import Rank from 'comp/rank/Rank'
import Singers from 'comp/singers/Singers'
import Search from 'comp/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/推荐',
          component: Recommend
        },
        {
          path: '/排行',
          component: Rank
        },
        {
          path: '/歌手',
          component: Singers
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
