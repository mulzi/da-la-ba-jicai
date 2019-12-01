<template>
  <div class="engineeringWorkse">
    <div class="bg">
      <div class="close" @click="change">
        <span class="el-icon-close" />
      </div>
      <div class="body">
        <div class="oneImg">
          <img :src="date.coverPic" alt="">
        </div>
        <div class="textBox">
          <div class="topTitle">
            <span>案例简介</span>
          </div>
          <div class="content">
            <div class="ones">
              <div class="leftName">
                项目名称：
              </div>
              <div class="rightName">
                {{ date.projectName }}
              </div>
            </div>
            <div class="ones">
              <div class="leftName">
                项目地址：
              </div>
              <div class="rightName">
                {{ date.address }}
              </div>
            </div>
            <div class="ones">
              <div class="leftName">
                使用产品：
              </div>
              <div class="rightName">
                {{ date.product }}
              </div>
            </div>
            <div class="ones">
              <div class="leftName">
                产品用量：
              </div>
              <div class="rightName">
                {{ date.amount }}
              </div>
            </div>
            <div class="ones">
              <div class="leftName">
                项目介绍：
              </div>
              <div class="rightName">
                {{ date.introduce }}
              </div>
            </div>
            <div class="ones">
              <div class="leftName">
                经典之处：
              </div>
              <div class="rightName">
                {{ date.classic }}
              </div>
            </div>
          </div>
        </div>
        <div class="BottomImg">
          <div class="boTit">
            效果图
          </div>
          <div class="imgBox">
            <img :src="t.pic" v-for="(t,i) in date.effectPics" alt="" :key="i">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['list'],
  data () {
    return {
      date: this.list
    }
  },
  methods: {
    change () {
      this.$store.commit('supplier/changeEngineering')
    }
  }

}
</script>

<style scoped lang="scss">
  .engineeringWorkse{
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
    overflow:auto;
    overflow-y: scroll;
    .bg{
      width: 100%;
      min-height: 100vh;
      position: absolute;
      z-index: 901;
      background: rgba(255,255,255,.95);
      .close{
        width: 60px;
        height: 60px;
        position: fixed;
        z-index: 902;
        right: 20px;
        top: 10px;
        cursor: pointer;
        &:hover{
          span{
            transform: rotateZ(720deg);
            transition: 1.3s ease-in-out;
          }
        }
        span{
          font-size: 60px;
          color: #333333;
        }
      }
      .body{
        width: 1000px;
        margin: 80px auto;
        .oneImg{
          width: 100%;
          img{
            @include img;
          }
        }
        .textBox{
          width: 100%;
          margin-top: 20px;
          .topTitle{
            width: 100%;
            border-bottom: 1px solid #9a9a9a;
            span{
              margin-left: 20px;
              height: 40px;
              line-height: 40px;
              color: #333333;
              display: inline-block;
              font-size: 32px;
              margin-bottom: 10px;
            }
          }
          .content{
            padding: 20px;
            .ones{
              width: 100%;
              overflow: hidden;
              display: flex;
              display: -ms-flex;
              margin-bottom: 30px;
              justify-items: center;
              .leftName{
                width: 110px;
                float: left;
                font-size: 22px;
                color: #333333;
                line-height: 28px;
              }
              .rightName{
                flex: 1;
                -ms-flex: 1;
                line-height: 28px;
                color: #333333;
                font-size: 22px;
              }
            }
          }

        }
        .BottomImg{
          width: 100%;
          margin-top: 40px;
          .boTit{
            width: 100%;
            text-indent: 20px;
            font-size: 26px;
            color: #333333;
            height: 30px;
            line-height: 30px;
          }
          .imgBox{
            width: 100%;
            margin-top: 20px;
            img{
              @include img;
              margin-bottom: 20px;
            }
          }
        }
      }
    }

  }

</style>
