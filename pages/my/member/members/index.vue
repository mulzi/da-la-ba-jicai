<template>
  <el-row class="dlb_indexBody">
    <index-head />
    <el-row class="members">
      <el-col :span="24" class="not_member_title">
        VIP服务选择
      </el-col>
      <el-col :span="24" class="mb-5 ">
        <el-table
          :data="date"
          border
          style="width: 100%;"
          @row-click="rowClick"
          header-cell-style="background:#fff7f7;font-size:16px;height:74px"
        >
          <el-table-column
            label=""
            align="center"
          >
            <template slot-scope="scope">
              <img style="height: 20px;width: 20px;display: inline-block" :src="scope.row.pic" alt="">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="使用范围"
            prop="scope"
            align="center"
          />
          <el-table-column
            label="服务价格"
            style="width: 20%;"
            align="center"
          >
            <template slot-scope="scope">
              <span style="font-size: 26px">
                {{ scope.row.price }}
              </span>
              元
            </template>
          </el-table-column>
          <el-table-column
            label="浏览服务"
            prop="service"
            align="center"
          />
          <el-table-column
            label="加入方式"
            align="center"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                plain
                @click="postOrder({id: scope.row.id})"
              >
                立即开通
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="24" class="vipPower">
        <el-row class="title">
          VIP特权
        </el-row>
        <el-row class="list" v-html="remark">
          {{ remark }}
        </el-row>
      </el-col>
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
    <index-foot />
  </el-row>
</template>

<script>
import Qrcode from 'qrcode'
import { HomeService } from '@/services/myCentent'
import indexHead from '@/components/head/headTop'
import indexFoot from '@/components/indexFoot'

export default {
  components: {
    indexHead,
    indexFoot
  },
  data () {
    return {
      canvas: false,
      timer: null,
      canvasTwo: false,
      order: 0,
      remark: '',
      date: []
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    changeCanvas () {
      this.canvas = false
      clearInterval(this.timer)
      setTimeout(() => {
        this.canvasTwo = false
      }, 300)
    },
    qrCode (url) { // 生成二维码
      Qrcode.toCanvas(this.$refs.qrcode, url, function (error) {
        console.log(error)
      })
    },
    rowClick (row, column, event) {
      const that = this
      that.remark = row.remark
    },
    get () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getVipBuyList().then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          this.remark = res.data.results[0].remark
          this.date = res.data.results
        }
      })
    },
    postOrder (params) {
      this.$nuxt.$loading.start()
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.postVipOrder(params).then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          this.buyPayment({ tradeId: res.data.result, payType: '0302' })
        }
      })
    },
    buyPayment (params) { // 创建购买支付链接
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.buyPayment(params).then((res) => {
        if (res.status === 200) {
          // console.log(res, '支付链接')
          this.$nuxt.$loading.finish()
          this.qrCode(res.data.payCode)
          this.canvas = true
          setTimeout(() => {
            this.canvasTwo = true
          }, 200)
          this.timer = setInterval(() => {
            this.buyStatus({ paymentId: res.data.paymentId })
          }, 1000)
        }
      })
    },
    buyStatus (params) { // 查询购买状态
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.buyStatus(params).then((res) => {
        console.log(res.data.result)
        if (!res.data.result) {
        } else {
          this.changeCanvas()
          clearInterval(this.timer)
          this.$message({
            message: '恭喜你~~~ 购买成功',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .codeBox{
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 800;
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
</style>
<style lang="scss">
.members{
  width: 1200px;
  margin: 150px auto;
  font-size: 18px;
  .not_member_title{
    text-align: center;
    font-size: 26px;
    color: #555555;
    margin-bottom: 20px;
  }
  .vipPower{
    margin-top: 100px;
    text-align: center;
    .title{
      font-size: 26px;
      color: #555555;
    }
    .list{
      width:350px ;
      margin: 20px auto;
       >p{
         text-align: left;
         font-size: 16px;
         margin-bottom: 14px;
       }
    }
  }
}
</style>
