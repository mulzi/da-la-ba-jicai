<template>
  <el-row class="bo_list">
    <li v-for="(t,i) in date" :key="i">
      <el-row class="boxList">
        <el-row class="companyName">
          {{ t.companyName }}
        </el-row>
        <el-row class="bo_text">
          <p>类别：{{ t.categoryName }}</p>
          <p>地址：{{ t.address }}</p>
        </el-row>
        <div class="clickLook" @click="changeIntegralPay">
          点击查看
        </div>
      </el-row>
    </li>
  </el-row>
</template>

<script>
// import $ from 'jquery'
// import { HomeService } from '@/services/projectInfo'
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['dates'],
  data () {
    return {
      date: []

    }
  },
  mounted () {
    this.dates.forEach((t) => {
      this.date.push(...t)
    })
    console.log('最后s', this.date)
  },
  methods: {
    changeIntegralPay () {
      this.$store.commit('projectInfo/changeTwoID')
      this.$store.commit('home/changeIntegralPay')
    }
  }
}
</script>

<style scoped lang="scss">
        .bo_list{
            width: 100%;
            margin-top: 20px;
            overflow: hidden;
            li{
                float: left;
                width: 32%;
                margin-right: 2%;
                margin-bottom: 20px;
                box-sizing: border-box;
                border: 1px solid $borderE7;
                .boxList{
                    margin: 30px 0;
                    padding: 0 30px;
                    position: relative;
                    overflow: hidden;
                    .companyName{
                        width: 100%;
                        @include over;
                        font-size: 20px;
                        color: #333333;
                        position: relative;
                    }
                    .bo_text{
                        width: 100%;
                        margin-top: 40px;
                        position: relative;
                        &::after{
                            content: "";
                            display: block;
                            position: absolute;
                            top: -20px;
                            left: 0;
                            height: 2px ;
                            width: 30px;
                            background: #333333;
                        }
                        p{
                            margin-bottom:20px ;
                            font-size: 17px;
                            color: #666666;
                            @include over;
                        }
                    }
                    .clickLook{
                        width: 100px;
                        height: 40px;
                        line-height: 40px;
                        font-size: 18px;
                        color: $redColor;
                        background: #efefef;
                        text-align: center;
                        position: absolute;
                        bottom: 20px;
                        right: 30px;
                        cursor: pointer;
                    }
                }
                &:nth-child(3n){
                    margin-right: 0;
                }
                &:hover{
                    background: $redColor;
                    transition: .3s ease-in-out;
                    .boxList{
                        .companyName{
                            color: #ffffff;
                        }
                        .bo_text{
                            p{
                                color: #ffffff;
                            }
                            &::after{
                                background: #ffffff;
                            }
                        }
                        .clickLook{
                            background: transparent ;
                            border: 1px solid #ffffff;
                            color: #ffffff;
                            box-sizing: border-box;
                            transition: .3s ease-in-out;
                        }
                    }
                }
            }
        }
</style>
