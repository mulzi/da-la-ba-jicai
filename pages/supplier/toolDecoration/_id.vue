<template>
  <div class="supplierBody">
    <div class="bodyBox">
      <el-row class="HeaderBreadcrumb">
        <el-col :span="24">
          <div class="breadcrumb">
            <span class="iconfont">&#xe635;</span>
            <span style="margin-right: 0;color: #8e8e8e">当前位置：</span>
            <nuxt-link to="/">
              首页
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <nuxt-link to="/supplier">
              材料供应商
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>公装</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="moiveImgBox">
        <el-row class="padding30">
          <el-col v-if="false" class="leftMi">
            <video
              controls
              src="https://dalabajicai-prod.oss-cn-chengdu.aliyuncs.com/files/dalaba/file/EC5ED634619043528FE73F1AF9C61B08.mp4"
            />
          </el-col>
          <banner />
          <div class="changMVIMG">
            <el-button class="active" round icon="el-icon-video-play">
              视频
            </el-button>
            <el-button round icon="el-icon-picture-outline">
              图片
            </el-button>
          </div>
          <el-col class="fRight" :span="10">
            <div class="nameTit">
              品牌概况
            </div>
            <div class="addrName">
              <ul>
                <li>
                  品牌：东鹏
                </li>
                <li>
                  品牌来源：中国广东
                </li>
                <li>
                  品牌产地：佛山、清远
                </li>
                <li>
                  成立日期：199s
                </li>
                <li>
                  重庆代理商：重庆市民公司
                </li>
                <li>
                  注册资金：200万
                </li>
                <li>
                  官方网址：dalabajicai.com
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row class="consultingBox">
          <span>咨询留言</span>
          <span>加入收藏</span>
        </el-row>
      </el-row>
      <el-row class="bottomModuleBox">
        <el-row class="topMenuBox">
          <ul>
            <li class="active">
              <span>产品系列</span>
            </li>
            <li>
              <span>工程案列</span>
            </li>
            <li>
              <span>
                公司介绍
              </span>
            </li>
            <li>
              <span>
                公司资讯
              </span>
            </li>
            <li>
              <span>评价留言</span>
            </li>
          </ul>
        </el-row>
        <product-line />
        <engineering-works />
        <company-introduction />
        <CompanyInfo />
        <Evaluate />
      </el-row>
      <message-module-one />
      <!--      id是{{ $route.params.id }}-->
    </div>
  </div>
</template>

<script>

import banner from '@/components/supplier/banner'
import productLine from '@/components/supplier/productLine'
import EngineeringWorks from '@/components/supplier/EngineeringWorks'
import CompanyInfo from '@/components/supplier/CompanyInfo'
import Evaluate from '@/components/supplier/Evaluate'
import companyIntroduction from '@/components/supplier/companyIntroduction'
import messageModuleOne from '@/components/publicModule/messageModuleOne'
export default {
  layout: 'main',
  components: {
    banner,
    productLine,
    EngineeringWorks,
    CompanyInfo,
    Evaluate,
    companyIntroduction,
    messageModuleOne

  },

  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
  .moiveImgBox{
    width: 100%;
    overflow: hidden;
    margin-top: 20px;
    background: #ffffff;
    .padding30{
      width: 100%;
      position: relative;
      display: flex;
      .leftMi{
        width: 749px;
        height: 546px;
        min-width: 600px;
        border: 1px solid $borderE7;
        box-sizing: border-box;
        video{
          display: block;
          margin: 0 auto;
          height: 100%;
          width: 100%;
        }
      }
      .changMVIMG{
        position: absolute;
        bottom: 60px;
        left: 24px;
        width: 749px;
        z-index: 99;
        text-align: center;
        button{
          display: inline-block;

          &.active{
            background: $redColor;
            color: #ffffff;
          }
          &:hover{
            background: $redColor;
            color: #ffffff;
          }
        };

      }
      .fRight{
        flex: 1;
        margin-left: 50px;
        .nameTit{
          width: 100%;
          height: 28px;
          font-size: 28px;
          color: #333333;
          line-height: 28px;
        }
        .addrName{
          overflow: hidden;
          width: 100%;
          margin-top: 30px;
          ul{
            width: 100%;
            li{
              width: 100%;
              @include over;
              height: 58px;
              line-height: 58px;
              font-size:20px ;
              color: #333333;
              text-indent: .5em;
              &:nth-child(odd){
                background: #ebebeb;
              }
            }
          }
        }
      }
    }
    .consultingBox{
      width: 100%;
      margin:20px auto 50px;
      padding: 0 30px;
      overflow: hidden;
      span{
        display: inline-block;
        cursor: pointer;
        height:70px ;
        line-height: 70px;
        font-size: 28px;
        padding: 0 60px;
        color: $redColor;
        margin-right: 30px;
        border: 1px solid $redColor;
        &:active{
          background: #ff7206;
        }
        &:nth-child(1){
          background: $redColor;
          color: #ffffFF;
          &:active{
            background: #ff4300;
          }
        }
      }
    }
  }
  .bottomModuleBox{
    width: 100%;
    overflow: hidden;
    margin-top: 20px;
    .topMenuBox{
      width: 100%;
      background: #ffffff;
      ul{
        overflow: hidden;
        line-height: 80px;
        border-bottom: 1px solid $borderE7;
        height: 80px;
        margin-top: 10px;
        display: flex;
        display: -ms-flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        li{
          font-size: 26px;
          color: #333333;
          position: relative;
          &:first-child{
            margin-left: 30px;
          }
          &:last-child{
            margin-right: 20px;
          }
          &:hover{
            cursor: pointer;
            color: $redColor;
            &::before{
              width: 100%;
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              height: 3px;
              background: $redColor;
            }

          }
          &.active{
            cursor: pointer;
            color: $redColor;
            &::before{
              width: 100%;
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              height: 3px;
              background: $redColor;
            }
          }
        }
      }
    }
  }

</style>
