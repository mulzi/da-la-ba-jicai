<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(t,i) in banners" :key="i" class="swiper-slide">
        <img :src="t">
      </div>
    </div>
    <div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      banners: ['https://dalabajicai-prod.oss-cn-chengdu.aliyuncs.com/files/dalaba/file/A406B7B083E84406A61DE573A4499367.png',
        'https://dalabajicai-prod.oss-cn-chengdu.aliyuncs.com/files/dalaba/file/A38F2BA788F944A6B1FE391D0895BBBC.png'
      ],
      swiperOption: {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        loopedSlides: 5, // looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        thumbs: {
          // swiper:    // galleryThumbs
        }
      }
    }
  },
  mounted () {

  },
  methods: {
    callback () {
      console.log(1)
    }
  }
}
</script>

<style scoped lang="scss">
    .swiper-container{
        width: 910px;
        height: 606px;
      .swiper-wrapper{
        width: 100%;
        height: 100%;
        .swiper-slide{
          width: 100%;
          height: 100%;
          img{
            @include img;
          }
        }
    }
    }
</style>
