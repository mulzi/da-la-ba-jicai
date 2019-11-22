<template>
  <el-row class="header">
    <head-top />
    <el-row class="myHeadSearchBox">
      <el-row>
        <el-col :span="10">
          <div class="myLogoBox">
            <nuxt-link to="/">
              <img alt="" src="@/assets/img/headLogo.png">
            </nuxt-link>
            <span>
              充值
            </span>
          </div>
        </el-col>
      </el-row>
      <el-row class="rightTIPS">
        <span>如何赚取积分？</span>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>

import headTop from './head/headTop'
export default {
  components: {
    headTop
  }
}
</script>

<style scoped>

</style>
