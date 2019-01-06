# qzkf  vue+node+mogoDB全栈开发项目

> A Vue.js project
##   1.6号第一天
初始化项目

##课程：route
1：前端路由
2:动态路由
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
3：嵌套路由


