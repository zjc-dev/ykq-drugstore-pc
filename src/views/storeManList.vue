<template>
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
          <el-form-item label="身份证有效期" class="id_usetime" required>
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
          <el-form-item label="委托授权书" prop="letter" class="last_item">
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
</template>
<script>
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
  methods: {},
};
</script>

<style lang="less" scoped>
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
  overflow: auto;
  height: calc(100vh - 60px);
  width: calc(100vw - 200px);
  position: absolute;
  left: 200px;
  top: 60px;
  padding: 0 20px;
}
/* 设置主题左上角提示信息 */
.main_box .main_title {
  line-height: 20px;
  font-size: 12px;
  text-align: left;
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