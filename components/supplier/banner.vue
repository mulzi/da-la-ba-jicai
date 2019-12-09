<template>
  <el-col :span="14" class="leftMi">
    <el-carousel height="700px">
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <img :src="item.pic" alt="">
      </el-carousel-item>
    </el-carousel>
  </el-col>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: [ 'banner' ],
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.leftMi{
  height: 700px;
  width: 700px;
  img{
    @include img;
  }
}
</style>
