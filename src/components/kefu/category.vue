<template>
  <div class="kaifa_container">
      <el-row class="warp">
          <el-col :span="24" class="warp-breadcrum">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
              <el-breadcrumb-item>客户开发</el-breadcrumb-item>
              <el-breadcrumb-item>保险客户开发</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="Customer">
            <p class="Title">开发数量统计</p>
            <div class="open-nub">
              <p><span class="span1">今日已开发</span ><span class="span2">123</span></p>
              <p><span class="span1">未开发总数</span><span class="span2">123</span></p>
            </div>
          </el-col>
          <el-col :span="24" class="Customer">
            <p class="Title">车辆信息</p>
            <div class="open-nub">
              <p><span class="span1">车主姓名</span ><input type="text"></p>
              <p><span class="span1">车牌号码</span><input type="text"></p>
            </div>
          </el-col>
          <el-col :span="24" class="Customer">
            <p class="Title">开发数量统计</p>
            <div class="open-nub">
              <p><span class="span1">今日已开发</span ><span class="span2">123</span></p>
              <p><span class="span1">未开发总数</span><span class="span2">123</span></p>
            </div>
          </el-col>
          <el-col :span="24" class="Customer">
            <p class="Title">车辆信息</p>
            <div class="open-nub">
              <p><span class="span1">车主姓名</span ><input type="text"></p>
              <p><span class="span1">车牌号码</span><input type="text"></p>
            </div>
          </el-col>
          <el-col :span="24" class="Customer">
            <p class="Title">开发数量统计</p>
            <div class="open-nub">
              <p><span class="span1">今日已开发</span ><span class="span2">123</span></p>
              <p><span class="span1">未开发总数</span><span class="span2">123</span></p>
            </div>
          </el-col>
          <el-col :span="24" class="Customer">
            <p class="Title">车辆信息</p>
            <div class="open-nub">
              <p><span class="span1">车主姓名</span ><input type="text"></p>
              <p><span class="span1">车牌号码</span><input type="text"></p>
            </div>
          </el-col>
      </el-row>
      

  </div>
  
</template>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
<style lang="scss" scoped>
    .kaifa_container{
      // background: #f0f2f5;
    }
    .Title{
      font-size: 14px;
      color: #333;
      font-weight: 500;
      margin: 0;
    }
    .open-nub{
      width: 100%;
      height: auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font: 12px;
      color: #333;
      padding: 10px 20px;
      p{
        margin-right: 20px;
        .span1{
          background: #999;
          color: #ffffff;
          padding: 2px 5px;
        }
        .span2{
          margin-left: 2px;
        }
      }
    }
</style>


