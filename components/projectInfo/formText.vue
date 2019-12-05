<template>
  <el-row class="AddIntelligence">
    <el-row class="contentBox">
      <el-form ref="forms" :model="fromBox" class="formBox demo-ruleForm" onsubmit="return false">
        <el-row class="ulAddList">
          <el-row v-for="(ti,ii) in fromBox.contacts" :key="ii" class="topForm">
            <el-form-item
              label="公司类别："
              :prop="'contacts.' + ii + '.categoryId'"
              :rules="{
                required: true, message: '公司类别', trigger: 'change'
              }"
            >
              <el-select v-model="ti.categoryId" placeholder="请选择公司类别">
                <el-option v-for="(t,i) in type" :key="i" :label="t.name" :value="t.id" />
              </el-select>
            </el-form-item>
            <el-form-item
              label="公司名称："
              :prop="'contacts.' + ii +'.companyName'"
              :rules="{
                required: true, message: '请输入公司名称', trigger: 'blur'
              }"
            >
              <el-input v-model="ti.companyName" placeholder="请输入公司名称" />
            </el-form-item>
            <el-form-item label="公司地址：">
              <el-input v-model="ti.address" placeholder="请输入公司地址" />
            </el-form-item>
            <el-form-item
              label="联系人姓名："
              :prop="'contacts.' + ii +'.name'"
              :rules="{
                required: true, message: '请输入联系人', trigger: 'blur'
              }"
            >
              <el-input v-model="ti.name" placeholder="请输入联系人" />
            </el-form-item>
            <el-form-item label="联系人职位：">
              <el-input v-model="ti.positionLevel" placeholder="请输入联系人职位" />
            </el-form-item>
            <el-form-item
              label="联系人职位介绍："
              :rules="{
                required: true, message: '联系人职位介绍', trigger: 'blur'
              }"
              :prop="'contacts.' + ii +'.positionIntroduce'"
            >
              <el-input v-model="ti.positionIntroduce" placeholder="联系人职位介绍" />
            </el-form-item>
            <el-form-item
              label="联系人电话："
              :rules="constantsRules.tel"
              :prop="'contacts.' + ii +'.telephone'"
            >
              <el-input v-model="ti.telephone" placeholder="请输入联系人电话" />
            </el-form-item>

            <el-form-item
              label="项目阶段："
              :prop="'contacts.' + ii +'.projectStage'"
              :rules="{
                required: true, message: '项目阶段', trigger: 'blur'
              }"
            >
              <el-input v-model="ti.projectStage" placeholder="项目阶段" />
            </el-form-item>
            <el-form-item label="未定材料：">
              <el-input v-model="ti.uncertaintyMaterials" placeholder="未定材料" />
            </el-form-item>
            <el-row class="listUl">
              <el-col class="leftName" :span="6">
                <span>项目图片：</span>
              </el-col>
              <el-col :span="18" class="rightInp">
                <el-row class="titBoxStop">
                  <span class="titleTopBox">请上传情报图片信息</span>
                  <span class="caption ">（图片限制在4M以内且只能上传3张,支持PNG\PG\JPEG\GIF格式）</span>
                </el-row>
                <el-row>
                  <el-row>
                    <el-upload
                      action="/api/file/dalaba/file/upload.json"
                      list-type="picture-card"
                      accept="image/*"
                      :on-remove="(file, fileList)=>handleRemove(file, fileList,ii)"
                      :limit="3"
                      :before-upload="beforeAvatarUpload"
                      :on-success="(response, file, fileList)=>uploadPicture(response, file, fileList,ii)"
                      :on-exceed="overList"
                    >
                      <i class="el-icon-plus" />
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible" class="updateImg" />
                    <el-dialog
                      title="提示"
                      :visible.sync="DialogVisibles"
                      width="26%"
                      center
                    >
                      <span>{{ tipsText }}</span>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible">取 消</el-button>
                        <el-button type="primary" @click="centerDialogVisible">确 定</el-button>
                      </span>
                    </el-dialog>
                  </el-row>
                </el-row>
              </el-col>
            </el-row>
          </el-row>
        </el-row>
        <el-row v-if="fromBox.contacts.length === 1" class="addListTop">
          <span @click="add">点击添加多个情报</span>
        </el-row>
        <el-row v-if="fromBox.contacts.length > 1" class="add_B_add">
          <el-row class="boxwE">
            <span class="el-icon-circle-plus-outline" @click="add" />
            <span class="el-icon-remove-outline" @click="removeList" />
          </el-row>
        </el-row>
        <el-row class="subBox">
          <button @click="sub()">
            提交
          </button>
        </el-row>
      </el-form>
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/projectInfo'
export default {
  data () {
    return {
      type: [
        {
          name: '甲方',
          id: 1
        }, {
          name: '设计方',
          id: 2
        }, {
          name: '承建方',
          id: 3
        }, {
          name: '装饰方',
          id: 4
        }],
      DialogVisibles: false,
      dialogVisible: false,
      tipsText: '多少岁',
      dialogImageUrl: '',
      fromBox: {
        contacts: [
          {
            id: this.$route.params.id,
            projectId: this.$route.params.id,
            categoryId: null,
            name: null,
            companyName: null,
            positionLevel: null,
            positionIntroduce: null,
            address: null,
            telephone: null,
            projectStage: null,
            uncertaintyMaterials: null,
            pics: [] // 图片

          }
        ]
      },
      constantsRules: {
        tel: [{ required: true, message: '请输入联系人号码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (!value) {
                return callback(new Error('请输入电话号码'))
              } else {
                const myreg = /^((13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})|(19[0-9]{9}))$/
                setTimeout(() => {
                  if (!myreg.test(value)) {
                    callback(new Error('请输入正确的电话号码'))
                  } else {
                    callback()
                  }
                }, 1000)
              }
            },
            trigger: 'change'
          }
        ]
      },
      loading: false
    }
  },
  methods: {
    sub () {
      const _this = this
      if (!_this.$store.state.home.isLogin) {
        this.$message({
          message: '你还没登录哦~~~   去登录吧！',
          type: 'error'
        })
        setTimeout(() => {
          _this.$router.push('/login')
        }, 1000)
        return false
      }
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      const params = { intelligences: this.fromBox.contacts, projectId: this.$route.params.id }
      this.$refs.forms.validate((valid) => {
        if (valid) {
          this.$nuxt.$loading.start()
          homeService.postIntelligences(params).then((res) => {
            if (res.status === 200) {
              setTimeout(() => {
                this.$refs.forms.resetFields()
                this.$message({
                  message: '上传成功',
                  type: 'success'
                })
              }, 1000)
              this.$nuxt.$loading.finish()
            }
          })
        } else {
          this.$message({
            message: '你的信息没有填完整哦！！',
            type: 'error'
          })
        }
      })
    },
    overList () {
      this.tipsText = '最多只能传3张图片'
      this.DialogVisibles = true
    },
    beforeAvatarUpload (file) { // 文件上传之前调用做一些拦截限制
      console.log(file)
      const isJPG = true
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 4

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 4MB!')
      }
      return isJPG && isLt2M
    },
    add () {
      this.fromBox.contacts.push(
        {
          projectId: this.$route.params.id,
          categoryId: null,
          name: null,
          companyName: null,
          positionLevel: null,
          positionIntroduce: null,
          address: null,
          telephone: null,
          projectStage: null,
          uncertaintyMaterials: null,
          pics: [] // 图片

        }
      )
    },
    removeList () {
      this.fromBox.contacts.splice(this.fromBox.contacts.length - 1, 1)
    },
    centerDialogVisible () {
      this.DialogVisibles = !this.DialogVisibles
    },
    // 图片上传
    uploadPicture (response, file, fileList, index) {
      this.fromBox.contacts[index].pics.push(response.uri)
    },

    // 图片删除
    handleRemove (file, fileList, index) {
      console.log(file)
      console.log('sss', fileList)
      const that = this
      const fileName = file.response.uri
      that.delone(fileName, index)
    },

    // 删除图片函数封装
    delone (fileName, index) {
      const that = this
      const arr = that.fromBox.contacts[index].pics
      const del = arr.indexOf(fileName)
      that.fromBox.contacts[index].pics.splice(del, 1)
    }
  }
}
</script>
<style lang="scss">
  .AddIntelligence{
    width: 100%;
    padding-bottom: 50px;
    margin-bottom: 20px;
    .contentBox{
      width: 800px;
      margin: 0 auto;
      .formBox{
        width: 100%;
        .ulAddList{
          width: 100%;
          .topForm{
            width: 100%;
            margin-bottom: 40px;
            border-bottom: 1px dashed #999;
            &:last-child{
              border-bottom-color: transparent;
            }
            .el-form-item{
              display: flex;
              display: -ms-flex;
              .el-form-item__label{
                width: 180px;
                text-align: right;
                font-size: 18px;
              }
              .el-form-item__content{
                flex: 1;
                -ms-flex: 1;
                .el-select{
                  width: 100%;
                }
              }
            }
            .listUl{
              width: 100%;
              margin-bottom: 30px;
              .leftName{
                text-align: right;
                font-size: 18px;
                color: #8c8c8c;
                height: 40px;
                line-height: 40px;
                em{
                  color: $redColor;
                }
              }
              .rightInp{
                .el-select{
                  width: 100%;
                }
              }
            }
          }
        }

        .addListTop{
          text-align: right;
          color: $redColor;
          font-size: 16px;
          cursor: pointer;
          display: block;
          width: 100%;
          height: 30px;
          line-height: 30px;
        }
        .add_B_add{
          width: 800px;
          margin: 20px auto;
          height: 40px;
          line-height: 40px;
          text-align: center;
          .boxwE{
            margin-left: 180px;
            span{
              margin: 0 20px;
              display: inline-block;
              color: $redColor;
              font-size: 30px;
              width: 40px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              cursor: pointer;
            }
          }

        }
        .subBox{
          width: 800px;
          margin: 30px auto;
          display: flex;
          display: -ms-flex;
          button{
            flex: 1;
            -ms-flex: 1;
            margin-left: 180px;
            height: 60px;
            line-height: 60px;
            font-size: 28px;
            color: #ffffff;
            text-align: center;
            background: $redColor;
            outline: none;
            cursor: pointer;
            &:active{
              background: #ff1c00;
            }
          }
        }
      }
    }
  }
  .titBoxStop{
    width: 100%;
    margin-top: 10px;
    .titleTopBox{
      font-size: 16px;
      color: #333333;
      font-weight: bold;
    }
    .caption{
      color: #999999;
      font-size: 12px;
    }
  }

</style>
<style>
  .el-upload-list--picture-card .el-upload-list__item{
    width: 134px;
    height: 134px;
  }
  .el-upload--picture-card{
    width: 134px;
    height: 134px;
  }
</style>
