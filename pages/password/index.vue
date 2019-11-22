<template>
  <el-row class="login-container ">
    <div class="login-form-container">
      <div class="login-welcome">
        <span class="welcome">忘记密码</span> <span class="btn-register fRight">已有账号，<nuxt-link to="/login">立即登录</nuxt-link></span>
      </div>
      <el-row>
        <el-col class="login-form-col" :span="13" :offset="5">
          <div class="login-from">
            <el-form ref="form" label-position="right" :rules="rules" label-width="120px" :model="form">
              <el-form-item label="手机号码：" prop="mobile">
                <el-input type="number" v-model="form.mobile" placeholder="请输入手机号码">
                  <span slot="append" @click="fetchAuthCode()">{{ authCodeMessage }}</span>
                </el-input>
              </el-form-item>
              <el-form-item label="验证码：" prop="validCode">
                <el-input type="number" v-model="form.validCode" placeholder="请输入验证码">
                  <i slot="prefix" class="el-icon-coin" />
                </el-input>
              </el-form-item>
              <el-form-item label="新密码：" prop="password">
                <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password>
                  <i slot="prefix" class="el-icon-lock" />
                </el-input>
              </el-form-item>
              <el-form-item label="确认新密码：" prop="repeatPwd">
                <el-input v-model="form.repeatPwd" type="password" placeholder="请输入密码" show-password>
                  <i slot="prefix" class="el-icon-lock" />
                </el-input>
              </el-form-item>
            </el-form>
            <el-button @click="updatePwd" style="margin-top: 20px; margin-bottom: 20px;">
              立即注册
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import { Base64 } from 'js-base64'
import { Auth } from '@/services/auth'
import exception from '@/utils/exception'

export default {
  layout: 'main',
  components: {
  },
  data () {
    return {
      form: {
        mobile: '',
        validCode: '',
        password: '',
        repeatPwd: ''
      },
      countDown: 0,
      isRead: false,
      authCodeMessage: '发送验证码',
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        validCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { required: true, min: 6, message: '密码必须大于6位', trigger: 'blur' }
        ],
        repeatPwd: [
          { required: true, message: '请输入重复新密码', trigger: 'blur' },
          { required: true, min: 6, message: '密码必须大于6位', trigger: 'blur' },
          { validator: this.checkRepeatPwd, trigger: 'blur' }
        ]
      }

    }
  },
  created () {
    const vm = this
    vm.auth = new Auth({ $axios: vm.$axios, app: { $cookies: vm.$cookies } })
  },
  methods: {
    checkRepeatPwd (rule, value, callback) {
      const vm = this
      if (value === vm.form.password) {
        return callback()
      }
      return callback(new Error('输入的新密码与重复新密码不相同'))
    },
    updatePwd () {
      const vm = this
      const auth = vm.auth
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false
        }
        const params = {
          mobile: vm.form.mobile,
          password: Base64.encode(vm.form.password),
          validCode: vm.form.validCode
        }
        auth.findBackPassword(params).then((res) => {
          vm.$message({
            message: '修改密码成功',
            type: 'success'
          })
          vm.$router.push('/login')
        }).catch((err) => {
          vm.$message({
            message: exception.formatError(err),
            type: 'error'
          })
        })
      })
    },
    fetchAuthCode () {
      const vm = this
      if (!vm.form.mobile || (vm.form.mobile && vm.form.mobile.length !== 11)) {
        vm.$message({
          message: '请输入正确的手机号',
          type: 'error'
        })
        return
      }
      if (vm.countDown > 0) {
        return
      }

      vm.auth.sendValidCode({ mobile: vm.form.mobile }).then((res) => {
        if (vm.countDown > 0) {
          return
        }
        vm.countDown = 59
        vm.$message({
          message: '验证码已发送，请注意查收',
          type: 'info'
        })
        const interval = setInterval(function () {
          vm.countDown--
          vm.authCodeMessage = `重新发送(${vm.countDown})`

          if (vm.countDown === 0) {
            clearInterval(interval)
            vm.authCodeMessage = '发送验证码'
          }
        }, 1000)
      }).catch((e) => {
        vm.$message({
          message: exception.formatError(e),
          type: 'error'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
    width: 100%;
    background: #f0f3ef;
    overflow: hidden;
    .login-form-container{
      width: 75%;
      max-width: 1400px;
      margin: 50px auto 43px;
      overflow: hidden;
      background: #ffffff;
      .login-welcome {
        height: 94px;
        padding-left: 27px;
        padding-right: 29px;
        border-bottom: solid 1px #E2E2E2 ;
        span.welcome {
          font-size:20px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:#555555FF;
          display: inline-block;
          margin-top: 60px;
        }
        span.btn-register {
          font-size:14px;
          font-family:SimSun;
          font-weight:400;
          color:#737373FF;
          display: inline-block;
          margin-top: 68px;
          margin-bottom: 12px;
          a {
            color: #DA251DFF;
          }
        }
      }
      .login-form-col {
        .login-from {
          /*width: 267px;*/
          display: block;
          margin: 20px auto 0;
          .el-button {
            width: 100%;
            height: 48px;
            background-color: #DA251D;
            color: #FFFFFF;
            font-size: 18px;
            font-family:Microsoft YaHei;
            font-weight:400;
          }
        }
        .el-form-item {
          .el-form-item__content {
            margin: 0 auto;
            text-align: center;
          }
        }
      }
      .login-img-col {
        margin-top: 70px;
        .login-img {
          width: 584px;
          height: 465px;
          margin-right: 23px;
          margin-bottom: 242px;
        }
      }
    }
  }
</style>
