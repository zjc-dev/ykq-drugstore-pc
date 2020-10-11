<template>
  <div class="main_box">
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
          <button class="sea" type="primary" @click="submitForm('ruleForm')">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
/* 主题部分 */

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
  display: inline-block;
  text-align: center;
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
</style>