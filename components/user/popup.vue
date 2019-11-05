<template>
  <el-row class="content_box">
    <el-row class="close" @click="changePopup">
      <span class="el-icon-close" @click="changePopup" />
    </el-row>
    <el-row class="content_">
      <el-row class="topBox">
        <el-row class="cont-n">
          <div class="l_img">
            <img src="@/assets/img/0123.jpg" alt="">
          </div>
          <div class="r_con">
            <div class="tit">
              DESIGNER
            </div>
            <div class="name">
              名字
            </div>
            <div class="post">
              首席设计师
            </div>
            <div class="int">
              <p>
                墨燃觉得自己拜楚晚宁为师就是个错误。他的师尊实在太像猫，而他则像一只摇头摆尾的傻狗。狗和猫是有生殖隔离的，傻狗原本并不想向那只猫伸出他毛茸茸的爪子。他原本觉得啊，狗就应该和狗在一起，比如他的师兄，漂亮温驯，像一只可爱的狐狸犬，他们俩在一起一定很般配。可是死过去又活过来，活了两辈子，他最后叼回窝里的，都是那个最初他根本瞧不上眼的，雪白的猫咪师尊。蠢到爆表哈士奇攻x傲娇暴躁大白猫受,这是个渣攻重生之后,试图从良的故事。架空修真文，不必细考。从良不是那么容易的，路漫
              </p>
              <p>
                过程中难免依然犯错，犯浑。请各位小姐姐包涵。攻受的三观不过程中难免依然犯错，犯浑。请各位小姐姐包涵。攻受的三观不...
              </p>
            </div>
            <div class="line" />
            <div class="time">
              从业时间：10年
            </div>
          </div>
        </el-row>
      </el-row>
      <el-row class="bottomBox">
        <div class="bo_box">
          <div class="topName">
            <span>代表作品</span>
            <em>/ RERESENTATIVE WORKS</em>
          </div>
          <div class="c_box">
            <nuxt-link :to="`works/worrksPage/${1095}`">
              <p><img src="@/assets/img/0123.jpg" alt=""></p>
              <p>主题名字</p>
            </nuxt-link>
            <nuxt-link :to="`works/worrksPage/${1095}`">
              <p><img src="@/assets/img/0123.jpg" alt=""></p>
              <p>主题名字</p>
            </nuxt-link>
            <nuxt-link :to="`works/worrksPage/${1095}`">
              <p><img src="@/assets/img/0123.jpg" alt=""></p>
              <p>主题名字</p>
            </nuxt-link>
            <nuxt-link :to="`works/worrksPage/${1095}`">
              <p><img src="@/assets/img/0123.jpg" alt=""></p>
              <p>主题名字</p>
            </nuxt-link><nuxt-link :to="`works/worrksPage/${1095}`">
              <p><img src="@/assets/img/0123.jpg" alt=""></p>
              <p>主题名字</p>
            </nuxt-link>
            <nuxt-link :to="`works/worrksPage/${1095}`">
              <p><img src="@/assets/img/0123.jpg" alt=""></p>
              <p>主题名字</p>
            </nuxt-link>
          </div>
        </div>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'Popup',
  methods: {
    changePopup () {
      this.$store.commit('user/changePopup')
    }
  }
}
</script>

<style scoped lang="scss">
  .content_box{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
    overflow: auto;
    overflow-y: scroll;
    background: rgba(255,255,255,.96);
    .close{
      width: 60px;
      height: 60px;
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
      span{
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #333333;
        display: inline-block;
        font-size: 40px;
      }
      &:hover{
        span{
          transform: rotateZ(720deg) ;
          transition: 1.6s ease-in-out;
        }
      }
    }
    .content_{
      width: 1200px;
      margin: 0 auto;
      .topBox{
        margin-top: 50px;
        background: #ffffff;
        .cont-n{
          width: 880px;
          margin: 50px auto;
          display: flex;
          display: -ms-flex;
          .l_img{
            width:280px ;
            height: 440px;
            img{
              @include img;
            }
          }
          .r_con{
            overflow: hidden;
            flex: 1;
            -ms-flex: 1;
            margin-left: 70px;
            .tit{
              width: 100%;
              font-size: 38px;
              color: #333333;
              margin-top: 25px;
            }
            .name{
              width: 100%;
              margin-top: 20px;
              font-size: 28px;
              color: #333333;
            }
            .post{
              font-size: 14px;
              color: #333333;
              margin-top: 14px;
            }
            .int{
              width: 100%;
              margin-top: 24px;
              p{
                line-height: 20px;
                font-size: 14px;
                margin-bottom: 10px;
                color: #333333;
              }
            }
            .line{
              width: 100%;
              height: 2px;
              background: #333333;
              margin-top: 22px;
            }
            .time{
              margin-top: 22px;
              font-size: 14px;
              color: #333333;
            }
          }
        }
      }
      .bottomBox{
        width: 100%;
        margin: 40px auto;
        background: #ffffff;
        .bo_box{
          width: 880px;
          margin: 30px auto;
          .topName{
            width: 100%;
            border-bottom: 1px solid $borderE7;
            span{
              display: inline-block;
              height: 50px;
              line-height: 50px;
              border-bottom: 1px solid $redColor;
              font-size: 20px;
            }
            em{
              color: #aaaaaa;
              font-size: 15px;
            }
          }
          .c_box{
            margin-top: 30px;
            width: 100%;
            overflow: hidden;
            a{
              float: left;
              width: 32%;
              margin-right: 2%;
              margin-bottom: 20px;
              box-sizing: border-box;
              p{
                width: 100%;
                &:nth-child(1){
                  height: 180px;
                  img{
                    @include img;
                  }
                }
                &:nth-child(2){
                  margin-top: 10px;
                  height: 20px;
                  line-height: 20px;
                  font-size: 15px;
                  color: #333333;
                  text-align: center;
                  @include over;
                }
              }
              &:nth-child(3n){
                margin-right: 0;
              }
            }

          }
        }
      }
    }

  }
</style>
