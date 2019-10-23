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
            <nuxt-link to="/supplier">
              材料供应商
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>公装</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="moiveImgBox">
        <el-row class="padding24">
          <el-col v-if="false" class="leftMi">
            <video
              controls
              src="https://dalabajicai-prod.oss-cn-chengdu.aliyuncs.com/files/dalaba/file/EC5ED634619043528FE73F1AF9C61B08.mp4"
            />
          </el-col>
          <banner />
          <div class="changMVIMG">
            <el-button class="active" round icon="el-icon-video-play">
              视频
            </el-button>
            <el-button round icon="el-icon-picture-outline">
              图片
            </el-button>
          </div>
          <el-col class="fRight" :span="10">
            <div class="nameTit">
              品牌概况
            </div>
            <div class="addrName">
              <ul>
                <li>
                  品牌：东鹏
                </li>
                <li>
                  品牌来源：中国广东
                </li>
                <li>
                  品牌产地：佛山、清远
                </li>
                <li>
                  成立日期：199s
                </li>
                <li>
                  重庆代理商：重庆市民公司
                </li>
                <li>
                  注册资金：200万
                </li>
                <li>
                  官方网址：dalabajicai.com
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </el-row>
      id是{{ $route.params.id }}
    </div>
  </div>
</template>

<script>

import banner from '@/components/supplier/banner'

export default {
  layout: 'main',
  components: {
    banner
  },

  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
