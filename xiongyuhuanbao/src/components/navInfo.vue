<template>
  <div class="content-nav">
    <div class="top-logo">
      <van-icon @click="pop" name="arrow-left" size="24" class="arrow-left"/>
      <div class="logo-name">
        <p>雄宇环保科技有限公司</p>
        <p>xiong yu huan bao ltd</p>
      </div>
      <van-image radius="10" width="4rem" height="4rem" fit="contain" :src="logo" class="rightSpace"/>
    </div>
      <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);
import logo from "@/assets/logo.png";

export default {
  data() {
    return {
    };
  },
  computed: {
    logo() {
      return logo;
    },
  },
  methods: {
    pop() {
      this.$router.go(-1)
    },
  },
};
</script>

<style scope lang="less">
* {
    box-sizing: border-box;
}
.content-nav {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 65px;
  .top-logo {
    position: fixed;  
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    top:0;
    height: 65px;
    background: white;

    .van-image {
      margin: 10px;
      margin-right: 0;
    }
    .arrow-left{
        margin-left: 10px;
    }
    .logo-name {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: flex-end;
    }
    .rightSpace{
        margin-right: 10px;
    }
  }
  
  .xy_footer {
    box-sizing: border-box;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: #e2e2e2;
    .step{
      height: 59px;
    }
  }
}
@media screen and (min-width: 800px) {
  .content-nav {
    .top-logo {
      width: 800px;
    }
  }
}
</style>