import Vue from 'vue'
import Router from 'vue-router'

import Goodlist from "../views/goodlist.vue"
import Title from "@/views/title.vue"
import Image from "@/views/Images.vue"

Vue.use(Router)

export default new Router({
  mode:"history", /* 指定路由方式  有hash和 history */
  routes: [
    {
      path: '/goods', /* 动态路由方式 */
      name: 'Goodlist',
      component: Goodlist,
      /* 嵌套路由子路由 */
      children:[
        {
          path:"title",
          name:"title",
          component:Title
        },
        {
          path:"image",
          name:"image",
          component:Image
        }
      ]
    }
  ]
})
