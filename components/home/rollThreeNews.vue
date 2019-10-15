<template>
  <div class="one">
    <div class="title">
      入库喜讯
    </div>
    <div class="threeList">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div v-for="(item,index) in goodnews.successCases " :key="index" class="swiper-slide clearfix swiper-no-swiping">
            <a class="p1">
              恭喜 <em>重庆萨达所大所大所多有限公司</em>通过大喇叭采集与 <em>重庆湿哒哒所多公司</em>达成入库协议
            </a>
            <span>
              {{ item.createdAtStr }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        direction: 'vertical', // 向上
        autoplay: {
          delay: 1000
        },
        speed: 1000, // 速度
        loop: true, // 自动轮播
        freeMode: true,
        slidesPerView: 3,
        autoplayDisableOnInteraction: false,
        spaceBetween: 3,
        noSwiping: true
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
