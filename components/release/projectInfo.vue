<template>
  <el-row class="listOne">
    <el-row class="content_wB">
      <el-form
        :label-position="right"
        label-width="120px"
        :rules="rules"
        ref="formOne"
        :model="form"
      >
        <el-row v-show="$store.state.release.num === 0">
          <el-row class="tit">
            <el-row class="name">
              项目概况
            </el-row>
            <el-row class="desc">
              <em>ISSUING
              </em>
              <span>
                PROJECT
              </span>
              <span>
                OVERVIEW
              </span>
            </el-row>
            <el-row class="line">
              <span />
            </el-row>
          </el-row>
          <el-form-item
            label="项目名称："
            prop="name"
            :rules="{
              required: true, message: '请输入项目名称', trigger: 'blur'
            }"
          >
            <el-input v-model="form.name" placeholder="请输入项目名称" />
          </el-form-item>
          <el-form-item
            label="项目类别："
            prop="class"
            error=""
            :rules="{
              required: true, message: '请选择项目类别', trigger: 'change'
            }"
          >
            <el-select v-model="form.class" placeholder="请选择项目类别">
              <el-option
                v-for="item in typeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            label="项目阶段："
            prop="stage"
            :rules="{
              required: true, message: '请选择项目阶段', trigger: 'change'
            }"
          >
            <el-select v-model="form.stage" placeholder="请选择项目阶段">
              <el-option
                v-for="item in phaesList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="建筑周期：">
            <el-input v-model="form.cycle" placeholder="请输入建筑周期" />
          </el-form-item>
          <el-form-item label="项目预算：">
            <el-input v-model="form.budget" placeholder="请输入项目预算" />
          </el-form-item>
          <el-form-item
            label="工地地区："
            prop="area"
            :rules="{
              required: true, message: '请选择工地地区', trigger: 'change'
            }"
          >
            <el-cascader :options="areaList" v-model="form.area" clearable />
          </el-form-item>
          <el-form-item
            label="详细地址："
            prop="address"
            :rules="{
              required: true, message: '请输入详细地址', trigger: 'blur'
            }"
          >
            <el-input v-model="form.address" placeholder="请输入详细地址" />
          </el-form-item>
          <div class="next" @click="nextStep">
            下一步
          </div>
        </el-row>
        <el-row v-show="$store.state.release.num === 1">
          <el-row class="tit">
            <el-row class="name">
              项目简介
            </el-row>
            <el-row class="desc">
              <em>ISSUING
              </em>
              <span>
                PROJECT
              </span>
              <span>
                INTRODUCTION
              </span>
            </el-row>
            <el-row class="line">
              <span />
            </el-row>
          </el-row>
          <el-form-item
            label="项目简介："
            prop="introduce"
          >
            <el-input type="textarea" placeholder="请输入项目简介..." v-model="form.introduce" />
          </el-form-item>
          <el-row class="tips">
            请上传项目图片 <span>（图片限制在2M以内，最多上传3张，支持PNG\PG\JPEG\GIF格式）</span>
          </el-row>
          <el-row class="upImg">
            <el-upload
              accept="image/*"
              action="/api/file/dalaba/file/upload.json"
              list-type="picture-card"
              :on-success="(response, file, fileList)=>uploadPicture(response, file, fileList)"
              :on-remove="(file, fileList)=>handleRemove(file, fileList)"
              :limit="3"
              :before-upload="beforeAvatarUpload"
              :on-exceed="handleExceed"
            >
              <i class="el-icon-plus" />
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-row>
          <el-row class="proNext">
            <div class="left" @click="$store.commit('release/changeNum', 0)">
              上一步
            </div>
            <div class="right" @click="nextStepTwo">
              下一步
            </div>
          </el-row>
        </el-row>
        <el-row v-show="$store.state.release.num === 2">
          <el-row class="tit">
            <el-row class="name">
              项目联系人
            </el-row>
            <el-row class="desc">
              <em>ISSUING
              </em>
              <span>
                PROJECT
              </span>
              <span>CONTACTS
              </span>
            </el-row>
            <el-row class="line">
              <span />
            </el-row>
          </el-row>
          <el-row class="lsitBoxS">
            <el-row v-for="(t,i) in form.constants" :key="i" class="listLi">
              <el-form-item
                label="公司类别："
                :prop="'constants.' + i + '.categoryId'"
                :rules="{
                  required: true, message: '公司类别', trigger: 'change'
                }"
              >
                <el-select v-model="t.categoryId" placeholder="请选择公司类别">
                  <el-option v-for="(t,i) in type" :key="i" :label="t.name" :value="t.id" />
                </el-select>
              </el-form-item>
              <el-form-item
                label="公司名称："
                :prop="'constants.' + i +'.companyName'"
                :rules="{
                  required: true, message: '请输入公司名称', trigger: 'blur'
                }"
              >
                <el-input v-model="t.companyName" placeholder="请输入公司名称" />
              </el-form-item>
              <el-form-item label="公司地址：">
                <el-input v-model="t.address" placeholder="请输入公司地址" />
              </el-form-item>
              <el-form-item
                label="联系人姓名："
                :prop="'constants.' + i +'.name'"
                :rules="{
                  required: true, message: '请输入联系人', trigger: 'blur'
                }"
              >
                <el-input v-model="t.name" placeholder="请输入联系人" />
              </el-form-item>
              <el-form-item label="联系人职位：">
                <el-input v-model="t.positionLevel" placeholder="请输入联系人职位" />
              </el-form-item>
              <el-form-item
                label="联系人电话："
                :rules="constantsRules.tel"
                :prop="'constants.' + i +'.telephone'"
              >
                <el-input v-model="t.telephone" placeholder="请输入联系人电话" />
              </el-form-item>
            </el-row>
          </el-row>
          <el-row class="proNext" v-if="false">
            <div class="left" @click="$store.commit('release/changeNum', 1)">
              上一步
            </div>
            <div class="right" @click="nextStepTwo">
              提交
            </div>
          </el-row>
          <el-row v-if="form.constants.length === 1" class="add">
            <span @click="add">点击添加多个联系人</span>
          </el-row>
          <el-row v-if="form.constants.length > 1" class="add_B_add">
            <el-row class="boxwE">
              <span class="el-icon-circle-plus-outline" @click="add" />
              <span class="el-icon-remove-outline" @click="onslice" />
            </el-row>
          </el-row>
          <div class="sub" @click="submitTo">
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
import { HomeService } from '@/services/projectInfo'
export default {
  data () {
    // eslint-disable-next-line no-unused-vars
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
      dialogImageUrl: '',
      number: 0,
      right: 'right',
      errorText: '', // 错误信息展示
      dialogVisible: false,
      form: {
        name: '', // 项目名字
        class: '', // 项目类别
        stage: '', // 项目阶段
        cycle: '', // 项目周期
        budget: '', // 项目预算
        area: '', // 项目地区
        address: '', // 项目地址
        introduce: '',
        pic: [], // 图片地址
        constants: [{
          categoryId: null, // 公司类别
          companyName: null, // 公司名称
          name: null, // 联系人姓名
          positionLevel: null, // 联系人职位
          telephone: null, // 联系人电话
          address: null // 公司地址
        }] // 联系人数组
      },
      rules: {
        introduce: [{
          required: true, message: '请输入项目简介', trigger: 'blur'
        }]
      },
      constantsRules: {
        tel: [{ required: true, message: '请输入联系人号码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (!value) {
                return callback(new Error('请输入电话号码'))
              } else {
                const myreg = /^[1][3,4,5,7,8][0-9]{9}$/
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
      areaList: [],
      phaesList: [],
      typeList: []
    }
  },
  mounted () {
    this.getType()
    this.getPhase()
    this.getArea()
  },
  methods: {
    nextStep () {
      if (this.form.name === null || this.form.name === '') {
        this.errorText = '请输入项目名称！'
        this.dialogVisible = true
      } else if (this.form.class === null || this.form.class === '') {
        this.errorText = '请选择项目类别！'
        this.dialogVisible = true
      } else if (this.form.stage === null || this.form.stage === '') {
        this.errorText = '请选择项目阶段！'
        this.dialogVisible = true
      } else if (this.form.area === null || this.form.area === '') {
        this.errorText = '请选择工地地区！'
        this.dialogVisible = true
      } else if (this.form.address === null || this.form.address === '') {
        this.errorText = '请输入详细地址！'
        this.dialogVisible = true
      } else {
        this.$store.commit('release/changeNum', 1)
      }
    },
    postProject () {
      const params = {
        project: {
          province: this.form.area[0],
          city: this.form.area[1],
          area: this.form.area[2],
          phaseId: this.form.stage,
          name: this.form.name,
          typeId: this.form.class,
          introduce: this.form.introduce,
          budget: this.form.budget,
          address: this.form.address,
          progress: this.form.cycle,
          pic: this.form.pic
        },
        constants: this.form.constants
      }
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.postProject(params).then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.$message({
            message: '上传成功！请等待审核！！！',
            type: 'success'
          })
          // this.$store.commit('release/changeNumber', 1)
          // this.$nextTick(() => {
          //   this.$nuxt.$loading.start()
          //   this.$store.commit('release/changeNumber', 0)
          //   this.$store.commit('release/changeNum', 0)
          //   setTimeout(() => {
          //     this.$nuxt.$loading.finish()
          //   }, 500)
          // })
        }
      })
    },
    nextStepTwo () {
      if (this.form.introduce === null || this.form.introduce === '') {
        this.$message({
          message: '请输入项目简介',
          type: 'error'
        })
        return
      }
      this.$store.commit('release/changeNum', 2)
    },
    handleClose () {
      this.dialogVisible = false
    },
    // 图片移除
    handleRemove (file, fileList) {
      const that = this
      const fileName = file.response.uri
      that.delone(fileName)
      console.log(this.form.pic)
    },

    // 删除图片数组具体函数del
    delone (fileName) {
      const that = this
      const arr = that.form.pic
      const del = arr.indexOf(fileName)
      that.form.pic.splice(del, 1)
    },

    // 图片上传
    uploadPicture (response, file, fileList) {
      console.log(response.uri)
      this.form.pic.push(response.uri)
      this.dialogImageUrl = file.url
      console.log(this.form.pic)
    },
    beforeAvatarUpload (file) { // 文件上传之前调用做一些拦截限制
      console.log(file)
      const isJPG = true
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleExceed () { // 限制图片张数
      this.$message({
        message: '最多只能上传3张图片',
        type: 'error'
      })
    },
    // 添加联系人数据
    add () {
      const that = this
      that.form.constants.push({
        categoryId: null, // 公司类别
        companyName: null, // 公司名称
        name: null, // 联系人姓名
        positionLevel: null, // 联系人职位
        telephone: null, // 联系人电话
        address: null // 公司地址
      })
      console.log(this.form.constants.length)
    },

    // 删除联系人
    onslice () {
      const that = this
      that.form.constants.splice(that.form.constants.length - 1, 1)
    },
    submitTo () {
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
      this.$refs.formOne.validate((valid) => {
        if (!valid) {
          this.$message({
            message: '你填写的信息不完整哦！~~~',
            type: 'warning'
          })
        } else {
          this.postProject()
        }
      })
    },
    getArea () { // 获取项目地区
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getAreas().then((res) => {
        // console.log('项目地区', res.data.results)
        this.areaList = this.convertTree(res.data)
        // console.log(this.options)
        setTimeout(() => {
          console.log(this.area)
        }, 3000)
      }).catch(() => {

      })
    },
    getType () { // 获取类型
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getType().then((res) => {
        // console.log('项目类型', res.data.results)
        this.typeList = this.convertTree(res.data.results)
        // console.log(this.options)
      })
    },
    getPhase () { // 获取阶段
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getPhase().then((res) => {
        console.log('项目阶段', res.data.results)
        this.phaesList = this.convertTrees(res.data.results)
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
          value = 0
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
    },
    convertTrees (tree) {
      const result = []
      // eslint-disable-next-line no-unused-vars
      // 遍历 tree
      tree.forEach((item) => {
        // 解构赋值
        const {
          // eslint-disable-next-line prefer-const
          phaseName: label,
          id: value
        } = item
        result.push({
          value,
          label
        })
      })
      return result
    }

  }
}
</script>

<style scoped lang="scss">
</style>
