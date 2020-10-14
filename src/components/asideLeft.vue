<template>
  <div class="aside_left">
    <el-aside width="200px" :class="{ 'collapse-menu': isCollapse }">
      <div class="menu-left">
        <div class="img-left">
          <img
            src="https://ykq-h5.ybm100.com/drugstore-admin/static/img/text-logo.7bfd9a4e.png"
            alt=""
          />
        </div>
        <el-row>
          <el-menu
            :collapse="isCollapse"
            class="el-menu-vertical-demo"
            default-active="1"
            @open="handleOpen"
            @close="handleClose"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b"
            :unique-opened="true"
          >
            <el-menu-item index="/home">
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
              <el-menu-item index="/home">商品管理</el-menu-item>
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
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>财务管理</span>
              </template>
              <el-menu-item index="/accountfunds">账户资金</el-menu-item>
              <el-menu-item index="4-1">账单记录</el-menu-item>
              <el-menu-item index="4-1">提现记录</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-row>
        <div class="menu-footer" @click="isshow">
          <img :src="xzsq" alt="" />
          <span>向左收起</span>
        </div>
      </div>
    </el-aside>
  </div>
</template>

<script>
import ykqIcon from "../assets/ykq.png";
import xzsqIcon from "../assets/xzsq.png";
export default {
  name: "aside-left",
  data() {
    return {
      isCollapse: false,
      ykq: ykqIcon,
      xzsq: xzsqIcon,
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
  },
};
</script>

<style scoped>
.aside_left {
  width: 200px;
  position: fixed;
  top: 0;
}
.collapse-menu {
  width: 64px !important;
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
  padding-left: 12px;
  padding-right: 10px;
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
</style>