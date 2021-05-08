/*
 * @Author: PJ
 * @Date: 2021-04-16 17:30:36
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const Login = () => import("views/login/Login")
const Index = () => import('views/index/Index')
const Find = () => import('views/index/childViews/findmusic/Find')
const Singer = () => import('views/index/childViews/singer/Singer')
const Rank = () => import('views/index/childViews/rank/Rank')
const Mv = () => import('views/index/childViews/mv/Mv')
const SongDetail = () => import('views/index/childViews/songDetail/SongDetail')
const MvDetails = () => import("views/index/childViews/mvDetails/MvDetails")
const SingerDetails = () => import("views/index/childViews/singerDetails/SingerDetails")
const AlbumDetails = () => import("views/index/childViews/albumDetails/AlbumDetails")
const SongLists = () => import('views/index/childViews/songLists/SongLists')
const Search = () => import('views/index/childViews/search/Search')
const routes = [{
    path: '/',
    redirect: '/index',

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    //首页
    path: '/index',
    component: Index,
    redirect: '/find',
    children: [{
        name: 'Find',
        path: '/find',
        component: Find,
      },
      //排行
      {
        name: 'Rank',
        path: '/rank',
        component: Rank
      },
      //歌手
      {
        name: 'Singer',
        path: '/singer',
        component: Singer
      },

      //MV主页
      {
        name: 'MV',
        path: '/mv',
        component: Mv
      },
      {
        //歌单详情
        path: "/songDetails",
        component: SongDetail
      },

      {
        //mv详情
        path: "/mvDetails",
        component: MvDetails
      },
      {
        //歌手详情
        path: "/singerDetails",
        component: SingerDetails
      },
      {
        //专辑详情
        name: 'AlbumDetails',
        path: "/albumDetails",
        component: AlbumDetails
      },
      {
        // 歌单分类
        name: 'SongLists',
        path: '/songLists',
        component: SongLists

      }, {
        //搜索
        path: "/search",
        component: Search
      },
    ]


  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router