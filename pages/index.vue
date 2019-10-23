<template>
  <div class="indexBodybox">
    <banner :banners="home.banners" />
    <rolling-news :roll-news="home" />
    <div class="index_Decoration">
      <business title-name="工程商家推荐" :home-suppliers-recommend="home.homeSuppliersRecommend" />
      <business style="margin: 0 1.25%" title-name="家装商家推荐" :home-suppliers-recommend="home.projectSuppliersRecommend" />
      <business title-name="设计施工方推荐" :home-suppliers-recommend="home.homeSuppliersRecommend" />
    </div>
    <good-news :good-news="home" />
    <new-products :new-products="home" />
    <div class="homeNewsBox marginBottom130">
      <div class="title">
        <span>新闻资讯</span>
        <a href="">
          更多>
        </a>
      </div>
      <news :newslist="home.platformNews" />
      <news :newslist="home.industryNews" />
    </div>
    <!--    <supplier-img />-->
  </div>
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
      // console.log(res.data)
      return { home: res.data || {} }
    })
  }
  // async fetch (context) {
  //   const { store } = context
  //   const homeService = new HomeService(context)
  //   await homeService.home().then((res) => {
  //     store.commit('home/addhome', res.data)
  //   })
  // }

}
</script>

<style lang="scss" scoped>
  .index_Decoration{
    width: 100%;
    overflow: hidden;
    display: flex;
    display: -ms-flex;
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
