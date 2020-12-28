import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: resolve => require(['@/view/login.vue'], resolve)
  },
  {
    path: '/lagout',
    redirect:'/lagout/home',
    component: resolve => require(['@/view/lagout.vue'], resolve),
    children: [
      {
        path: 'home',
        component: resolve => require(['@/view/home.vue'], resolve),
        meta:{requireType:true}
      },
      {
        path: 'second',
        component: resolve => require(['@/view/second.vue'], resolve),
        meta:{requireType:true}
      },
    ],
    meta:{requireType:true}
  },
  {
    path: '*',
    redirect:'/'
  }
]


export default new Router({
  routes,
  mode:'history'
})
