<template>
  <div class="supplierBody">
    <div class="bodyBox" v-loading="loading">
      <el-row class="HeaderBreadcrumb">
        <el-col :span="24">
          <div class="breadcrumb">
            <span class="iconfont">&#xe635;</span>
            <span style="margin-right: 0;color: #8e8e8e">当前位置：</span>
            <nuxt-link to="/">
              首页
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>成功案列</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="topbox">
        <el-row class="contentBox">
          <el-row class="tit">
            <span>成功案例</span>
          </el-row>
          <el-row class="bolist">
            <el-row class="one">
              <el-col class="left">
                供应方：
              </el-col>
              <el-col class="right">
                {{ date.supplier }}
              </el-col>
            </el-row>
            <el-row class="one">
              <el-col class="left">
                需求方：
              </el-col>
              <el-col class="right">
                {{ date.demander }}
              </el-col>
            </el-row>
            <el-row class="one">
              <el-col class="left">
                项目名称：
              </el-col>
              <el-col class="right">
                {{ date.projectName }}
              </el-col>
            </el-row>
            <el-row class="one">
              <el-col class="left">
                金额：
              </el-col>
              <el-col class="right">
                {{ date.money }}
              </el-col>
            </el-row>
            <el-row class="one">
              <el-col class="left">
                最新更新：
              </el-col>
              <el-col class="right">
                {{ date.createdAtStr }}
              </el-col>
            </el-row>
          </el-row>
        </el-row>
        <el-row class="addItem" to="">
          <nuxt-link to="">
            <em class="iconfont">&#xe880;</em>
            <span>发布项目</span>
          </nuxt-link>
        </el-row>
      </el-row>
      <el-row class="cooper marginBottom100">
        <el-row class="tit">
          合作过程
        </el-row>
        <el-row class="content">
          <p>
            {{ date.cooperation }}
          </p>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
import { HomeService } from '@/services/home'

export default {
  layout: 'main',
  data () {
    return {
      loading: true,
      date: []
    }
  },
  mounted () {
    this.get(this.$route.params.id)
  },
  methods: {
    get (params) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getHomeSuccse(params).then((res) => {
        console.log(res.data)
        this.date = res.data.result
        setTimeout(() => {
          this.loading = false
        }, 500)
      })
    }
  }

}
</script>

<style scoped lang="scss">
  .topbox{
    width: 100%;
    background: #ffffFF;
    margin-top: 20px;
    .contentBox{
      padding: 30px;
      .tit{
        width: 100%;
        span{
          display: inline-block;
          border-left: 8px solid $redColor;
          height: 26px;
          line-height: 26px;
          text-indent: 16px;
          font-size: 24px;
          color: #333333;
          font-weight: bold;
        }
      }
      .bolist{
        width: 100%;
        margin-top: 30px;
        .one{
          margin-bottom:20px ;
          color: #adadad;
          font-size: 14px;
          display: flex;
          display: -ms-flex;
          .left{
            width:90px ;
            text-align: right;
          }
          .right{
            flex: 1;
            -ms-flex: 1;
            color: #333333;
          }
        }
      }
    }
    .addItem {
      position: absolute;
      top: -40px;
      right: 4px;
      background: $redColor;
      height: 36px;
      color: #ffffff;
      line-height: 36px;
      font-size: 14px;
      box-shadow: 2px 2px 10px #bdbdbd;

      em {
        font-size: 20px;
        color: #ffffff;
        margin-left: 20px;
        margin-right: 4px;
        vertical-align: middle;
      }

      span {
        vertical-align: middle;
        margin-right: 20px;
        color: #ffffff;
      }
      &:hover{
        background: rgba(218, 37, 29, 0.84);
        transition: .2s ease-in;
      }
    }
  }
  .cooper{
    width: 100%;
    background: #ffffFF;
    margin-top: 20px;
    overflow: hidden;
    .tit{
      width: calc(100% - 60px);
      margin: 30px auto;
      border-bottom: 1px solid #b2b5be;
      font-size:24px ;
      color: #4d4d4d;
      height: 40px;
      line-height: 30px;
    }
    .content{
      width: calc(100% - 60px);
      margin: 0 auto 40px;
      p{
        margin-bottom: 24px;
        font-size:14px;
        color: #333333;
        text-indent: 2em;
        line-height: 24px;
      }
    }
  }
</style>
