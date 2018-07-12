<template>
  <el-row class="warp">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
        <el-breadcrumb-item>客户营销与维护</el-breadcrumb-item>
        <el-breadcrumb-item>库存管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col  :span="24" class="warp-main">
        <el-button type="danger" icon="el-icon-circle-plus-outline" @click="dialogVisible= true">创建车库信息</el-button>
    </el-col>
    <el-col :span="24" class="warp-main" v-loading="loading" element-loading-text="拼命加载中">
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="carsearch">
            <el-form-item label="仓库代码">
              <el-input v-model="carsearch.number"  style="min-width: 240px;" @keyup.enter.native="handleSearch"></el-input>
            </el-form-item>
            <el-form-item label="仓库名称">
              <el-input v-model="carsearch.name"  style="min-width: 240px;"></el-input>
            </el-form-item>
            <el-form-item label="仓库所在地">
              <el-input v-model="carsearch.position" style="min-width: 240px;"></el-input>
            </el-form-item>
            <el-form-item type="expand">
              <el-button type="primary" @click="handleSearch">搜索</el-button>
              <el-button type="primary" >重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>

      <!--列表-->
      <el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
        <el-table-column type="index" width="60">
        </el-table-column>
        <el-table-column prop="number" label="仓库代码" width="215" >
        </el-table-column>
        <el-table-column prop="name" label="仓库名称" width="215" >
        </el-table-column>
        <el-table-column prop="position" label="所在地" width="165" >
        </el-table-column>
        <el-table-column prop="contactperson" label="联系人" min-width="100" >
        </el-table-column>
        <el-table-column  label="更新时间" sortable>
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.updatetime }}</span>
            </template>
        </el-table-column>
        <el-table-column  label="操作" >
            <el-button type="text" size="small">编辑</el-button>
             <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData4)"
                    type="text"
                    size="small">
                     移除
        </el-button>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pageblock">
           <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
          </el-pagination>
      </div>
    </el-col>

    <!-- 创建车辆信息 -->
      <el-dialog title="创建车辆信息"  :visible.sync="dialogVisible" :before-close="handleClose">
        <el-form :model="carmessage" label-width="100px" :rules="rules" ref="ruleForm">
          <el-form-item label="仓库代码" prop="number">
            <el-input v-model="carmessage.number" auto-complete="off" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="仓库名称" prop="name">
            <el-input v-model="carmessage.name" auto-complete="off" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="所在地" prop="position">
             <el-input  v-model="carmessage.position" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="contactperson">
            <el-input  v-model="carmessage.contactperson" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="tel">
            <el-input  v-model="carmessage.tel" style="width:300px"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click.native="submitForm('ruleForm')">提交</el-button>
        </div>
      </el-dialog>
  </el-row>
</template>

<script>
  import API from '../../api/api_user';

  export default {
    data() {
      return {
        carsearch: {
          name: '',
          position:'',
          number:''
        },
        currentPage4: 4,
        dialogVisible:false,
        loading: false,
        users: [
          {number:1,name:'苏州',position:'jail',contactperson:'11',updatetime:'2018-6-12'
          }
        ],
        total: 10,
        page: 1,
        limit: 10,
        carmessage:{
            number:'',
            name:'',
            position:'',
            contactperson:'',
            tel:''
        },
        rules:{
           name:[{required:true,message:'不能为空',trigger:'blur'}] 
        }
        

      }
    },
    methods: {
       handleSizeChange(val) {
        },
      handleCurrentChange(val) {
        this.page = val;
        // this.search();
      },
      handleSearch(){
        this.total = 0;
        this.page = 1;
        this.search();
      },
      //获取用户列表
      search: function () {
        let that = this;
        let params = {
          page: that.page,
          limit: 10,
          name: that.carsearch.name
        };

        that.loading = true;
        API.findList(params).then(function (result) {
          that.loading = false;
          if (result && result.users) {
            that.total = result.total;
            that.users = result.users;
          }
        }, function (err) {
          that.loading = false;
          that.$message.error({showClose: true, message: err.toString(), duration: 2000});
        }).catch(function (error) {
          that.loading = false;
          console.log(error);
          that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
        });
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.carmessage);
          } else {
            return false;
          }
        });
      },
       deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    mounted() {
      this.handleSearch()
    }
  }
</script>

<style scoped>
    .pageblock{
       margin:10px 0;
       display: flex;
       justify-content: flex-end;
    }
    .warp-main{
      margin-bottom: 10px;
    }
</style>
