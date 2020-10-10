/*
 * @Author: yangshuai
 * @Date: 2020-06-02
 * @LastEditTime: 2020-06-02
 * @LastEditors: yangshuai
 * @Description:  示例api服务
 */

import httpRequest from "@/utils/request";

// post 请求
export function examPostRequest(data) {
  return httpRequest
    .request({
      url: "examUrl/post",
      method: "post",
      data: data
    })
    .then(res => res.data.result);
}

// get 请求
export function examGetRequest(data) {
  return httpRequest
    .request({
      url: "examUrl/get",
      method: "get",
      params: data
    })
    .then(res => res.data.result);
}
