
<template>
  <div class="contact-content">
    <div class="r_companydetail">
      <div class="companyInfo">
        <div class="companyLogo">
          <img
            src="../../assets/logo.png"
            class="logo-icon"
          />
          <!---->
        </div>
        <div class="info-content">
          <h1 class="name">山西雄宇环保科技有限公司</h1>
          <p class="ind">电气机械/器材制造</p>
          <!-- <p class="prop">民营</p>
          <p class="scale">20人以下</p> -->
        </div>
      </div>
      <div class="companyAdd boxsizing">
        <p class="tit">联系我们</p>
        <div class="add">
          <van-icon name="location-o" class="icon"/>
          <span>地址：山西省太原市小店区康宁街万马仕广场12层1214室</span>
        </div>
        <div class="add">
          <van-icon name="envelop-o" class="icon" />
          <span>邮箱：<a href="mailto:10642975897@qq.com">1064297589@qq.com</a></span>
        </div>
        <div class="add">
          <van-icon name="user-circle-o" class="icon" />
          <span>联系人：张世雄（先生）</span>
        </div>
        <div class="add">
          <van-icon name="phone-o" class="icon" />
          <span>手机号：<a href="tel:18735173681">18735173681</a></span>
        </div>
        <div class="add">
          <van-icon name="chat-o" class="icon" />
          <span>微信号：nt18735173681</span>
        </div>
        
      </div>
      <div class="company-box boxsizing">
        <p class="tit">公司描述</p>
        <div class="about-main">
          <p>山西雄宇环保科技有限公司是专业从事环保、热能技术开发和应用的公司。致力为客户提供环保节能锅炉、全预混高效冷凝锅炉、冷凝蒸汽锅炉、热水锅炉、真空锅炉、空气源热泵、壁挂炉、供暖工程（含BOT合同能源管理、供热管理、水处理工程、空调工程、热水供应工程的设备选型、系统设计、安装、调试、维护等全过程服务。主要经营：燃（油）气锅炉、电锅炉、空气源热泵、真空热水机组、燃烧器、燃气表、软水器、锅炉空调节能控制设备。</p>
          <p>公司在太原市小店经济开发区康宁街，在环保能源领域从事多年并有丰富经验，并在山西省内各地市太原市、晋城市设有销售服务网络，公司设有市场部、技术部、工程部、售后服务部等专业部门，拥有雄厚的经济、技术实力和健全的管理制度；公司为用户提供最佳的设备、最优的系统及完善的售后服务，做到投资、技术合理、设备先进、自动化程度高，以此来回报广大用户对我们工作的支持和信任。</p>
          <p>公司一定会不断进取，信守“以人为本、诚信敬业、共赢未来”的公司理念，力争在技术、品质、服务、管理等多方面成为全行业的典范！</p>
          <p>我们郑重承诺:</p>
          <p>用真诚、严谨、规范的工作态度和良好的工作作风赢得您的微笑！</p>
          <p>以雄厚的技术实力为您提供放心工程！</p>
          <p>为您提供人性化、亲情化的售前、售中、售后超值服务</p>
          <p>为了适应市场的发展，公司紧跟国家环保相关“煤改气、煤改电”政策， 大力推广相关环保设备，急需专业的技术人才、销售精英共同发展。</p>
        </div>
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
.contact-content {
  background: #f5f5f5;
}
.r_companydetail {
  width: 95%;
  margin: 0 auto 8px;
}
.r_companydetail .companyInfo {
  position: relative;
  padding-top: 48px;
  width: 100%;
  min-height: 176px;
  overflow: hidden;
}
.companyInfo .companyLogo {
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
}
.companyLogo .logo-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.companyLogo .MenVipUrl {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.companyInfo .info-content {
  padding: 46px 12px 12px;
  min-height: 120px;
  line-height: 24px;
  background: #fff;
  font-size: 14px;
  color: #888;
  text-align: center;
  box-shadow: 0 0 7px #c1eaff;
  border-radius: 4px;
}
.info-content .name {
  font-size: 16px;
  color: #333;
}
.companyAdd {
  padding: 16px 12px;
  margin-top: 8px;
  width: 100%;
  min-height: 72px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}
.companyAdd .tit {
  margin-bottom: 6px;
  font-size: 16px;
  color: #333;
}
a:link {
  color: lightblue;
}
a:visited {
  color: #888888;
}
.companyAdd .add {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
}
.companyAdd .add .icon {
  margin-right: 5px;
}
.company-box {
  padding: 16px 12px;
  margin-top: 8px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
}
.company-box .tit {
  margin-bottom: 6px;
  font-size: 16px;
  color: #333;
}
.company-box .about-main {
  line-height: 24px;
  font-size: 14px;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}
.company-box .link-more {
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #51a1ff;
  text-align: right;
}
.boxsizing {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
</style>
