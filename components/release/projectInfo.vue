<template>
  <el-row class="listOne">
    <el-row class="content_wB">
      <el-form
        :label-position="right"
        label-width="120px"
        :rules="rules"
        ref="formOne"
        :model="form.project"
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
          <el-form-item label="项目名称：" prop="name">
            <el-input v-model="form.project.name" placeholder="请输入项目名称" />
          </el-form-item>
          <el-form-item label="项目类别：" prop="class">
            <el-select v-model="form.project.class" placeholder="请选择项目类别">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="项目阶段：" prop="stage">
            <el-select v-model="form.project.stage" placeholder="请选择项目阶段">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="建筑周期：">
            <el-input v-model="form.project.cycle" placeholder="请输入建筑周期" />
          </el-form-item>
          <el-form-item label="项目预算：">
            <el-input v-model="form.project.budget" placeholder="请输入项目预算" />
          </el-form-item>
          <el-form-item label="工地地区：" prop="area">
            <el-cascader :options="options" v-model="form.project.area" clearable />
          </el-form-item>
          <el-form-item label="详细地址：" prop="address">
            <el-input v-model="form.project.address" placeholder="请输入详细地址" />
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
          <el-form-item label="项目简介：" prop="introduce">
            <el-input type="textarea" placeholder="请输入项目简介..." v-model="form.project.introduce" />
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
          <el-row v-for="(t,i) in form.constants" :key="i">
            <el-form-item label="公司类别：" prop="categoryId">
              <el-select v-model="form.constants[i].categoryId" placeholder="请选择公司类别">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="公司名称：" prop="companyName">
              <el-input v-model="form.constants[i].companyName" placeholder="请输入公司名称" />
            </el-form-item>
            <el-form-item label="公司地址：">
              <el-input v-model="form.constants[i].address" placeholder="请输入公司地址" />
            </el-form-item>
            <el-form-item label="联系人姓名：" prop="nameS">
              <el-input v-model="form.constants[i].nameS" placeholder="请输入联系人" />
            </el-form-item>
            <el-form-item label="联系人职位：">
              <el-input v-model="form.constants[i].positionLevel" placeholder="请输入联系人职位" />
            </el-form-item>
            <el-form-item label="联系人电话：" prop="telephone">
              <el-input v-model="form.constants[i].telephone" placeholder="请输入联系人电话" />
            </el-form-item>
          </el-row>
          <el-row class="proNext" v-if="false">
            <div class="left" @click="$store.commit('release/changeNum', 1)">
              上一步
            </div>
            <div class="right" @click="nextStepTwo">
              提交
            </div>
          </el-row>
          <el-row class="add">
            <span>点击添加多个联系人</span>
          </el-row>
          <div class="sub">
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
export default {
  data () {
    const cate = (rule, value, callback) => {
      if (value === null || value === '') {
        return callback(new Error('请选择公司类型'))
      }
    }
    return {
      dialogImageUrl: '',
      number: 0,
      right: 'right',
      errorText: '', // 错误信息展示
      dialogVisible: false,
      form: {
        project: {
          name: '', // 项目名字
          class: '', // 项目类别
          stage: '', // 项目阶段
          cycle: '', // 项目周期
          budget: '', // 项目预算
          area: '', // 项目地区
          address: '', // 项目地址
          introduce: '',
          pic: [] // 图片地址
        },
        constants: [{
          categoryId: null, // 公司类别
          companyName: null, // 公司名称
          nameS: null, // 联系人姓名
          positionLevel: null, // 联系人职位
          telephone: null, // 联系人电话
          address: null // 公司地址
        }] // 联系人数组
      },
      rules: {
        name: [
          { required: true, message: '请输入项目名称', trigger: 'blur' }
        ],
        class: [
          { required: true, message: '请选择项目类别', trigger: 'change' }
        ],
        stage: [
          { required: true, message: '请选择项目阶段', trigger: 'change' }
        ],
        area: [
          { required: true, message: '请选择工地地区', trigger: 'change' }
        ],
        address: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
        introduce: [
          { required: true, message: '请输入项目简介', trigger: 'blur' }
        ],
        companyName: [
          { required: true, validator: cate, trigger: 'blur' }
        ],
        categoryId: [
          { required: true, validator: cate, trigger: 'change' }
        ],
        nameS: [
          { required: true, validator: cate, trigger: 'blur' }
        ],
        telephone: [
          { required: true, validator: cate, trigger: 'blur' }
        ]
      },
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
    }
  },
  methods: {
    nextStep () {
      if (this.form.project.name === null || this.form.project.name === '') {
        this.errorText = '请输入项目名称！'
        this.dialogVisible = true
      } else if (this.form.project.class === null || this.form.project.class === '') {
        this.errorText = '请选择项目类别！'
        this.dialogVisible = true
      } else if (this.form.project.stage === null || this.form.project.stage === '') {
        this.errorText = '请选择项目阶段！'
        this.dialogVisible = true
      } else if (this.form.project.area === null || this.form.project.area === '') {
        this.errorText = '请选择工地地区！'
        this.dialogVisible = true
      } else if (this.form.project.address === null || this.form.project.address === '') {
        this.errorText = '请输入详细地址！'
        this.dialogVisible = true
      } else {
        this.$store.commit('release/changeNum', 1)
      }
    },
    nextStepTwo () {
      if (this.form.project.introduce === null || this.form.project.introduce === '') {
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
    },

    // 删除图片数组具体函数del
    delone (fileName) {
      const that = this
      const arr = that.form.project.pic
      const del = arr.indexOf(fileName)
      that.form.project.pic.splice(del, 1)
    },

    // 图片上传
    uploadPicture (response, file, fileList) {
      console.log(response.uri)
      this.form.project.pic.push(response.uri)
      this.dialogImageUrl = file.url
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
    }
  }
}
</script>

<style scoped lang="scss">

</style>
