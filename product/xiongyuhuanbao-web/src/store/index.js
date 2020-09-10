import Vue from 'vue'
import Vuex from 'vuex'
import tabBarStore from './modules/tabbar'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    tabBarStore
  },
  strict: debug,
})