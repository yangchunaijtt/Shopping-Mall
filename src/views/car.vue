<template>
    <div>
          这是购物车页面
          <div>
               编程式路由获取参数
               <span>
                 {{$route.query.time}}
                </span>
                <span>
                      {{$route.params.carId}}
                </span>
          </div>
          
    </div>
</template>
<script>
      export default {
            
      }
</script>
<style>
      
</style>