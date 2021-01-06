// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";
import {get} from './utils/axios'
Vue.use(element)
Vue.config.productionTip = false

console.log('13',get )

// 全局守卫  权限
router.beforeEach((to, from, next) => {
  if (to.meta.requireType) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      element.Message('请先注册')
      next({
        path:'/'
      })
    }
  } else {
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
