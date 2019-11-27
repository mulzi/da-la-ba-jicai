<template>
  <el-row class="two">
    <el-row id="contentText" class="content">
      <el-row>
        <contact :list="dateO" :tit="lisName" />
      </el-row>
      <el-row v-if="dateT !== undefined && dateT.length > 0">
        <contact-o v-for="(t,i) in dateT" :key="i + 3" :list="t" />
      </el-row>
      <el-row v-if="dateF !== undefined && dateF.length > 0">
        <Contactf :list="dateF" />
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import ContactO from './contact_o'
import Contact from './contact_t'
import Contactf from './contact_f'
import { HomeService } from '@/services/projectInfo'
export default {
  components: {
    Contact,
    ContactO,
    Contactf
  },
  data () {
    return {
      show: true,
      date: [],
      dateF: [],
      dateO: [],
      dateT: [],
      lisName: ''
    }
  },
  mounted () {
    this.getContact(this.$route.params.id)
  },
  methods: {
    changeIntegralPay () {
      this.$store.commit('home/changeIntegralPay')
    },
    getContact (pamars) { // 获取联系人列表
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getContact(pamars).then((res) => {
        console.log(res.data.result)
        if (res.data.result.contractor !== [] && res.data.result.contractor.length > 0) {
          this.date.push(res.data.result.contractor)
        }
        if (res.data.result.decoratingParty !== [] && res.data.result.decoratingParty.length > 0) {
          this.date.push(res.data.result.decoratingParty)
        }
        if (res.data.result.designer !== [] && res.data.result.designer.length > 0) {
          this.date.push(res.data.result.designer)
        }
        if (res.data.result.firstParty !== [] && res.data.result.firstParty.length > 0) {
          this.date.push(res.data.result.firstParty)
        }
        if (res.data.result.intelligence !== [] && res.data.result.intelligence.length > 0) {
          this.dateF.push(res.data.result.intelligence)
        }
        this.dateO = this.date.shift()
        this.lisName = this.dateO[0].categoryName
        this.dateT = this.date.splice(0)
        console.log('第一个数组', this.dateF)
        // console.log('第二个数组', this.dateT)
        // console.log('第二个数组', this.date)
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .two{
        width: 100%;
        overflow: hidden;
        .content{
            width: 100%;
            .list{
                margin-bottom: 20px;
                .topName{
                    width: 100%;
                    line-height: 30px;
                    border-bottom: 1px solid $borderE7;
                    span{
                        display: inline-block;
                        margin-bottom: 20px;
                        font-size: 30px;
                        color: #333333;
                        width: 200px;
                        border-left: 8px solid $redColor;
                        text-indent: 15px;
                        cursor: pointer;
                    }
                    i{
                        color: $redColor;
                        font-size: 30px;
                        transition: .5s ease-in-out;
                    }
                }
                &.active{
                    .topName{
                        i{
                            transform: rotateZ(90deg);
                            transition: .5s ease-in-out;
                        }
                    }
                }
            }
        }
    }
</style>
