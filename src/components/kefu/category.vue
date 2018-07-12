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
          <el-row style="padding:20px;">
             <el-button type="primary" @click="digVisible=true">保费计算</el-button>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="16" >
               <!-- 开发统计和短信回复 -->
                 <el-row>
                    <el-card>
                      <div slot="header" class="clearfix">
                           <span>日历</span>
                      </div>
                      <calenderitem ></calenderitem> 
                    </el-card>
                </el-row> 
                <el-row style="margin-top:20px;">
                    <!-- <el-card> -->
                        <el-tabs v-model="activeindex" type="border-card" @tab-click="handleClick">
                            <div v-for="item in activeitem" :key="item.id">
                                <el-tab-pane :label="item.label" :name="item.name" >
                                      <el-table :data="tableData"   stripe   style="width: 100%">
                                          <el-table-column  prop="date"  label="日期" width="180">
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
                                      <el-pagination class="pageblock"
                                          background
                                          layout="prev, pager, next"
                                          :total="1000">
                                        </el-pagination>
                                </el-tab-pane>
                            </div>
                           
                        </el-tabs>
                    <!-- </el-card> -->
                </el-row>
                <el-row  :gutter="20"  style="margin-top:20px;">
                    <el-col :span="12" >
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>开发数量统计</span>
                            </div>
                            <div class="card-body">
                                <h3><span class="span1">今日已开发</span ><span class="span2">123</span></h3>
                                <h3><span class="span1">未开发总数</span><span class="span2">123</span></h3>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="12" >
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>短信发送</span>
                            </div>
                            <div class="card-body">
                                <el-form :model="shotmsg" label-width="80px" size="mini">
                                    <el-form-item label="选择模板">
                                        <el-select v-model="value" placeholder="请选择">
                                          <el-option
                                            v-for="item in shotmsg.complate"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                          </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="短信内容">
                                          <el-input type="textarea" :rows="2" placeholder="请输入内容"  v-model="textarea"></el-input>
                                    </el-form-item>
                                    <el-form-item >
                                        <el-button  type="primary" size="mini">发送短信</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
              
            </el-col>
            <el-col :span="8">
                <!-- 电话访问记录 -->
                <el-row>
                    <el-card>
                        <div slot="header" class="clearfix">
                            <span>电话访问记录</span>
                        </div>
                        <div>
                          <el-form :model="telmsg" label-width="80px" size="mini">
                              <el-form-item label="主叫号码">
                                    <el-input v-model="telmsg.telnumber"></el-input>
                                </el-form-item>
                                <el-col :span="12">
                                    <el-form-item  label="客户性质">
                                        <el-select v-model="value" placeholder="请选择">
                                          <el-option
                                            v-for="item in telmsg.nature"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                          </el-option>
                                        </el-select>
                                    </el-form-item >
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item  label="开发结果">
                                        <el-select v-model="value" placeholder="请选择">
                                            <el-option
                                              v-for="item in shotmsg.result"
                                              :key="item.value"
                                              :label="item.label"
                                              :value="item.value">
                                            </el-option>
                                          </el-select>
                                    </el-form-item >
                                </el-col>
                                  <el-form-item label="开发/预选">
                                      <el-input type="textarea" :rows="2"   v-model="textarea"></el-input>
                                </el-form-item>
                                  <el-form-item label="提醒时间">
                                      <el-date-picker v-model="remindtime" type="datetime" placeholder="选择日期时间"></el-date-picker>
                                </el-form-item>
                                <el-form-item >
                                      <el-button  type="primary" size="mini">保存记录</el-button>
                                      <el-button  type="primary" size="mini">添加客户电话</el-button>
                                </el-form-item>
                          </el-form>
                        </div>
                   
                    </el-card>
                </el-row>
                <!-- 车主基本信息  -->
                <el-row style="margin-top:20px;">
                    <carmsg></carmsg>
                </el-row>
                <!-- 基本信息 -->
                <el-row style="margin-top:20px;">
                     <insurancemsg></insurancemsg>
                </el-row>
            </el-col>
          </el-row>
      </el-row>
  </div>
  
</template>
<script>
 import calenderitem from './categoryItem/calenderItem' //日历组件
 import insurancemsg from './categoryItem/insuranceMsg'  //基本信息
 import carmsg from './categoryItem/carMsg'              //车辆信息
  export default{
    components:{calenderitem,insurancemsg,carmsg},
    data(){
      return {
        digVisible:false,
        value:'',
        textarea:"",
        remindtime:'',
        shotmsg:{
          complate:[
            {value:1,label:"模板1"},
            {value:12,label:"模板2"},
          ]
        },
        telmsg:{
          telnumber:'',
          nature:[
            {value:1,label:"模板1"},
            {value:12,label:"模板2"},
          ],
          result:[
             {value:1,label:"模板1"},
            {value:12,label:"模板2"},
          ]
        },
        activeindex:'first',
        activeitem:[
          {id:'1',name:'first',label:"今日首拨"},
          {id:'2',name:'two',label:"今日预约"},
          {id:'3',name:'three',label:"今日预约"},
        ],
        tableData: [{
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
        }]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style lang="scss" scoped>
    .el-form-item{
      margin-bottom:10px!important;
    }
    .card-body{
      height: 130px;
    }
     .pageblock{
       margin:10px 0;
       display: flex;
       justify-content: flex-end;
    }
</style>


