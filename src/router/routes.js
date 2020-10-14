/**
 * created by yangshuai in 2020/06/02
 * 引入页面所有路由
 * 路由组件机制参考 vue-router
 */

// 首页路由
import HomeRouter from "./home";
// 其他页面路由集合;
import ResourceRouter from "./resource";
// 错误页面路由;
import ErroRouter from "./error";
import baiduRouter1 from "./baidu";
import messRouter from "./mess";
import loginRouter from "./login";
import registerRouter from "./register";
import storeManListRouter from "./storeManList";
import accountfundsRouter from "./accountfunds";

// 导出公共路由
export default [...accountfundsRouter, ...HomeRouter, ...ResourceRouter, ...ErroRouter, ...baiduRouter1, ...messRouter, ...loginRouter, ...registerRouter, ...storeManListRouter];
