import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
// 进行this.$http请求
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 注册路由
Vue.use(Router);

// 定义路由 history 方式
const router = new Router({
  base: process.env.BASE_URL,
  routes,
  mode: "history"
});

// 路由钩子函数
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  next();
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
