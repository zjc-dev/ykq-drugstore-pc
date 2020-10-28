<template>
  <div class="header">
    <el-header>
      <!-- 输入框开始 -->
      <el-row class="demo-autocomplete">
        <el-autocomplete
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请选择门店"
          @select="handleSelect"
          suffix-icon="el-icon-arrow-down"
        ></el-autocomplete>
      </el-row>
      <!-- 输入框结束 -->
      <!-- 提示文字start -->
      <span>您好，欢迎使用宜块钱商家平台管理系统!</span>
      <button @click="sonmethods">点击</button>
      <button @click="chat">兄弟组件通信</button>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          17621756768<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><img :src="zhgl" />账号管理</el-dropdown-item>
          <el-dropdown-item><img :src="mdgl" />门店管理</el-dropdown-item>
          <el-dropdown-item><img :src="mdgl" />门店申请</el-dropdown-item>
          <el-dropdown-item><img :src="tcdl" />退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 提示文字end -->
    </el-header>
  </div>
</template>

<script>
import mdglIcon from "../assets/mdgl.png";
import zhglIcon from "../assets/zhgl.png";
import tcdlIcom from "../assets/tcdl.png";
import ykqIcon from "../assets/ykq.png";
import bus from "../router/bus";

export default {
  name: "header-router",
  props: ["msg"],
  data() {
    return {
      restaurants: [],
      state1: "",
      mdgl: mdglIcon,
      tcdl: tcdlIcom,
      zhgl: zhglIcon,
      v: 10,
    };
  },

  methods: {
    chat() {
      bus.$emit("on", this.v);
    },
    sonmethods() {
      this.$emit("func", this.v);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>
<style scoped>
.header {
  width: calc(100vw - 200px);
  height: 64px;
  position: absolute;
  left: 200px;
}
.el-header {
  background-color: #f7f8f9;
  color: #222;
  text-align: center;
  line-height: 60px;
}
.demo-autocomplete {
  float: left;
  padding-left: 0px;
}
.demo-autocomplete /deep/ .el-input {
  width: 300px;
}
.el-header span {
  float: left;
  font-size: 12px;
  height: 60px;
  line-height: 60px;
  margin-left: 20px;
}
.el-dropdown {
  float: right;
}
/* 选择器权重 */
.el-dropdown .el-dropdown-link {
  font-size: 14px;
}
/* 设置图片大小 */
.el-dropdown-menu img {
  width: 19px;
  height: 19px;
  vertical-align: middle;
  margin-right: 4px;
}
</style>