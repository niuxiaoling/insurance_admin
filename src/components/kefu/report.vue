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
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>