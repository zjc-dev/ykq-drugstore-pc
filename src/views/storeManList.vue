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
          <div class="main_box">
            <div class="main_title"><span>门店申请</span></div>
            <div class="main_info">
              <div class="content">
                <div class="step_warp">
                  <div>
                    <span class="step_index">1</span>
                    <p>基础信息</p>
                    <span class="step_line"></span>
                  </div>
                  <div>
                    <span class="step_index">2</span>
                    <p>资质信息</p>
                    <span class="step_line"></span>
                  </div>
                  <div>
                    <span class="step_index">3</span>
                    <p>门店资料</p>
                    <span class="step_line"></span>
                  </div>
                  <div>
                    <span class="step_index">4</span>
                    <p>提交审核</p>
                  </div>
                </div>
                <p class="title">法人信息</p>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                  <el-form-item label="法人" prop="name">
                    <el-input
                      v-model="ruleForm.name"
                      maxlength="10"
                      show-word-limit
                      placeholder="请填写法人的完整姓名"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="手机号码" prop="phone">
                    <el-input
                      v-model="ruleForm.phone"
                      maxlength="11"
                      show-word-limit
                      placeholder="请填写法人的手机号码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="身份证" prop="id_card">
                    <el-input
                      v-model="ruleForm.id_card"
                      maxlength="18"
                      show-word-limit
                      placeholder="请填写法人的身份证号码"
                    ></el-input>
                  </el-form-item>

                  <el-form-item label="法人身份证证件照" prop="id_image">
                    <el-upload action="">
                      <div class="img_upload">
                        <img :src="idcard_front" alt="" title="基本信息" />
                        <p>点击上传人面像</p>
                      </div>
                      <div class="img_upload">
                        <img :src="idcard_behind" alt="" title="基本信息" />
                        <p>点击上传国徽面</p>
                      </div>
                    </el-upload>
                  </el-form-item>
                  <el-form-item
                    label="身份证有效期"
                    class="id_usetime"
                    required
                  >
                    <el-col>
                      <el-form-item prop="date1">
                        <el-date-picker
                          type="date"
                          placeholder="请选择证件的有效期"
                          v-model="ruleForm.date1"
                          style="width: 100%"
                        ></el-date-picker>
                      </el-form-item>
                    </el-col>
                  </el-form-item>
                  <!--  -->
                  <p class="title">委托信息</p>
                  <el-form-item label="委托人" prop="assignor">
                    <el-input
                      v-model="ruleForm.assignor"
                      maxlength="10"
                      show-word-limit
                      placeholder="请填写委托人的完整姓名"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="委托人手机号码" prop="assig_phone">
                    <el-input
                      v-model="ruleForm.assig_phone"
                      maxlength="11"
                      show-word-limit
                      placeholder="请填写法人的手机号码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="被委托人" prop="trustee">
                    <el-input
                      v-model="ruleForm.trustee"
                      maxlength="18"
                      show-word-limit
                      placeholder="请填写法人的身份证号码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="被委托人身份证" prop="trustee_id_card">
                    <el-input
                      v-model="ruleForm.trustee_id_card"
                      maxlength="18"
                      show-word-limit
                      placeholder="请填写法人的身份证号码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="被委托人身份证证件照">
                    <el-upload action="">
                      <div class="img_upload">
                        <img :src="idcard_front" alt="" title="基本信息" />
                        <p>点击上传人面像</p>
                      </div>
                      <div class="img_upload">
                        <img :src="idcard_behind" alt="" title="基本信息" />
                        <p>点击上传国徽面</p>
                      </div>
                    </el-upload>
                  </el-form-item>
                  <el-form-item
                    label="被委托人身份证有效期"
                    class="id_usetime"
                    required
                  >
                    <el-col>
                      <el-form-item prop="date2">
                        <el-date-picker
                          type="date"
                          placeholder="请选择证件的有效期"
                          v-model="ruleForm.date1"
                          style="width: 100%"
                        ></el-date-picker>
                      </el-form-item>
                    </el-col>
                  </el-form-item>
                  <el-form-item
                    label="委托授权书"
                    prop="letter"
                    class="last_item"
                  >
                    <div class="letter">
                      <p>请拍照上传委托书图片</p>
                      <span>委托授权书模板</span>
                    </div>
                    <el-upload action="">
                      <div class="img_upload">
                        <img :src="idcard_front" alt="" title="基本信息" />
                        <p>点击上传</p>
                      </div>
                    </el-upload>
                  </el-form-item>
                </el-form>
                <div class="btn">
                  <button class="next_step">下一步</button>
                  <button class="cancel">取消</button>
                </div>
              </div>
            </div>
          </div>
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
import step01Icon from "../assets/step01.png";
import step02Icon from "../assets/step02.png";
import step03Icon from "../assets/step03.png";
import step04Icon from "../assets/step04.png";
import idcard_frontIcon from "../assets/idcard_front .png";
import idcard_behindIcon from "../assets/idcard_behind.png";

export default {
  data() {
    var validatePass3 = (rule, value, callback) => {
      const reg = /^1[3|4|5|7|8][0-9]{9}$/;
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    return {
      isCollapse: false,
      restaurants: [],
      state1: "",
      mdgl: mdglIcon,
      tcdl: tcdlIcom,
      zhgl: zhglIcon,
      ykq: ykqIcon,
      xzsq: xzsqIcon,
      step01: step01Icon,
      step02: step02Icon,
      step03: step03Icon,
      step04: step04Icon,
      idcard_front: idcard_frontIcon,
      idcard_behind: idcard_behindIcon,
      ruleForm: {
        name: "",
        phone: "",
        id_card: "",
        date1: "",
        date2: "",
        id_image: "",
        assignor: "",
        assig_phone: "",
        trustee: "",
        trustee_id_card: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入法人姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        phone: [{ required: true, validator: validatePass3, trigger: "blur" }],
        id_card: [
          { required: true, message: "请输入正确的身份证号", trigger: "blur" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        trustee_id_card: [{ required: true }],
        id_image: [{ required: true }],
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
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
}
.step_warp {
  width: 572px;
  height: 100px;
  margin: 0 auto;
  padding: 0 10px;
}

.step_warp div {
  position: relative;
  float: left;
  width: 80px;
  height: 100px;
  font-size: 14px;
  margin-right: calc((100% - 320px) / 3);
}
.step_warp div:nth-last-child(1) {
  margin-right: 0;
}
.step_index {
  // 将行内元素转换为行内块元素
  margin-top: 15px;
  margin-bottom: 15px;
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
}
.step_warp div:nth-child(1) .step_index {
  background-color: #14bd84;
}
.step_warp p {
  color: #666666;
}
.step_warp div:nth-child(1) p {
  font-weight: 600;
  color: #333333;
}

.step_line {
  position: absolute;
  top: 36%;
  right: -84px;
  display: inline-block;
  background-color: #e1e1e1;
  width: 80px;
  height: 1px;
}
/* 主题部分 */
.main_box {
  height: 100%;
}
/* 设置主题左上角提示信息 */
.main_box .main_title {
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
// 法人信息
.title {
  width: 542px;
  height: 20px;
  text-align: left;
  font-size: 18px;
  font-family: PingFangSC, PingFangSC-Medium;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
}
.content .el-form-item /deep/ .el-form-item__label {
  width: 170px !important;
}
.el-form-item /deep/ .el-form-item__content {
  width: 400px;
  margin-left: 170px;
}
.id_usetime /deep/ .el-form-item .el-form-item__content {
  margin-left: 0px;
  width: 300px;
}
// 图片上传 el-form-item__content
.el-form-item /deep/ .el-upload--text {
  width: 400px;
}
.img_upload {
  position: relative;
  float: left;
  padding-right: 30px;
}
.img_upload img {
  width: 150px;
  height: 114px;
}
.img_upload p {
  position: absolute;
  top: 65px;
  width: 150px;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  text-align: center;
  color: #999;
  line-height: 17px;
}
.letter {
  text-align: left;
}
.letter p {
  display: inline-block;
  margin-right: 20px;
  color: #666666;
  font-size: 14px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
}
.letter span {
  color: #00b9ad;
  cursor: pointer;
}
.btn {
  width: 402px;
  margin-left: 170px;
  height: 56px;
}
.btn .next_step {
  float: left;
  height: 36px;
  width: 68px;
  background-color: #00b9ad;
  color: #fff;
  margin-right: 10px;
  font-size: 14px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  margin-right: 10px;
  width: 68px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-color: #00b9ad;
  border-radius: 2px;
}
.btn .cancel {
  float: left;
  height: 36px;
  width: 68px;
  background-color: #fff;
  color: #696977;
  font-size: 14px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  margin-right: 10px;
  width: 68px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border: 1px solid #e4e4eb;
  border-radius: 2px;
}
.last_item {
  height: 152px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>