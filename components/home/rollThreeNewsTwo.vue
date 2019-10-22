<template>
  <div class="two">
    <div class="title">
      成功案列
    </div>
    <div class="threeList">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div v-for="(item,index) in goodnews " :key="index" class="swiper-slide clearfix swiper-no-swiping">
            <nuxt-link to="/" class="p1">
              <em>恭喜</em>{{ item.info }}
            </nuxt-link>
            <i>{{ item.money }}</i>
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
  props: ['goodnews'],
  data () {
    return {
      swiperOption: {
        direction: 'vertical', // 向上
        autoplay: {
          delay: 2000
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
                            .p1{
                              display: inline-block;
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

</style>
