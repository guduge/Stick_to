<template>
  <div id="app">
    <!-- 留坑，非常重要 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
html,body,#app{
  height: 100%;
}
</style>