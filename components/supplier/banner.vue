<template>
  <el-col :span="14" class="leftMi">
    <el-carousel height="546px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">
          {{ item }}
        </h3>
      </el-carousel-item>
    </el-carousel>
  </el-col>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.leftMi{
  height: 546px;
  width: 749px;
  texta
  img{
    @include img;
  }
}
</style>
