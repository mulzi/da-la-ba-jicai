<template>
  <el-row class="companyIntroduction">
    <el-row v-if="dates.companyIntroduce" class="ones">
      <div class="titName">
        <span>公司介绍</span>
      </div>
      <div class="bottomP">
        <p v-for="(t,i) in companyIntroduce" :key="i">
          {{ t }}
        </p>
      </div>
    </el-row>
    <el-row v-if="dates.credentialImages" class="ones">
      <div class="titName">
        <span>公司资质</span>
      </div>
      <el-row class="banner" v-viewer>
        <el-carousel :interval="4000" type="card" height="340px">
          <el-carousel-item v-for="(item,index) in dates.credentialImages" :key="index">
            <img :src="item.pic" alt="">
          </el-carousel-item>
        </el-carousel>
      </el-row>
    </el-row>
    <el-row v-if="dates.contacts" class="ones">
      <div class="titName">
        <span>联系方式</span>
      </div>
      <div class="aboutList">
        <ul>
          <li v-for="(t,i) in dates.contacts" :key="i">
            <div class="li">
              <span>联系人：</span><em>{{ t.name }}</em>
            </div>
            <div class="li">
              <span>部门：</span><em>{{ t.department }}</em>
            </div>
            <div class="li">
              <span>职位：</span><em>{{ t.positionLevel }}</em>
            </div>
            <div class="li">
              <span>电话：</span><em class="red">{{ t.phone }}</em>
            </div>
          </li>
        </ul>
      </div>
      <div class="clickShow" v-if="dates.contacts[0].flag">
        <span @click="showPay">积分查看</span>
      </div>
      <div class="tips">
        联系我时请说是在大喇叭集采网上看到的，谢谢！
      </div>
    </el-row>
    <integral-pay @clickTwo="getDate" :id="dates.contacts[0].id" v-if="this.$store.state.projectInfo.IntegralPay" />
  </el-row>
</template>

<script>
import IntegralPay from '@/components/user/integralPay'
import { HomeService } from '@/services/home'

export default {
  components: {
    IntegralPay
  },
  data () {
    return {
      dates: '',
      companyIntroduce: [] // 公司介绍
    }
  },
  created () {
    this.getDate()
  },
  mounted () {

  },
  methods: {
    getDate () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getUserDetails({ supplierId: this.$route.params.id }).then((res) => {
        this.dates = res.data.result
        this.companyIntroduce = res.data.result.companyIntroduce.split('\n')
        // console.log(this.dates, 'ssssssssss')
      })
    },
    showPay () {
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
      this.$store.commit('projectInfo/changeIntegralPay')
    }
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
              font-size: 15px;
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
                min-width: 180px;
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
      &:last-child{
        margin-bottom: 100px;
      }
    }
  }
</style>
