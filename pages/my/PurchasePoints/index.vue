<template>
  <el-row class="points">
    <el-row class="Balance">
      <span>当前余额：{{ balance }}积分</span>
    </el-row>
    <el-row class="way">
      <span>充值方式</span>
    </el-row>
    <el-row class="otherPay">
      <span>第三方支付</span>
    </el-row>
    <el-row class="formBox">
      <el-form :model="form" ref="ruleForm" label-width="100px">
        <el-row class="payWay">
          <el-radio v-model="form.radio" label="1">
            <img src="@/assets/img/zfb.png" alt="">
            <span>
              支付宝支付
            </span>
          </el-radio>
          <el-radio v-model="form.radio" label="2">
            <img src="@/assets/img/wx.png" alt="">
            <span>微信支付</span>
          </el-radio>
        </el-row>
        <el-row class="moneyNum">
          <el-row class="tit">
            请选择充值的金额
          </el-row>
          <el-radio-group v-model="form.radioe" class="numBox">
            <el-row class="top">
              <el-radio label="300">
                300元 <em>(300积分)</em>
              </el-radio>
              <el-radio label="1000">
                1000元 <em>(1000积分+赠100积分)</em>
              </el-radio>
              <el-radio label="2000">
                2000元 <em>(2000积分+赠300积分)</em>
              </el-radio>
            </el-row>
            <el-row class="input_b">
              <el-radio label="400">
                <span>
                  其他金额
                </span><input type="text" v-if="form.radioe === '400'" v-model="form.radioes" placeholder="最低充值300积分"><span>积分</span>
              </el-radio>
            </el-row>
          </el-radio-group>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="bottom_line">
      <span @click="onSub">
        确认支付
      </span>
    </el-row>
    <transition name="scle">
      <el-row class="codeBox" v-show="canvas">
        <div class="bg" @click="changeCanvas" v-if="canvasTwo" />
        <el-row class="codeBody">
          <el-row class="topTit">
            <el-col :span="20">
              扫码支付
            </el-col>
            <el-col :span="4" class="right">
              <span class="el-icon-close" @click="changeCanvas" />
            </el-col>
          </el-row>
          <el-row class="canv">
            <canvas id="canvas" ref="qrcode" class="canvas" />
          </el-row>
        </el-row>
      </el-row>
    </transition>
    <points v-if="this.$store.state.myCentent.pointDes" />
  </el-row>
</template>

<script>
import Qrcode from 'qrcode'
import { HomeService } from '@/services/myCentent'
import points from '@/components/my/points/points'
export default {
  components: {
    points
  },
  layout: 'PurchasePoints',
  data () {
    return {
      balance: 0,
      order: 0,
      canvas: false,
      canvasTwo: false,
      form: {
        radio: '1',
        radioe: '300',
        radioes: null
      }
    }
  },
  mounted () {
    this.getBalance()
  },
  methods: {
    changeCanvas () {
      this.canvas = !this.canvas
      setTimeout(() => {
        this.canvasTwo = !this.canvasTwo
      }, 300)
    },
    qrCode (url) { // 生成二维码
      Qrcode.toCanvas(this.$refs.qrcode, url, function (error) {
        console.log(error)
      })
    },
    onSub () {
      const text = /^[0-9]+$/
      if (this.form.radioe === '400') {
        if (this.form.radioes === null) {
          this.$message({
            message: '你没有输入充值金额',
            type: 'error'
          })
          // eslint-disable-next-line valid-typeof
        } else if (!text.test(this.form.radioes)) {
          this.$message({
            message: '输入错误！请重新输入充值金额',
            type: 'error'
          })
        } else if (this.form.radioes < 300) {
          this.$message({
            message: '充值金额不能低于300！请重新输入充值金额',
            type: 'error'
          })
        } else {
          this.buyOrder({ money: this.form.radioes * 100 })
          console.log(this.form.radioes)
        }
      } else {
        this.form.radioes = this.form.radioe
        this.buyOrder({ money: this.form.radioes * 100 })
        // console.log(this.form.radioes)
      }
    },
    buyOrder (params) { // 创建订单
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.buyOrder(params).then((res) => {
        if (res.status === 200) {
          this.order = res.data.result
          console.log(res)
          this.buyPayment({ tradeId: res.data.result, payType: '0302' })
        }
      })
    },
    buyPayment (params) { // 创建购买支付链接
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.buyPayment(params).then((res) => {
        if (res.status === 200) {
          console.log(res, '支付链接')
          this.order = res.data.paymentId
          this.qrCode(res.data.payCode)
          this.changeCanvas()
          this.buyStatus({ paymentId: res.data.paymentId })
        }
      })
    },
    buyStatus (params) { // 查询购买状态
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.buyStatus(params).then((res) => {
        console.log(res.data.result)
        if (!res.data.result) {
          setTimeout(() => {
            this.buyStatus({ paymentId: this.order })
          }, 1000)
        } else {
          this.changeCanvas()
          window.location.reload()
        }
      })
    },
    getBalance () { // 获取积分
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getBalance().then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.balance = res.data.result.balance
        }
      })
    }
  }

}
</script>

<style lang="scss">
  .points {
    width: 62.5%;
    max-width: 1200px;
    margin: 30px auto;

    .Balance {
      font-size: 14px;
      color: #333333;

      span {
        display: inline-block;
        margin-left: 80px;
      }
    }

    .way {
      font-size: 18px;
      font-weight: bold;
      color: #333333;
      margin-top: 20px;

      span {
        display: inline-block;
        margin-left: 80px;
      }
    }

    .otherPay {
      width: 100%;
      height: 40px;
      margin-top: 30px;
      line-height: 40px;
      border-bottom: 1px solid $redColor;

      span {
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: absolute;
        bottom: -1px;
        border: 1px solid $redColor;
        border-bottom-color: #ffffff;
        left: 80px;
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        font-size: 14px;
        font-weight: bold;
      }
    }

    .formBox {
      width: 85%;
      max-width: 1000px;
      margin: 30px auto 0;
      background: #f0f0f0;

      .payWay {
        width: 100%;
        border-bottom: 1px dashed #a3a3a3;
        margin: 50px 0 0;
        padding-left: 40px;
        display: flex;
        display: -ms-flex;

        .el-radio {
          display: flex;
          display: -ms-flex;
          align-items: center;
          justify-items: center;
          margin-right: 50px;
          margin-bottom: 30px;

          .el-radio__label {
            margin-left: 10px;
            display: flex;
            display: -ms-flex;
            align-items: center;

            span {
              margin-left: 6px;
            }
          }
        }
      }
      .moneyNum{
        padding: 0 30px;
        margin: 30px auto;
        .tit{
          font-size: 16px;
          font-weight: bold;
          color: #333333;
        }
        .numBox{
          padding: 0 40px;
          margin: 20px auto;
          .top{
            font-size: 16px;
            color: #333333;
            em{
              color: #999999;
            }
          }
          .input_b{
            margin-top: 20px;
            input{
              height: 32px;
              line-height: 32px;
              width: 160px;
              color: #333333;
              font-size: 14px;
              margin: 0 6px;
              border-radius: 4px;
              text-indent: 10px;
              &::placeholder{
                color: #999999;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    .bottom_line{
      width: 100%;
      border-bottom: 2px solid #d1d1d1;
      margin:40px 0 100px;
      span{
        width: 120px;
        height: 36px;
        line-height: 36px;
        background: $redColor;
        text-align: center;
        color: #ffffFF;
        font-size: 14px;
        margin-left: 180px;
        border-radius: 4px;
        margin-bottom: 40px;
        display: inline-block;
        cursor: pointer;
      }
    }
    .codeBox{
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: fixed;
      .bg{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0, .5);
        position: absolute;
        z-index: 900;
        top: 0;
        left: 0;
      }
      .codeBody{
        width: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: #ffffFF;
        z-index: 910;
        .topTit{
          padding: 0 30px;
          height: 60px;
          line-height: 60px;
          background: $redColor;
          font-size: 18px;
          color: #ffffFF;
          .right{
            text-align: right;
            span{

              display: inline-block;
              cursor: pointer;
              font-size: 26px;
              height: 36px;
              line-height: 36px;
              text-align: center;
              width: 36px;
              border-radius: 50%;
              &:hover{
                transition: .2s ease-in-out;
                background: rgba(255,255,255, .15);
              }
            }
          }
        }
        .canv{
          .canvas{
            display: block;
            height: 148px;
            width: 148px;
            margin: 40px auto;
          }
        }
      }
    }
  }
</style>
