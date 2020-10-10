/*
 * @Description: 环境配置
 * @Author: yangshuai
 * @Date: 2020-06-02
 * @LastEditTime : 2020-06-02
 * @LastEditors  : yangshuai
 */

const path = require("path");
const resolve = dir => path.join(__dirname, dir);
// 可修改配置
const publicPath = "/";

module.exports = {
  // 输出文件目录
  outputDir: "dist",
  publicPath: publicPath,
  // 静态输出目录
  assetsDir: "static",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 生产环境sourceMap
  productionSourceMap: false,
  // 设置别名
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));

    config.output.filename("[name].[hash].js").end();
  },
  // 开启多核编译
  parallel: require("os").cpus().length > 1
};
