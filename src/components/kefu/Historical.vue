<template>
  <div>
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
        <el-breadcrumb-item>客户开发</el-breadcrumb-item>
        <el-breadcrumb-item>开发历史记录</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-row>
      <el-card>
        <div slot="header" class="clearfix">
          <span>搜索条件</span>
        </div>
        <el-row>
          <el-col :span="2"><div class="grid-content bg-purple control">
            <i class="el-icon-search"></i><span>搜索</span>
          </div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple control">
            <i class="el-icon-error"></i><span>重置条件</span>
          </div>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="4" >
            <div class="shange">
              <span>车牌号码</span>
              <el-input v-model="input1" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
          <el-col :span="4" >
            <div class="shange">
              <span>车主姓名</span>
              <el-input v-model="input2" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
          <el-col :span="4" >
            <div class="shange">
                <span class="demonstration">开发时间起</span>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
            </div>
          </el-col>
          <el-col :span="4" >
            <div class="shange">
            <span class="demonstration">开发时间止</span>
            <el-date-picker
              v-model="value2"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          </el-col>
          <el-col :span="4" >
            <div class="shange">
              <span>营销状态</span>
              <el-select v-model="yingxiao" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="4" >
            <div class="shange">
              <span>开发状态</span>
              <el-select v-model="kaifa" clearable placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="10">
          <el-col :span="4" >
            <div class="shange">
              <span class="demonstration">商业终保起</span>
              <el-date-picker
                v-model="value3"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="4" >
            <div class="shange">
              <span class="demonstration">商业终保止</span>
              <el-date-picker
                v-model="value4"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="4" >
            <div class="shange">
              <span class="demonstration">抢险终保起</span>
              <el-date-picker
                v-model="value5"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="4" >
            <div class="shange">
              <span class="demonstration">抢险终保止</span>
              <el-date-picker
                v-model="value6"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="4" >
            <div class="shange">
              <span class="demonstration">电话号码</span>
              <el-input v-model="input3" placeholder="请输入内容" type="nub"></el-input>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
    <el-row>
      <el-card>
        <div slot="header" class="clearfix">
          <span>数据列表</span>
        </div>
        <el-row>
          <el-col :span="24">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="8" :offset="14" class="fenye">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </el-col>

        </el-row>

      </el-card>
    </el-row>
  </div>


</template>

<script>
    export default {
        name: "Historical",
        data() {
          return {
            input1: '',
            input2: '',
            input3: '',
            options: [
              {
              value: '选项1',
              label: '热点客户'
              }, {
                value: '选项2',
                label: '现在客户'
              }, {
                value: '选项3',
                label: '未报价'
              }, {
                value: '选项4',
                label: '成交客户'
              }, {
                value: '选项5',
                label: '流失客户'
              }
            ],
            options1: [
              {
                value: '选项1',
                label: '成功-一配'
              }, {
                value: '选项2',
                label: '成功-两配'
              }, {
                value: '选项3',
                label: '跟踪-已报价'
              }, {
                value: '选项4',
                label: '跟踪-未报价'
              }, {
                value: '选项5',
                label: '跟踪-未到期'
              }, {
                value: '选项6',
                label: '跟踪-不方便'
              }, {
                value: '选项7',
                label: '失败-其他公司投保'
              }
              , {
                value: '选项8',
                label: '失败-号码问题'
              }
              , {
                value: '选项9',
                label: '失败-价格问题'
              }
              , {
                value: '选项10',
                label: '失败-服务问题'
              }
              , {
                value: '选项11',
                label: '失败-拒访'
              }
            ],

            tableData: [
              {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }
            ],
            value1:'',
            value2:'',
            value3:'',
            value4:'',
            value5:'',
            value6:'',
            kaifa:'',
            yingxiao:'',
            currentPage4: 5,
          }
        },
        methods: {
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          }
        },
    }
</script>

<style lang = 'scss' scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  /*.bg-purple {*/
    /*background: #d3dce6;*/
  /*}*/
  /*.bg-purple-light {*/
    /*background: #e5e9f2;*/
  /*}*/
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .control{
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    i{
      padding-right: 3px;
    }
  }
  .shange{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span{
      width: 60%;
      text-align: center;
    }
  }
  /*.bianju{*/
   /*padding-right: 10px;*/
  /*}*/
  .fenye{
    margin-top: 20px;
  }




</style>
