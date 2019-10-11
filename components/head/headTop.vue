<template>
  <div class="headTopBox">
    <el-row class="headTop">
      <el-col :span="12">
        <div class="">
          <div class="changeCity">
            <i class="el-icon-location-outline" />
            <span>重庆</span>
            <nuxt-link to="">
              切换城市
            </nuxt-link>
          </div>
          <div class="loginBox">
            <nuxt-link to="/" class="active">
              立即登录
            </nuxt-link>
            <nuxt-link to="/">
              注册
            </nuxt-link>
            <nuxt-link to="/">
              个人中心
            </nuxt-link>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HeadTop'
}
</script>

<style scoped>

</style>
