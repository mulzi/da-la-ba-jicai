<template>
  <div class="login-container">
    <div class="login-form-container">
      <div class="login-welcome">
        <span class="welcome">欢迎光临</span> <span class="btn-register fRight">没有账号，<nuxt-link to="/register">立即注册</nuxt-link></span>
      </div>
      <el-row>
        <el-col class="login-form-col" :span="12">
          <div class="login-from">
            <el-form ref="loginForm" :model="form">
              <el-form-item prop="">
                <el-input v-model="form.account" placeholder="账号">
                  <i slot="prefix" class="el-icon-user" />
                </el-input>
              </el-form-item>
              <el-form-item prop="">
                <el-input v-model="form.password" type="password" placeholder="密码" show-password>
                  <i slot="prefix" class="el-icon-lock" />
                </el-input>
              </el-form-item>
            </el-form>
            <el-button @click="onLogin">
              登录
            </el-button>
            <el-col :span="24" class="mt-3">
              <el-row type="flex" justify="space-between" style="font-size: 16px;color: #9e9e9e!important;margin-top: 10px;text-align: center!important;">
                <el-col :span="10">
                  <a @click="$router.push('/password')">忘记密码</a>
                </el-col>
                <!--<el-col :span="10">无法获取验证码？</el-col>-->
                <el-col :span="4">
                  |
                </el-col>
                <el-col :span="10">
                  <a @click="$router.push('/register')">免费注册</a>
                </el-col>
              </el-row>
            </el-col>
          </div>
        </el-col>
        <el-col class="login-img-col" :span="12">
          <div class="login-img fRight">
            <img src="../../assets/img/login/login.png" alt="login-img">
          </div>
        </el-col>
      </el-row>
    </div>

    <el-dialog title="验证码" :visible.sync="dialogVisible" :close-on-click-modal="false" :close-on-press-escape="false" width="500px">
      <span class="flex_center mt-5" style="font-size:17px;">尊敬的会员用户，为了保护您的账户安全，请输入验证码验证</span>
      <div v-if="error">
        <span v-if="butStyl" class="flex_start font_kai" style="font-size:17px;margin-top:50px;">短信验证码已发送至<span class="spanStyl">{{ Verification.message }}</span></span>
        <span v-else class="flex_start font_kai" style="font-size:17px;margin-top:50px;">发送验证码至<span class="spanStyl">{{ Verification.message }}</span></span>
      </div>
      <span v-else class="flex_start font_kai" style="font-size:17px;margin-top:50px;color:#da251d;">验证码输入错误，请重新输入！</span>
      <el-row style="margin-top: 40px;">
        <el-col :span="14">
          <el-input v-model="VerificationInput" placeholder="请输入内容" />
        </el-col>
        <el-col :span="10">
          <div v-if="butStyl" class="butStyl align_center">
            重新获取({{ countDown1 }}s)
          </div>
          <div v-else class="butStyl align_center" @click="onVerification">
            重新获取验证码
          </div>
        </el-col>
      </el-row>
      <div @click="onDetermine">
        <div class="btn align_center">
          确认
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import { Auth, CLIENT_ID } from '@/services/auth'
import exception from '@/utils/exception'

export default {
  layout: 'main',
  components: {
  },
  data () {
    return {
      show: false,
      form: {
        type: 'user',
        authCode: '',
        phone: '',
        password: '',
        account: '',
        remember: false
      },
      loading: false,
      countDown: 0,
      countDown1: 0,
      error: true,
      authCodeMessage: '发送验证码',
      dialogVisible: false,
      butStyl: true,
      VerificationInput: '',
      Verification: {
        message: ''
      },
      confirmShow: true
    }
  },
  created () {
    const vm = this
    vm.auth = new Auth({ $axios: vm.$axios, app: { $cookies: vm.$cookies } })
  },
  methods: {
    onLogin () {
      const vm = this
      const params = {
        grant_type: 'password-valid',
        username: vm.form.account,
        password: Base64.encode(vm.form.password),
        client_id: CLIENT_ID
      }
      const auth = vm.auth
      auth.login(params).then((res) => {
        const token = auth.setUserToken(res.data)
        auth.fetchUserInfo({ accessToken: token.accessToken }).then((userRes) => {
          auth.setUserInfo(userRes.data)
          vm.$router.go(-1)
        }).catch((err) => {
          vm.$message({
            message: exception.formatError(err),
            type: 'error'
          })
        })
      }).catch((e) => {
        if (e.response.data.code === 11013) {
          vm.Verification = e.response.data
          vm.dialogVisible = true
          vm.butStyl = true
          this.time()
        } else {
          vm.$message({
            message: exception.formatError(e),
            type: 'error'
          })
        }
      })
    },
    time () {
      const vm = this
      vm.countDown1 = 59
      const interval = setInterval(function () {
        vm.countDown1--
        if (vm.countDown1 === 0) {
          vm.butStyl = false
          vm.confirmShow = true
          clearInterval(interval)
        }
      }, 1000)
      setTimeout(function () {
        clearInterval(interval)
      }, 59000)
    },
    checkAuthCode (value) {
      if (value.length === 4) {
        alert(value)
      }
    },
    onVerification () {
      const vm = this
      const auth = vm.auth
      vm.butStyl = true
      vm.error = true
      vm.time()
      auth.sendValidCode({
        mobile: vm.form.phone
      }).then((res) => {}).catch((e) => {
        vm.$message({
          message: exception.formatError(e),
          type: 'error'
        })
      })
    },

    onDetermine () {
      const vm = this
      const auth = vm.auth
      if (!vm.VerificationInput || vm.VerificationInput.length !== 4) {
        return
      }
      if (vm.confirmShow === false) {
        return
      }
      vm.confirmShow = false
      const tempParams = {
        grant_type: 'password-valid',
        username: vm.form.account,
        valid_code: vm.VerificationInput,
        password: Base64.encode(vm.form.password),
        client_id: CLIENT_ID
      }
      auth.login(tempParams).then((res) => {
        vm.confirmShow = true
        const token = auth.setUserToken(res.data)
        auth.fetchUserInfo({ accessToken: token.accessToken }).then((userRes) => {
          auth.setUserInfo(userRes.data)
          setTimeout(() => {
            vm.show = false
            vm.$router.push('/')
          }, 1300)
        }).catch((err) => {
          console.log(err)
        })
      }).catch((err) => {
        console.log(err)
        vm.confirmShow = true
        vm.error = false
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
          width: 267px;
          display: block;
          margin: 140px auto 0;
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
          padding-bottom: 50px;
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

    .spanStyl {
      color: #da251d;
    }

    .butStyl {
      margin-left: 20px;
      line-height: 40px;
      height: 40px;
      border: 2px solid #da251d;
      border-radius: 5px;
      font-size: 18px;
      padding: 0 5px 0 5px;
      color: #da251d;
      text-align: center;
    }

    .btn {
      height: 50px;
      line-height: 50px;
      background: #da251d;
      padding: 0 190px 0 190px;
      color: #fff;
      font-size: 21px;
      border-radius: 5px;
      margin-bottom: 50px;
      margin-top: 50px;
    }
  }
</style>
