<template>
  <div class="app">
    <el-container>
      <el-aside width="200px" :class="{ 'collapse-menu': isCollapse }">
        <div class="menu-left">
          <div class="img-left">
            <img :src="ykq" alt="" />
          </div>
          <el-row>
            <el-menu
              :collapse="isCollapse"
              class="el-menu-vertical-demo"
              default-active="1"
              @open="handleOpen"
              @close="handleClose"
              text-color="#fff"
              active-text-color="#ffd04b"
              :unique-opened="true"
            >
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">工作台</span>
              </el-menu-item>
              <!-- 用户管理 -->
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item index="2-1">用户管理</el-menu-item>
                <el-menu-item index="2-2">优惠券发送记录</el-menu-item>
              </el-submenu>
              <!-- 商品 -->
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品</span>
                </template>
                <el-menu-item index="3-1"
                  ><a href="/home">商品管理</a></el-menu-item
                >
                <el-menu-item index="3-2">商品申请记录</el-menu-item>
                <el-menu-item index="3-3">商品批量导入</el-menu-item>
                <el-menu-item index="3-4">商品分类</el-menu-item>
              </el-submenu>

              <!-- 营销中心 -->
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>营销中心</span>
                </template>
                <el-menu-item index="4-1">营销工具</el-menu-item>
                <el-menu-item index="4-2">短信营销</el-menu-item>
              </el-submenu>
              <!-- 店铺设置 -->
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>店铺设置</span>
                </template>
                <el-menu-item index="4-1">店铺基本信息</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-row>
          <div class="menu-footer" @click="isshow">
            <img :src="xzsq" alt="" />
            <span>向左收起</span>
          </div>
        </div>
      </el-aside>

      <el-container>
        <el-header>
          <!-- 输入框开始 -->
          <el-row class="demo-autocomplete">
            <el-autocomplete
              class="inline-input"
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
        <el-main>
          <!-- 内容标题 -->
          <div class="main_title">
            <span>商家/</span>
            <span>商家管理</span>
          </div>
          <!-- 内容搜索 -->
          <el-form :model="form" label-width="80px">
            <el-form-item label="商家条码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商家条码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商家条码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="分类">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="分类">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="分类">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="分类">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <div class="btn_search">
              <button
                class="sea"
                type="primary"
                @click="submitForm('ruleForm')"
              >
                查询
              </button>
              <button class="reset" @click="resetForm('ruleForm')">重置</button>
            </div>

            <div class="res">
              <a>新建</a>
              <a>批量上架</a>
              <a>批量删除</a>
              <a>设置分类</a>
              <a>导出商品</a>
            </div>
          </el-form>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import mdglIcon from "../assets/mdgl.png";
import zhglIcon from "../assets/zhgl.png";
import tcdlIcom from "../assets/tcdl.png";
import ykqIcon from "../assets/ykq.png";
import xzsqIcon from "../assets/xzsq.png";

export default {
  data() {
    return {
      isCollapse: false,
      restaurants: [],
      state1: "",
      mdgl: mdglIcon,
      tcdl: tcdlIcom,
      zhgl: zhglIcon,
      ykq: ykqIcon,
      xzsq: xzsqIcon,
      form: {
        name: "",
        region: "",
      },
    };
  },
  methods: {
    isshow() {
      console.log(1);
      this.isCollapse = !this.isCollapse;
      console.log(this.isCollapse);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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

<style lang="less" scoped>
.collapse-menu {
  width: 64px !important;
}
.el-header {
  background-color: #f7f8f9;
  color: #222;
  text-align: center;
  line-height: 60px;
}
.demo-autocomplete {
  display: inline-block;
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
/* 设置左边栏 */
.el-aside {
  background-color: rgb(62, 83, 96);
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
}

.img-left {
  height: 40px;
  line-height: 40px;
}
.menu-left .el-row {
  margin-top: 20px;
}
.el-aside img {
  width: 150px;
  padding-left: 14px;
}
.el-menu {
  background-color: rgb(62, 83, 96);
  border-right: 0px;
}
.el-submenu /deep/ .el-submenu__title {
  padding-right: 89px;
  /* 设置图片和文字左对齐 */
  text-align: left;
}
.el-menu-item:hover {
  background-color: rgb(50, 66, 77);
}
.el-submenu /deep/ .el-submenu__title:hover {
  background-color: rgb(50, 66, 77);
  cursor: pointer;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item-group {
  background-color: rgb(62, 83, 96);
}
.el-menu-item {
  background-color: rgb(62, 83, 96);
  text-align: left;
  /* padding-left: 50px !important; */
}
.menu-left {
  position: relative;
  padding-top: 50px;
  height: 100vh;
}

.el-menu-item:focus {
  background-color: rgb(62, 83, 96);
}
.is-active:focus {
  color: rgb(255, 255, 255) !important;
}
/* 取消第一个箭头 /deep/ .el-submenu__icon-arrow*/
.el-submenu:nth-child(1) /deep/ .el-submenu__title .el-icon-arrow-down {
  display: none;
}
/* 设置向左收起功能 */

/* 设置右边栏 */
.menu-footer {
  position: fixed;
  bottom: 0px;
  padding-left: 20px;
  width: 200px;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
  text-align: left;
  border-top: 1px solid hsla(0, 0%, 100%, 0.2);
  color: hsla(0, 0%, 100%, 0.6);
}
.menu-footer img {
  width: 30px;
  height: 12px;
  vertical-align: middle;
  margin-right: 10px;
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
}

/* 主题部分 */
.main_box {
  height: 100%;
}
/* 设置主题左上角提示信息 */
.main_title {
  line-height: 20px;
  text-align: left;
  font-size: 12px;
}
.main_box .main_info {
  background-color: #fff;
  margin-top: 15px;
  padding-top: 45px;
}
.content {
  width: 572px;
  height: 100%;
  margin: 0 auto;
}

body > .el-container {
  margin-bottom: 40px;
}
// 主题部分
.el-form {
  overflow: hidden;
  width: calc(100% - 200px);
}
.el-form-item {
  float: left;
  width: 23%;
}
// 修改商家条码高度
.el-form-item /deep/ .el-form-item__label {
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  margin-top: 3px;
  padding-right: 7px;
}
// 修改输入框大小
.el-form-item /deep/ .el-input__inner {
  height: 30px;
  line-height: 30px;
  font-size: 13px;
}
.btn_search {
  width: 200px;
  height: 40px;
  margin-left: 880px;
  margin-top: 70px;
  text-align: left;
}
.btn_search .sea {
  cursor: pointer;
  background-color: #00b9ad;
  width: 60px;
  height: 30px;
  color: #fff;
  margin-left: 10px;
  margin-right: 20px;
  font-size: 14px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  background: #00b9ad;
  border-color: #00b9ad;
  color: #fff;
  border-radius: 2px;
}
.btn_search .reset {
  cursor: pointer;
  background-color: #fff;
  width: 60px;
  height: 30px;
  font-size: 14px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  border: 1px solid #e4e4eb;
  border-radius: 2px;
  color: #696977;
}
.res {
  height: 40px;
  width: 700px;
}
.res a {
  float: left;
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #e1e1e1;
  margin: 0 18px;
  font-size: 14px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
}
.res a:active {
  background-color: #00b9ad;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>