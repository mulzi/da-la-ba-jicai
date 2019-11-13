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
            <span v-if="this.$store.state.home.isLogin" to="" class="active" @click="delCookies">
              退出登录
            </span>
            <nuxt-link v-if="!this.$store.state.home.isLogin" to="/">
              注册
            </nuxt-link>
            <nuxt-link to="/">
              个人中心
            </nuxt-link>
          </div>
        </div>
        <div class="rightShops">
          <nuxt-link to="/">
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
import { Auth } from '@/services/auth'

export default {
  name: 'HeadTop',
  data () {
    return {
    }
  },
  mounted () {
    // const vm = this
    // const auth = new Auth({ $axios: vm.$axios, app: { $cookies: vm.$cookies } })
    // vm.isLogin = auth.isLogin()
  },
  methods: {
    delCookies (name = 'user-token', nameTwo = 'user-info') {
      const auth = new Auth({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      document.cookie = name + '=;expires=' + (new Date(0)).toGMTString()
      document.cookie = nameTwo + '=;expires=' + (new Date(0)).toGMTString()
      this.$store.commit('home/changeLogin', auth.isLogin())
      console.log('退出登录成功')
    }
  }
}
</script>

<style scoped>

</style>
