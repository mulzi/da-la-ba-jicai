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
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="招募地区：" prop="area">
            <el-cascader :options="options" v-model="form.area" clearable />
          </el-form-item>
          <el-form-item label="内容：" prop="content">
            <el-input type="textarea" v-model="form.content" placeholder="请输入招募内容，请输入30字以上" />
          </el-form-item>
          <el-row class="tips">
            请上传文件 <span>(文件限制在10m以内，支持word/excl等格式)</span>
          </el-row>
          <el-row class="upImg">
            <el-upload
              accept=".xls,.xlsx,.doc,.docx"
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
                  <i class="el-icon-plus" style="margin: auto;font-size: 3rem" />
                </span>
              </el-row>
            </el-upload>
          </el-row>
          <el-form-item label="报名截止时间：" prop="time">
            <el-date-picker
              v-model="form.time"
              type="date"
              placeholder="选择日期"
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
        if (Array.from(value).length < 30) {
          return callback(new Error('请输入30个字以上！'))
        } else {
          callback()
        }
      }, 1000)
    }
    return {
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
    onSub () {
      if (this.form.title === '') {
        this.errorText = '请输入招募！'
        this.dialogVisible = true
      } else if (this.form.class === '') {
        this.errorText = '请选择项目类别！'
        this.dialogVisible = true
      } else if (this.form.area === '') {
        this.errorText = '请选择项目地区！'
        this.dialogVisible = true
      } else if (this.form.content === '') {
        this.errorText = '请输入内容！'
        this.dialogVisible = true
      } else if (this.form.time === '') {
        this.errorText = '请选择报名截止时间！'
        this.dialogVisible = true
      } else if (this.form.companyName === '') {
        this.errorText = '请输入需求单位名称！'
        this.dialogVisible = true
      } else if (this.form.nameS === '') {
        this.errorText = '请输入联系人姓名！'
        this.dialogVisible = true
      } else if (this.form.positionLevel === '') {
        this.errorText = '请输入联系人职位！'
        this.dialogVisible = true
      } else if (this.form.phone === '') {
        this.errorText = '请输入联系人电话！'
        this.dialogVisible = true
      } else {
        this.$refs.formOne.validate((valid) => {
          if (!valid) {
            this.$message({
              message: '你填写的信息不完整哦！~~~',
              type: 'warning'
            })
            return
          }
          console.log(66)
          this.$refs.formOne.resetFields()
        })
      }
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
        message: '最多只能上传3份文件',
        type: 'error'
      })
    }
  }
}
</script>

<style lang="scss">
</style>
