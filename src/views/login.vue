<template>
  <!-- 主题部分 -->
  <div class="login-container">
    <div class="main">
      <!-- 左边部分 -->
      <div class="left"></div>
      <!-- 右边部分 -->
      <div class="right">
        <div class="header"><h1>宜块钱商家平台</h1></div>

        <div class="login-form">
          <!-- 登录方式选择 -->
          <ul>
            <li type="ykq" @click="type = 'ykq'">一块钱登录</li>
            <li type="zhl" @click="type = 'zhl'">智慧脸登录</li>
            <li type="ybm" @click="type = 'ybm'">药帮忙登录</li>
          </ul>
          <!-- 输入框 -->
          <div id="input" v-if="type === 'ykq'">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
            >
              <el-form-item prop="username">
                <el-input
                  v-model="ruleForm.username"
                  placeholder="请输入用户名"
                ></el-input>
              </el-form-item>
              <!--    autocomplete="off" -->
              <el-form-item prop="password">
                <el-input
                  type="password"
                  v-model="ruleForm.password"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item prop="yzm">
                <el-input
                  class="last"
                  v-model="ruleForm.yzm"
                  placeholder="验证码"
                ></el-input>
                <img :src="src" alt="" />
              </el-form-item>
            </el-form>
          </div>
          <div class="input" v-else-if="type === 'zhl'">zhl</div>
          <div class="input" v-else-if="type === 'ybm'">ybm</div>
        </div>
        <!-- 登陆按钮 -->
        <div class="login-btn">
          <button class="l-btn" @click="submit">登陆</button>
        </div>
        <div class="regi"><a href="/register">快速注册</a></div>
      </div>
    </div>
  </div>
</template>
<script>
// import loginIcon from "../assets/login.png";
import yzmIcon from "../assets/yzm.gif";
export default {
  data() {
    return {
      type: "ykq",
      src: yzmIcon,
      ruleForm: {
        username: "",
        password: "",
        yzm: "",
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
        yzm: [{ required: true, message: "验证码不能为空", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
      console.log(
        "username:" +
          this.username +
          "," +
          "password:" +
          this.password +
          "," +
          "验证码:" +
          this.yzm
      );
    },
  },
};
</script>
<style scoped>
.login-container {
  /* 桌面屏幕的100% */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.911);
}
.main {
  display: flex;
  /* 设置main宽度为屏幕的65% */
  width: 65vw;
  height: 500px;
  background-color: #fff;
  margin: auto;
}
.left {
  /* 为了不压缩图片 给定宽 */
  width: 500px;
  background: url("../assets/login.png") no-repeat;
  background-size: cover;
}
.right {
  flex: 1;
  height: 500px;
  position: relative;
}
.header {
  width: 100%;
}
h1 {
  font-size: 24px;
  height: 33px;
  width: calc(100% - 150px);
  text-align: left;
  color: #303133;
  line-height: 33px;
  margin: 0 auto;
  /* text-align: center; */
  /* margin-left: 70px; */
  margin-top: 40px;
}
.login-form {
  width: calc(100% - 150px);
  margin: 0 auto;
}
.login-form ul {
  width: 100%;
  display: flex;
  margin-top: 20px;
  height: 25px;
}
.login-form ul li {
  flex: 1;
  color: #999;
  font-size: 14px;
  cursor: pointer;
}
.s2 {
  height: 30px;
}
.el-input /deep/ .el-input__inner {
  width: 100%;
  height: 30px;
  border: 1px solid #b4bccc;
  border-radius: 4px;
  padding-left: 20px;
  margin: 10px 0 10px 0px;
  font-size: 12px;
}
.last {
  width: calc(100% - 58px);
}
.last /deep/ .el-input__inner {
  vertical-align: middle;
}
.el-input:focus {
  border-color: #03a9f4;
}

.login-form img {
  width: 58px;
  height: 30px;
  vertical-align: middle;
}

.login-btn {
  height: 35px;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.login-btn .l-btn {
  line-height: 35px;
  color: #fff;
  width: calc(100% - 150px);
  border: 1px solid #fff;
  background-color: #00b9ad;
  border-radius: 4px;
}

.regi {
  width: 100%;
  height: 35px;
  position: absolute;
  bottom: 40px;
  text-align: center;
}
.regi a {
  color: #00b9ad;
  line-height: 35px;
}
</style>