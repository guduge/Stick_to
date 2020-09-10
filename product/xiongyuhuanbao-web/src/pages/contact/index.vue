<template>
  <div class="contact-content">
     <span> 公司名称：山西雄宇环保科技有限公司 <router-link to="/company"> 👉 👉 公司介绍</router-link> </span> 
    公司地址：山西省太原市小店区康宁街万马仕广场12层1214室
    <br />
    <div>
      公司电话：
      <a href="tel:">xxx-xxxx</a>
    </div>
    <div>
      电子邮件：
      <a href="mailto:10642975897@qq.com">1064297589@qq.com</a>
    </div>
    <div>
       联 系 人：张世雄 （先生）
    <br />手机号码：
    <a href="tel:18735173681">18735173681</a>
    </div>
    <div class="wxewm">
      <span>添加微信：</span>
      <img src="../../assets/qr.png" alt="微信二维码" />
    <br />微信号:nt18735173681 <br />
    </div>QQ号:1064297589
    <br />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scope>
.wxewm {
}
.wxewm span {
  display: block;
}
.wxewm img {
  max-width: 60%;
  height: auto;
  margin: 10px 0;
}
.contact-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>