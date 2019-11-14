<template>
  <div class="one">
    <div class="title">
      入库喜讯
    </div>
    <div class="threeList">
      <div @mouseenter="bannerStop" @mouseleave="bannerStart" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div v-for="(item,index) in goodnewsLeft " :key="index" class="swiper-slide clearfix swiper-no-swiping">
            <el-row class="p1">
              <i>恭喜</i><nuxt-link target="_blank" :to="`${item.addHost.includes('designDecoration')?'/user/designDecoration/':'/supplier/toolDecoration/'}${item.addId}`">
                {{ item.addAgent }}
              </nuxt-link><i>通过大喇叭采集与</i> <nuxt-link target="_blank" :to="`/supplier/toolDecoration/${item.addedId}`">
                {{ item.addedAgent }}
              </nuxt-link>达成入库协议
            </el-row>
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
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'goodnewsLeft'
  ],
  data () {
    return {
      swiperOption: {
        direction: 'vertical', // 向上
        autoplay: {
          delay: 2000,
          waitForTransition: true
        },
        speed: 1000, // 速度
        loop: true,
        freeMode: true,
        slidesPerView: 3,
        autoplayDisableOnInteraction: false,
        spaceBetween: 3,
        noSwiping: true
      },
      list: this.goodnewsLeft
    }
  },
  mounted () {
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
      .one{
        width: 50%;
        overflow: hidden;
        float: left;
        box-sizing: border-box;
        .title{
          font-size: 18px;
          font-weight: bold;
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
              align-items: center;
              .p1{
                flex: 1;
                height: 32px;
                line-height: 32px;
                color: #333333;
                font-size: 14px;
                @include over;
                display: flex;
                align-items: center;
                a{
                  color: $redColor;
                  max-width: 150px;
                  display: inline-block;
                  @include over;
                  height: 32px;
                  line-height: 32px;
                  &:hover{
                    text-decoration:underline #DA251D;
                  }
                }
              }
              span{
                width: 80px;
                margin: 0 30px 0 30px;
                font-size:14px ;
                color: #333333;
              }
            }

          }

        }
      }
    }
  }
</style>
