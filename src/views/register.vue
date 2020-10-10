<template>
  <!-- 最外层div -->
  <div class="all">
    <!-- header -->
    <div class="reg-header">
      <img :src="src" alt="" />
      <el-divider direction="vertical"></el-divider>
      <span class="header-font">商家中心 </span>
    </div>
    <!-- 注册主体部分 -->
    <div class="reg-main">
      <div class="reg-top">
        <span>账号注册</span>
      </div>
      <!-- 用户注册信息 -->
      <div class="reg-info">
        <el-form
          :model="userRegForm"
          :rules="rules"
          ref="userRegForm"
          label-width="100px"
        >
          <el-form-item label="用户姓名" prop="name">
            <el-input
              v-model="userRegForm.name"
              placeholder="请输入用户名,最多8个汉字"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户手机号" prop="phone">
            <el-input
              v-model="userRegForm.phone"
              placeholder="请输入联系手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="登陆账号" prop="account">
            <el-input
              v-model="userRegForm.account"
              placeholder="请输入13位以内数字/手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="登陆密码" prop="pass">
            <el-input
              type="password"
              v-model="userRegForm.pass"
              autocomplete="off"
              placeholder="请输入6-16位登陆密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="重复密码" prop="checkPass">
            <el-input
              type="password"
              v-model="userRegForm.checkPass"
              autocomplete="off"
              placeholder="请重新输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item class="s1" label="验证码" prop="yzm">
            <el-input
              v-model="userRegForm.yzm"
              placeholder="请输入验证码"
            ></el-input>
            <span @click="getYzmTime">{{ mess }}</span>
          </el-form-item>
        </el-form>
        <a class="reg-button" href="/register">提交</a>
      </div>
    </div>
  </div>
</template>

<script>
import ykqIcon from "../assets/ykq.png";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.userRegForm.checkPass !== "") {
          this.$refs.userRegForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userRegForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      const reg = /^1[3|4|5|7|8][0-9]{9}$/;

      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入正确的手机"));
      } else {
        callback();
      }
    };

    return {
      yzmshow: true,
      src: ykqIcon,
      mess: "获取验证码",
      userRegForm: {
        name: "",
        phone: "",
        pass: "",
        checkPass: "",
        account: "",
        yzm: "",
      },

      rules: {
        name: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
          { min: 1, max: 8, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        phone: [
          {
            required: true,
            validator: validatePass3,
            trigger: "blur",
          },
        ],
        account: [{ required: true, message: "账号不能为空", trigger: "blur" }],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    getYzmTime() {
      // 当计时的时候 执行到此直接返回
      if (this.mess !== "获取验证码") {
        return;
      }
      //  设置倒计时
      let num = 60;
      // 倒计时
      const timer = setInterval(() => {
        //   设置显示信息
        this.mess = num + "秒";
        // 当倒计时为0的时候, 设置显示信息为默认值 同时清除定时器
        if (num == 0) {
          // 倒计时结束, 显示获取验证码
          this.mess = "获取验证码";
          clearInterval(timer);
        }
        num--;
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* 设置最外层盒子的大小 */
.all {
  width: 100vw;
  height: 100vh;
}
/* 头部左侧 */
.reg-header {
  width: 400px;
  height: 100px;
  margin-left: 17vw;
}

.reg-header img {
  position: relative;
  top: 10px;
  width: 140px;
  height: 38px;
}
/* 修改分隔符的大小 */
.el-divider {
  height: 25px;
  margin-top: -9px;
}
.reg-header .header-font {
  font-size: 25px;
}
/* 注册主体部分 */
.reg-main {
  width: 66vw;
  height: 550px;
  background-color: #fff;
  margin: 0 auto;
  padding-top: 40px;
}
.reg-top {
  width: 400px;
  height: 32px;
  margin: 0px auto;
}
.reg-top span {
  height: 32px;
  line-height: 32px;
  font-size: 24px;
  color: #333;
}
.reg-info {
  width: 400px;
  margin: 0 auto;
  margin-top: 40px;
}
.s1 {
  position: relative;
}

.s1 span {
  position: absolute;
  right: 10px;
  color: #00b9ad;
  font-size: 13px;
  cursor: pointer;
}
.reg-button {
  display: inline-block;
  width: 300px;
  height: 40px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  background-color: #00b9ad;
  cursor: pointer;
  margin-left: 99px;
}
</style>