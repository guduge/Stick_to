<template>
  <div class="content">
    <div class="top-logo" @click="company">
      <van-image radius="10" width="4rem" height="4rem" fit="contain" :src="logo" />
      <div class="logo-name">
        <p>雄宇环保科技有限公司</p>
        <p>xiong yu huan bao ltd</p>
      </div>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <div class="xy_footer">
      <p>Copyright © 雄宇环保科技有限公司 版权所有</p>
      <p>联系电话： 18735173681 地址:山西省太原市小店区康宁街万马仕广场12层1214室</p>
      <p class="step"></p>
    </div>
    <div class="tab-box">
      <van-tabbar z-index="999" route :fixed="false">
        <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/product" icon="search">产品</van-tabbar-item>
        <van-tabbar-item replace to="/news" icon="label-o">新闻</van-tabbar-item>
        <van-tabbar-item replace to="/company" icon="phone-o">联系</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);
import logo from "@/assets/logo.png";

export default {
  data() {
    return {};
  },
  computed: {
    logo() {
      return logo;
    },
  },
  methods: {
    company() {
      this.$router.push("/company");
    },
  },
};
</script>

<style scope lang="less">
* {
  box-sizing: border-box;
}
.content {
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  .tab-box {
    position: fixed;
    width: 100%;
    z-index: 999;
    bottom: 0;
    .van-tabbar {
      background: #fff !important;
    }
  }

  .top-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    .van-image {
      margin: 10px;
      margin-right: 0;
    }
    .logo-name {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
  }
  .swipe-box {
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
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
    .step {
      height: 59px;
    }
  }
}
@media screen and (min-width: 800px) {
  .content {
    .tab-box {
      width: 800px;
    }
  }
}
</style>