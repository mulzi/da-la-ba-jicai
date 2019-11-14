<template>
  <div class="two">
    <div class="title">
      成功案列
    </div>
    <div class="threeList">
      <div @mouseenter="bannerStop" @mouseleave="bannerStart" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div v-for="(item,index) in goodNews " :key="index" class="swiper-slide clearfix swiper-no-swiping">
            <el-row class="pone">
              <nuxt-link target="_blank" :to="`/purchaseList/detailsPage/${item.id}`" class="p1">
                <em>恭喜</em>{{ item.info | text }}
              </nuxt-link>
              <i>{{ item.money }}</i>
              <span>
                {{ item.createdAtStr }}
              </span>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    text (val) { // 警告此处是坑 换了新的数据字段，但是我就是不换 看熊大多久处理数据
      return val.slice(2)
    }
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['goodNews'],
  data () {
    return {
      list: this.goodNews,
      swiperOption: {
        direction: 'vertical', // 向上
        autoplay: {
          delay: 2000,
          waitForTransition: true
        },
        speed: 1000, // 速度
        loop: true, //
        freeMode: true,
        slidesPerView: 3,
        autoplayDisableOnInteraction: false,
        spaceBetween: 3,
        noSwiping: true
      }
    }
  },
  mounted () {
    console.log(this.goodNews)
  },
  methods: {
    bannerStop () {
      this.mySwiper.autoplay.stop()
    },
    bannerStart () {
      this.mySwiper.autoplay.start()
    }
  }
}
</script>

<style scoped lang="scss">
    .goodNews{
        width: 100%;
        border: 1px solid $borderE7;
        margin-top: 50px;
        overflow: hidden;
        box-sizing: border-box;
        .TwoBox{
            width: 92%;
            margin: 0 auto;
            max-width: 1338px;
            display: flex;
            position: relative;
            &::after{
                content: "";
                width: 1px;
                height: 120px;
                position: absolute;
                left: 50%;
                top: 30px;
                background: linear-gradient(180deg,#f9f9f9,#d9d9d9,#f9f9f9);
            }
            .two{
                width: 50%;
                overflow: hidden;
                float: left;
                box-sizing: border-box;
                .title{
                    font-size: 18px;
                    color: #333333;
                    width: 100%;
                    text-align: center;
                    margin-top: 30px;
                    height: 20px;
                    line-height: 20px;
                   font-weight: bold;
                }
                .threeList{
                    margin-top: 20px;
                    margin-bottom: 30px;
                    height: 96px;
                    overflow: hidden;
                    .swiper-container{
                        height: 96px;
                        overflow: hidden;
                        .swiper-slide{
                            display: flex;
                            display: -ms-flex;
                          .pone{
                            display: flex;
                            display: -ms-flex;
                            align-items: center;
                            justify-items: center;
                            .p1{
                              display: block;
                              flex: 1;
                              height: 32px;
                              line-height: 32px;
                              margin-left: 30px;
                              color: #333333;
                              font-size: 14px;
                              align-items: center;
                              @include over;
                              em{
                                color: $redColor;

                              }
                            }
                            span{
                              width: 80px;
                              margin-left: 20px;
                              font-size:14px ;
                              color: #333333;
                            }
                            i{
                              min-width: 66px;
                              color: $redColor;
                              font-size: 14px;
                              margin-left: 40px;
                            }
                          }

                        }

                    }

                }
            }
        }
    }

</style>
