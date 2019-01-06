import Vue from 'vue'
import Router from 'vue-router'

import Goodlist from "../components/goodlist.vue"

Vue.use(Router)

export default new Router({
  mode:"history", /* 指定路由方式  有hash和 history */
  routes: [
    {
      path: '/goods/:goodId/user/:name', /* 动态路由方式 */
      name: 'Goodlist',
      component: Goodlist
    }
  ]
})
