<template>
  <el-row class="backGround-G">
    <div class="bg" @click="changeIntegralPay" />
    <el-row class="b_body">
      <el-row class="topClose">
        <span>支付查看</span>
        <em class="el-icon-close" @click="changeIntegralPay" />
      </el-row>
      <el-row class="bo_body">
        <el-row class="one">
          选择支付方式
        </el-row>
        <el-row class="two">
          <i class="iconfont">&#xe6d1;</i>
          <em class="iconfont">&#xe67c;</em>
          <span>积分支付</span>
        </el-row>
        <el-row class="three">
          应支付：<i>{{ date.price }}</i>积分  <span>你目前共有{{ date.balance }}个积分</span>
        </el-row>
        <el-row class="four">
          积分不够，<nuxt-link to="/my/PurchasePoints">
            点击这里充值
          </nuxt-link> <span @click="changeTextShow">如何赚取积分？</span>
        </el-row>
      </el-row>
      <el-row v-if="textShow" class="hideText">
        <el-row class="textOne">
          <el-row class="tit">
            发布信息
          </el-row>
          <el-row class="contentS">
            <el-col :span="17">
              1. 发布项目信息 送100个积分
            </el-col>
            <el-col :span="7">
              <span @click="$store.commit('release/changeNumber', 0)">
                <nuxt-link to="/release">
                  点击这里去发布
                </nuxt-link>
              </span>
            </el-col>
          </el-row>
          <el-row class="contentS">
            <el-col :span="17">
              2. 发布招采购信息 送100个积分
            </el-col>
            <el-col :span="7">
              <span @click="$store.commit('release/changeNumber', 1)">
                <nuxt-link to="/release">
                  点击这里去发布
                </nuxt-link>
              </span>
            </el-col>
          </el-row>
          <el-row class="contentS">
            <el-col :span="17">
              3. 发布招募招标 送100个积分
            </el-col>
            <el-col :span="7">
              <span @click="$store.commit('release/changeNumber', 2)">
                <nuxt-link to="/release">
                  点击这里去发布
                </nuxt-link>
              </span>
            </el-col>
          </el-row>
          <el-row class="contentS">
            <el-col :span="17">
              4. 发布成功案例 送50积分
            </el-col>
            <el-col :span="7">
              <span @click="$store.commit('release/changeNumber', 3)">
                <nuxt-link to="/release">
                  点击这里去发布
                </nuxt-link>
              </span>
            </el-col>
          </el-row>
          <el-row class="tit">
            商家入驻
          </el-row>
          <el-row class="contentS">
            <el-col :span="17">
              1. 家装供应商 送200积分
            </el-col>
            <el-col :span="7">
              <a target="_blank" href="http://merchant.dalabajicai.com/#/register">
                点击这里去入驻
              </a>
            </el-col>
          </el-row>
          <el-row class="contentS">
            <el-col :span="17">
              2. 发布招采购信息 送100个积分
            </el-col>
            <el-col :span="7">
              <a target="_blank" href="http://merchant.dalabajicai.com/#/register">
                点击这里去入驻
              </a>
            </el-col>
          </el-row>
          <el-row class="contentS">
            <el-col :span="17">
              3. 发布招募招标 送100个积分
            </el-col>
            <el-col :span="7">
              <a target="_blank" href="http://merchant.dalabajicai.com/#/register">
                点击这里去入驻
              </a>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="sub">
        <span @click="consumeScore">确定支付</span>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/home'
export default {
  name: 'IntegralPay',
  // eslint-disable-next-line vue/require-prop-types
  props: ['id'],
  data () {
    return {
      date: '',
      textShow: false
    }
  },
  mounted () {
    this.postSCore()
  },
  methods: {
    changeTextShow () {
      this.textShow = !this.textShow
    },
    changeIntegralPay () {
      this.$store.commit('projectInfo/changeIntegralPay')
    },
    postSCore () { // 查询账户余额及积分价格
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.postScore(this.$store.state.projectInfo.projectClass).then((res) => {
        this.date = res.data.result
        console.log(res.data)
      })
    },
    consumeScore () { // 积分消费
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.consumeScore({ productId: this.$store.state.projectInfo.projectClass, dataId: this.$store.state.projectInfo.oneID }).then((res) => {
        console.log('S1', res)
        if (res.status === 200) {
          this.$message({
            message: '支付成功',
            type: 'success'
          })
        }
        this.$store.commit('projectInfo/changeIntegralPay')
        this.$store.commit('projectInfo/changeOne')
        this.$nextTick(() => {
          this.$store.commit('projectInfo/changeTwo')
        })
        if (this.$store.state.projectInfo.projectClass === 4) {
          this.$store.commit('projectInfo/changeProDetails')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">

  .backGround-G{
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 900;
    top: 0;
    left: 0;
    .bg{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 902;
      background: rgba(0,0,0,.4);
    }
    .b_body{
      width: 450px;
      max-height: 90%;
      overflow-y: auto;
      z-index: 906;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: #ffffff;
      .topClose{
        width: 100%;
        height:52px;
        line-height: 52px;
        background:$redColor ;
        overflow: hidden;
        span{
          width: 50%;
          float: left;
          display: block;
          color: #ffffff;
          font-size: 18px;
          margin-left: 20px;
        }
        em{
          height: 36px;
          width: 36px;
          display: block;
          float: right;
          font-size: 30px;
          line-height: 36px;
          text-align: center;
          margin-right: 10px;
          color: #ffffff;
          margin-top: 8px;
          cursor: pointer;
        }
      }
      .bo_body{
        padding: 0 30px;
        overflow: hidden;
        .one{
          margin-top:40px ;
          color: #333333;
          font-size: 14px;
        }
        .two{
          margin-top: 24px;
          height: 52px;
          width: 162px;
          box-sizing: border-box;
          border: 1px solid rgba(255, 0, 0, 0.64);
          line-height: 52px;
          font-size: 0;
          i{
            font-size: 20px;
            color: #999999;
            vertical-align: middle;
            margin-left: 10px;
          }
          em{
            color: #ff8a00;
            font-size: 30px;
            margin-left: 10px;
            vertical-align: middle;
          }
          span{
            font-size: 18px;
            color: #333333;
            font-weight: bold;
            vertical-align: middle;
            margin-left: 6px;
          }
        }
        .three{
          width: 100%;
          margin-top: 30px;
          font-size: 14px;
          color: #333333;
          i{
            color: $redColor;
          }
          span{
            margin-left: 8px;
            color: #999999;
            font-size: 12px;
          }
        }
        .four{
          width: 100%;
          margin-top: 18px;
          color: #999999;
          font-size: 12px;
          a{
            color: $redColor;
          }
          span{
            margin-left: 8px;
            color: $redColor;
            cursor: pointer;
          }
        }
      }
      .hideText{
        padding: 0 30px;
        margin:24px 0 ;
        .textOne{
          width: 100%;
          .tit{
            width: 100%;
            font-size: 24px;
            color: #333333;
            margin-bottom: 14px;
          }
          .contentS{
            width: 100%;
            font-size: 13px;
            color: #333333;
            margin-bottom: 12px;
            a{
              display: block;
              color: $redColor;
              text-align: right;
            }
          }
        }
      }
      .sub{
        padding: 0 30px;
        margin: 30px auto;
        span{
          width:122px;
          height: 38px;
          line-height: 38px;
          text-align: center;
          font-size: 14px;
          color: #ffffff;
          display: block;
          background: $redColor;
          cursor: pointer;
          &:hover{
            background: rgba(223, 29, 15, 0.87);
            transition: .3s ease-in-out;
            display: block;
          }
        }
      }
    }
  }
</style>
