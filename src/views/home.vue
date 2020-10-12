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
      <div class="mess_table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="product_img" label="图片" width="100">
            <template slot-scope="scope">
              <img :src="scope.row.product_img" alt="" />
            </template>
          </el-table-column>
          <el-table-column prop="product_info" label="商品信息" width="350">
            <h3>以岭 莲花清瘟胶囊/3.5gx50片</h3>
            <p>条形码:6922096210139</p>
            <p>生产厂家:河南省焦作福瑞堂制药有限公司</p>
          </el-table-column>
          <el-table-column prop="product_type" label="处方药类型" width="130">
          </el-table-column>
          <el-table-column prop="classify" label="分类" width="130">
          </el-table-column>
          <el-table-column prop="product_num" label="库存" width="130">
            <template slot-scope="scope">
              <input
                type="text"
                v-model="scope.row.product_num"
                class="num_input"
                v-if="scope.row.isedit"
              />
              <p v-else>{{ scope.row.product_num }}</p>
            </template>
          </el-table-column>
          <el-table-column prop="product_price" label="售价" width="120">
            <template slot-scope="scope">
              <input
                type="text"
                v-model="scope.row.product_price"
                class="num_input"
                v-if="scope.row.isedit"
              />
              <p v-else>{{ scope.row.product_price }}</p>
            </template>
          </el-table-column>
          <el-table-column prop="product_state" label="上下架状态" width="120">
            <template slot-scope="scope">
              <span
                :class="{
                  zero_style: scope.row.product_state === 0,
                  one_style: scope.row.product_state === 1,
                  two_style: scope.row.product_state === 2,
                }"
                class="zero_style"
                >{{ formatSaleStatus(scope.row.product_state) }}</span
              >
              <!-- <span v-else-if="scope.row.product_state === 1" class="one_style"
                >已下架</span
              >
              <span v-else-if="scope.row.product_state === 2" class="two_style"
                >已售罄</span
              > -->
            </template>
          </el-table-column>
          <el-table-column prop="product_frs" label="合作品" width="120">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span
                class="opear"
                @click="handleEdit(scope.$index, scope.row)"
                v-if="scope.row.upordown === 1"
                >上架
              </span>
              <span
                class="opear"
                @click="handleEdit(scope.$index, scope.row)"
                v-else-if="scope.row.upordown === 2"
                >下架</span
              >

              <span
                class="opear"
                @click="handleEdit(scope.$index, scope.row)"
                v-if="scope.row.isedit"
                >编辑</span
              >
              <span
                class="opear"
                @click="handleDelete(scope.$index, scope.row)"
                v-if="scope.row.isdel"
                >删除</span
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="6"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </el-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      currentPage: 1,
      form: {
        name: "",
        region: "",
      },
      tableData: [
        {
          product_img:
            "https://ykq-h5.ybm100.com/drugstore-admin/static/img/text-logo.7bfd9a4e.png",
          product_info: "王小虎",
          product_type: "处方药",
          classify: "店铺分类展示",
          product_num: "100",
          isedit: true,
          product_price: "36.8",
          product_state: 0,
          product_frs: "非合作品",
          upordown: 2,
          isdel: true,
        },
        {
          product_img:
            "https://ykq-h5.ybm100.com/drugstore-admin/static/img/text-logo.7bfd9a4e.png",
          product_info: "王小虎",
          product_type: "处方药",
          classify: "店铺分类展示",
          product_num: "105",
          isedit: false,
          product_price: "36.8",
          product_state: 1,
          product_frs: "合作品",
          upordown: 1,
        },
        {
          product_img:
            "https://ykq-h5.ybm100.com/drugstore-admin/static/img/text-logo.7bfd9a4e.png",
          product_info: "王小虎",
          product_type: "处方药",
          classify: "店铺分类展示",
          product_num: "100",
          isedit: true,
          product_price: "36.8",
          product_state: 2,
          product_frs: "非合作品",
          upordown: 2,
          isdel: true,
        },
        {
          product_img:
            "https://ykq-h5.ybm100.com/drugstore-admin/static/img/text-logo.7bfd9a4e.png",
          product_info: "王小虎",
          product_type: "处方药",
          classify: "店铺分类展示",
          product_num: "100",
          isedit: true,
          product_price: "36.8",
          product_state: 1,
          product_frs: "非合作品",
          upordown: 0,
          isdel: false,
        },
        {
          product_img:
            "https://ykq-h5.ybm100.com/drugstore-admin/static/img/text-logo.7bfd9a4e.png",
          product_info: "王小虎",
          product_type: "处方药",
          classify: "店铺分类展示",
          product_num: "100",
          isedit: true,
          product_price: "36.8",
          product_state: 0,
          product_frs: "合作品",
          upordown: 1,
          isdel: true,
        },
        {
          product_img:
            "https://ykq-h5.ybm100.com/drugstore-admin/static/img/text-logo.7bfd9a4e.png",
          product_info: "王小虎",
          product_type: "处方药",
          classify: "店铺分类展示",
          product_num: "100",
          isedit: true,
          product_price: "36.8",
          product_state: 0,
          product_frs: "合作品",
          upordown: 1,
          isdel: true,
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    formatSaleStatus(st) {
      const map = {
        0: "出售中",
        1: "已下架",
        2: "已售罄",
      };

      return map[st] || "";
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang="less" scoped>
/* 设置主题左上角提示信息 */
.main_title {
  line-height: 20px;
  text-align: left;
  font-size: 12px;
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
// 表格
.mess_table {
  margin-top: 20px;
}
// 分页
.block {
  width: 700px;
  margin: 0 auto;
  margin-top: 20px;
}
.el-pagination /deep/ .el-pager .number:not(.disabled).active {
  background-color: #08c0b9;
  color: #fff;
}
.num_input {
  width: 65px;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
}
.opear {
  cursor: pointer;
  color: #3ac267;
  padding: 0 10px;
}
.zero_style {
  display: inline-block;
  width: 50px;
  text-align: center;
  border: 1px solid #409eff;
  color: #409eff;
}
.one_style {
  display: inline-block;
  width: 50px;
  text-align: center;
  border: 1px solid #f56c6c;
  color: #f56c6c;
}
.two_style {
  display: inline-block;
  width: 50px;
  text-align: center;
  border: 1px solid #e6a23c;
  color: #e6a23c;
}
</style>