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
          <el-row class="bot_Li">
            <li><span>更新时间：</span> <em>2019-</em></li>
            <li><span>项目类别：</span> <em>2019-</em></li>
            <li><span>项目阶段：</span> <em>2019-</em></li>
            <li><span>建筑周期：</span> <em>2019-</em></li>
            <li><span>项目预算：</span> <em>2019-</em></li>
            <li><span>项目地址：</span> <em>2019-</em></li>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="projIntBox">
        <el-row class="topTitChange">
          <li class="active" @click="changeList">
            <span>
              项目简介
            </span>

          </li>
          <li @click="changeListTwo">
            联系方式
          </li>
          <li @click="changeListThree">
            添加联系人
          </li>
        </el-row>
        <el-row class="bo_list">
          <transition name="bounce">
            <project-int  v-if="this.$store.state.projectInfo.projectOne"/>
          </transition>
          <transition name="bounce">
            <el-row class="two"  v-if="this.$store.state.projectInfo.projectTwo">
              ss
            </el-row>
          </transition>

        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
// import { HomeService } from '@/services/home'
import projectInt from '@/components/projectInfo/projectInt'
export default {
  layout: 'main',
  components: { projectInt },
  data () {
    return {
      date: ''
    }
  },
  methods: {
    changeList () {
      this.$store.commit('projectInfo/changeOne')
    },
    changeListTwo () {
      this.$store.commit('projectInfo/changeTwo')
    },
    changeListThree () {
      this.$store.commit('projectInfo/changeThree')
    }
  }

}
</script>

<style scoped lang="scss">

</style>
