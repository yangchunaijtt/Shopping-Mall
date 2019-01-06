import Vue from 'vue'
import Router from 'vue-router'

import Goodlist from "../views/goodlist"
import Title from "@/views/title"
import Image from "@/views/Images"
import Car from "../views/car"

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
    },{
      path:"/car",
      name:"car",
      component:Car
    }
  ]
})
