<template>
  <el-dialog title="创建车辆信息"  :visible.sync="dialogVisible" :before-close="handleClose">
    <el-form :model="carmessage" label-width="100px" :rules="rules" ref="ruleForm">
      <el-form-item label="车牌号" prop="nubs">
        <el-input v-model="carmessage.nubs" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="车架号" prop="Frame_nub">
        <el-input v-model="carmessage.Frame_nub" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="发动机号" prop="Engine_nub">
        <el-input v-model="carmessage.Engine_nub" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="品牌" prop="brand_nub">
        <el-input  v-model="carmessage.brand_nub" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="型号" prop="Models_nub">
        <el-input  v-model="carmessage.Models_nub" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="初登日期" prop="First_place">
        <el-input  v-model="carmessage.First_place" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="座位数" prop="seat_nub">
        <el-input  v-model="carmessage.seat_nub" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="排量" prop="displacement">
        <el-input  v-model="carmessage.displacement" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="车主姓名" prop="name">
        <el-input  v-model="carmessage.name" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="tel">
        <el-input  v-model="carmessage.tel" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="idcard">
        <el-input  v-model="carmessage.idcard" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="地址信息" prop="address">
        <el-input  v-model="carmessage.address" style="width:300px"></el-input>
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
                nubs:[{required:true,message:'不能为空',trigger:'blur'}],
                Frame_nub:[{required:true,message:'不能为空',trigger:'blur'}],
                Engine_nub:[{required:true,message:'不能为空',trigger:'blur'}],
                brand_nub:[{required:true,message:'不能为空',trigger:'blur'}],
                Models_nub:[{required:true,message:'不能为空',trigger:'blur'}],
                First_place:[{required:true,message:'不能为空',trigger:'blur'}],
                seat_nub:[{required:true,message:'不能为空',trigger:'blur'}],
                displacement:[{required:true,message:'不能为空',trigger:'blur'}],
                idcard:[{required:true,message:'不能为空',trigger:'blur'}],
                name:[{required:true,message:'不能为空',trigger:'blur'}],
                address:[{required:true,message:'不能为空',trigger:'blur'}],
                tel:[{required:true,message:'不能为空',trigger:'blur'}],
              },
              carmessage:{
                nubs:'',
                Frame_nub:'',
                Engine_nub:'',
                brand_nub:'',
                Models_nub:'',
                First_place:'',
                seat_nub:'',
                displacement:'',
                name:'',
                idcard:'',
                address:'',
                tel:''
              },
            }

        },
        methods:{
          handleClose(){
            this.dialogVisible = false;
            this.$emit('state',false);
          },
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
                this.$emit('state',false);
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
        }
    }
</script>
<style lang="scss" scoped>

</style>


