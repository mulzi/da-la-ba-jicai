<template>
  <el-row class="supplierBody">
    <el-row class="bodyBox">
      <el-row class="contBox marginBottom100">
        <el-row class="topList">
          <div :class="$store.state.release.number === i ? 'active' : ''" class="li" v-for="(t,i) in topList" :key="i" @click="changN(i)">
            {{ t }}
          </div>
        </el-row>
        <el-row class="bottom_con">
          <transition name="bounce">
            <projectInfo v-if="$store.state.release.number === 0"/>
          </transition>
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import projectInfo from '@/components/release/projectInfo'
export default {
  layout: 'main',
  components: {
    projectInfo
  },
  data () {
    return {
      topList: [
        '发布项目信息',
        '发布招采信息',
        '发布招募招标',
        '发布成功案例'
      ]
    }
  },
  methods: {
    changN (index) {
      this.$store.commit('release/changeNumber', index)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
