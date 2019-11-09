<template>
  <div class="login-container">
    <div class="login-form-container">
      <div class="login-welcome">
        <span class="welcome">欢迎光临</span> <span class="btn-register fRight">没有账号，<a>立即注册</a></span>
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
          </div>
        </el-col>
        <el-col class="login-img-col" :span="12">
          <div class="login-img fRight">
            <img src="../../assets/img/login/login.png" alt="login-img">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import { Auth, CLIENT_ID } from '@/services/auth'

export default {
  layout: 'main',
  components: {
  },
  data () {
    return {
      form: {
        account: '',
        password: ''
      }

    }
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
      const auth = new Auth({ $axios: vm.$axios, app: { $cookies: vm.$cookies } })
      auth.login(params).then((res) => {
        auth.setUserToken(res.data)
      }).catch((err) => {
        console.log(err)
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
  }
</style>
