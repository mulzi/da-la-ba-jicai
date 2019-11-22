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
        <el-row>
          <el-row class="tit">
            <el-row class="name">
              招采信息
            </el-row>
            <el-row class="desc">
              <em>ISSUING
              </em>
              <span>
                PURCHASING
              </span>
              <span>
                INFORMATION
              </span>
            </el-row>
            <el-row class="line">
              <span />
            </el-row>
          </el-row>
          <el-form-item label="项目类别：" prop="class">
            <el-select v-model="form.class" placeholder="请选择项目类别">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="招采材料：" prop="material">
            <el-input v-model="form.material" placeholder="请输入招采材料" />
          </el-form-item>
          <el-form-item label="材料要求：">
            <el-input v-model="form.claim" placeholder="请输入材料要求" />
          </el-form-item>
          <el-row class="tips">
            请上传产品图片 <span>（图片限制在2M以内，最多上传3张，支持PNG\PG\JPEG\GIF格式）</span>
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
          </el-row>
          <el-form-item label="工地地区：" prop="area">
            <el-cascader :options="options" v-model="form.area" clearable />
          </el-form-item>
          <el-form-item label="详细地址：">
            <el-input v-model="form.address" placeholder="请输入详细地址" />
          </el-form-item>
          <el-form-item label="公司名称：" prop="companyName">
            <el-input v-model="form.companyName" placeholder="请输入公司名称" />
          </el-form-item>
          <el-form-item label="联系人姓名：" prop="nameS">
            <el-input v-model="form.nameS" placeholder="请输入联系人" />
          </el-form-item>
          <el-form-item label="联系人职位：">
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
    return {
      dialogImageUrl: '',
      right: 'right',
      errorText: '', // 错误信息展示
      dialogVisible: false,
      form: {
        class: '', // 项目类别
        nameS: '', // 联系人姓名
        material: '', // 材料
        claim: '', // 材料要求
        pic: [], // 产品图片
        area: '', // 工地地区
        address: '', // 详细地址
        companyName: '', // 公司名称
        positionLevel: '', // 联系人职位
        phone: '' // 联系人电话
      },
      rules: {
        phone: [{ required: true, trigger: 'blur', validator: checkPhone }],
        nameS: [
          { required: true, message: '请输入联系人名称', trigger: 'blur' }
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
      if (this.form.class === '') {
        this.errorText = '请选择项目类别！'
        this.dialogVisible = true
      } else if (this.form.material === '') {
        this.errorText = '请输入招采材料！'
        this.dialogVisible = true
      } else if (this.form.area === '') {
        this.errorText = '请选择工地地区！'
        this.dialogVisible = true
      } else if (this.form.nameS === '') {
        this.errorText = '请输入联系人姓名！'
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
    handleRemove (file, fileList) {
      const that = this
      const fileName = file.response.uri
      that.delone(fileName)
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
