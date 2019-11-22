<template>
  <el-row class="header">
    <head-top />
    <el-row class="myHeadSearchBox">
      <el-row>
        <el-col :span="7">
          <div class="logoBox">
            <nuxt-link to="/">
              <img alt="" src="@/assets/img/headLogo.png">
            </nuxt-link>
          </div>
        </el-col>
        <el-col :span="11">
          <div class="headSearch" />
        </el-col>
        <el-col :span="6">
          <div class="rightPhone">
            <div class="img">
              <div class="rightNumber">
                <p>服务热线</p>
                <p>400 023 5655</p>
              </div>
              <div class="leftIphoneImg">
                <img src="@/assets/img/tel.png" alt="">
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row class="titleName">
        <span>个人中心</span>
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
