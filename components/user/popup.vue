<template>
  <el-row class="content_box">
    <el-row class="close" @click="changePopup">
      <span class="el-icon-close" @click="changePopup" />
    </el-row>
    <el-row class="content_">
      <el-row class="topBox">
        <el-row class="cont-n">
          <div class="l_img">
            <img v-lazy="this.list.selfImageList[0].pic" alt="">
          </div>
          <div class="r_con">
            <div class="tit">
              DESIGNER
            </div>
            <div class="name">
              {{ this.list.designersName }}
            </div>
            <div class="post">
              {{ this.list.designersPosition }}
            </div>
            <div class="int">
              <p>
                {{ this.list.selfIntroduction }}
              </p>
            </div>
            <div class="line" />
            <div class="time">
              从业时间：{{ this.list.workingSeniorityStr }}
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
          <div class="c_box" v-viewer>
            <div class="a" v-for="(t,i) in this.list.portfolioList " :key="i">
              <p><img v-lazy="t.pic" alt=""></p>
              <p>{{ t.imageName }}</p>
            </div>
          </div>
        </div>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'Popup',
  // eslint-disable-next-line vue/require-prop-types
  props: ['list'],
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
    background: rgba(0,0,0,.75);
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
        color: #dbdbdb;
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
            .a{
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
