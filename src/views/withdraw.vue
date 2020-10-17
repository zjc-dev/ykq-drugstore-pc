<template>
  <div class="main_box">
    <div class="main_title">
      <span class="manage">财务管理 &nbsp;/</span>
      <span class="funds">账户资金 &nbsp;/</span>
      <span class="span_withdraw">账户提现</span>
    </div>
    <div class="main_content" v-if="isok">
      <p class="available_cash_amount">
        可提现金额<span style="color: #f56c6c">{{ money }}</span
        >元
      </p>
      <div class="bank_num">
        <img :src="gsbank" alt="" />
        <span class="bank_card">招商银行储蓄卡</span>
        <span class="card_num">(5419)</span>
      </div>
      <p class="cash_num">转出金额</p>
      <div class="money_number">
        <h2>{{ money }}</h2>
        <span class="cash_all">全部提现</span>
      </div>
      <div class="rule_wrap">
        <p class="handle_fee">手续费1.00元</p>
        <div class="cash_rule">
          <p>手续费规则</p>
          <div class="rule_first">
            <span>提现/代付</span>
            <span>(他行对私账户) </span>
            <span> 0.2元笔</span>
          </div>
          <div class="rule_second">
            <span>提现/代付</span>
            <span>(他行对公账户)</span>
            <span> 5万元以内</span>
            <span>(含本数)</span>
            <span>0.5元笔;</span>
            <span>5-20万</span>
            <span>(含本数)</span>
            <span>5元/笔:</span>
            <span>20万元以上:</span>
            <span>6元/笔</span>
          </div>
        </div>
      </div>
      <el-button type="text" class="submit" @click="dialogFormVisible = true"
        >提交申请</el-button
      >
      <el-dialog
        title="请输入提现密码"
        :visible.sync="dialogFormVisible"
        width="400px"
      >
        <el-form :model="pass_form">
          <el-form-item>
            <el-input
              v-model="pass_form.password"
              autocomplete="off"
              placeholder="请输入6位密码"
            ></el-input>
          </el-form-item>
        </el-form>
        <div><el-link type="success">忘记密码</el-link></div>
        <div slot="footer" class="dialog-footer">
          <el-button size="mini" @click="dialogFormVisible = false"
            >取 消</el-button
          >
          <el-button size="mini" type="primary" @click="sumit_cash()"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
    <div class="main_content" v-if="!isok">
      <div class="cash_cont">
        <div class="box"></div>
        <p>提现成功</p>
        <p><span>手续费</span><span>1.00元</span></p>
        <p><span>实际到账金额</span><span>239.00元</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import gsbankIcon from "../assets/gs_bank.jpg";
export default {
  data() {
    return {
      isok: true,
      money: "240",
      gsbank: gsbankIcon,
      dialogFormVisible: false,
      pass_form: {
        password: "",
        type: [],
        resource: "",
      },
    };
  },
  methods: {
    sumit_cash: function () {
      this.dialogFormVisible = false;
      this.isok = false;
      console.log(this.pass_form.password);
    },
  },
};
</script>
<style scoped>
/* 标题区 */
.main_title {
  line-height: 30px;
  font-size: 12px;
  height: 30px;
  color: #909399;
}
.funds {
  margin-left: 5px;
}
.span_withdraw {
  margin-left: 5px;
  color: #000;
}
/* 内容区 */
.main_content {
  background-color: #ffffff;
  width: 100%;
  height: calc(100% - 30px);
  padding-top: 20px;
}
.available_cash_amount {
  padding-left: 25px;
  font-size: 14px;
}
.bank_num {
  margin-top: 10px;
  height: 50px;
  line-height: 50px;
  padding-left: 25px;
  font-size: 14px;
  border: 1px solid #e4e7ed;
}
.bank_num img {
  height: 20px;
  vertical-align: middle;
}
.bank_card {
  padding-left: 14px;
}
.card_num {
  padding-left: 9px;
}
.cash_num {
  margin: 20px 0 0 25px;
}
.money_number {
  margin-left: 25px;
  height: 90px;
  line-height: 90px;
  border-bottom: 1px dashed #e4e7ed;
}
.money_number h2 {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
}
.cash_all {
  position: relative;
  left: 140px;
  color: #00b9ad;
}
.rule_wrap {
  padding-left: 25px;
  margin-bottom: 22px;
}
.rule_wrap .handle_fee {
  font-size: 13px;
  color: #909399;
}
.rule_first span {
  margin-right: 10px;
}
.rule_first span:nth-last-child(2) {
  margin-right: 20px;
}
.cash_rule {
  margin-top: 20px;
  font-size: 13px;
}
.submit {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #42b983;
  background: #42b983;
  color: #fff;
  cursor: pointer;
  padding: 0;
  margin-left: 25px;
}
.submit:hover {
  background-color: #42b983;
  color: #222;
}
.rule_second span {
  margin-right: 10px;
}
.rule_second span:nth-of-type(2) {
  margin-right: 20px;
}
.el-dialog__wrapper /deep/ .el-dialog {
  margin-top: 30vh !important;
}
.el-dialog__wrapper /deep/ .el-dialog .el-dialog__header .el-dialog__title {
  font-size: 15px;
}
/* 设置输入框高度和提示信息大小 */
.el-form /deep/ .el-input__inner {
  height: 30px;
  font-size: 12px;
}
.el-form /deep/ .el-form-item__content {
  line-height: 30px;
}
.el-form /deep/.el-form-item {
  height: 30px;
  margin-bottom: 0;
}
.el-link /deep/ .el-link--inner {
  font-size: 12px;
  color: coral;
}
.cash_cont {
  position: absolute;
  top: 28px;
  width: 350px;
  background-color: palegreen;

  left: 50%;
  margin-left: -175px;
}
</style>