<template>
  <div class="companyIntroduction">
    <div class="ones">
      <div class="titName">
        <span>品牌概况</span>
      </div>
      <div class="bottomP">
        <P v-for="(t,i) in introduceList" :key="i">
          {{ t }}
        </P>
      </div>
    </div>
    <div class="ones">
      <div class="titName">
        <span>公司介绍</span>
      </div>
      <div class="bottomP">
        <P>
          誉辉陶瓷，始创于2007年，营销总部位于陶瓷之都—广东 • 佛山，面积近10000㎡，是一家集研发、设计、生产、销售为一体的现代化大型综合企业。广东省内拥有四大生产基地，占地面积超过3000亩，拥有数十条世界先进的现代化生产线，产品涵盖广泛：大瓷板、12°缎光砖、1336大理石、全瓷墙砖、厨卫地砖、完全玻化石等全品类共计1000多款花色品种及配套。先后通过ISO14001环境标志管理体系认证、中国国.
        </P>
        <P>
          誉辉陶瓷，始创于2007年，营销总部位于陶瓷之都—广东 • 佛山，面积近10000㎡，是一家集研发、设计、生产、销售为一体的现代化大型综合企业。广东省内拥有四大生产基地，占地面积超过3000亩，拥有数十条世界先进的现代化生产线，产品涵盖广泛：大瓷板、12°缎光砖、1336大理石、全瓷墙砖、厨卫地砖、完全玻化石等全品类共计1000多款花色品种及配套。先后通过ISO14001环境标志管理体系认证、中国国家强制性产品认证（简称3C认证）、ISO9001：2015国际质量管理体系认证。
        </P>
      </div>
    </div>
    <div class="ones">
      <div class="titName">
        <span>公司资质</span>
      </div>
      <div class="banner">
        <el-carousel :interval="4000" type="card" height="340px">
          <el-carousel-item v-for="(item,index) in banner" :key="index">
            <img preview :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="ones">
      <div class="titName">
        <span>产品优势</span>
      </div>
      <div class="bottomP">
        <P>
          誉辉陶瓷，始创于2007年，营销总部位于陶瓷之都—广东 • 佛山，面积近10000㎡，是一家集研发、设计、生产、销售为一体的现代化大型综合企业。广东省内拥有四大生产基地，占地面积超过3000亩，拥有数十条世界先进的现代化生产线，产品涵盖广泛：大瓷板、12°缎光砖、1336大理石、全瓷墙砖、厨卫地砖、完全玻化石等全品类共计1000多款花色品种及配套。先后通过ISO14001环境标志管理体系认证、中国国.
        </P>
        <P>
          誉辉陶瓷，始创于2007年，营销总部位于陶瓷之都—广东 • 佛山，面积近10000㎡，是一家集研发、设计、生产、销售为一体的现代化大型综合企业。广东省内拥有四大生产基地，占地面积超过3000亩，拥有数十条世界先进的现代化生产线，产品涵盖广泛：大瓷板、12°缎光砖、1336大理石、全瓷墙砖、厨卫地砖、完全玻化石等全品类共计1000多款花色品种及配套。先后通过ISO14001环境标志管理体系认证、中国国家强制性产品认证（简称3C认证）、ISO9001：2015国际质量管理体系认证。
        </P>
      </div>
    </div>
    <div class="ones">
      <div class="titName">
        <span>施工说明</span>
      </div>
      <div class="bottomP">
        <P>
          誉辉陶瓷，始创于2007年，营销总部位于陶瓷之都—广东 • 佛山，面积近10000㎡，是一家集研发、设计、生产、销售为一体的现代化大型综合企业。广东省内拥有四大生产基地，占地面积超过3000亩，拥有数十条世界先进的现代化生产线，产品涵盖广泛：大瓷板、12°缎光砖、1336大理石、全瓷墙砖、厨卫地砖、完全玻化石等全品类共计1000多款花色品种及配套。先后通过ISO14001环境标志管理体系认证、中国国.
        </P>
        <P>
          誉辉陶瓷，始创于2007年，营销总部位于陶瓷之都—广东 • 佛山，面积近10000㎡，是一家集研发、设计、生产、销售为一体的现代化大型综合企业。广东省内拥有四大生产基地，占地面积超过3000亩，拥有数十条世界先进的现代化生产线，产品涵盖广泛：大瓷板、12°缎光砖、1336大理石、全瓷墙砖、厨卫地砖、完全玻化石等全品类共计1000多款花色品种及配套。先后通过ISO14001环境标志管理体系认证、中国国家强制性产品认证（简称3C认证）、ISO9001：2015国际质量管理体系认证。
        </P>
      </div>
    </div>
    <div class="ones">
      <div class="titName">
        <span>联系方式</span>
      </div>
      <div class="aboutList">
        <ul>
          <li>
            <div class="li">
              <span>联系人：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>部门：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>职位：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>电话：</span><em v-if="hideMessage" class="red">***</em><em v-if="showMessage" class="red">18216633973</em>
            </div>
          </li>
          <li>
            <div class="li">
              <span>联系人：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>部门：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>职位：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>电话：</span><em v-if="hideMessage" class="red">***</em><em v-if="showMessage" class="red">18216633973</em>
            </div>
          </li>
          <li>
            <div class="li">
              <span>联系人：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>部门：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>职位：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>电话：</span><em v-if="hideMessage" class="red">***</em><em v-if="showMessage" class="red">18216633973</em>
            </div>
          </li>
          <li>
            <div class="li">
              <span>联系人：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>部门：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>职位：</span><em v-if="hideMessage">***</em><em v-if="showMessage">王二麻子</em>
            </div>
            <div class="li">
              <span>电话：</span><em v-if="hideMessage" class="red">***</em><em v-if="showMessage" class="red">18216633973</em>
            </div>
          </li>
        </ul>
      </div>
      <div class="clickShow">
        <span>积分查看</span>
      </div>
      <div class="tips">
        联系我时请说是在大喇叭集采网上看到的，谢谢！
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
      lists: this.list,
      introduceList: [ ],
      banner: [
        '/_nuxt/assets/img/0123.jpg',
        'https://dalabajicai-prod.oss-cn-chengdu.aliyuncs.com/files/dalaba/file/80ADA7777A9B41D7AD04DEF7658A0C22.jpg?x-oss-process=style/watermark\n',
        'https://dalabajicai-prod.oss-cn-chengdu.aliyuncs.com/files/dalaba/file/892912EF2BFA427CABA3385ECD3FF236.png?x-oss-process=style/watermark\n',
        '/_nuxt/assets/img/0123.jpg',
        '/_nuxt/assets/img/0123.jpg',
        '/_nuxt/assets/img/0123.jpg'],
      hideMessage: true,
      showMessage: false

    }
  },
  mounted () {
    this.introduceList = this.list.introduce.split('\n')
    console.log(this.introduceList)
  }
}
</script>

<style scoped lang="scss">
  .companyIntroduction{
    width: 100%;
    overflow: hidden;
    .ones{
      padding: 30px;
      background: #ffffff;
      margin-bottom: 20px;
      .titName{
        width: 100%;
        border-bottom: 1px solid $borderE7;
        span{
          display: inline-block;
          text-indent: .6em;
          border-left: 8px solid $redColor;
          color: #333333;
          font-size: 22px;
          margin-bottom: 18px;
          height: 22px;
          line-height: 22px;
        }
      }
      .bottomP{
        width: 100%;
        margin: 30px auto 0;
        p{
          line-height: 26px;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0.05em;
          text-indent: 2em;
          margin-bottom: 20px;
        }
      }
      .banner{
        height: 340px;
        margin: 20px auto;
        .el-carousel__item--card{
          background: #ffffff;
          img{
            display: block;
            height: 340px;
            margin: 0 auto;
            width: auto;

          }
        }
      }
      .aboutList{
        width: 100%;
        margin-top: 20px;
        ul{
          overflow: hidden;
          width: 100%;
          li{
            float: left;
            width: 49%;
            margin-right: 2%;
            margin-bottom: 10px;
            background: #f4f4f4;
            height: 56px;
            line-height: 56px;
            color: #333333;
            font-size: 0;
            display: flex;
            &:nth-child(2n){
              margin-right: 0;
            }
            .li{
              flex: 1;
              font-size: 16px;
              display: flex;
              justify-items: center;
              align-items: center;
              .red{
                color: $redColor;
                font-weight: bold;
              }
              &:first-child{
                margin-left: 20px;
              }
              &:last-child{
                margin-right: 20px;
              }
            }
          }
        }
      }
      .clickShow{
        width: 100%;
        overflow: hidden;
        margin-top: 20px;
        span{
          display: block;
          width: 160px;
          height: 48px;
          line-height: 48px;
          background: $redColor;
          color: #ffffff;
          text-align: center;
          font-size: 16px;
          cursor: pointer;
          &:active{
            background: #ff4200;
          }
        }
      }
      .tips{
        width: 100%;
        color: #333333;
        font-size: 16px;
        margin: 20px 0 40px;
      }
    }
  }
</style>
