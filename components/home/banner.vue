<template>
  <div class="banner">
    <el-carousel :interval="5000" arrow="always" :height="bannerHeight">
      <el-carousel-item v-for="item in banners" :key="item.picUrl">
        <nuxt-link :to="item.url">
          <img :src="item.picUrl" alt="">
        </nuxt-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
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
        margin: 0 auto;
        img{
         display: block;
          height: 100%;
          width: 100%;
        }
    }
</style>
