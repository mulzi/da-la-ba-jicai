<template>
  <el-row class="supplierBody">
    <el-row class="myBodyBox">
      <el-row :gutter="25" class="myCentent marginBottom100">
        <el-col :span="4" class="leftBox">
          <menu-s />
        </el-col>
        <el-col :span="20" class="rightBox">
          <el-row class="infoBox">
            <el-row class="userBox">
              <el-row class="tit">
                基本信息
              </el-row>
              <el-form
                :label-position="right"
                ref="formOne"
                :rules="rules"
                label-width="80px"
                :model="form"
                class="form"
              >
                <el-form-item label="昵称" prop="name">
                  <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="手机号">
                  <el-input v-model="form.phone" :disabled="true" />
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="form.email" :disabled="true" />
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                  <el-radio v-model="form.radio" label="1" style="margin-left: 30px">
                    男
                  </el-radio>
                  <el-radio v-model="form.radio" label="2">
                    女
                  </el-radio>
                </el-form-item>
                <el-form-item label="公司名称">
                  <el-input v-model="form.companyName" />
                </el-form-item>
                <el-form-item label="公司地址">
                  <el-input v-model="form.address" />
                </el-form-item>
                <el-row class="bo_sub">
                  <span class="sub" @click="sub">
                    修改
                  </span>
                  <span class="close" @click="$router.go(-1)">
                    取消
                  </span>
                </el-row>
              </el-form>
            </el-row>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import menuS from '@/components/my/leftMenu'
export default {
  components: { menuS },
  layout: 'my',
  data () {
    return {
      right: 'right',
      form: {
        name: '',
        radio: '1',
        phone: '',
        companyName: '',
        address: ''
      },
      rules: {
        name: [{ required: true, message: '昵称不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    sub () {
      this.$refs.formOne.validate((valid) => {
        if (!valid) {
          this.$message({
            message: '你填写的信息不完整哦！~~~',
            type: 'warning'
          })
          return
        }
        console.log(66)
        // this.$refs.formOne.resetFields()
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .myCentent{
        width: 100%;
        margin-top: 20px;
        .leftBox{
        }
        .rightBox{
            .infoBox{
              width: 100%;
              background: #ffffff;
              .userBox{
                width: 60%;
                margin-top:30px ;
                margin-left: 30px;
                .tit{
                  font-size: 20px;
                  color: #333333;
                }
                .form{
                  margin-top: 20px;
                  .bo_sub{
                    margin-left: 80px;
                    margin-bottom: 50px;
                    .sub{
                      width:60px ;
                      height: 26px;
                      line-height: 26px;
                      font-size: 14px;
                      color: #ffffff;
                      background: $redColor;
                      text-align: center;
                      margin-right: 30px;
                      cursor: pointer;
                      display: inline-block;
                    }
                    .close{
                      display: inline-block;
                      width:60px ;
                      height: 26px;
                      line-height: 26px;
                      font-size: 14px;
                      color: #333333;
                      text-align: center;
                      border: 1px solid $borderE7;
                      box-sizing: border-box;
                      cursor: pointer;
                    }
                  }
                }
              }
            }
        }
    }
</style>
