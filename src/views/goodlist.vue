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
        <div>
            <router-link to="/car">跳转到购物车页面</router-link>
        </div>
        <div>
            <button @click="jump1">1跳转到购物车页面</button>
            <button @click="jump2">2跳转到购物车页面</button>
            <button @click="jump3">3跳转到购物车页面</button>
            <button @click="jump4">4跳转到购物车页面</button>
            <button @click="jump5">后退几步</button>
        </div>
        
    </div>
</template>
<script>

export default {
    data(){
        return {
            msg:"动态路由方式"
        }
    },
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
}
</script>
<style>

</style>

