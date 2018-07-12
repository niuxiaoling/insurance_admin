<template>
    <div>
         <el-card>
                <div slot="header" class="clearfix">
                    <span>基本信息</span>
                </div>
                <div>
                    <el-form   :model="insurancemsg" label-width="80px" size="mini">
                        <el-form-item label="商业险" class="item-col-12">
                                <el-input v-model="insurancemsg.cominsurancemsg" class="input-width"></el-input>
                        </el-form-item>
                        
                        <el-form-item label="理赔数" class="item-col-12">
                                <el-input v-model="insurancemsg.comnumber"></el-input>
                        </el-form-item>  
                        
                        <el-form-item label="理赔额" class="item-col-12">
                            <el-input v-model="insurancemsg.commoney"></el-input>
                        </el-form-item>    
                       
                        <el-form-item label="终保" class="item-col-12">
                            <el-input v-model="insurancemsg.comendtime"></el-input>
                        </el-form-item>  
                        
                        <el-form-item label="脱保" class="item-col-6">
                            <el-checkbox v-model="insurancemsg.comendcheck"></el-checkbox>
                        </el-form-item> 

                        <el-form-item label="商业起保" class="item-col-12">
                             <el-date-picker  v-model="insurancemsg.comstarttime"  type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item> 
 
                         <el-form-item label="性质" class="item-col-12">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in insurancemsg.comnature"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item> 
                        <el-form-item label="种类" class="item-col-12">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in insurancemsg.comtype"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item> 
                        <el-form-item label="用途" class="item-col-12">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in insurancemsg.comuse"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item> 
                        <br>
                        <el-form-item label="交强险" class="item-col-12">
                             <el-input v-model="insurancemsg.stoinsurance"></el-input>
                        </el-form-item> 
                        <el-form-item label="理赔代码" class="item-col-12">
                                <el-input v-model="insurancemsg.stonumber"></el-input>
                        </el-form-item>
                        <el-form-item label="理赔状态" class="item-col-12">
                                <el-input v-model="insurancemsg.stostatus"></el-input>
                        </el-form-item>
                        <el-form-item label="终保" class="item-col-12">
                                <el-input v-model="insurancemsg.stoendtime"></el-input>
                        </el-form-item>
                        <el-form-item label="脱保" class="item-col-6">
                                <el-checkbox v-model="insurancemsg.stoendcheck"></el-checkbox>
                        </el-form-item>
                        <el-form-item label="交强险起保" class="item-col-12 stostarttime" >
                                <el-date-picker  v-model="insurancemsg.stostarttime"  type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="性质" class="item-col-12">
                               <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in insurancemsg.stonature"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="种类" class="item-col-12">
                              <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in insurancemsg.stotype"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="过户" class="item-col-6">
                             <el-checkbox v-model="insurancemsg.ishu"></el-checkbox>
                        </el-form-item>
                        <el-form-item label="减排" class="item-col-6">
                                 <el-checkbox v-model="insurancemsg.isreduce"></el-checkbox>
                        </el-form-item>
                        <el-form-item label="双险状态" class="item-col-12">
                               <el-input v-model="insurancemsg.twostatus"></el-input>
                        </el-form-item>
                          
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
                insurancemsg:{
                    cominsurancemsg:"",
                    comnumber:"",
                    commoney:'',
                    comendtime:'',
                    comendcheck:false,
                    comstarttime:'',
                    comnature:[
                        {value:1,label:"模板1"},
                        {value:12,label:"模板2"},
                    ],
                    comtype:[
                        {value:1,label:"模板1"},
                        {value:12,label:"模板2"},
                    ],
                    comuse:[
                       {value:1,label:"模板1"},
                        {value:12,label:"模板2"},
                    ], 
                    stoinsurance:'',
                    stonumber:'',
                    stostatus:'',
                    stoendtime:"",
                    stoendcheck:'',
                    stostarttime:'',
                    stonature:[
                        {value:1,label:"模板1"},
                        {value:12,label:"模板2"},
                    ],
                    stotype:[
                         {value:1,label:"模板1"},
                        {value:12,label:"模板2"},
                    ],
                    ishu:false,
                    isreduce:false,
                    twostatus:""
                },
            }
        }
        
    }
</script>

<style scoped>
    .item-col-6{
        width: 22%;
         display: inline-block;
    }
    .item-col-12{
        width: 48%;
        display: inline-block;
    }
    .el-form-item{
      margin-bottom:10px!important;
    }

</style>