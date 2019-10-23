<template>
  <div class="banner">
    <el-carousel :interval="5000" arrow="hover" :height="bannerHeight">
      <el-carousel-item v-for="item in banners" :key="item.picUrl">
        <nuxt-link :to="item.url">
          <img v-lazy="item.picUrl" alt="">
        </nuxt-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: [ 'banners' ],
  data () {
    return {
      bannerHeight: '505px'
    }
  },
  mounted () {
    const _w = document.documentElement.clientWidth || document.body.clientWidth
    this.bannerHeight = _w / 3.8 + 'px'
  }

}
</script>

<style scoped lang="scss">
 .banner{
   width: 100%;
   .el-carousel{
     .el-carousel__container{
       .el-carousel__arrow{
       }
       img{
         @include img;
       }
     }
   }
 }
</style>
