<template>
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
</template>
<script>
    export default {
        props:['dialogVisible'],
        data(){
            return{
                rules:{
                        name:[{required:true,message:'不能为空',trigger:'blur'}] 
                    },
                carmessage:{
                    number:'',
                    name:'',
                    position:'',
                    contactperson:'',
                    tel:''
                },
            }
            
        },
        methods:{
             handleClose(){

            },
        }
    }
</script>
<style lang="scss" scoped>

</style>


