<template>
  <div class="home-content">
    <div class="section-title">
      <div>最新供应</div>
      <div class="color666">
        <router-link to="/product">最新更多</router-link>
      </div>
    </div>

    <van-grid :border="true" gutter="10" :column-num="3">
      <van-grid-item v-for="product in newProducts" :key="product.id">
        <van-image :src="product.picUrl" />
        <div class="font14 numberLine1 product-item-title">{{product.title}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
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
  methods: {},
};
</script>

<style scope  lang="less">
.home-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  .section-title {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .product-item-title {
    margin-top: 10px;
  }
}
</style>