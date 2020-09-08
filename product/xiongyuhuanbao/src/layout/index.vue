<template>
  <div class="content">
    <div class="top-logo">
      <van-image radius="10" width="4rem" height="4rem" fit="contain" :src="logo" />
      <div class="logo-name">
        <p>雄宇环保科技有限公司</p>
        <p>xiong yu huan bao ltd</p>
      </div>
    </div>
    <div>
      <van-notice-bar scrollable color="#1989fa" background="#ecf9ff" left-icon="volume-o" text="雄宇环保，宇宙第一，节能环保零污染，环保中的佼佼者，掌握核心科技" />
    </div>
    <div class="swipe-box">
      <van-swipe class="my-swipe" :height="bannerHeight" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image :height="bannerHeight" fit="cover" :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-tabbar z-index="999" route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/product" icon="search">产品</van-tabbar-item>
      <van-tabbar-item replace to="/news" icon="friends-o">新闻</van-tabbar-item>
      <van-tabbar-item replace to="/contact" icon="setting-o">联系</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);
import logo from "@/assets/logo.png";
import banner1 from "@/assets/banner/111.jpg";
import banner2 from "@/assets/banner/112.jpg";
import banner3 from "@/assets/banner/113.jpg";
export default {
  data() {
    return {
      images: [banner1, banner2, banner3],
      bannerHeight:150
    };
  },
  mounted() {
    let clientWidth = document.body.clientWidth;
    this.bannerHeight =  (clientWidth/375)*150;
  },
  computed: {
    logo() {
      return logo;
    },
  },
};
</script>

<style scope lang="less">
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  .van-tabbar{
    background: #fff !important;
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
}
</style>