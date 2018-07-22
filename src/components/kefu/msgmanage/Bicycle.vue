<template>
  <div class="bicycle">
    <el-dialog title="单车分配"  :visible.sync="dialogVisible" :before-close="handleClose" width="60%">
      <el-form :model="carmessage" :rules="rules" ref="ruleForm">
        <!--查询车辆信息-->
        <el-row :gutter="20">
          <el-col :span="6">查询车辆信息</el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8" :offset="1">
            <el-form-item label="车牌号码:">
              <el-input v-model="carmessage.nubs" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电话号码:">
              <el-input v-model="carmessage.Frame_nub" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button type="success">查找</el-button>
          </el-col>
        </el-row>

        <!--车辆基本信息-->
        <el-row :gutter="20">
          <el-col :span="6">车辆基本信息</el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8" :offset="1">
            <el-form-item label="车辆编号:" prop="nubs">
              <el-input v-model="carmessage.nubs" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="车牌号码:" prop="Frame_nub">
              <el-input v-model="carmessage.Frame_nub" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="1">
            <el-form-item label="品牌型号:" prop="Frame_nub">
              <el-input v-model="carmessage.Engine_nub" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="车主姓名:" prop="Frame_nub">
              <el-input v-model="carmessage.brand_nub" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!--制定分配人-->
        <el-row :gutter="20">
          <el-col :span="6">制定分配人</el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8" :offset="1">
            <el-form-item label="分配给:" prop="value">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="cancel">关闭窗口</el-button>
        <el-button type="primary" @click.native="submitForm('ruleForm')">确认分配</el-button>
      </div>
    </el-dialog>

  </div>


</template>

<script>
  export default {
    data(){
      return{
        dialogVisible:true,
        rules:{
          nubs:[{required:true,message:'不能为空',trigger:'blur'}],
          Frame_nub:[{required:true,message:'不能为空',trigger:'blur'}],
          Engine_nub:[{required:true,message:'不能为空',trigger:'blur'}],
          brand_nub:[{required:true,message:'不能为空',trigger:'blur'}],
        },
        carmessage:{
          nubs:'',
          Frame_nub:'',
          Engine_nub:'',
          brand_nub:'',
        },
        options: [
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
        value: ''
      }

    },
    methods:{
      handleClose(){
        this.$emit('state',false);
      },
      cancel(){
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
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 20px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
