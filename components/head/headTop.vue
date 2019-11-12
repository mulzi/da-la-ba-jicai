<template>
  <div class="headTopBox">
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
            <nuxt-link v-if="this.$store.state.home.isLogin" to="" class="active" @click="delCookies">
              退出登录
            </nuxt-link>
            <nuxt-link v-if="!this.$store.state.home.isLogin" to="/">
              注册
            </nuxt-link>
            <nuxt-link to="/">
              个人中心
            </nuxt-link>
          </div>
        </div>
        <div class="rightShops">
          <nuxt-link to="">
            首页
          </nuxt-link>
          <nuxt-link to="">
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
  </div>
</template>

<script>
// import { Auth } from '@/services/auth'

export default {
  name: 'HeadTop',
  data () {
    return {
      isLogin: false
    }
  },
  mounted () {
    // const vm = this
    // const auth = new Auth({ $axios: vm.$axios, app: { $cookies: vm.$cookies } })
    // vm.isLogin = auth.isLogin()
    this.getCookies()
  },
  methods: {
    delCookies (name = 'user-token', nameTwo = 'user-info') {
      document.cookie = name + '=;expires=' + (new Date(0)).toGMTString()
      document.cookie = nameTwo + '=;expires=' + (new Date(0)).toGMTString()
      window.location.reload()
    },
    getCookies () {
      const strCookie = document.cookie
      const arrCookie = strCookie.split('; ') // 将多cookie切割为多个名/值对
      for (let i = 0; i < arrCookie.length; i++) { // 遍历cookie数组，处理每个cookie对
        const arr = arrCookie[i].split('=')
        console.log(...arr)
      }
      console.log(arrCookie)
    }
  }
}
</script>

<style scoped>

</style>
