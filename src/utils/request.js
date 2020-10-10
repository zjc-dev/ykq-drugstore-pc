/*
 * @Description: 请求接口封装类
 * @Author: yangsshuai
 * @Date: 2020-06-02
 * @LastEditTime: 2020-06-02
 * @LastEditors: yangshuai
 */
import axios from "axios";
import { Message } from "element-ui";
import qs from "qs";
import { getCookie, removeCookie } from "@/utils";
import { getEnvConfig } from "@/utils/env";

const msg = Message;

class Request {
  constructor() {
    // 存储请求队列
    this.queue = {};
  }
  /**
   * 请求拦截
   * @param {*} instance
   */
  interceptors(instance) {
    /**
     * 添加请求拦截器
     * @params config 请求拦截器配置
     */
    instance.interceptors.request.use(
      config => {
        // 请求内容类型配置
        const CONTENT_TYPE = {
          JSON: "application/json;charset=UTF-8",
          FORM: "application/x-www-form-urlencoded; charset=UTF-8"
        };

        const { method, data = {}, url } = config;

        // header 头配置
        config.headers["token"] = getCookie("token");

        // 请求 API 地址
        config.url = getEnvConfig.REQUEST_URL + url;

        // 处理post 请求
        if (method === "post") {
          if (config["contentType"] === CONTENT_TYPE.FORM) {
            config.data = qs.stringify(data);
          }

          if (config["contentType"] === CONTENT_TYPE.JSON) {
            config.data = JSON.stringify(data);
          }
        }

        // 处理get 请求
        if (method === "get") {
          if (data !== undefined && Object.values(data).length > 0) {
            const params = Object.keys(data).reduce(
              (res, key) =>
                res + key + "=" + encodeURIComponent(data[key]) + "&",
              ""
            );
            config.url =
              config.url + "?" + params.substring(0, params.length - 1);
          }
        }
        return config;
      },
      error => {
        // 对请求错误处理的回调
        return Promise.reject(error);
      }
    );

    /**
     * 添加响应拦截器
     * @params {res} 响应拦截器的返回结果
     */
    instance.interceptors.response.use(
      response => {
        const res = response.data;
        // token 过期 此处修改成自己的code
        if (res.code === 9009 || res.code === 10000) {
          msg({
            message: res.msg || "token 失效,请重新登陆",
            type: "error",
            onClose: () => {
              // 页面地址暂定
              console.log("跳转到登录页面");
              window.Location.href = "/login";
              removeCookie("token");
            }
          });
        }
        // 接口请求失败
        if (res.code !== 0) {
          msg({ message: res.msg || "请求服务失败", type: "error" });
        }
        return response;
      },
      error => {
        msg({ message: "服务内部错误", type: "error" });
        return Promise.reject(error);
      }
    );
  }

  // 创建实例
  create() {
    return axios.create({ timeout: 30000 });
  }
  // 请求实例
  request(options) {
    let instance = this.create();

    this.interceptors(instance, options.url);

    options = Object.assign({}, options);
    this.queue[options.url] = instance;
    return instance(options);
  }
}

const server = new Request();

// 导出构造函数
export default server;
