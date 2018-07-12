<template>
    <div>
         <el-card>
                <div slot="header" class="clearfix">
                    <span>车辆信息</span>
                </div>
                <div>
                    <el-form   :model="carmessage" label-width="80px" size="mini">
                        <el-form-item label="车主姓名" class="item-col-12">
                                <el-input v-model="carmessage.carname" class="input-width"></el-input>
                        </el-form-item>
                        
                        <el-form-item label="车牌号码" class="item-col-12">
                                <el-input v-model="carmessage.carnumber"></el-input>
                        </el-form-item>  
                        
                        <el-form-item label="初登日期" class="item-col-12">
                            <el-input v-model="carmessage.carfirsttime"></el-input>
                        </el-form-item>    
                       
                        <el-form-item label="品牌型号" class="item-col-12">
                            <el-input v-model="carmessage.cartype"></el-input>
                        </el-form-item>  
                        
                        <el-form-item label="排量" class="item-col-12">
                            <el-input v-model="carmessage.cardisplacement"></el-input>
                        </el-form-item> 

                        <el-form-item label="座位数" class="item-col-12">
                            <el-input v-model="carmessage.carseatnumber"></el-input>
                        </el-form-item> 
 
                         <el-form-item label="购置价" class="item-col-12">
                            <el-input v-model="carmessage.cargetprice"></el-input>
                        </el-form-item> 
                        <el-form-item label="区域" class="item-col-12">
                            <el-input v-model="carmessage.cararea"></el-input>
                        </el-form-item> 
                        <el-form-item label="批次" class="item-col-12">
                            <el-input v-model="carmessage.carbatch"></el-input>
                        </el-form-item> 
                        <el-form-item label="去百" class="item-col-12">
                            <el-checkbox v-model="checked"></el-checkbox>
                        </el-form-item> 
                        <el-form-item label="地址" class="item-col-24">
                                <el-input type="textarea" :rows="2"   v-model="caraddress"></el-input>
                        </el-form-item>
                        <el-form-item label="备注" class="item-col-24">
                                <el-input type="textarea" :rows="2"   v-model="remarks" ></el-input>
                        </el-form-item>
                        <div style="margin-left:80px">
                            <el-button  type="primary" size="mini">保存记录</el-button>
                            <el-button  type="primary" size="mini">添加客户电话</el-button>
                        </div>
                            
                    </el-form>
                </div>
          </el-card>    
    </div>
</template>

<script>

    export default {
        // props:['insuranceMsg'],
        data(){
            return{
                caraddress:'',
                remarks:'',
                value:'',
                checked:true,
                remindtime:"",
                carmessage:{
                    carname:"",
                    carnumber:"",
                    carfirsttime:'',
                    cartype:'',
                    cardisplacement:'',
                    carseatnumber:'',
                    cargetprice:'',
                    carbatch:'',
                    cararea:'',
                    nature:[
                        {value:1,label:"模板1"},
                        {value:12,label:"模板2"},
                    ],
                    result:[
                        {value:1,label:"模板1"},
                        {value:12,label:"模板2"},
                    ]  
                },
            }
        }
        
    }
</script>

<style scoped>
    .item-col-12{
        width: 48%;
        display: inline-block;
    }
    .el-form-item{
      margin-bottom:10px!important;
    }
</style>