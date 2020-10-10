import Vue from "vue";
import Less from 'less';
import "normalize.css/normalize.css"; // 样式初始化
import "@/styles/index.scss"; // 全局样式
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./elementInit";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
