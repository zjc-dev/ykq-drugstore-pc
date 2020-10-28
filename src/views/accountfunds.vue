<template>
  <div class="main_box">
    <div class="main_warp">
      <div class="main_title">
        <span>财务管理 &nbsp;/</span>
        <span>账户资金</span>
      </div>
      <div class="main-content">
        <div class="accout_info">
          <div class="accoun_left">
            <p class="num_balance">余额 &nbsp; (元)</p>
            <div>
              <h1>20.030.36</h1>
              <span> <router-link :to="'/withdraw'">提现</router-link></span>
            </div>
            <p class="history">提现记录</p>
          </div>
          <div class="accoun_right">
            <p class="num_balance">账户管理</p>
            <div class="bank_info">
              <span class="open_bank">开户行</span>
              <span class="bank_address">
                中国建设银行股份有限公司北京支行</span
              >
              <span class="look_for">查看</span>
            </div>
            <div class="card_num_warp">
              <span class="bank_card_num">卡号</span>
              <span class="card_num"
                >**** &nbsp;&nbsp; **** &nbsp;&nbsp; **** &nbsp;&nbsp;
                7811</span
              >
            </div>
          </div>
        </div>
        <div class="base_info">
          <h4>基本信息</h4>
          <div class="query_condition">
            <span
              class="recently_week"
              :class="{ active: st == 'week' }"
              @click="change('week')"
              >近一周</span
            >
            <span
              class="recently_month"
              :class="{ active: st == 'month' }"
              @click="change('month')"
              >近一月</span
            >
            <div class="block">
              <span>自定义时间</span>
              <el-date-picker
                size="small"
                v-model="value2"
                type="daterange"
                unlink-panels
                clear-icon
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </div>
          </div>
        </div>
        <div class="report">
          <!-- <ve-line :data="chartData"></ve-line> -->
          <ve-histogram :data="chartData" width="1000px"></ve-histogram>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VeLine from "v-charts/lib/line.common";
import veHistogram from "v-charts/lib/histogram.common";

export default {
  data() {
    return {
      value2: "",
      st: "",
      chartData: {
        columns: ["日期", "销售量"],
        rows: [
          { 日期: "1月1日", 销售量: 123 },
          { 日期: "1月2日", 销售量: 200 },
          { 日期: "1月3日", 销售量: 300 },
          { 日期: "1月4日", 销售量: 400 },
          { 日期: "1月5日", 销售量: 800 },
          { 日期: "1月6日", 销售量: 1000 },
        ],
      },
    };
  },
  components: {
    veHistogram,
  },
  methods: {
    change(index) {
      if (index === "week" || index === "month") {
        this.st = index;
      }
    },
  },
};
</script>

<style scoped>
.main_warp {
  height: 100%;
}
.main_title {
  line-height: 30px;
  font-size: 12px;
  height: 30px;
}
.main_title span:nth-last-child(1) {
  margin-left: 6px;
}
.main-content {
  width: 100%;
  height: calc(100% - 30px);
  padding-top: 15px;
  background-color: #ffffff;
}

.accout_info {
  width: 100%;
  height: 150px;
}
/* 左侧div */
.accoun_left {
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
  width: 380px;
  margin-left: 20px;
  border: 1px solid #dcdfe6;
}
.num_balance {
  padding-left: 25px;
  font-weight: 500;
}
/* 设置高度  */
.accoun_left div {
  height: 40px;
  line-height: 40px;
}
.accoun_left h1 {
  display: inline-block;
  margin: 0;
  padding-left: 25px;
  vertical-align: middle;
}
.accoun_left span {
  display: inline-block;
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  margin-left: 110px;
  border: 1px solid #00b9ad;
  background-color: #00b9ad;
  cursor: pointer;
}
.history {
  font-size: 12px;
  color: #999;
  padding-left: 25px;
}
.accoun_right {
  float: left;
  height: 150px;
  width: 550px;
  margin-left: 30px;
  border: 1px solid #dcdfe6;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.accoun_right .bank_info {
  height: 40px;
  line-height: 40px;
  padding-left: 25px;
}
.open_bank {
  font-size: 15px;
}
.bank_address {
  margin-left: 20px;
  font-size: 15px;
}
.look_for {
  display: inline-block;
  height: 30px;
  width: 60px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  margin-left: 95px;
  border: 1px solid #00b9ad;
  background-color: #00b9ad;
  cursor: pointer;
}
.card_num_warp {
  padding-left: 45px;
  position: relative;
  bottom: 21px;
  font-size: 13px;
}
.card_num {
  margin-left: 20px;
}

/* 条件 */
.base_info {
  height: 40px;
  width: 100%;
  margin-top: 20px;
  padding-left: 20px;
}
.base_info h4 {
  height: 40px;
  line-height: 40px;
  float: left;
}
.base_info .query_condition {
  float: right;
}
.query_condition .recently_week {
  float: left;
  height: 40px;
  line-height: 40px;
  width: 85px;
  color: #222;
  text-align: center;
  border: 1px solid #ebeef5;
  cursor: pointer;
}
.query_condition .recently_month {
  float: left;
  height: 40px;
  line-height: 40px;
  width: 85px;
  text-align: center;
  border: 1px solid #ebeef5;
  cursor: pointer;
}
/* 点击 */
.query_condition .active {
  border: 1px solid #67c23a;
  color: #67c23a;
}
.query_condition .block {
  float: right;
  margin-left: 20px;
  height: 40px;
  line-height: 40px;
}
.query_condition .block .el-date-editor {
  margin-left: 10px;
}
</style>