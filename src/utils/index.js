/*
 * @Description: 常规工具类
 * @Author: renbo
 * @Date: 2020-02-01 14:27:38
 * @LastEditTime: 2020-02-01 18:43:02
 * @LastEditors: renbo
 */

import Cookies from "js-cookie";

import {
  isBoolean,
  isString,
  isNumber,
  isDate,
  isEmpty as _isEmpty
} from "lodash";
/**
 *Cookies
 * @param {*} key
 * @param {*} val
 */
export const setCookie = (key, val) => {
  Cookies.set(key, val);
};

export const getCookie = key => {
  const token = Cookies.get(key);
  if (token) return token;
  else return false;
};

export const removeCookie = key => {
  Cookies.remove(key);
};

/**
 * @param {Number} num 数值
 * @returns {String} 处理后的字符串
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 */
export const getHandledValue = num => {
  return num < 10 ? "0" + num : num;
};

/**
 * @param {String} urlName 获取url参数的name
 */
export const getQueryString = urlName => {
  var href = decodeURI(window.location.search);
  var reg = new RegExp("(^|&)" + urlName + "=([^&]*)(&|$)");
  var r = href.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

/**
 * localStorage
 * @param {*} key
 * @param {*} val
 */
export const localStorageSet = (key, val) => {
  val = JSON.stringify(val);
  window.localStorage
    ? localStorage.setItem(key, val)
    : Cookies.set(key, val, 1);
};
export const localStorageGet = key => {
  return window.localStorage
    ? JSON.parse(localStorage.getItem(key))
    : Cookies.get(key);
};
export const localStorageRemove = key => {
  return window.localStorage
    ? localStorage.removeItem(key)
    : Cookies.remove(key);
};

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (target, arr) => {
  return target.some(_ => arr.indexOf(_) > -1);
};

/**
 *判断val是否为空
 * @param {*} val
 */
export const isEmpty = val => {
  if (val === null || val === undefined || val === "") {
    return true;
  }
  if (isBoolean(val)) return false;
  if (isString(val)) return false;
  if (isNumber(val)) return false;
  if (isDate(val)) return false;
  return _isEmpty(val);
};
/**
 *验证邮箱
 * @param {*} value
 */
export const email = value => {
  return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(
    value
  );
};

/**
 * 验证 https://或者https://开头
 * @param {*} value
 */
export const urlHeader = value => {
  return /^[1-9][0-9]{0,2}$/.test(value);
};

/**
 * 校验手机号
 * @param {*} phone
 */
export const isPhone = phone => {
  return /^1[0-9]{10}$/.test(phone);
};

/**
 * 去掉前后空格
 * 1:前后空格(默认)  2:所有空格  3:前空格 4:后空格
 * @param  {[type]} str  [description]
 * @param  {Number} type [description]
 * @return {[type]}      [description]
 */
export const trim = (str, type = 1) => {
  switch (type) {
    case 1:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 2:
      return str.replace(/\s+/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
};

/**
 * 大小写转换
 * 1:首字母大写 2:首页母小写 3:大小写转换 4:全部大写 5:全部小写
 * @param {*} str
 * @param {*} type
 */
export const changeCase = (str, type) => {
  function ToggleCase(str) {
    var itemText = "";
    str.split("").forEach(function(item) {
      if (/^([a-z]+)/.test(item)) {
        itemText += item.toUpperCase();
      } else if (/^([A-Z]+)/.test(item)) {
        itemText += item.toLowerCase();
      } else {
        itemText += item;
      }
    });
    return itemText;
  }

  switch (type) {
    case 1:
      return str.replace(/^(\w)(\w+)/, function(v, v1, v2) {
        return v1.toUpperCase() + v2.toLowerCase();
      });
    case 2:
      return str.replace(/^(\w)(\w+)/, function(v, v1, v2) {
        return v1.toLowerCase() + v2.toUpperCase();
      });
    case 3:
      return ToggleCase(str);
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
};
