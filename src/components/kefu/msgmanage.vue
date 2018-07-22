<template>
  <el-row class="warp">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
        <el-breadcrumb-item>客户开发</el-breadcrumb-item>
        <el-breadcrumb-item>信息管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
      <!-- 按钮组 -->
    <el-row class="list_btn">
      <el-button type="danger" @click="Establish">创建车辆信息</el-button>
      <el-button type="primary" plain>分配保险数据</el-button>
      <el-button type="success" plain @click="danche">单车分配</el-button>
      <el-button type="info" plain>回收数据</el-button>
      <el-button type="warning" plain>转移数据</el-button>
    </el-row>

    <el-col :span="24" class="warp-main" v-loading="loading" element-loading-text="拼命加载中">
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" :model="carsearch" class="search-form">
          <el-form-item label="车牌号码">
            <el-input  size="small" v-model="carsearch.txtSrhCarNo" placeholder="车牌号码" @keyup.enter.native="handleSearch" ></el-input>
          </el-form-item>
          <el-form-item label="车架号">
            <el-input size="small"  v-model="carsearch.txtSrhCarFrameNo" placeholder="车架号"></el-input>
          </el-form-item>
          <el-form-item label="车辆品牌">
            <el-input size="small"  v-model="carsearch.txtSrhBrand" placeholder="车辆品牌" ></el-input>
          </el-form-item>
           <el-form-item label="型号">
            <el-input size="small"  v-model="carsearch.txtSrhModelNo" placeholder="型号" ></el-input>
          </el-form-item>
           <el-form-item label="初次登记时间">
              <el-date-picker size="small" v-model="initialtime"  type="datetimerange" range-separator="至"  start-placeholder="起始时间"
                    end-placeholder="终止时间">
               </el-date-picker>
          </el-form-item>
           <el-form-item label="商险终止时间">
              <el-date-picker size="small" v-model="stoptime"  type="datetimerange" range-separator="至"  start-placeholder="起始时间"
                    end-placeholder="终止时间">
               </el-date-picker>
          </el-form-item>
          <el-form-item label="地址">
              <el-input size="small" v-model="carsearch.txtSrhArea" placeholder="地址" ></el-input>
          </el-form-item>
           <el-form-item label="区域">
              <el-input size="small" v-model="carsearch.txtsrhareablock" placeholder="区域" ></el-input>
          </el-form-item>
          <el-form-item label="个人/单位">
              <el-select size="small" v-model="carsearch.ddlsrhpersonalororg" placeholder="所有">
                  <el-option
                    v-for="item in carbelong"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="车辆类型">
              <el-select size="small" v-model="carsearch.ddlsrhcarcategory" placeholder="所有">
                  <el-option
                    v-for="item in cartype"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="上期保险公司">
              <el-select size="small" v-model="carsearch.ctl00_cphSearchPanel_ddlSrhLastCompany" placeholder="所有">
                  <el-option
                    v-for="item in riskcompony"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="商险次数">
              <el-select size="small" v-model="carsearch.ddlSrhInsCounts" placeholder="所有">
                  <el-option
                    v-for="item in risknum"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="分配给予人">
              <el-select size="small" v-model="carsearch.ctl00$cphSearchPanel$ddlSrhDistribute" placeholder="所有">
                  <el-option
                    v-for="item in disbtnperson"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
              </el-select>
          </el-form-item>

          <el-form-item>
            <el-button size="small" type="primary" v-on:click="handleSearch">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" @click="showAddDialog">重置</el-button>
          </el-form-item>

        </el-form>
      </el-col>
      <transition name="fade" mode="out-in">
          <!--列表-->
          <el-table :data="riskdata" highlight-current-row @selection-change="selsChange"
                    style="width: 100%;">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column type="index" width="60"></el-table-column>
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="[图书简介]">
                    <span>{{ props.row.description }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="书名" sortable></el-table-column>
            <el-table-column prop="author" label="作者" width="100" sortable></el-table-column>
            <el-table-column prop="publishAt" label="出版日期" width="150" sortable></el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button size="small" @click="showEditDialog(scope.$index,scope.row)">编辑</el-button>
                <el-button type="danger" @click="delBook(scope.$index,scope.row)" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
      </transition>

      <!--工具条-->
      <el-col :span="24" class="toolbar">
        <el-button type="danger" @click="batchDeleteBook" :disabled="this.sels.length===0">批量删除</el-button>
        <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total"
                       style="float:right;">
        </el-pagination>
      </el-col>

      <!-- 车辆信息编辑 -->
       <carmessage v-if="state1" @state="states1"></carmessage>
       <!--单车-->
       <Bicycle v-if="state2" @state="states2"></Bicycle>
    </el-col>
  </el-row>
</template>
<script>
  import util from '../../common/util'
  import API from '../../api/api_book';
  import carmessage from './msgmanage/carmessage';
  import Bicycle from './msgmanage/Bicycle';

  export default{
    components:{Bicycle,carmessage},
    data(){
      return {
        state1:false,
        state2:false,
        carsearch: {
          txtSrhCarNo: '',
          txtSrhCarFrameNo:'',
          txtSrhBrand:'',
          txtSrhModelNo:'',
          txtSrhArea:'',
          txtsrhareablock:'',
          ddlsrhcarcategory:'',
          ctl00_cphSearchPanel_ddlSrhLastCompany:'',
          ddlsrhpersonalororg:'',
          ddlSrhInsCounts:'',
          ctl00$cphSearchPanel$ddlSrhDistribute:'',
        },
        initialtime:'',
        stoptime:'',
        carbelong:[
          {
            value:'1',
            label:'个人'
          },
           {
            value:'2',
            label:'单位'
          },
        ],
        cartype:[
          {
            value:'1',
            label:'小型车'
          },
           {
            value:'2',
            label:'大型车'
          }
        ],
        risknum:[
          {
            value:'1',
            label:'1次'
          },
          {
            value:'2',
            label:'2次'
          },
          {
            value:'3',
            label:'3次'
          },
          {
            value:'4',
            label:'4次'
          },
          {
            value:'5',
            label:'5次'
          },
          {
            value:'6',
            label:'6次'
          },
          {
            value:'7',
            label:'6次以上'
          },
        ],
        riskcompony:[
          {
            value:'中国人民财产保险股份有限公司',
            label:'中国人民财产保险股份有限公司'
          },
          {
            value:'中国太平洋财产保险股份有限公司',
            label:'中国太平洋财产保险股份有限公司'
          },
          {
            value:'中国平安财产保险股份有限公司',
            label:'中国平安财产保险股份有限公司'
          },
          {
            value:'其他保险公司',
            label:'其他保险公司'
          },
        ],
        disbtnperson: [
          {
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }
           ],
        riskdata: [
          {},
          {}
          ],
        total: 0,
        page: 1,
        limit: 10,
        loading: false,
        sels: [], //列表选中列
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.page = val;
        this.search();
      },
      handleSearch(){
        this.total = 0;
        this.page = 1;
        this.search();
      },
      search(){
        let that = this;
        let params = {
          page: that.page,
          limit: 10,
          // name: that.filters.name
        };

        that.loading = true;
        API.findList(params).then(function (result) {
          that.loading = false;
          if (result && result.books) {
            that.total = result.total;
            that.books = result.books;
          }
        }, function (err) {
          that.loading = false;
          // that.$message.error({showClose: true, message: err.toString(), duration: 2000});
        }).catch(function (error) {
          that.loading = false;
          console.log(error);
          that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
        });
      },
      selsChange: function (sels) {
        this.sels = sels;
      },
      //删除
      delBook: function (index, row) {
        let that = this;
        this.$confirm('确认删除该记录吗?', '提示', {type: 'warning'}).then(() => {
          that.loading = true;
          API.remove(row.id).then(function (result) {
            that.loading = false;
            if (result && parseInt(result.errcode) === 0) {
              that.$message.success({showClose: true, message: '删除成功', duration: 1500});
              that.search();
            }
          }, function (err) {
            that.loading = false;
            that.$message.error({showClose: true, message: err.toString(), duration: 2000});
          }).catch(function (error) {
            that.loading = false;
            console.log(error);
            that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
          });
        }).catch(() => {
        });
      },
      //显示编辑界面
      showEditDialog: function (index, row) {
        this.editFormVisible = true;
        this.editForm = Object.assign({}, row);
      },

      showAddDialog: function () {
        this.addFormVisible = true;
        this.addForm = {
          name: '',
          author: '',
          publishAt: '',
          description: ''
        };
      },
      //新增
      addSubmit: function () {
        let that = this;
        this.$refs.addForm.validate((valid) => {
          if (valid) {
            that.loading = true;
            let para = Object.assign({}, this.addForm);
            para.publishAt = (!para.publishAt || para.publishAt === '') ? '' : util.formatDate.format(new Date(para.publishAt), 'yyyy-MM-dd');
            API.add(para).then(function (result) {
              that.loading = false;
              if (result && parseInt(result.errcode) === 0) {
                that.$message.success({showClose: true, message: '新增成功', duration: 2000});
                that.$refs['addForm'].resetFields();
                that.addFormVisible = false;
                that.search();
              } else {
                that.$message.error({showClose: true, message: '修改失败', duration: 2000});
              }
            }, function (err) {
              that.loading = false;
              that.$message.error({showClose: true, message: err.toString(), duration: 2000});
            }).catch(function (error) {
              that.loading = false;
              console.log(error);
              that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
            });

          }
        });
      },
      //批量删除
      batchDeleteBook: function () {
        let ids = this.sels.map(item => item.id).toString();
        let that = this;
        this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        }).then(() => {
          that.loading = true;
          API.removeBatch(ids).then(function (result) {
            that.loading = false;
            if (result && parseInt(result.errcode) === 0) {
              that.$message.success({showClose: true, message: '删除成功', duration: 1500});
              that.search();
            }
          }, function (err) {
            that.loading = false;
            that.$message.error({showClose: true, message: err.toString(), duration: 2000});
          }).catch(function (error) {
            that.loading = false;
            console.log(error);
            that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
          });
        }).catch(() => {

        });
      },
      Establish(){
        this.state1= true;
      },
      danche(){
        this.state2 = true;
      },
      states1(val){
        this.state1 = val;
      },
      states2(val){
        this.state2 = val;
      }
    },
    mounted() {
      this.handleSearch()
    }
  }
</script>

<style>
  .list_btn{
    margin-bottom: 20px;
  }
  .search-form .el-form-item{
      margin-bottom: 10px;
  }
  .demo-table-expand label {
    font-weight: bold;
  }
</style>
