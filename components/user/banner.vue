<template>
  <el-row class="imgBox">
    <div class="img">
      <img :src="imgUrl" alt="">
    </div>
    <div class="bottomI">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div v-for="(t,i) in list" :key="i" class="swiper-slide" @click="changeImgUrl(t)">
            <img :src="t">
          </div>
        </div>
      </div>
      <div class="el-icon-arrow-right right" />
      <div class="el-icon-arrow-left left" />
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'Banner',
  // eslint-disable-next-line vue/require-prop-types
  props: [ 'list' ],
  data () {
    return {
      imgUrl: '',
      swiperOption: {
        // eslint-disable-next-line no-undef
        loop: false,
        spaceBetween: 50,
        slidesPerView: 4,
        loopedSlides: 5, // looped slides should be the same
        watchSlidesVisibility: true, /* 避免出现bug */
        navigation: {
          nextEl: '.right',
          prevEl: '.left'
        }
      }
    }
  },
  computed: {
  },
  mounted () {
    if (this.list) {
      this.imgUrl = this.list[0]
    }
  },
  methods: {
    callback () {
      console.log(1)
    },
    changeImgUrl (img) {
      this.imgUrl = img
    }
  }
}
</script>

<style scoped lang="scss">
  .imgBox{
    width: 100%;
    height: 606px;
    .bottomI{
      position: relative;
      .left{
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        background: rgba(0,0,0,.4);
        left: 10px;
        color: #ffffff;
        font-size: 20px;
        position: absolute;
        top: 37px;
        cursor: pointer;
        outline: none;
      }
      .right{
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        background: rgba(0,0,0,.4);
        right: 10px;
        color: #ffffff;
        font-size: 20px;
        position: absolute;
        top: 37px;
        cursor: pointer;
        outline: none;
      }

    }
    .img{
      width: 100%;
      height: 100%;
      img{
        @include img;
      }
    }

  }
    .swiper-container{
        width: 820px;
        height: 105px;
        margin: 30px auto;

      .swiper-wrapper{
        width: 820px;
        height: 100%;
        margin: 0 auto;
        .swiper-slide{
          width: 100%;
          height: 100%;
          img{
            @include img;
            cursor: pointer;
          }
        }
    }
    }
</style>
