<template>
  <div class="home-content">
    <div>
      <van-notice-bar
        scrollable
        color="#1989fa"
        background="#ecf9ff"
        left-icon="volume-o"
        text="雄宇环保，宇宙第一，节能环保零污染，环保中的佼佼者，掌握核心科技"
      />
    </div>
    <div class="swipe-box">
      <van-swipe class="my-swipe" :height="bannerHeight" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image :height="bannerHeight" fit="cover" :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="section-title">
      <div>最新供应</div>
      <div @click="toProduct" class="more">
        最新更多
      </div>
    </div>

    <van-grid :border="true" gutter="10" :column-num="3">
      <van-grid-item @click="toDetail" v-for="product in newProducts" :key="product.id">
        <van-image :src="product.picUrl" />
        <div class="font14 numberLine1 product-item-title">{{product.title}}</div>
      </van-grid-item>
    </van-grid>
    <div class="space"></div>
  </div>
</template>
<script>
import banner1 from "@/assets/banner/111.jpg";
import banner2 from "@/assets/banner/112.jpg";
import banner3 from "@/assets/banner/113.jpg";
export default {
  components: {},
  data() {
    return {
      images: [banner1, banner2, banner3],
      bannerHeight: 150,
      newProducts: [
        {
          id: "20200907001",
          title: "WNS低氮冷凝式燃气蒸汽锅炉",
          picUrl:
            "http://img.maimaosi.com/1/202003/19/1101034819159.jpg.thumb.jpg",
        },
        {
          id: "20200907002",
          title: "商用低氮冷凝热水锅炉",
          picUrl:
            "http://img.maimaosi.com/1/202003/19/1106146019159.jpg.thumb.jpg",
        },
        {
          id: "20200907003",
          title: "雄宇低氮贯流锅炉（技术引进产品）",
          picUrl:
            "http://img.maimaosi.com/1/202003/19/1101034819159.jpg.thumb.jpg",
        },
        {
          id: "20200907004",
          title: "WDR型卧式电加热蒸汽锅炉",
          picUrl:
            "http://img.maimaosi.com/1/202003/19/1128236719159.jpg.thumb.jpg",
        },
        {
          id: "20200907005",
          title: "低氮真空热水锅炉",
          picUrl:
            "http://img.maimaosi.com/1/202003/19/1123356519159.jpg.thumb.jpg",
        },
        {
          id: "20200907006",
          title: "LDR型立式电加热蒸汽锅炉",
          picUrl:
            "http://img.maimaosi.com/1/202003/19/1127135019159.jpg.thumb.jpg",
        },
      ],
    };
  },
  mounted(){
    let clientWidth = document.body.clientWidth;
    this.bannerHeight = (clientWidth / 375) * 150;
  },
  methods: {
    toProduct(){
      this.$router.push('/product')
    },
    toDetail(e){
      console.log(e);
      this.$router.push('/detail');
    }
  },
};
</script>

<style scope  lang="less">
.home-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  .swipe-box {
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
    }
  }
  .section-title {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .more {
      color: #666666;
    }
  }
  .product-item-title {
    margin-top: 10px;
  }
  .space{
    height: 20px;
  }
}
</style>