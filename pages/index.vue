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
  },
  head () {
    return {
      title: '大喇叭集采-工程项目采购信息供需服务平台',
      meta: [
        { hid: 'keyworks', name: 'keyworks', content: '大喇叭集采,材料供应商,设计施工方,建材市场价,工程作品精选' },
        { hid: 'description', name: 'description', content: '大喇叭集采网一家针对业主、设计方、施工方、材料方多方信息交互、信用体系建立的大数据供需平台；同时大喇叭为家装业主提供材料询价砍价服务，大喇叭集采网每天更新上千条招标信息,工程项目信息是行业最全、覆盖地区及招标行业最广的专业平台,众多用户精准情报,项目采购信息,工程项目信息能通过平台发布；大喇叭集采网已成为业主单位、施工单位、设计单位进行招标采购的首选平台,让工程找供应商,供应商找工程,让工程变得更简单,成为您做工程业务的好帮手。' }
      ]
    }
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
