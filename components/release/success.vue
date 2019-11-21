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
              成功案列
            </el-row>
            <el-row class="desc">
              <em>ISSUING
              </em>
              <span>
                SUCCESSFUL
              </span>
              <span>
                CASES
              </span>
            </el-row>
            <el-row class="line">
              <span />
            </el-row>
          </el-row>
          <el-form-item label="供应方：" prop="companyNameT">
          <el-input v-model="form.companyNameT" placeholder="请输入公司名称" />
         </el-form-item>
          <el-form-item label="需求方：" prop="companyName">
            <el-input v-model="form.companyName" placeholder="请输入公司名称" />
          </el-form-item>
          <el-form-item label="项目名称：" prop="title">
            <el-input v-model="form.title" placeholder="请输入项目名称" />
          </el-form-item>
          <el-form-item label="金额：" prop="money">
            <el-input v-model="form.money" placeholder="请输入金额" />
          </el-form-item>
          <el-form-item label="合作过程：" prop="content">
            <el-input type="textarea" v-model="form.content" placeholder="请输入合作过程描述" />
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
    return {
      dialogImageUrl: '',
      right: 'right',
      errorText: '', // 错误信息展示
      dialogVisible: false,
      form: {
        title: '', // 项目名称
        companyNameT: '', // 供应方公司名称
        money: '', //
        content: '', // 招募内容
        companyName: '' // 需求公司名称

      },
      rules: {
        // title: [
        //   { required: true, message: '请输入项目名称！', trigger: 'blur' }
        // ],
        companyName: [
          { required: true, message: '请输入需求公司名称！', trigger: 'blur' }
        ],
        companyNameT: [
          { required: true, message: '请输入供应公司名称！', trigger: 'blur' }
        ],
        money: [
          { required: true, message: '请输入金额！', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入合作过程！', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSub () {
      if (this.form.companyNameT === '') {
        this.errorText = '请输入供应公司名称！'
        this.dialogVisible = true
      } else if (this.form.companyName === '') {
        this.errorText = '请输入需求公司名称！'
        this.dialogVisible = true
      } else if (this.form.money === '') {
        this.errorText = '请输入金额！'
        this.dialogVisible = true
      } else if (this.form.content === '') {
        this.errorText = '请输入合成过程！'
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
    }
  }
}
</script>

<style lang="scss">
</style>
