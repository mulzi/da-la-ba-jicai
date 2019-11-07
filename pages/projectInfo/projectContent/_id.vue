<template>
  <div class="supplierBody">
    <div class="bodyBox">
      <el-row class="HeaderBreadcrumb">
        <el-col :span="24">
          <div class="breadcrumb">
            <span class="iconfont">&#xe635;</span>
            <span style="margin-right: 0;color: #8e8e8e">当前位置：</span>
            <nuxt-link to="/">
              首页
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <nuxt-link to="/projectInfo">
              项目信息
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>项目详情</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="topNameBox">
        <el-row class="contentBox">
            <el-row class="topTit">
              <span>深圳市雅鸟内装饰设计有限公司</span>
            </el-row>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
// import { HomeService } from '@/services/home'

export default {
  layout: 'main',
  components: { },
  data () {
    return {
      date: ''
    }
  }

}
</script>

<style scoped lang="scss">

</style>
