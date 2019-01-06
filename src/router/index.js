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
    /* 页面默认路由  命名视图 */
    {
      path:"/",
      name:"Goodlist",
      components:{
        default:Goodlist,
        title:Title,
        image:Image,
      }
    },
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
      path:"/car/:carId",
      name:"car",
      component:Car
    }
  ]
})
