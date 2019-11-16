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
                  VR地址：{{ date.brand.vrUrl }}
                </li>
              </ul>
            </div>
            <div class="privilege" v-if="false">
              <span>优惠买单</span>
            </div>
          </el-col>
        </el-row>
        <el-row class="consultingBox">
          <span v-if="false">一键咨询底价</span>
          <span v-if="date.collection === false" @click="getCollection">加入收藏</span>
          <span v-if="date.collection === true" @click="createCollection">取消收藏</span>
        </el-row>
        <el-row class="safeguard" :gutter="20">
          <el-col v-if="date.deposit" :span="12" class="span">
            <span>保障：</span>
            服务商已经缴纳保证金<em>{{ date.deposit }}</em>
            元，承诺交易出问题，保证金赔付
          </el-col>
          <el-col v-if="date.rebate " :span="12" class="span">
            <span>返利：</span>
            通过平台优惠买单，平台将对消费者进行现金返利 <em>{{ date.rebate }}%</em>
          </el-col>
        </el-row>
        <el-row v-if="date.agentAddresses" class="topAdds">
          <div class="nameS">
            展厅地址
          </div>
          <el-row class="addsE">
            <el-col v-for="(t,i) in date.agentAddresses" :key="i" :span="24" class="li">
              <i class="iconfont">&#xe62e;</i>
              <span>
                展厅地址：{{ t.agentAddress }}  {{ t.telephone }}
              </span>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="bottomModuleBox">
        <el-row class="topMenuBox">
          <ul>
            <li v-if="dates.length !== 0" :class="oneListShow ? 'active':''" @click="oneChangeShow">
              <span>特价爆款</span>
            </li>
            <li v-if="date.product.length !== 0" :class="twoListShow ? 'active':''" @click="twoChangeShow">
              <span>产品系列</span>
            </li>
            <li :class="threeListShow ? 'active':''" @click="threeChangeShow">
              <span>
                品牌介绍
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
        <sale v-if="oneListShow" />
        <product-line v-if="twoListShow" :list="date.product" />
        <company v-if="threeListShow" :list="date" />
        <CompanyInfo v-if="fourListShow" />
        <evaluate v-if="fiveListShow" />
        <IntegralPay v-if="$store.state.supplier.IntegralPay" />
      </el-row>
      <!--      id是{{ $route.params.id }}-->
    </div>
  </div>
</template>

<script>
import { HomeService } from '@/services/home'
import banner from '@/components/supplier/banner'
import productLine from '@/components/supplier/productLine'
import CompanyInfo from '@/components/supplier/CompanyInfo'
import evaluate from '@/components/supplier/homeDecoration/evaluate'
import company from '@/components/supplier/homeDecoration/company'
import sale from '@/components/supplier/homeDecoration/sale'
import IntegralPay from '@/components/supplier/IntegralPay'
export default {
  layout: 'main',
  components: {
    IntegralPay,
    banner,
    productLine,
    CompanyInfo,
    evaluate,
    company,
    sale

  },
  data () {
    return {
      oneListShow: true, // 产品系列列表显示
      twoListShow: false, // 工程案列列表显示
      threeListShow: false, // 公司介绍列表显示
      fourListShow: false, // 公司资讯列表显示
      fiveListShow: false, // 评价留言显示
      date: [ ], // 主数据
      dates: [ ], // 特价爆款
      collectionFlag: true, // 点击收藏的锁
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
      // eslint-disable-next-line no-console
      console.log('详情', res.data)
      return { date: res.data || {} }
    })
  },
  created () {
    const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
    homeService.postHotProducts(this.$route.params.id).then((res) => { // 获取特价爆款
      console.log(res.data.results)
      this.dates = res.data.results
      if (res.data.results === '' || res.data.results.length === 0 || res.data.results === []) {
        this.oneListShow = false
        this.threeListShow = true
      }
    })
    if (this.date.videoUri !== null || undefined) {
      this.videoShowTwo = true
    } else {
      this.videoShowTwo = false
      this.bannerShow = true
      this.videoShow = false
    }
  },
  methods: {
    getSupplierList () { // 获取详情数据
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.SupplierListParticulars({ supplierId: this.$route.params.id }).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data)
        this.date = res.data
      })
    },
    getCollection () { // 点击收藏
      const _this = this
      if (!_this.$store.state.home.isLogin) {
        this.$message({
          message: '你还没登录哦~~~   去登录吧！',
          type: 'error'
        })
        setTimeout(() => {
          _this.$router.push('/login')
        }, 1000)

        return false
      }
      if (this.collectionFlag) {
        this.collectionFlag = false
        const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
        homeService.createCollection({ type: 0, id: this.$route.params.id }).then((res) => {
          // console.log(res)
          if (res.status === 200) {
            this.$message({
              message: '收藏成功',
              type: 'success'
            })
          }
        })
        this.getSupplierList()
        setTimeout(() => {
          this.collectionFlag = true
        }, 10000)
      } else {
        this.$message({ message: '你点击太快了哦~~~', type: 'warning'
        })
      }
    },
    createCollection () { // 取消收藏
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.deletelCollection({ type: 0, id: this.$route.params.id }).then((res) => {
        // console.log(res)
        if (res.status === 200) {
          this.$message({
            message: '取消成功',
            type: 'success'
          })
        }
      })
      this.getSupplierList()
    },
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
                .privilege{
                    width: 100%;
                    overflow: hidden;
                    margin-top: 20px;
                    span{
                        width:250px ;
                        height: 70px;
                        line-height: 70px;
                        text-align: center;
                        font-size: 28px;
                        color: #ffffFF;
                        display: inline-block;
                        background: $redColor;
                        cursor: pointer;
                        &:active{
                            background: #ff2100;
                        }
                    }
                }
            }
        }
        .consultingBox{
            width: 100%;
            margin:20px auto 0;
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
        .safeguard{
            padding: 0 30px;
            overflow: hidden;
            margin-top: 30px;
            .span{
                font-size: 14px;
                color: #818181;
                height: 26px;
                line-height: 26px;
                @include over;
                span{
                    color: #333333;
                    font-weight: bold;
                }
                em{
                    color: $redColor;
                }
            }
        }
        .topAdds{
            overflow: hidden;
            padding: 0 30px;
            margin-top: 50px;
            margin-bottom: 30px;
            .nameS{
                border-left:5px solid $redColor;
                height: 24px;
                line-height: 24px;
                color: #333333;
                font-size: 24px;
                text-indent: .6em;
                font-weight: bold;
            }
            .addsE{
                width: 100%;
                margin-top: 16px;
                .li{
                    width: 100%;
                    @include over;
                    font-size: 16px;
                    color: #474747;
                    height: 40px;
                    line-height: 40px;
                    margin-bottom: 10px;
                    i{
                        color: #999999;
                        font-size: 26px;
                        vertical-align: middle;
                    }
                    span{
                        vertical-align: middle;
                    }
                }
            }
        }
    }

</style>
