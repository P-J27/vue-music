import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import("@/views/login/Login")
const Find = () => import('@/views/index/childViews/findmusic/Find')
const Index = () => import('@/views/index/Index')
const Rank = () => import('@/views/index/childViews/rank/Rank')


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
    path: '/index',
    component: Index,
    redirect: '/find',
    children: [{
        name: 'Find',
        path: '/find',
        component: Find,
      },
      {
        name: 'Rank',
        path: '/rank',
        component: Rank
      }
    ]


  },
]

const router = new VueRouter({
  routes
})

export default router