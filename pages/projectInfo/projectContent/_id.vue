<template>
  <el-row class="supplierBody">
    <el-row class="bodyBox">
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
            <span>{{ date.name }}</span>
          </el-row>
          <el-row class="bot_Li">
            <li><span>更新时间：</span> <em>{{ date.createdTimeStr }}</em></li>
            <li><span>项目类别：</span> <em>{{ date.typeName }}</em></li>
            <li><span>项目阶段：</span> <em>{{ date.phaseName }}</em></li>
            <li><span>建筑周期：</span> <em>{{ date.progress }}</em></li>
            <li><span>项目预算：</span> <em>{{ date.budget }}</em></li>
            <li><span>项目地址：</span> <em>{{ date.address }}</em></li>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="projIntBox">
        <el-row class="topTitChange">
          <li v-for="(t,i) in menu" :key="i" :class="$store.state.projectInfo.num === i ? 'active':''" @click="changeList(i)">
            <span>
              {{ t }}
            </span>
          </li>
        </el-row>
        <el-row class="bo_list">
            <project-int v-if="this.$store.state.projectInfo.num === 0" :list="date" />
            <contact v-if="this.$store.state.projectInfo.num === 1" />
            <form-text v-if="this.$store.state.projectInfo.num === 2" />
        </el-row>
      </el-row>
      <message-one class="marginBottom100" v-if="this.$store.state.projectInfo.num === 0" />
      <el-row class="marginBottom100" v-if="this.$store.state.projectInfo.num === 2 || this.$store.state.projectInfo.num === 1" />

      <pro-details v-if="this.$store.state.projectInfo.proDetails" />
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/projectInfo'
import projectInt from '@/components/projectInfo/projectInt'
import contact from '@/components/projectInfo/contact'
import formText from '@/components/projectInfo/formText'
import MessageOne from '@/components/projectInfo/MessageOne'
import ProDetails from '@/components/projectInfo/proDetails'
export default {
  layout: 'main',
  components: { ProDetails, projectInt, contact, formText, MessageOne },
  data () {
    return {
      menu: ['项目简介', '联系方式', '添加联系人'],
      date: '',
      num: 0
    }
  },
  mounted () {
    this.getProject()
  },
  methods: {
    getProject () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getProject(this.$route.params.id).then((res) => {
        // console.log('详情', res.data)
        this.date = res.data
      })
    },
    changeList (i) {
      this.$store.commit('projectInfo/changeOne', i)
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
