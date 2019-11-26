<template>
  <el-row class="indexBodybox">
    <banner :banners="home.banners" />
    <rolling-news :roll-news="home" />
    <el-row class="index_Decoration">
      <el-row :gutter="20">
        <el-col :span="8">
          <business title-name="工程商家推荐" src="/supplier/toolDecoration/" url="/supplier/" :list="home.projectSuppliersRecommend" />
        </el-col>
        <el-col :span="8">
          <business src="/supplier/homeDecorationChange/" url="/supplier/" title-name="家装商家推荐" :list="home.homeSuppliersRecommend" />
        </el-col>
        <el-col :span="8">
          <business title-name="设计施工方推荐" src="/user/designDecoration/" url="/user/" :list="home.userSupplier" />
        </el-col>
      </el-row>
    </el-row>
    <good-news :good-news="home" />
    <new-products :new-products="home.works" />
    <el-row class="homeNewsBox marginBottom100">
      <div class="title">
        <span>新闻资讯</span>
        <nuxt-link to="">
          更多>
        </nuxt-link>
      </div>
      <news :newslist="home.platformNews" />
      <news :newslist="home.industryNews" />
    </el-row>
    <!--    <supplier-img />-->
  </el-row>
</template>

<script>
import { HomeService } from '@/services/home'
import banner from '@/components/home/banner'
import rollingNews from '@/components/home/rollingNews'
import business from '@/components/home/business'
import goodNews from '@/components/home/goodNews'
import newProducts from '@/components/home/newProducts'
import news from '@/components/home/news'
// import supplierImg from '@/components/home/supplierImg'
export default {
  layout: 'main',
  middleware: 'authenticated',
  components: {
    banner,
    rollingNews,
    business,
    goodNews,
    newProducts,
    news
    // supplierImg
  },
  data () {
    return {
      home: {}
    }
  },
  asyncData (context) {
    const homeService = new HomeService(context)
    return homeService.home().then((res) => {
      // console.log('首页全部数据', res.data)
      return { home: res.data || {} }
    })
  }
  // async fetch (context) {
  //   const auth = new Auth(context)
  //   const { store } = context
  //   await store.commit('home/changeLogin', auth.isLogin())
  // }

}
</script>

<style lang="scss" scoped>
  .index_Decoration{
    width: 100%;
  }
  .homeNewsBox{
    width: 100%;
    margin-top: 40px;
    overflow: hidden;
    .title{
      height: 52px;
      line-height: 52px;
      background: linear-gradient(20deg,#58aedd ,#41bfcc);
      display: flex;
      display: -ms-flex;
      color: #ffffff;
      border-radius: 6px;
      span{
        -ms-flex: 1;
        flex: 1;
        display: inline-block;
        font-size: 18px;
        margin-left: 20px;
        font-weight: bold;
      }
      a{
        width: 60px;
        text-align: center;
        margin-right: 20px;
        font-size: 16px;
        color: #ffffff;
      }
    }
  }

</style>
