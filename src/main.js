import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import initPlugins from "./plugins"
Vue.config.productionTip = false
const app = {
  router,
  store,
  render: h => h(App)
};
initPlugins(app)
new Vue(app).$mount('#app')
