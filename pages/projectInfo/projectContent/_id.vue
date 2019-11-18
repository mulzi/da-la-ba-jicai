<template>
  <div class="supplierBody">
    <div class="bodyBox">
      <el-row class="HeaderBreadcrumb">
        <el-col :span="24">
          <div class="breadcrumb">
            <span class="iconfont">&#xe635;</span>
            <span style="margin-right: 0;color: #8e8e8e">当前位置：</span>
            <nuxt-link to="/">
              首页
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <nuxt-link to="/projectInfo">
              项目信息
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>项目详情</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="topNameBox">
        <el-row class="contentBox">
          <el-row class="topTit">
            <span>深圳市雅鸟内装饰设计有限公司</span>
          </el-row>
          <el-row class="bot_Li">
            <li><span>更新时间：</span> <em>2019-</em></li>
            <li><span>项目类别：</span> <em>2019-</em></li>
            <li><span>项目阶段：</span> <em>2019-</em></li>
            <li><span>建筑周期：</span> <em>2019-</em></li>
            <li><span>项目预算：</span> <em>2019-</em></li>
            <li><span>项目地址：</span> <em>2019-</em></li>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="projIntBox">
        <el-row class="topTitChange">
          <li :class="this.$store.state.projectInfo.projectOne ? 'active':''" @click="changeList">
            <span>
              项目简介
            </span>
          </li>
          <li :class="this.$store.state.projectInfo.projectTwo ? 'active':''" @click="changeListTwo">
            联系方式
          </li>
          <li :class="this.$store.state.projectInfo.projectThree ? 'active' : ''" @click="changeListThree">
            添加联系人
          </li>
        </el-row>
        <el-row class="bo_list">
          <transition name="bounce">
            <project-int v-if="this.$store.state.projectInfo.projectOne" />
          </transition>
          <transition name="bounce">
            <contact v-if="this.$store.state.projectInfo.projectTwo" />
          </transition>
          <transition name="bounce">
            <form-text v-if="this.$store.state.projectInfo.projectThree" />
          </transition>
        </el-row>
      </el-row>
      <message-one class="marginBottom100" />
      <integral-pay v-if="this.$store.state.home.IntegralPay" />
      <pro-details v-if="this.$store.state.home.proDetails" />
    </div>
  </div>
</template>

<script>
// import { HomeService } from '@/services/home'
import projectInt from '@/components/projectInfo/projectInt'
import contact from '@/components/projectInfo/contact'
import formText from '@/components/projectInfo/formText'
import MessageOne from '@/components/publicModule/MessageOne'
import IntegralPay from '@/components/publicModule/IntegralPay'
import ProDetails from '@/components/projectInfo/proDetails'
export default {
  layout: 'main',
  components: { ProDetails, IntegralPay, projectInt, contact, formText, MessageOne },
  data () {
    return {
      date: ''
    }
  },
  methods: {
    changeList () {
      this.$store.commit('projectInfo/changeOne')
    },
    changeListTwo () {
      this.$store.commit('projectInfo/changeTwo')
    },
    changeListThree () {
      this.$store.commit('projectInfo/changeThree')
    }
  }

}
</script>

<style scoped lang="scss">
  .topNameBox{
    width: 100%;
    margin-top: 20px;
    background: #ffffff;
    overflow: hidden;
    .contentBox{
      padding: 0 30px;
      margin: 40px 0;
      .topTit{
        width: 100%;
        span{
          border-left: 10px solid $redColor;
          font-size: 28px;
          height: 30px;
          line-height: 30px;
          color: #333333;
          font-weight: bold;
          display: block;
          text-indent: 20px;
        }
      }
      .bot_Li{
        width: 100%;
        margin-top: 40px;
        margin-left: 20px;
        li{
          width: 100%;
          margin-bottom: 20px;
          span{
            font-size: 16px;
            color: #adadad;
          }
          em{
            color: #333333;
            font-size: 16px;
          }
        }
      }
    }
  }
  .projIntBox{
    width: 100%;
    background: #ffffff;
    margin-top: 20px;
    .topTitChange{
      padding: 0 30px;
      margin-top: 10px;
      border-bottom: 1px solid $borderE7;
      &::after{
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
        content: "";
      }
      li{
        width: 33.33%;
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 26px;
        color: #666666;
        float: left;
        cursor: pointer;
        position: relative;
        &.active{
          color: $redColor;
        }
        &.active::before{
          width: 100%;
          content: "";
          height: 2px;
          background: $redColor;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        &:active{
          transition: all 1.3s ease-in-out;
          background: #333333;
        }
      }
    }
    .bo_list{
      margin: 50px auto 0;
      padding: 0 30px;

    }
  }

</style>
