<template>
  <el-row class="two">
    <el-row class="content">
      <contacta v-if="dateA !== undefined && dateA.length > 0" :list="dateA" />
      <contactb v-if="dateB !== undefined && dateB.length > 0" :list="dateB" />
      <contactc v-if="dateC !== undefined && dateC.length > 0" :list="dateC" />
      <contactd v-if="dateD !== undefined && dateD.length > 0" :list="dateD" />
      <contacte v-if="dateE !== undefined && dateE.length > 0" :list="dateE" />
    </el-row>
    <integral-pay @clickTwo="getContactTwo" v-if="this.$store.state.projectInfo.IntegralPay" />
  </el-row>
</template>

<script>
import contacta from './contact_a'
import contactb from './contact_b'
import contactc from './contact_c'
import contactd from './contact_d'
import contacte from './contact_e'
import IntegralPay from '@/components/projectInfo/IntegralPay'
import { HomeService } from '@/services/projectInfo'
export default {
  components: {
    contacta,
    contactb,
    contactc,
    contactd,
    contacte,
    IntegralPay
  },
  data () {
    return {
      show: true,
      date: [],
      dateA: [],
      dateB: [],
      dateC: [],
      dateD: [],
      dateE: [],
      lisName: ''
    }
  },
  mounted () {
    this.getContact()
  },
  methods: {
    getContact () { // 获取联系人列表
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getContact(this.$route.params.id).then((res) => {
        console.log(res.data.result, '联系人 ')
        if (res.data.result.intelligence !== [] && res.data.result.intelligence.length > 0) {
          this.dateE = res.data.result.intelligence
          this.$store.commit('projectInfo/changeDateE')
        }
        if (res.data.result.firstParty !== [] && res.data.result.firstParty.length > 0) {
          this.dateD = res.data.result.firstParty
          this.$store.commit('projectInfo/changeDateD')
        }
        if (res.data.result.designer !== [] && res.data.result.designer.length > 0) {
          this.dateC = res.data.result.designer
          this.$store.commit('projectInfo/changeDateC')
        }
        if (res.data.result.decoratingParty !== [] && res.data.result.decoratingParty.length > 0) {
          this.dateB = res.data.result.decoratingParty
          this.$store.commit('projectInfo/changeDateB')
        }
        if (res.data.result.contractor !== [] && res.data.result.contractor.length > 0) {
          this.dateA = res.data.result.contractor
          this.$store.commit('projectInfo/changeDateA')
        }
      })
    },
    getContactTwo () { // 获取联系人列表
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getContact(this.$route.params.id).then((res) => {
        console.log(res.data.result, '联系人成功 ')
        if (res.data.result.intelligence !== [] && res.data.result.intelligence.length > 0) {
          this.dateE = res.data.result.intelligence
        }
        if (res.data.result.firstParty !== [] && res.data.result.firstParty.length > 0) {
          this.dateD = res.data.result.firstParty
        }
        if (res.data.result.designer !== [] && res.data.result.designer.length > 0) {
          this.dateC = res.data.result.designer
        }
        if (res.data.result.decoratingParty !== [] && res.data.result.decoratingParty.length > 0) {
          this.dateB = res.data.result.decoratingParty
        }
        if (res.data.result.contractor !== [] && res.data.result.contractor.length > 0) {
          this.dateA = res.data.result.contractor
        }
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
