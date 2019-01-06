# qzkf  vue+node+mogoDB全栈开发项目

> A Vue.js project
##   1.6号第一天
初始化项目

##   课程：route
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

```
