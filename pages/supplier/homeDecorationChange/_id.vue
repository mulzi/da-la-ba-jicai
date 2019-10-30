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
            <span>家装</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="moiveImgBox">
        <el-row class="padding30">
          <el-col v-if="videoShow" class="leftMi">
            <video
              controls
              :src="date.videoUri"
            />
          </el-col>
          <banner v-if="bannerShow" :banner="date.bannerImages" />
          <div class="changMVIMG">
            <el-button v-if="videoShowTwo" :class=" videoShow ? 'active': '' " round icon="el-icon-video-play" @click="videoChange">
              视频
            </el-button>
            <el-button v-if="videoShowTwo" round :class=" bannerShow ? 'active': '' " icon="el-icon-picture-outline" @click="bannerChange">
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
                  品牌：{{ date.brand.brand }}
                </li>
                <li>
                  品牌来源：{{ date.brand.origin }}
                </li>
                <li>
                  品牌产地：{{ date.brand.source }}
                </li>
                <li>
                  重庆代理商：{{ date.brand.agent }}
                </li>
                <li>
                  地址：{{ date.brand.registeredCapital }}
                </li>
                <li nofloow>
                  VR地址：{{ date.brand.portalUrl }}
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row class="consultingBox">
          <span @click="messageShow">一键咨询底价</span>
          <span>加入收藏</span>
        </el-row>
      </el-row>
      <el-row class="bottomModuleBox">
        <el-row class="topMenuBox">
          <ul>
            <li :class="oneListShow ? 'active':''" @click="oneChangeShow">
              <span>产品系列</span>
            </li>
            <li :class="twoListShow ? 'active':''" @click="twoChangeShow">
              <span>工程案列</span>
            </li>
            <li :class="threeListShow ? 'active':''" @click="threeChangeShow">
              <span>
                公司介绍
              </span>
            </li>
            <li v-if="false" :class="fourListShow ? 'active':''" @click="fourChangeShow">
              <span>
                公司资讯
              </span>
            </li>
            <li :class="fiveListShow ? 'active':''" @click="fiveChangeShow">
              <span>评价留言</span>
            </li>
          </ul>
        </el-row>
        <product-line v-if="oneListShow" :list="date.product" />
        <engineering-works v-if="twoListShow" :list="date.cases" />
        <company-introduction v-if="threeListShow" :list="date" />
        <CompanyInfo v-if="fourListShow" />
        <Evaluate v-if="fiveListShow" />
      </el-row>
      <!--      id是{{ $route.params.id }}-->
    </div>
  </div>
</template>

<script>
import { HomeService } from '@/services/home'
import banner from '@/components/supplier/banner'
import productLine from '@/components/supplier/productLine'
import EngineeringWorks from '@/components/supplier/EngineeringWorks'
import CompanyInfo from '@/components/supplier/CompanyInfo'
import Evaluate from '@/components/supplier/Evaluate'
import companyIntroduction from '@/components/supplier/companyIntroduction'
export default {
  layout: 'main',
  components: {
    banner,
    productLine,
    EngineeringWorks,
    CompanyInfo,
    Evaluate,
    companyIntroduction

  },
  data () {
    return {
      oneListShow: true, // 产品系列列表显示
      twoListShow: false, // 工程案列列表显示
      threeListShow: false, // 公司介绍列表显示
      fourListShow: false, // 公司资讯列表显示
      fiveListShow: false, // 评价留言显示
      date: [ ], // 主数据
      bannerShow: false,
      videoShow: true,
      videoShowTwo: true
    }
  },
  asyncData (context) {
    const { params } = context
    const homeService = new HomeService(context)
    // eslint-disable-next-line no-undef
    return homeService.SupplierListParticulars({ supplierId: params.id }).then((res) => {
      // console.log(res.data.cases)
      return { date: res.data || {} }
    })
  },
  created () {
    if (this.date.videoUri !== null || undefined) {
      this.videoShowTwo = true
    } else {
      this.videoShowTwo = false
      this.bannerShow = true
      this.videoShow = false
    }
  },
  methods: {
    oneChangeShow () {
      this.oneListShow = true
      this.twoListShow = false
      this.threeListShow = false
      this.fourListShow = false
      this.fiveListShow = false
    },
    twoChangeShow () {
      this.oneListShow = false
      this.twoListShow = true
      this.threeListShow = false
      this.fourListShow = false
      this.fiveListShow = false
    },
    threeChangeShow () {
      this.oneListShow = false
      this.twoListShow = false
      this.threeListShow = true
      this.fourListShow = false
      this.fiveListShow = false
    },
    fourChangeShow () {
      this.oneListShow = false
      this.twoListShow = false
      this.threeListShow = false
      this.fourListShow = true
      this.fiveListShow = false
    },
    fiveChangeShow () {
      this.oneListShow = false
      this.twoListShow = false
      this.threeListShow = false
      this.fourListShow = false
      this.fiveListShow = true
    },
    videoChange () {
      this.videoShow = true
      this.bannerShow = false
    },
    bannerChange () {
      this.videoShow = false
      this.bannerShow = true
    }
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
                bottom: 100px;
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
