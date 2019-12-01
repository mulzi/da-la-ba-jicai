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
            <nuxt-link to="/AskPriseList">
              招募招标
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>招募详情</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="ones">
        <el-row class="tit">
          <span>{{ date.title }}</span>
        </el-row>
        <el-row class="bo_box">
          <el-row class="li">
            <el-col :span="2" class="left">
              招募类型：
            </el-col>
            <el-col :span="20" class="right">
              {{ date.categoryName }}
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              发布时间：
            </el-col>
            <el-col :span="20" class="right">
              {{ date.createdAtStr }}
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              截止时间：
            </el-col>
            <el-col :span="20" class="right">
              {{ date.expiredAtStr }}
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              招募地区：
            </el-col>
            <el-col :span="20" class="right">
              {{ date.address }}
            </el-col>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="twos">
        <el-row class="tit">
          <span>招募类容</span>
        </el-row>
        <el-row class="bo_box">
          <el-row class="content" v-html="content">
            {{ content }}
          </el-row>
        </el-row>
        <el-row class="download" v-for="(it,ii) in date.recruitAnnexeList" :key="ii">
          <a :href="it.fileUrl" target="_blank" download="" :alt="it.filenName">
            点击下载招标文件
          </a>
        </el-row>
      </el-row>
      <el-row class="ones marginBottom100">
        <el-row class="tit">
          <span>联系方式</span>
        </el-row>
        <el-row class="bo_box">
          <el-row class="li">
            <el-col :span="2" class="left">
              发布单位：
            </el-col>
            <el-col :span="20" class="right">
              {{ date.companyName }}
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              联系人：
            </el-col>
            <el-col :span="20" class="right">
              {{ date.contactName }}
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              联系人职位：
            </el-col>
            <el-col :span="20" class="right">
              {{ date.contactPosition }}
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              联系电话：
            </el-col>
            <el-col :span="20" class="right">
              {{ date.contactPhone }}
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="8" class="left" style="text-align: left">
              联系我时请说是在大喇叭集采网上看到的，谢谢！
            </el-col>
          </el-row>
        </el-row>
        <div v-if="date.flag" @click="showPay" class="download">
          <span>
            点击查看
          </span>
        </div>
      </el-row>
    </el-row>
    <integral-pay @clickTwo="getDetails" :id="this.$route.params.id" v-if="this.$store.state.projectInfo.IntegralPay" />
  </el-row>
</template>

<script>
import { HomeService } from '@/services/askPriseList'
import IntegralPay from '@/components/askPriseList/integralPay'
export default {
  components: { IntegralPay },
  layout: 'main',
  data () {
    return {
      date: '',
      content: ''
    }
  },
  mounted () {
    this.getDetails()
  },
  methods: {
    getDetails () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getDetails(this.$route.params.id).then((res) => {
        console.log(res)
        this.date = res.data.result
        this.content = res.data.result.content
        this.content = this.content.replace(/\n/g, '<br> <br>')
        console.log(res.data.result.content)
        console.log(this.content)
      })
    },
    showPay () {
      if (!this.$store.state.home.isLogin) {
        this.$message({
          message: '你还没登录哦！请先登录吧！',
          type: 'error'
        })
        setTimeout(() => {
          this.$router.push('/login')
        }, 1000)
        return false
      }
      this.$store.commit('projectInfo/changeIntegralPay')
    }
  }
}
</script>

<style scoped lang="scss">

  .ones{
    width: 100%;
    background: #ffffFF;
    overflow: hidden;
    margin-top: 20px;
    .tit{
      padding: 0 30px ;
      margin-top: 30px;
      span{
        width: 100%;
        display: block;
        height: 28px;
        line-height: 28px;
        font-size: 28px;
        color: #333333;
        font-weight: bold;
        text-indent: 20px;
        border-left: 8px solid $redColor;
      }
    }
    .bo_box{
      width: calc(100% - 60px);
      margin: 30px auto 0;
      overflow: hidden;
      .li{
        margin-bottom: 30px;
        color: #adadad;
        font-size: 16px;
        .left{
          text-align: right;
        }
        .right{
          color: #333333;
        }
      }
    }
    .download{
      position: absolute;
      top: 130px;
      left: 400px;
      display: inline-block;
      padding:8px 20px;
      background: $redColor;
      color: #ffffff;
      font-size: 13px;
      cursor: pointer;
      margin-left: 50px;
      margin-bottom: 30px;
      span{
        color: #ffffff;
        width: 100%;
        display: block;
        height: 100%;
      }
    }
  }
  .twos{
    width: 100%;
    background: #ffffFF;
    overflow: hidden;
    margin-top: 20px;
    .tit{
      padding: 0 30px ;
      margin-top: 30px;
      span{
        width: 100%;
        display: block;
        height: 28px;
        line-height: 28px;
        font-size: 28px;
        color: #333333;
        font-weight: bold;
        text-indent: 20px;
        border-left: 8px solid $redColor;
      }
    }
    .bo_box{
      width: calc(100% - 60px);
      margin: 30px auto 0;
      overflow: hidden;
      .content{
        padding: 0 20px;
        margin-bottom: 40px;
        p{
          margin-bottom: 20px;
          font-size: 16px;
          line-height: 24px;
          color: #333333;
        }
      }

    }
    .download{
      display: inline-block;
      padding:8px 16px;
      background: #1BACFF;
      color: #ffffff;
      font-size: 13px;
      cursor: pointer;
      margin-left: 50px;
      margin-bottom: 30px;
      a{
        color: #ffffff;
        width: 100%;
        display: block;
        height: 100%;
      }
    }

  }

</style>
