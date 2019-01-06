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

