#  vue+node+mogoDB全栈开发项目  商城 Shopping Mall

> A Vue.js project
##   1.6号第一天
初始化项目

##   介绍：route
###     1：前端路由
###     2:动态路由
 ```export default new Router({
        mode:"history", /* 指定路由方式  有hash和 history */
        routes: [
            {
            path: '/goods/:goodId/user/:name', /* 动态路由方式 */
            name: 'Goodlist',
            component: Goodlist
            }
        ]
    })
```
```
     path: '/goods/:goodId/'
```
```
     <p>
           <span>{{msg}}</span>
           {{$route.params.goodId}}
        </p>
        <p>
           <span>{{msg}}</span>
           {{$route.params.name}}
        </p>
```
###  3：嵌套路由
    ```
        <router-link to="/goods/title">显示商品标题</router-link>
        <router-link to="/goods/image">显示商品图片</router-link>
        <router-link to="title">显示商品标题111</router-link>
        <router-link to="image">显示商品图片111</router-link>
        <div>
            <router-view></router-view>
        </div>
    ```

    ```
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
    ```
### 4:编程式路由
- 1：通过js来实现页面的跳转
- 有哪些名字呢
```
    $router.push("name")
    $router.push({path:"name"})
    $router.push({path:"name?a=123"})
    //或者
    $router.push({path:"name",query:{a:123}})
    $router.go(1)
```
```

 <div>
            <button @click="jump1">1跳转到购物车页面</button>
            <button @click="jump2">2跳转到购物车页面</button>
            <button @click="jump3">3跳转到购物车页面</button>
            <button @click="jump4">4跳转到购物车页面</button>
            <button @click="jump5">后退几步</button>
        </div>
```
```
    /* 编程式路由 */
    methods:{
        jump1(){
            this.$router.push("/car")
        },
        jump2(){
            this.$router.push({
                path:"/car"
            })
        },
        jump3(){    
            this.$router.push({
                path:"/car?time=123"
            })
        },
        jump4(){
            this.$router.push({
                path:"/car",
                query:{time:123}
            })
        },
        jump5(){
            /* 后退两步 */
            this.$router.go(-2)
        },
    }
```
```
    <div>
               编程式路由获取参数
               <span>
                 {{$route.query.time}}
                </span>
          </div>
```
```
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
```

### 5:命名路由和命名视图
-  给路由定义不同的名字，根据名字来匹配
- 命名路由
```
     <span>
                      {{$route.params.carId}}
                </span>
```
```
    <div>
            <!-- params路由的参数 -->
            <router-link :to="{name:'car',params:{carId:123}}">命名路由跳转</router-link>
        </div>
```
```
    {
      path:"/car/:carId",
      name:"car",
      component:Car
    }
```
- 命名视图
```
/* 页面默认路由  命名视图 */
    {
      path:"/",
      name:"Goodlist",
      components:{
        default:Goodlist,
        title:Title,
        image:Image,
      }
```
```
    <div id="app">
    <router-view/>
    <router-view name="title"></router-view>
    <router-view name="image"></router-view>
  </div>
```

## 介绍 vue-resource
