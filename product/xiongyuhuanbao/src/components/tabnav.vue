<template>
  <div class="menu-box">
      <div class="top-menu">
        <img src="@/assets/logo.png" @click="goHome" class="zx_logo" />
        <div @click="callme" class="right-menu-name">服务热线：18735173681</div>
      </div>
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <div class="left-menu-box">
            <div class="menus">
              <TopMenuItem title="网站首页" link="/home" />
              <TopMenuItem title="公司介绍" link="/introduce" />
              <TopMenuItem title="供应产品" link="/product" />
              <TopMenuItem title="新闻中心" link="/news" />
              <TopMenuItem title="联系方式" link="/contact" />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TopMenuItem from "@/components/topmenu.vue";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    ...mapState("navTabStore", ["activeTabName"]),
  },
  components: {
    TopMenuItem,
  },
  methods: {
    ...mapMutations("navTabStore", ["changeTab"]),
    callme() {
      
    },
  },
};
</script>

<style>
.menu-box {
  widows: 100%;
  background: #2d3c63;
  padding: 0 20px;
  box-sizing: border-box;
  height: 140px;
}
.top-menu{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
}
.zx_logo {
  cursor: pointer;
  width: 50px;
  height: 50px;
}

.menus {
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.right-menu-avatar {
  widows: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}

.left-menu-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
}

.grid-content {
  border-radius: 4px;
  min-height: 70px;
}

.right-menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  line-height: 70px;
}

.right-menu-name {
  padding: 10px 20px;
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color:white;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid rgba(50, 84, 167, 1);
  background: rgba(12, 27, 66, 0.7);
}
.right-menu-btn {
  font-size: 12px;
  font-family: FZXS12;
  font-weight: 400;
  color: rgba(116, 185, 255, 1);
  line-height: 20px;
  cursor: pointer;

  background: rgba(0, 0, 0, 0.5);
  border: 1px solid;
  border-image: linear-gradient(0deg, rgba(1, 94, 234, 1), rgba(0, 192, 250, 1))
    1 1;
  border-radius: 6px;
}
</style>