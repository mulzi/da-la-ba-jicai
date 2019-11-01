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
            <nuxt-link to="/works">
              作品精选
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>详情</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="works_content_box marginBottom100">
        <el-row class="l_content_box">
          <el-row class="article_top">
            <el-row class="nameTit_box">
              <el-col class="name">
                这个是文章标题
              </el-col>
              <div class="span">
                加入收藏
              </div>
              <div class="span">
                取消收藏
              </div>
            </el-row>
            <el-row class="Top_timeBox">
              <div class="L_time">
                2018-551-551发布
              </div>
              <div class="number_icon">
                <i class="el-icon-view">&nbsp;88</i>
                <i class="el-icon-chat-dot-square">&nbsp;55</i>
                <i class="iconfont">&#xe680;&nbsp;88</i>
              </div>
            </el-row>
          </el-row>
          <el-row class="content_box">
            <div class="tit">
              【作品介绍】
            </div>
            <div class="content_c">
              <p>
                作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品
                品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍。
              </p>
              <p>
                <img src="@/assets/img/0123.jpg" alt="">
              </p>
            </div>
            <div class="content_b">
              <p>项目名称：啊实打实大</p>
              <p>项目地址：S大萨达</p>
              <p>经典之处：S大萨达ad阿萨德</p>
            </div>
            <div class="praise">
              <div class="circle active">
                <i class="iconfont">&#xe680;</i>
              </div>
              <span>
                点赞
              </span>
              <span>
                取消赞
              </span>
            </div>
          </el-row>
          <el-row class="comment_box">
            <div class="top_form">
              <div class="text_Box">
                <textarea placeholder="想说点什么呢..." />
              </div>
              <div class="sub">
                <span>评&nbsp;&nbsp;论</span>
              </div>
            </div>
          </el-row>
        </el-row>
        <el-row class="r_content_box">
          <div class="top_img_box">
            <div class="img">
              <img src="@/assets/img/0123.jpg" alt="">
            </div>
            <div class="name">
              加一几点设计
            </div>
            <div class="adds_a">
              重庆 | 设计方
            </div>
            <nuxt-link to="" class="click">
              点击查看公司详情
            </nuxt-link>
          </div>
          <el-row class="selection">
            <div class="tit">
              作品精选
            </div>
            <div class="list_a">
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
            </div>
            <div class="moreList">
              <nuxt-link to="">
                查看更多<i class="el-icon-arrow-right" />
              </nuxt-link>
            </div>
          </el-row>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main'
}
</script>

<style scoped lang="scss">

</style>
