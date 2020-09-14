<template>
  <div class="news-content">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell size="large" v-for="item in list" :key="item.linkUrl"
        :title="item.label" is-link
        @click="cellClick(item)"
         
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      list: [],
      listData:[
        {linkUrl:"https://mp.weixin.qq.com/s/ATbia-DMnidrYiT8k8-X5A",label:"【干货】碱度的测定"},
        {linkUrl:"https://mp.weixin.qq.com/s/05yA46IOAxQez9PnnU9gVg",label:"【干货】氯化物的测定"},
        {linkUrl:"https://mp.weixin.qq.com/s/Pv589zrbrHa4uft-AGnzHQ",label:"【干货】硬度的测定"},
        {linkUrl:"https://mp.weixin.qq.com/s/fdqpZV7zM0EXdHFFHq21Pg",label:"【干货】锅炉运行水质指标"},
        {linkUrl:"https://mp.weixin.qq.com/s/TytWL0xhDcJLGSncuz9lzQ",label:"锅炉的基础知识——带你走进供暖的世界"},
        {linkUrl:"https://mp.weixin.qq.com/s/C7rtdK17RZShsZf0qoQMXA",label:"锅炉如何实现低氮排放？"},
        {linkUrl:"https://mp.weixin.qq.com/s/x5lN_uptH5osClmpBLTVMw",label:"低氮燃烧器选择考虑的主要参数"},
        {linkUrl:"https://mp.weixin.qq.com/s/uuJsA5vFJSC2eULeVRtuAQ",label:"对比 | 全预混冷凝锅炉 VS 普通锅炉"},
        {linkUrl:"https://mp.weixin.qq.com/s/cjmsQpO-64Wdmqnkl-hERg",label:"蒸汽锅炉与蒸汽发生器的对比"},
        {linkUrl:"https://mp.weixin.qq.com/s/wgnctfv-0bfU2IR7fhk46A",label:"低氮燃气锅炉与普通锅炉的区别"},
        {linkUrl:"https://mp.weixin.qq.com/s/h3lGEiJzudGR86SsRgmzCQ",label:"工业污染防治过程管控系统介绍"},
        {linkUrl:"https://mp.weixin.qq.com/s/tzP312MwxA6t7nI3HuqleQ",label:"蒸汽锅炉讲解"},
        {linkUrl:"https://mp.weixin.qq.com/s/dlbAIIEg14Am8-zY-auYLw",label:"全预混燃烧方式与大气式燃烧方式的"},
      ],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    cellClick(item){
      window.open(item.linkUrl,'_blank') // 新窗口打开外链接
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.refreshing = false;
        }
        this.list = this.listData;
        this.loading = false;
          this.finished = true;
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>

<style scope>
.news-content {
  background: white;
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>