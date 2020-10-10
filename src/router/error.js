/*
 * @Author: yangshuai
 * @Date: 2020-06-02
 * @LastEditTime : 2020-06-02
 * @LastEditors  : yangshuai
 * @Description: error routers
 * @FilePath: /YKQ-VUE-PC-TEMPLATE/src/router/error.js
 */
// 错误页面路由
import Err404 from "@/views/error-page/404.vue";
import Error401 from "@/views/error-page/401.vue";

export default [
  {
    path: "/401",
    name: "error_401",
    component: Error401
  },
  {
    path: "*",
    name: "error_404",
    component: Err404
  }
];
