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
const Rank = () => import('views/index/childViews/rank/Rank')
const SongDetail = () => import('views/index/childViews/songDetail/SongDetail')
const MvDetails = () => import("views/index/childViews/mvDetails/MvDetails")
const SingerDetails =() => import("views/index/childViews/singerDetails/SingerDetails")
const AlbumDetails =() => import("views/index/childViews/albumDetails/AlbumDetails")
const routes = [{
    path: '/',
    redirect: '/index'
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
      {
        //歌单详情
        path: "/songDetails",
        component: SongDetail
      }, {
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
        path: "/albumDetails",
        component: AlbumDetails
      },
    ]


  },
]

const router = new VueRouter({
  routes
})

export default router