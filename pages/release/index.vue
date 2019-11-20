<template>
  <el-row class="supplierBody">
    <el-row class="bodyBox">
      <el-row class="contBox">
        <el-row class="topList">
          <div :class="$store.state.release.number === i ? 'active' : ''" class="li" v-for="(t,i) in topList" :key="i" @click="changN(i)">
            {{ t }}
          </div>
        </el-row>
        <el-row class="bottom_con">
          <transition name="bounce">
            <projectInfo v-if="$store.state.release.number === 0" />
          </transition>
          <transition name="bounce">
            <information v-if="$store.state.release.number === 1" />
          </transition>
          <transition name="bounce">
            <bidding v-if="$store.state.release.number === 2" />
          </transition>
          <transition name="bounce">
            <success v-if="$store.state.release.number === 3" />
          </transition>
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import projectInfo from '@/components/release/projectInfo'
import information from '@/components/release/information'
import bidding from '@/components/release/bidding'
import success from '@/components/release/success'
export default {
  layout: 'main',
  components: {
    projectInfo,
    information,
    bidding,
    success
  },
  data () {
    return {
      topList: [
        '发布项目信息',
        '发布招采信息',
        '发布招募招标',
        '发布成功案例'
      ]
    }
  },
  methods: {
    changN (index) {
      this.$store.commit('release/changeNumber', index)
    }
  }
}
</script>

<style lang="scss">
  .contBox{
    width: 100%;
    margin: 40px auto 100px;
    background: #ffffff;
    > .topList{
      width: calc(100% - 60px);
      margin: 30px auto 0;
      border-bottom: 1px solid $borderE7;
      .li{
        position: relative;
        height: 40px;
        line-height: 40px;
        margin-bottom: 10px;
        color: #333333;
        font-size: 20px;
        text-align: center;
        cursor: pointer;
        width: 25%;
        float: left;
        &.active{
          &::before{
            content: '';
            display: block;
            position: absolute;
            bottom: -10px;
            left: 0;
            height: 4px;
            width: 100%;
            background: $redColor;
          }
        }

      }
    }
    > .bottom_con{
      width: 100%;
      max-width: 750px;
      margin: 80px auto 40px;
      >.listOne{
        width: 100%;
        overflow: hidden;
        .content_wB{
          .tit{
            width: 100%;
            text-align: center;
            margin-bottom: 40px;
            .name{
              font-size: 30px;
              color: #333333;
              font-weight: bold;
            }
            .desc{
              width: 100%;
              margin-top: 6px;
              font-size: 18px;
              color: #4c4c4c;
              em{
                margin-right: 6px;
              }
              span{
                color: $redColor;
                margin-right: 6px;
              }
            }
            .line{
              width: 100%;
              text-align: center;
              margin-top: 10px;
              span{
                display: inline-block;
                width: 20px;
                height: 6px;
                background: $redColor;
              }
            }
          }
          .el-select{
            width: 100%;
          }
          .el-date-editor.el-input, .el-date-editor.el-input__inner{
            width: 100%;
          }
          .el-textarea{
            textarea{
              height: 200px;
            }
          }
          .el-cascader{
            width: 100%;
          }
          .el-upload-list__item{
            width: 120px;
            height: 120px;
          }
          .el-upload--picture-card{
            width: 120px;
            height: 120px;
            line-height: 120px;
          }
          .next{
            width: 500px;
            margin: 40px auto;
            background: $redColor;
            height: 50px;
            line-height: 50px;
            color: #ffffff;
            border-radius: 6px;
            text-align: center;
            cursor: pointer;
          }
          .tips{
            width: 580px;
            margin-left: 120px;
            font-size: 18px;
            color: #333333;
            margin-top: 20px;
            span{
              font-size: 12px;
              color: #adadad;
            }
          }
          .upImg{
            width: 580px;
            margin-left: 120px;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .proNext{
            width: 580px;
            margin-left: 120px;
            margin-top: 30px;
            margin-bottom: 30px;
            overflow: hidden;
            .left{
              width: 46%;
              height:50px ;
              line-height: 50px;
              text-align: center;
              color: #ffffFF;
              float: left;
              margin-right: 8%;
              background: $redColor;
              border-radius: 6px;
              cursor: pointer;
            }
            .right{
              width: 46%;
              height:50px ;
              line-height: 50px;
              text-align: center;
              color: #ffffFF;
              float: left;
              background: $redColor;
              border-radius: 6px;
              cursor: pointer;
            }
          }
          .sub{
            width: 630px;
            margin-left: 120px;
            margin-top: 30px;
            margin-bottom: 30px;
            overflow: hidden;
            text-align: center;
            background: $redColor;
            height: 50px;
            line-height: 50px;
            color: #ffffFF;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
              transition: .3s ease-in;
              background: rgba(255, 29, 0, 0.92);
            }
          }
          .add{
            width: 100%;
            text-align: right;
            span{
              color: $redColor;
              font-size:18px ;
              cursor: pointer;
              text-decoration: underline $redColor;
            }
          }
          .add_B_add{
            width: 100%;
            margin: 20px auto;
            height: 40px;
            line-height: 40px;
            text-align: center;
            .boxwE{
              margin-left: 120px;
              span{
                margin: 0 20px;
                display: inline-block;
                color: $redColor;
                font-size: 30px;
                width: 40px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                cursor: pointer;
              }
            }

          }
          .lsitBoxS{
            width: 100%;
            .listLi{
              width: 100%;
              margin-bottom: 20px;
              border-bottom: 2px dashed $borderE7;
              &:last-child{
                border-bottom: none;
              }
            }
          }
        }
      }
      >.listOneS{
        width: 100%;
        overflow: hidden;
        .content_wB{
          .tit{
            width: 100%;
            text-align: center;
            margin-bottom: 40px;
            .name{
              font-size: 30px;
              color: #333333;
              font-weight: bold;
            }
            .desc{
              width: 100%;
              margin-top: 6px;
              font-size: 18px;
              color: #4c4c4c;
              em{
                margin-right: 6px;
              }
              span{
                color: $redColor;
                margin-right: 6px;
              }
            }
            .line{
              width: 100%;
              text-align: center;
              margin-top: 10px;
              span{
                display: inline-block;
                width: 20px;
                height: 6px;
                background: $redColor;
              }
            }
          }
          .el-select{
            width: 100%;
          }
          .el-date-editor.el-input, .el-date-editor.el-input__inner{
            width: 100%;
          }
          .el-textarea{
            textarea{
              height: 200px;
            }
          }
          .el-cascader{
            width: 100%;
          }
          .el-upload-list__item{
            width: 100%;
            height: 24px;
          }
          .el-upload--picture-card{
            width: 120px;
            height: 120px;
            line-height: 120px;
          }
          .next{
            width: 500px;
            margin: 40px auto;
            background: $redColor;
            height: 50px;
            line-height: 50px;
            color: #ffffff;
            border-radius: 6px;
            text-align: center;
            cursor: pointer;
          }
          .tips{
            width: 580px;
            margin-left: 140px;
            font-size: 18px;
            color: #333333;
            margin-top: 20px;
            span{
              font-size: 12px;
              color: #adadad;
            }
          }
          .upImg{
            width: 580px;
            margin-left: 140px;
            margin-bottom: 20px;
          }
          .proNext{
            width: 580px;
            margin-left: 140px;
            margin-top: 30px;
            margin-bottom: 30px;
            overflow: hidden;
            .left{
              width: 46%;
              height:50px ;
              line-height: 50px;
              text-align: center;
              color: #ffffFF;
              float: left;
              margin-right: 8%;
              background: $redColor;
              border-radius: 6px;
              cursor: pointer;
            }
            .right{
              width: 46%;
              height:50px ;
              line-height: 50px;
              text-align: center;
              color: #ffffFF;
              float: left;
              background: $redColor;
              border-radius: 6px;
              cursor: pointer;
            }
          }
          .sub{
            width: 610px;
            margin-left: 140px;
            margin-top: 30px;
            margin-bottom: 30px;
            overflow: hidden;
            text-align: center;
            background: $redColor;
            height: 50px;
            line-height: 50px;
            color: #ffffFF;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
              transition: .3s ease-in;
              background: rgba(255, 29, 0, 0.92);
            }
          }
          .add{
            width: 100%;
            text-align: right;
            span{
              color: $redColor;
              font-size:18px ;
              cursor: pointer;
              text-decoration: underline $redColor;
            }
          }
          .add_B_add{
            width: 100%;
            margin: 20px auto;
            height: 40px;
            line-height: 40px;
            text-align: center;
            .boxwE{
              margin-left: 120px;
              span{
                margin: 0 20px;
                display: inline-block;
                color: $redColor;
                font-size: 30px;
                width: 40px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                cursor: pointer;
              }
            }

          }
          .lsitBoxS{
            width: 100%;
            .listLi{
              width: 100%;
              margin-bottom: 20px;
              border-bottom: 2px dashed $borderE7;
              &:last-child{
                border-bottom: none;
              }
            }
          }
        }
      }
    }
  }
</style>
