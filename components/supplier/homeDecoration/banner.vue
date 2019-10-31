<template>
  <el-col class="leftMi">
    <el-carousel height="506px">
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
        width: 684px;
        height: 506px;
        img{
            @include img;
        }
    }
</style>
