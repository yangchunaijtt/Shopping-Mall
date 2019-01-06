<template>
    <div>
        这是购物车列表页面
       <p>
           <span>{{msg}}</span>
           {{$route.params.goodId}}
        </p>
        <p>
           <span>{{msg}}</span>
           {{$route.params.name}}
        </p>
        <div>
            <router-link to="/goods/title">显示商品标题</router-link>
            <router-link to="/goods/image">显示商品图片</router-link>
            <router-link to="title">显示商品标题111</router-link>
            <router-link to="image">显示商品图片111</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
        
    </div>
</template>
<script>

export default {
    data(){
        return {
            msg:"动态路由方式"
        }
    }
}
</script>
<style>

</style>

