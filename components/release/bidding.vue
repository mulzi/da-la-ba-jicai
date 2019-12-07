<template>
  <el-row class="listOneS">
    <el-row class="content_wB">
      <el-form
        :label-position="right"
        label-width="140px"
        :rules="rules"
        ref="formOne"
        :model="form"
      >
        <el-row>
          <el-row class="tit">
            <el-row class="name">
              招募招标
            </el-row>
            <el-row class="desc">
              <em>ISSUING
              </em>
              <span>
                RECRUITMENT
              </span>
              <span>
                AND &nbsp;BIDDING
              </span>
            </el-row>
            <el-row class="line">
              <span />
            </el-row>
          </el-row>
          <el-form-item label="招募标题：" prop="title">
            <el-input v-model="form.title" placeholder="请输入招募标题" />
          </el-form-item>
          <el-form-item label="招募类型：" prop="class">
            <el-select v-model="form.class" placeholder="请选择项目类别">
              <el-option
                v-for="item in typeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                clearable
              />
            </el-select>
          </el-form-item>
          <el-form-item label="招募地区：" prop="area">
            <el-cascader :options="areaList" v-model="form.area" :props="{ expandTrigger: 'hover' }" clearable />
          </el-form-item>
          <el-form-item label="内容：" prop="content">
            <el-input type="textarea" v-model="form.content" placeholder="请输入招募内容，请输入10字以上" />
          </el-form-item>
          <el-row class="tips">
            请上传文件 <span>(文件限制在10m以内，支持word/excl等格式)</span>
          </el-row>
          <el-row class="upImg">
            <el-upload
              accept=".xls,.xlsx,.doc,.docx,.pdf"
              action="/api/file/dalaba/file/upload.json"
              list-type="text"
              :on-success="(response, file, fileList)=>uploadPicture(response, file, fileList)"
              :on-remove="(file, fileList)=>handleRemove(file, fileList)"
              :limit="1"
              :before-upload="beforeAvatarUpload"
              :on-exceed="handleExceed"
            >
              <el-row v-if="!form.recruitAnnexeList.length" size="small" type="primary">
                <span style="width: 100px;height: 100px;background: gainsboro;display: flex; opacity: 0.5;">
                  <i class="el-icon-plus" style="margin: auto;font-size: 20px" />
                </span>
              </el-row>
            </el-upload>
          </el-row>
          <el-form-item label="报名截止时间：" prop="time">
            <el-date-picker
              v-model="form.time"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions1"
              value-format="yyyy-MM-dd"
            />
          </el-form-item>
          <el-form-item label="发布单位：" prop="companyName">
            <el-input v-model="form.companyName" placeholder="请输入需求单位名称" />
          </el-form-item>
          <el-form-item label="联系人姓名：" prop="nameS">
            <el-input v-model="form.nameS" placeholder="请输入联系人" />
          </el-form-item>
          <el-form-item label="联系人职位：" prop="positionLevel">
            <el-input v-model="form.positionLevel" placeholder="请输入联系人职位" />
          </el-form-item>
          <el-form-item label="联系人电话：" prop="phone">
            <el-input v-model="form.phone" type="text" placeholder="请输入联系人电话" />
          </el-form-item>
          <div class="sub" @click="onSub">
            提交
          </div>
        </el-row>
      </el-form>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="22%"
        :before-close="handleClose"
      >
        <span>{{ errorText }}</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/askPriseList'
export default {
  data () {
    const checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('号码不能为空'))
      }
      setTimeout(() => {
        const mobile = /^((13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})|(19[0-9]{9}))$/
        const tel = /^\d{3,4}-\d{7,9}$/
        if (!mobile.test(value) && !tel.test(value)) {
          return callback(new Error('请输入正确的电话'))
        } else {
          callback()
        }
      }, 1000)
    }
    const contentS = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('内容不能为空'))
      }
      setTimeout(() => {
        if (Array.from(value).length < 10) {
          return callback(new Error('请输入10个字以上！'))
        } else {
          callback()
        }
      }, 1000)
    }
    return {
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      subFlag: true,
      dialogImageUrl: '',
      right: 'right',
      errorText: '', // 错误信息展示
      dialogVisible: false,
      form: {
        title: '', // 招募标题
        class: '', // 项目类别
        nameS: '', // 联系人姓名
        content: '', // 招募内容
        time: '', // 截止时间
        recruitAnnexeList: [], // 招标文件
        area: '', // 招募地区
        companyName: '', // 需求公司名称
        positionLevel: '', // 联系人职位
        phone: '' // 联系人电话
      },
      rules: {
        content: [
          { required: true, validator: contentS, trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请输入招募标题', trigger: 'blur' }
        ],
        companyName: [
          { required: true, message: '请输入需求单位名称', trigger: 'blur' }
        ],
        time: [
          { required: true, message: '请输入报名截止时间', trigger: 'blur' }
        ],
        phone: [{ required: true, trigger: 'blur', validator: checkPhone }],
        nameS: [
          { required: true, message: '请输入联系人名称', trigger: 'blur' }
        ],
        positionLevel: [
          { required: true, message: '请输入联系人职位', trigger: 'blur' }
        ],
        class: [
          { required: true, message: '请选择项目类别', trigger: 'change' }
        ],
        material: [
          { required: true, message: '请输入招采材料', trigger: 'blur' }
        ],
        area: [
          { required: true, message: '请选择工地地区', trigger: 'change' }
        ]
      },
      areaList: [],
      typeList: []
    }
  },
  mounted () {
    this.getArea()
    this.getType()
  },
  methods: {
    onSub () {
      if (!this.$store.state.home.isLogin) {
        this.$message({
          message: '你还没登录哦！请先登录吧！',
          type: 'error'
        })
        setTimeout(() => {
          this.$router.push('/login')
        }, 1000)
        return false
      }
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      this.$refs.formOne.validate((valid) => {
        if (!valid) {
          this.$message({
            message: '你填写的信息不完整哦！~~~',
            type: 'error'
          })
        } else if (this.subFlag) {
          this.subFlag = false
          const params = {
            title: this.form.title,
            categoryId: this.form.class,
            content: this.form.content,
            companyName: this.form.companyName,
            contactName: this.form.nameS,
            contactPosition: this.form.positionLevel,
            contactPhone: this.form.phone,
            source: 0,
            expiredAt: this.form.time,
            province: this.form.area[0],
            city: this.form.area[1],
            area: this.form.area[2],
            recruitAnnexeList: this.form.recruitAnnexeList
          }
          homeService.postList(params).then((res) => {
            if (res.status === 200) {
              this.$message({
                message: '上传成功！请等待审核！！！',
                type: 'success'
              })
              this.$store.commit('release/changeNumber', 0)
              this.$nextTick(() => {
                this.$nuxt.$loading.start()
                this.$store.commit('release/changeNumber', 2)
                setTimeout(() => {
                  this.$nuxt.$loading.finish()
                }, 500)
              })
            }
          })
        } else {
          this.$message({
            message: '请等待~~  提交中',
            type: 'error'
          })
        }
      })
    },
    handleClose () {
      this.dialogVisible = false
    },
    // 图片移除
    handleRemove (file) {
      const that = this
      that.form.recruitAnnexeList = []
    },
    // 图片上传
    uploadPicture (response, file) {
      this.form.recruitAnnexeList.push({ 'fileName': file.name, 'fileUrl': file.response.uri })
    },
    beforeAvatarUpload (file) { // 文件上传之前调用做一些拦截限制
      console.log(file)
      const isJPG = true
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 10

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传文件大小不能超过 10MB!')
      }
      return isJPG && isLt2M
    },
    handleExceed () { // 限制图片张数
      this.$message({
        message: '最多只能上传1份文件',
        type: 'error'
      })
    },
    getArea () { // 获取地区
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getAreas().then((res) => {
        if (res.status === 200) {
          // console.log(res.data, '地区')
          this.areaList = this.convertTree(res.data)
        }
      })
    },
    getType () { // 获取类型
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getType().then((res) => {
        // console.log(res)
        this.typeList = this.convertTree(res.data)
        console.log(this.typeList)
      })
    },
    convertTree (tree) {
      const result = []
      // eslint-disable-next-line no-unused-vars
      // 遍历 tree
      tree.forEach((item) => {
        // 解构赋值
        let {
          // eslint-disable-next-line prefer-const
          name: label,
          id: value,
          children
        } = item
        // 如果有子节点，递归
        if (value === 0) {
          value = 0 // 生成字母和数字的随机数
        }
        if (children) {
          children = this.convertTree(children)
        }
        result.push({
          value,
          label,
          children
        })
      })

      return result
    }
  }
}
</script>

<style lang="scss">
</style>
