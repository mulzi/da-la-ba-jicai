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
            <nuxt-link to="/user">
              设计施工方
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>装修设计</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="moiveImgBox">
        <el-row class="padding30">
          <el-col class="l_banner">
            <banner />
          </el-col>
        </el-row>
        <el-row class="consultingBox">
          <span @click="messageShow">咨询留言</span>
          <span v-if="date.collection === false" @click="getCollection">加入收藏</span>
          <span v-if="date.collection === true" @click="createCollection">取消收藏</span>
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
      <message-module-one v-if="$store.state.home.messageShow" />
      <!--      id是{{ $route.params.id }}-->
    </div>
  </div>
</template>

<script>
import { HomeService } from '@/services/home'
import banner from '@/components/user/banner'
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
    return {
      oneListShow: true, // 产品系列列表显示
      twoListShow: false, // 工程案列列表显示
      threeListShow: false, // 公司介绍列表显示
      fourListShow: false, // 公司资讯列表显示
      fiveListShow: false, // 评价留言显示
      date: [ ], // 主数据
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
      console.log(res.data)
      return { date: res.data }
    })
  },
  created () {
    // const that = this
    // that.getSupplierList()
    if (this.date.videoUri !== null || undefined) {
      this.videoShowTwo = true
    } else {
      this.videoShowTwo = false
      this.bannerShow = true
      this.videoShow = false
    }
  },
  mounted () {
  },
  methods: {
    getSupplierList () { // 获取详情数据
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.SupplierListParticulars({ supplierId: this.$route.params.id }).then((res) => {
        // console.log(res.data)
        this.date = res.data
      })
    },
    getCollection () { // 点击收藏
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
        }, 5000)
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
    messageShow () { // 切换留言框
      this.$store.commit('home/changeMesShow')
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

</style>
