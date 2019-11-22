<template>
  <el-row class="header">
    <head-top />
    <head-search />
    <head-menu />
  </el-row>
</template>

<script>
import headTop from './head/headTop'
import headSearch from './head/headSearch'
import headMenu from './head/menu'
export default {
  components: {
    headTop,
    headSearch,
    headMenu
  }
}
</script>

<style scoped>

</style>
