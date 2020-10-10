/*
 * @Author: yangshuai
 * @Date: 2020-06-02
 * @LastEditTime : 2020-06-02
 * @LastEditors  : yangshuai
 * @Description: error routers
 * @FilePath: /YKQ-VUE-PC-TEMPLATE/src/router/error.js
 */
// 错误页面路由
import homeRouter from "@/views/home.vue";

export default [
  {
    path: "/home",
    name: "home",
    component: homeRouter,
    meta: {
      title: "home页面"
    }
  }
];
