<template>
  <div class="contact-content">
    <div class="companyInfo">
      <div class="companyLogo">
        <img
          src="https://rd5-public.zhaopin.cn/imgs/company/040e5c6f415fc06cfa3042a1fd0be142.jpg"
          class="logo-icon"
        />
        <!---->
      </div>
      <div class="info-content">
        <h1 class="name">山西雄宇科技有限公司</h1>
        <p class="ind">电气机械/器材制造</p>
        <p class="prop">民营</p>
        <p class="scale">20人以下</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scope  lang="less">
*{
    box-sizing: border-box;
}
.contact-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .companyInfo {
    position: relative;
    padding-top: 48px;
    width: 100%;
    min-height: 176px;
    overflow: hidden;
    .companyLogo {
      position: absolute;
      top: 8px;
      left: 50%;
      margin-left: -40px;
      width: 70px;
      height: 70px;
      padding: 5px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 -4px 6px #c1eaff;
      img{
          border: 0;
      }
      .logo-icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }

    }
  }
}
</style>
