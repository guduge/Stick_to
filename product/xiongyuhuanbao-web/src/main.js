import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import './style.css';
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.use(Mint);
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$store = store;

// new Vue({
//   store,
//   router, //可以简写router
//   render: c => c(App),
// })
new Vue({
  store,
  router, //可以简写router
  render: h => h(App),
}).$mount('#app')