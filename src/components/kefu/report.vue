<template>
    <div>
         <el-row>
             <el-col :span="24" class="warp-breadcrum">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
                    <el-breadcrumb-item>客户开发</el-breadcrumb-item>
                    <el-breadcrumb-item>业绩报告</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-button type="primary" icon="el-icon-sort-top">开启自动刷新</el-button>
            <el-button type="info" icon="el-icon-sort-down">停止自动刷新</el-button>
        </el-row>
        <el-row>
            <el-col>
                <h2>用户数据</h2>
            </el-col>
            <el-table :data="doneDate" style="width: 100%" v-loading="loading"   stripe border>
                <el-table-column label="编号" prop="downid" width="180"></el-table-column>
                <el-table-column label="开发时间"  width="180">
                     <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.donetime }}</span>
                    </template>
                </el-table-column>
                <el-table-column  label="操作者" width="100" prop="doneowner"></el-table-column>
                <el-table-column label="车牌号码" prop="donenumber" width="130"></el-table-column>
                <el-table-column label="车主姓名" prop="donename"  width="100"></el-table-column>
                <el-table-column label="状态" prop="donestatus" width="120"></el-table-column>
                <el-table-column label="结果" prop="doneresult"></el-table-column>
            </el-table>
        </el-row>
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
    </div>
</template>

<script>
    export default {
        data(){
            return{
               doneDate: [{
                    downid:"123456",
                    donetime: '2016-05-02',
                    doneowner: '王小虎',
                    donenumber: '苏123456',
                    donename:'张将',
                    donestatus:'跟踪-已报价',
                    doneresult:"[跟踪-已报价]未接"
                    }, {
                    downid:"123456",
                    donetime: '2016-05-02',
                    doneowner: '王小虎',
                    donenumber: '苏123456',
                    donename:'张将',
                    donestatus:'跟踪-已报价',
                    doneresult:"[跟踪-已报价]未接"
                    }, {
                    downid:"123456",
                    donetime: '2016-05-02',
                    doneowner: '王小虎',
                    donenumber: '苏123456',
                    donename:'张将',
                    donestatus:'跟踪-已报价',
                    doneresult:"[跟踪-已报价]未接"
                    }, {
                    downid:"123456",
                    donetime: '2016-05-02',
                    doneowner: '王小虎',
                    donenumber: '苏123456',
                    donename:'张将',
                    donestatus:'跟踪-已报价',
                    doneresult:"[跟踪-已报价]未接"
                    }],
                loading:false,
                currentPage4:1

            }
        },
        methods:{
            handleSizeChange(){

            },
            handleCurrentChange(val) {
                this.page = val;
                // this.search();
             },
        },
        mounter(){
            this.loading = true;
        }

    }
</script>

<style scoped>
    .pageblock{
       margin:10px 0;
       display: flex;
       justify-content: flex-end;
    }
    /* .el-table thead{
        background:
    } */

</style>
