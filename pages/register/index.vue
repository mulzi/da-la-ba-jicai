<template>
  <div class="login-container" v-loading="loading">
    <div class="login-form-container">
      <div class="login-welcome">
        <span class="welcome">用户注册</span> <span class="btn-register fRight">已有账号，<nuxt-link to="/login">立即登录</nuxt-link></span>
      </div>
      <el-row>
        <el-col class="login-form-col" :span="13" :offset="5">
          <div class="login-from">
            <el-form ref="form" label-position="right" :rules="rules" label-width="100px" :model="form">
              <el-form-item label="账号：" prop="account">
                <el-input v-model="form.account" placeholder="请输入手机号作为账号">
                  <i slot="prefix" class="el-icon-user" />
                </el-input>
              </el-form-item>
              <el-form-item label="密码：" prop="password">
                <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password>
                  <i slot="prefix" class="el-icon-lock" />
                </el-input>
              </el-form-item>
              <el-form-item label="昵称：">
                <el-input v-model="form.name" placeholder="请输入昵称">
                  <i slot="prefix" class="el-icon-user" />
                </el-input>
              </el-form-item>
              <el-form-item label="真实姓名：" prop="realName">
                <el-input v-model="form.realName" placeholder="请输入真实姓名">
                  <i slot="prefix" class="el-icon-user" />
                </el-input>
              </el-form-item>
              <el-form-item label="性别：" prop="sex">
                <el-radio-group v-model="form.sex">
                  <el-radio label="1">
                    男
                  </el-radio>
                  <el-radio label="2">
                    女
                  </el-radio>
                </el-radio-group>
              </el-form-item>
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
              <el-form-item label="公司名称：">
                <el-input v-model="form.companyName" placeholder="请输入公司名称">
                  <i slot="prefix" class="el-icon-office-building" />
                </el-input>
              </el-form-item>
              <el-form-item label="公司地址：">
                <el-input v-model="form.companyAddress" placeholder="请输入公司地址">
                  <i slot="prefix" class="el-icon-coordinate" />
                </el-input>
              </el-form-item>
            </el-form>
            <el-checkbox v-model="isRead" name="isRead" @change="(value) => this.isRead = value">
              <div style="font-size: 14px">
                我已阅读并同意 <a href="#"><strong class="primary--text">《重庆大喇叭平台服务协议》</strong></a>
              </div>
            </el-checkbox>
            <el-button @click="registerUser" style="margin-top: 20px; margin-bottom: 20px;">
              立即注册
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
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
        account: '',
        password: '',
        sex: '1'
      },
      loading: false,
      countDown: 0,
      remember: false,
      isRead: false,
      authCodeMessage: '发送验证码',
      rules: {
        account: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        realName: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        validCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }

    }
  },
  created () {
    const vm = this
    vm.auth = new Auth({ $axios: vm.$axios, app: { $cookies: vm.$cookies } })
    if (vm.$store.state.home.isLogin) {
      vm.loading = true
      setTimeout(() => {
        vm.loading = false
      }, 1000)
    }
  },
  methods: {
    registerUser () {
      const vm = this
      if (!vm.isRead) {
        vm.$message({
          message: '请阅读并同意《重庆大喇叭平台服务协议》',
          type: 'error'
        })
        return
      }
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false
        }
        const tempParams = {
          validCode: vm.form.validCode,
          mobile: vm.form.mobile,
          account: vm.form.account,
          name: vm.form.name,
          realName: vm.form.realName,
          sex: vm.form.sex,
          companyName: vm.form.companyName,
          companyAddress: vm.form.companyAddress,
          password: Base64.encode(vm.form.password)
        }
        vm.auth.register(tempParams).then((res) => {
          vm.$message({
            message: '注册成功',
            type: 'success'
          })
          vm.$router.push('/login')
        }).catch((e) => {
          vm.$message({
            message: exception.formatError(e),
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
