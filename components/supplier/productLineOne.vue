<template>
  <div class="listOne">
    <div class="titNameChange">
      <span class="span">{{ date.name }}</span><i class="i el-icon-caret-right" />
    </div>
    <div ref="viewer" v-viewer="{movable: false}" class="boLiList images">
      <div v-for="(t, i) in date.products" :key="i" class="a">
        <div class="img">
          <img :src="t.productPics[0].picUrl" alt="">
          <div class="imgTips" @click="show(i)">
            <em class="iconfont">&#xe601;</em>
            <p>点击图片放大</p>
          </div>
        </div>
        <div class="name">
          {{ t.name }}
        </div>
        <div class="Property">
          <p v-for="(te,ie) in t.productAttributeAndValues" :key="ie">
            {{ te.attributeName }}：<em>{{ te.name }}</em>
          </p>
        </div>
        <div class="money">
          价格：<em><i>{{ t.previousPrice }}</i></em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['dates'],
  data () {
    return {
      imagesBox: [],
      date: this.dates
    }
  },
  mounted () {
  },
  methods: {
    show (index) {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    }
  }
}
</script>

<style scoped lang="scss">
  .productLineBox{
    width: 100%;
    overflow: hidden;
    .topListBox{
      background: #ffffff;
      .listOne{
        width: 100%;
        .titNameChange{
          width: 100%;
          height: 60px;
          overflow: hidden;
          display: flex;
          line-height: 60px;
          justify-items: center;
          align-items: center;
          border-bottom: 1px solid $borderE7;
          &.active{
            color: $redColor;
            span{
              color: $redColor;
            }
          }
          span{
            color:#333333;
            font-size: 22px;
            display: inline-block;
            height: 30px;
            line-height: 30px;
            vertical-align: middle;
            cursor: pointer;
          }
          i{
            height: 30px;
            line-height: 33px;
            font-size: 30px;
            display: inline-block;
            margin-left: 30px;
            vertical-align: middle;
          }
        }
        .boLiList{
          width: 100%;
          overflow: hidden;
          display: none;
          .a{
            float: left;
            width: 16.666%;
            box-sizing: border-box;
            cursor: pointer;
            border: 1px solid $borderE7;

            .img{
              width: 90%;
              margin: 10px auto;
              height: 166px;
              position: relative;
              img{
                @include img;
              }
              > .imgTips{
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,.8);
                em{
                  display: block;
                  width: 100%;
                  height: 30px;
                  line-height: 30px;
                  margin-top: 50px ;
                  color: #ffffff;
                  font-size: 30px;
                  text-align: center;
                }
                p{
                  font-size: 15px;
                  color: #ffffff;
                  height: 30px;
                  line-height: 30px;
                  text-align: center;
                }
              }
            }
            .name{
              padding: 0 9px ;
              @include over;
              font-size: 13px;
              color: #333333;
            }
            .Property{
              padding: 0 9px;
              margin-top: 6px;
              overflow: hidden;
              p{
                height: 22px;
                line-height: 22px;
                color: #a1a1a1;
                font-size:13px ;
                @include over;
                em{
                  color: #333333;
                }
              }
            }
            .money{
              font-size: 13px;
              padding: 0 9px;
              margin-bottom: 20px;
              color: #a1a1a1;
              em{
                color: #333333;
                i{
                  color: $redColor;
                }
              }
            }
            &:hover{
              @include triText;
              background: $redColor;
              .img{
                .imgTips{
                  display: block;
                }
              }
              .name{
                color: #ffffff;
              }
              .Property{
                P{
                  color: #ffffff;
                  em{
                    color: #ffffff;
                  }
                }
              }
              .money{
                color: #ffffff;
                em{
                  color: #ffffff;
                  i{
                    color: #ffffff;
                  }
                }

              }
            }
          }
        }
        &:nth-child(1){
          .boLiList{
            display: block;
          }
        }
      }
    }
    .moneyState{
      padding: 0 30px 30px ;
      background: #ffffff;
      width: 100%;
      font-size: 14px;
      color: #333333;
      line-height: 30px;
    }
    .tips{
      width: 100%;
      padding: 0 30px;
      margin: 40px 0 60px;
      color: $redColor;
      font-size: 18px;
    }
  }
</style>
