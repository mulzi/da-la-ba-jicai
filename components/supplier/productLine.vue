<template>
  <el-row class="productLineBox">
    <div id="topListBox" class="topListBox">
      <product-line-one v-for="(item,index) in lists" :key="index" :dates="item" />
    </div>
    <div v-if="lists.priceIllustrated" class="moneyState ">
      价格说明：{{ lists.priceIllustrated }}
    </div>
    <div class="tips">
      温馨提示：平台提倡公平交易，为保障各位消费者合法权益，请各位切勿相信口头承诺，一定要写到合作协议里面或者将承诺签字录音等！
    </div>
  </el-row>
</template>

<script>
import $ from 'jquery'
import productLineOne from './productLineOne'
export default {
  components: {
    productLineOne
  },
  // eslint-disable-next-line vue/require-prop-types
  props: [ 'list' ],
  data () {
    return {
      lists: this.list
    }
  },
  mounted () {
    $(function () {
      $('#topListBox').children().first().children('.titNameChange').addClass('active')
      $('#topListBox').children().first().children('.titNameChange').children('i').removeClass('el-icon-caret-right')
      $('#topListBox').children().first().children('.titNameChange').children('i').addClass('el-icon-caret-bottom')

      $('#topListBox .span').on('click', function () {
        $(this).parent().parents().siblings().children('.boLiList').slideUp('normal')
        $(this).parent().siblings('.boLiList').slideToggle('slow')
        $(this).parent().parents().siblings().children('.titNameChange').removeClass('active')
        $(this).parent().toggleClass('active')
        $(this).parent().parents().siblings().children('.titNameChange').children().siblings('i').removeClass()
        $(this).parent().parents().siblings().children('.titNameChange').children().siblings('i').addClass('el-icon-caret-right')
        if ($(this).siblings('i').hasClass('el-icon-caret-right')) {
          $(this).siblings('i').removeClass()
          $(this).siblings('i').addClass('el-icon-caret-bottom')
        } else if ($(this).siblings('i').hasClass('el-icon-caret-bottom')) {
          $(this).siblings('i').removeClass()
          $(this).siblings('i').addClass('el-icon-caret-right')
        }
      })
    })
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
      padding: 50px 30px;
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
              height: 66px;
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
