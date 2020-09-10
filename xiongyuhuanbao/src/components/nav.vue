<template>
  <div class="nav">
    <van-nav-bar
      title="公司详情"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <div class="nav-content">
        <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
    mounted() {
        console.log("nav---");
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    },
};
</script>
<style scoped lang="less">
.nav {
  width: 100%;
  height: 100%;
  .nav-content{
      padding-top: 44px;
  }
}
</style>>