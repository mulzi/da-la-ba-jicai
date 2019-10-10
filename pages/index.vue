<template>
  <div>
    <div class="dlb-swiper">
      <div v-swiper:bannerSwiper="swiperOption">
        <div class="swiper-wrapper">
          <div v-for="banner in home.banners" :key="'banner-' + banner.id" class="swiper-slide">
            <img :src="banner.picUrl">
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets" />
      </div>
    </div>
    <div>{{home}}</div>
  </div>
</template>

<script>
import { HomeService } from '@/services/home'

export default {
  layout: 'main',
  middleware: 'authenticated',
  data () {
    return {
      home: {},
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        on: {
          slideChange () {
            console.log('onSlideChangeEnd', this)
          },
          tap () {
            console.log('onTap', this)
          }
        }
      }
    }
  },
  asyncData (context) {
    const homeService = new HomeService(context)
    return homeService.home().then((res) => {
      return { home: res.data || {} }
    })
  }
}
</script>

<style lang="scss" scoped>
  .dlb-container {
    .dlb-content-container {
      .dlb-swiper {
        width: 70rem;
        height: 25.25rem;
        margin: 0 auto;
      }
    }
  }
</style>
