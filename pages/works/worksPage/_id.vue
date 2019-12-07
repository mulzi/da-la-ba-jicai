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
            <nuxt-link to="/works">
              作品精选
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>详情</span>
          </div>
        </el-col>
      </el-row>
      <el-row v-loading="loading" class="works_content_box marginBottom100">
        <el-row class="l_content_box">
          <el-row class="article_top">
            <el-row class="nameTit_box">
              <el-col class="name">
                {{ date.theme }}
              </el-col>
              <div @click="getCollection" v-if="date.collectionTemp === false" class="span">
                加入收藏
              </div>
              <div
                @click="delCollection"
                v-if="date.collectionTemp === true"
                class="span"
              >
                取消收藏
              </div>
            </el-row>
            <el-row class="Top_timeBox">
              <div class="L_time">
                {{ date.createdAtStr }}发布
              </div>
              <div class="number_icon">
                <i class="el-icon-view">&nbsp;{{ date.browser }}</i>
                <i class="el-icon-chat-dot-square">&nbsp;{{ date.comment }}</i>
                <i class="iconfont">&#xe680;&nbsp;{{ date.thNumber }}</i>
              </div>
            </el-row>
          </el-row>
          <el-row class="content_box">
            <div class="tit">
              【作品介绍】
            </div>
            <div class="content_c">
              <div v-if="date.supplement !== undefined && date.supplement !== null" class="cText" v-html="date.supplement">
                {{ date.supplement }}
              </div>
              <p v-else>
                {{ date.introduce }}
              </p>
              <p v-for="(t,i) in date.worksExpands" :key="i">
                <img :src="t.picUrl" alt="">
              </p>
            </div>
            <div class="content_b">
              <p>项目名称：{{ date.name }}</p>
              <p>项目地址：{{ date.address }}</p>
              <p>经典之处：{{ date.classic }}</p>
            </div>
            <div class="praise">
              <div @click="getThumb" class="circle" v-if="date.temp === false">
                <i class="iconfont">&#xe680;</i>
              </div>
              <div @click="delThumb" class="circle active" v-if="date.temp === true">
                <i class="iconfont">&#xe680;</i>
              </div>
              <span v-if="date.temp === false">
                点赞
              </span>
              <span v-if="date.temp === true">
                取消赞
              </span>
            </div>
          </el-row>
          <MessageOne v-if="this.$store.state.works.commentBox" />
        </el-row>
        <el-row class="r_content_box">
          <div class="top_img_box">
            <div class="img">
              <img :src="date.cover" alt="">
            </div>
            <div class="name">
              {{ date.agent }}
            </div>
            <div class="adds_a">
              {{ date.supplierAddress }} | {{ date.categoryName }}
            </div>
            <nuxt-link v-if=" date.attribute === 1" :to="`/supplier/toolDecoration/${date.supplierId}`" class="click">
              点击查看公司详情
            </nuxt-link>
            <nuxt-link v-else-if=" date.attribute === 2" :to="`/supplier/homeDecorationChange/${date.supplierId}`" class="click">
              点击查看公司详情
            </nuxt-link>
            <nuxt-link v-else :to="`/user/designDecoration/${date.supplierId}`" class="click">
              点击查看公司详情
            </nuxt-link>
          </div>
          <el-row class="selection">
            <div class="tit">
              作品精选
            </div>
            <div class="list_a">
              <nuxt-link v-for="(t,i) in recList" :key="i" :to="`/works/worksPage/${t.id}`">
                <span :title="t.theme">
                  {{ t.theme }}
                </span>
                <em>{{ t.browser }}</em>
              </nuxt-link>
            </div>
            <div class="moreList">
              <nuxt-link to="/works">
                查看更多<i class="el-icon-arrow-right" />
              </nuxt-link>
            </div>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/works'
import MessageOne from '@/components/works/MessageOne'
export default {
  layout: 'main',
  components: { MessageOne },
  data () {
    return {
      date: '',
      recList: '',
      flagA: true,
      flagB: true,
      loading: true,
      commentList: ''
    }
  },
  mounted () {
    this.getWorksDetails(this.$route.params.id)
    this.postInfo({ type: 5, otherId: this.$route.params.id })
  },
  methods: {
    postInfo (pamars) { // 创建浏览量
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.postInfo(pamars).then((res) => {
        if (res.status === 200) {
          console.log('浏览成功')
        }
      })
    },
    getWorksDetails (pamars) { // 获取详情
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getWorksDetails(pamars).then((res) => {
        if (res.status === 200) {
          console.log('详情', res.data.result)
          this.date = res.data.result
          this.getRecommend({ source: this.date.sourceId, size: 10 })
          setTimeout(() => {
            this.loading = false
          }, 500)
        }
      })
    },
    getCollection () { // 添加收藏
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      if (!this.$store.state.home.isLogin) {
        this.$message({
          message: '你还没登录哦！请先登录',
          type: 'error'
        })
        setTimeout(() => {
          this.$router.push('/login')
        }, 1000)
        return false
      } else if (this.flagA) {
        this.flagA = false
        homeService.getCollection({ type: 4, id: this.$route.params.id }).then((res) => {
          // console.log(res)
          if (res.status === 200) {
            this.$message({
              message: '收藏成功',
              type: 'success'
            })
          }
          this.getWorksDetails(this.$route.params.id)
          setTimeout(() => {
            this.flagA = true
          }, 10000)
        })
      } else {
        this.$message({
          message: '你点击得太频繁了哦~~，休息一会吧！',
          type: 'warning'
        })
        return false
      }
    },
    delCollection () { // 取消收藏
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.delCollection({ type: 4, id: this.$route.params.id }).then((res) => {
        // console.log(res)
        if (res.status === 200) {
          this.$message({
            message: '取消成功',
            type: 'success'
          })
        }
        this.getWorksDetails(this.$route.params.id)
      })
    },
    getThumb () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      if (!this.$store.state.home.isLogin) {
        this.$message({
          message: '你还没登录哦！请先登录',
          type: 'error'
        })
        setTimeout(() => {
          this.$router.push('/login')
        }, 1000)
        return false
      }
      if (!this.flagB) {
        this.$message({
          message: '你点击得太频繁了哦~~，休息一会吧！',
          type: 'warning'
        })
        return false
      } else {
        this.flagB = false
        homeService.getThumb({ type: 3, otherId: this.$route.params.id }).then((res) => {
          if (res.status === 200) {
            this.$message({
              message: '点赞成功',
              type: 'success'
            })
          }
          // console.log(res)
          this.getWorksDetails(this.$route.params.id)
          setTimeout(() => {
            this.flagB = true
          }, 10000)
        })
      }
    },
    delThumb () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.delThumb({ type: 3, id: this.$route.params.id }).then((res) => {
        if (res.status === 200) {
          this.$message({
            message: '取消成功',
            type: 'success'
          })
        }
        this.getWorksDetails(this.$route.params.id)
      })
    },
    getComment () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getComment({ otherId: this.$route.params.id, type: 4 }).then((res) => {
        console.log('s', res.data.results)
        this.commentList = res.data.results
        console.log('赋值成功', this.commentList)
      })
    },
    getRecommend (params) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getRecommend(params).then((res) => {
        this.recList = res.data.results
        // console.log('ddd', res.data)
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .works_content_box {
        width: 100%;
        margin-top: 20px;
        display: flex;
        display: -ms-flex;

        .l_content_box {
            overflow: hidden;
            flex: 1;
            -ms-flex: 1;

            .article_top {
                width: 100%;
                border-bottom: 1px solid $borderE7;
                background: #ffffff;
                .nameTit_box {
                    width: 92%;
                    margin: 30px auto 0;
                    display: flex;
                    display: -ms-flex;
                    justify-items: center;
                    align-items: center;

                    .name {
                        flex: 1;
                        -ms-flex: 1;
                        height: 24px;
                        line-height: 24px;
                        font-size: 22px;
                        color: #333333;
                        margin-right: 40px;
                        @include over;
                    }

                    .span {
                        cursor: pointer;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        width: 114px;
                        background: #FFD100;
                        border-radius: 4px;

                    }
                }

                .Top_timeBox {
                    width: 92%;
                    margin: 30px auto 10px;
                    overflow: hidden;

                    .L_time {
                        float: left;
                        width: 200px;
                        font-size: 14px;
                        color: #999999;
                        height: 16px;
                        line-height: 16px;
                    }

                    .number_icon {
                        float: right;
                        height: 16px;
                        line-height: 16px;
                        color: #999999;
                        font-size: 14px;

                        i {
                            margin: 0 8px;
                        }
                    }
                }
            }

            .content_box {
                width: 100%;
                margin: 0 auto;
                padding-top: 40px;
                background: #ffffff;

                .tit {
                    width: 92%;
                    margin: 0 auto;
                    text-align: center;
                    color: #333333;
                    font-size: 18px;
                }

                .content_c {
                    width: 92%;
                    margin: 20px auto 40px;
                     .cText{
                       width: 100%;
                       overflow: hidden;
                       p{
                         width: 100%;
                         img{
                           width: 94%;
                           margin: 0 auto;
                         }
                       }
                     }
                    p {
                        width: 100%;
                        text-indent: 2em;
                        color: #333333;
                        font-size: 16px;
                        line-height: 28px;
                        margin-bottom: 20px;

                        img {
                            max-width: 94%;
                            display: block;
                            margin: 0 auto;
                        }
                    }
                }

                .content_b {
                    width: 92%;
                    margin: 20px auto 0;

                    p {
                        width: 100%;
                        text-indent: 2em;
                        color: #333333;
                        font-size: 16px;
                        line-height: 28px;
                    }
                }

                .praise {
                    width: 100%;
                    margin: 40px auto;
                    text-align: center;

                    .circle {
                        margin: 0 auto;
                        width: 60px;
                        height: 60px;
                        line-height: 60px;
                        text-align: center;
                        color: #ffffff;
                        border-radius: 50%;
                        background: #d9d9d9;
                        cursor: pointer;

                        &.active {
                            background: #f88685;
                        }

                        i {
                            font-size: 24px;
                        }
                    }

                    span {
                        display: inline-block;
                        margin-top: 10px;
                        font-size: 14px;
                        color: #333333;
                    }
                }
            }

        }

        .r_content_box {
            width: 326px;
            margin-left: 30px;

            .top_img_box {
                background: #ffffff;
                width: 100%;
                overflow: hidden;

                .img {
                    width: 86px;
                    height: 86px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin: 30px auto 0;

                    img {
                        @include img;
                    }
                }

                .name {
                    width: 92%;
                    margin: 20px auto 0;
                    height: 20px;
                    line-height: 20px;
                    font-size: 18px;
                    color: #333333;
                    text-align: center;
                    @include over;
                }

                .adds_a {
                    width: 92%;
                    margin: 10px auto 0;
                    height: 20px;
                    line-height: 20px;
                    font-size: 15px;
                    color: #999999;
                    text-align: center;
                    @include over;
                }

                .click {
                    display: block;
                    margin: 20px auto;
                    width: 140px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    font-size: 14px;
                    color: #333333;
                    background: #FFD100;
                    border-radius: 4px;

                }
            }

            .selection {
                width: 100%;
                background: #ffffff;
                margin: 10px auto;

                .tit {
                    height: 50px;
                    line-height: 50px;
                    text-indent: 20px;
                    color: #333333;
                    font-size: 18px;
                    border-bottom: 1px solid $borderE7;

                }

                .list_a {
                    margin: 10px auto 0;
                    width: 100%;
                    border-bottom: 1px solid $borderE7;

                    a {
                        display: flex;
                        display: -ms-flex;
                        justify-items: center;
                        align-items: center;

                        &:last-child {
                            margin-bottom: 10px;
                        }

                        &:hover {
                            span {
                                color: $redColor;
                            }

                            em {
                                color: $redColor;
                            }
                        }

                        span {
                            flex: 1;
                            -ms-flex: 1;
                            margin-left: 20px;
                            font-size: 16px;
                            color: #333333;
                            @include over;
                            height: 36px;
                            line-height: 36px;
                            display: inline-block;
                        }

                        em {
                            width: 70px;
                            margin-left: 10px;
                            margin-right: 20px;
                            color: #999999;
                            font-size: 14px;
                            text-align: right;
                            display: inline-block;
                        }
                    }
                }

                .moreList {
                    width: 100%;
                    text-align: center;

                    a {
                        display: inline-block;
                        margin: 20px auto;
                        color: #333333;
                        font-size: 16px;

                        &:hover {
                            color: $redColor;
                        }
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
  .cText{
    width: 100%;
    overflow: hidden;
    p{
      width: 100%;
      margin-bottom: 20px;
      font-size: 16px;
      color: #333333;
      line-height: 26px;
      img{
        max-width: 94%;
        display: block;
        margin: 0 auto;
      }
    }
  }
</style>
