<template>
  <div class="product-content">
    <div class="section-title">
      <div class="title">供应产品</div>
      <div></div>
    </div>
    <van-card v-for="item in newProducts" :key="item.id" 
      currency=""
      price="2.00"
      desc="描述信息"
      :title="item.title"
      :thumb="item.picUrl"
    />
  </div>
</template>
<script>

export default {
  components: {},
  data() {
    return {
      newProducts:[
        {"id":"20200907001","title":"WNS低氮冷凝式燃气蒸汽锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1101034819159.jpg.thumb.jpg"},
        {"id":"20200907002","title":"商用低氮冷凝热水锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1106146019159.jpg.thumb.jpg"},
        {"id":"20200907003","title":"雄宇低氮贯流锅炉（技术引进产品）",picUrl:"http://img.maimaosi.com/1/202003/19/1101034819159.jpg.thumb.jpg"},
        {"id":"20200907004","title":"WDR型卧式电加热蒸汽锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1128236719159.jpg.thumb.jpg"},
        {"id":"20200907005","title":"低氮真空热水锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1123356519159.jpg.thumb.jpg"},
        {"id":"20200907006","title":"LDR型立式电加热蒸汽锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1127135019159.jpg.thumb.jpg"},
      ]
    };
  },
  methods: {},
};
</script>

<style scope  lang="less">
.product-content {
  display: flex;
  flex-direction: column;
  .section-title{
    padding: 10px;
    padding-bottom: 5px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .title{
      font-size: 18px;
    }
  }
}
</style>