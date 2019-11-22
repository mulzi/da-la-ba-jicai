<template>
  <el-row class="points">
    <el-row class="Balance">
      <span>当前余额：10积分</span>
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
          <el-row class="numBox">
            <el-row class="top">
              <el-radio  v-model="form.radioe" label="300">
                300元 <em>(300积分)</em>
              </el-radio>
              <el-radio  v-model="form.radioe" label="1000">
                1000元 <em>(1000积分+赠100积分)</em>
              </el-radio>
              <el-radio  v-model="form.radioe" label="2000">
                2000元 <em>(2000积分+赠300积分)</em>
              </el-radio>
            </el-row>
            <el-row class="input_b">
              <el-radio v-model="form.radioe" label="400">
               <span>
                 其他金额
               </span>
                <input type="text" v-model="form.radioes" placeholder="最低充值300积分">
                <span>
                  积分
                </span>
              </el-radio>
            </el-row>
          </el-row>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="bottom_line">
      <span>
        确认支付
      </span>
    </el-row>
  </el-row>
</template>

<script>
export default {
  layout: 'PurchasePoints',
  data () {
    return {
      form: {
        radio: '1',
        radioe: '300',
        radioes: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
