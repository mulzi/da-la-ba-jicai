<template>
  <el-row class="dlb_indexBody">
    <index-head />

    <nuxt />

    <index-foot />
  </el-row>
</template>

<script>

import indexHead from '@/components/indexHead'
import indexFoot from '@/components/indexFoot'

export default {
  components: {
    indexHead,
    indexFoot
  }

}
</script>

<style>

</style>
