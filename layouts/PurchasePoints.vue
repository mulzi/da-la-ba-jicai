<template>
  <el-row class="dlb_indexBody">
    <my-head />
    <nuxt />

    <index-foot />
  </el-row>
</template>

<script>
import myHead from '@/components/pointsHead'
import indexFoot from '@/components/indexFoot'
export default {
  components: {
    indexFoot,
    myHead
  }
}
</script>

<style scoped lang="scss">

</style>
