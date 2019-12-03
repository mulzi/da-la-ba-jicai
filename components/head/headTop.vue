<template>
  <el-row class="headTopBox">
    <el-row class="headTop">
      <div class="widthMx">
        <div class="leftCity">
          <div class="changeCity">
            <i class="el-icon-location-outline" />
            <span>重庆</span>
            <nuxt-link to="">
              切换城市
            </nuxt-link>
          </div>
          <div class="loginBox">
            <nuxt-link v-if="!this.$store.state.home.isLogin" to="/login" class="active">
              立即登录
            </nuxt-link>
            <span v-if="this.$store.state.home.isLogin" class="active" @click="delCookies">
              退出登录
            </span>
            <nuxt-link v-if="!this.$store.state.home.isLogin" to="/">
              注册
            </nuxt-link>
            <nuxt-link to="/my/basicInfo">
              个人中心
            </nuxt-link>
          </div>
        </div>
        <div class="rightShops">
          <nuxt-link to="/">
            首页
          </nuxt-link>
          <nuxt-link to="/my/collection">
            我的收藏
          </nuxt-link>
          <nuxt-link to="">
            商家登录
          </nuxt-link>
          <nuxt-link to="">
            联系客服
          </nuxt-link>
          <nuxt-link to="">
            商家入驻
          </nuxt-link>
        </div>
      </div>
    </el-row>
  </el-row>
</template>

<script>
import { Auth } from '@/services/auth'

export default {
  name: 'HeadTop',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    delCookies () {
      const auth = new Auth({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      auth.delCookies()
      this.$store.dispatch('home/CHANGELOGIN', auth.isLogin())
      console.log('退出登录成功')
    }
  }
}
</script>

<style scoped>

</style>
