<template>
  <div class="evaluateBox marginBottom100">
    <div class="formBox">
      <form action="">
        <div class="top">
          <el-radio v-model="radio" label="1">
            好评
          </el-radio>
          <el-radio v-model="radio" label="2">
            差评
          </el-radio>
        </div>
        <div class="text">
          <textarea placeholder="请输入..." />
        </div>
        <div class="sub">
          <button>提交</button>
        </div>
      </form>
    </div>
    <div class="evaluatelIST">
      <div class="top">
        <ul id="evaluateChang">
          <li :class="flagOne ? 'active' : '' " @click="changeFlagOne">
            全部({{ this.ones }})
          </li>
          <li :class="flagTwo ? 'active' : '' " @click="changeFlagTwo">
            好评({{ this.twos }})
          </li>
          <li :class="flagThree ? 'active': '' " @click="changeFlagThree">
            差评({{ this.threes }})
          </li>
        </ul>
      </div>
      <div class="list">
        <ul v-if="flagOne" v-infinite-scroll="loadOne" infinite-scroll-immediate="false" infinite-scroll-disabled="disabled">
          <li v-for="(t,i) in CommentsTotal" :key="i">
            <div class="leftImg">
              <div class="img">
                <img :src="t.headUri" alt="">
              </div>
              <div class="name">
                {{ t.nickName }}
              </div>
            </div>
            <div class="rightText">
              <p>
                <em v-if="t.comment===2">差评：</em>
                <span>
                  {{ t.content }}
                </span>
              </p>
              <p>
                {{ t.createdAtStr }}
              </p>
            </div>
          </li>
          <div v-if="loading" class="EvaLoading ">
            <span class="el-icon-loading" />
          </div>
          <div v-if="noMoreOne" class="Nomore">
            没有更多数据了哦~~~
          </div>
          <div v-if="ones===0" class="NoMessage">
            <img src="@/assets/img/nodata.png" alt="">
            <p>空空如也哦~~~</p>
          </div>
        </ul>
        <ul v-if="flagTwo" v-infinite-scroll="loadTwo" infinite-scroll-immediate="false" infinite-scroll-disabled="disabledTwo">
          <li v-for="(t,i) in goodComments" :key="i">
            <div class="leftImg">
              <div class="img">
                <img :src="t.headUri" alt="">
              </div>
              <div class="name">
                {{ t.nickName }}
              </div>
            </div>
            <div class="rightText">
              <p>
                <em v-if="t.comment===2">差评：</em>
                <span>
                  {{ t.content }}
                </span>
              </p>
              <p>
                {{ t.createdAtStr }}
              </p>
            </div>
          </li>
          <div v-if="loadingTwo" class="EvaLoading ">
            <span class="el-icon-loading" />
          </div>
          <div v-if="noMoreTwo" class="Nomore">
            没有更多数据了哦~~~
          </div>
          <div v-if="twos===0" class="NoMessage">
            <img src="@/assets/img/nodata.png" alt="">
            <p>空空如也哦~~~</p>
          </div>
        </ul>
        <ul v-if="flagThree" v-infinite-scroll="loadThree" infinite-scroll-immediate="false" infinite-scroll-disabled="disabledThree">
          <li v-for="(t,i) in badComments" :key="i">
            <div class="leftImg">
              <div class="img">
                <img :src="t.headUri" alt="">
              </div>
              <div class="name">
                {{ t.nickName }}
              </div>
            </div>
            <div class="rightText">
              <p>
                <em v-if="t.comment===2">差评：</em>
                <span>
                  {{ t.content }}
                </span>
              </p>
              <p>
                {{ t.createdAtStr }}
              </p>
            </div>
          </li>
          <div v-if="loadingThree" class="EvaLoading ">
            <span class="el-icon-loading" />
          </div>
          <div v-if="noMoreThree" class="Nomore">
            没有更多数据了哦~~~
          </div>
          <div v-if="threes===0" class="NoMessage">
            <img src="@/assets/img/nodata.png" alt="">
            <p>空空如也哦~~~</p>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { HomeService } from '@/services/home'
export default {
  data () {
    return {
      radio: '1',
      count: 0,
      ones: 0, // 评论总数
      twos: 0, // 好评总数
      threes: 0, // 差评总数
      pagesOne: 0,
      pagesTwo: 0,
      pagesThree: 0,
      size: 3,
      flagOne: true,
      flagTwo: false,
      flagThree: false,
      loading: false,
      loadingTwo: false,
      loadingThree: false,
      CommentsTotal: [ ], // 全部评论
      goodComments: [], // 好评
      badComments: [] // 差评
    }
  },
  computed: {
    noMoreOne () {
      return this.CommentsTotal.length >= this.ones
    },
    noMoreTwo () {
      return this.goodComments.length >= this.twos
    },
    noMoreThree () {
      return this.badComments.length >= this.threes
    },
    disabled () {
      return this.loading || this.noMoreOne
    },
    disabledTwo () {
      return this.loadingTwo || this.noMoreTwo
    },
    disabledThree () {
      return this.loadingThree || this.noMoreThree
    }
  },
  mounted () {
    this.getComment({ otherId: this.$route.params.id, type: 1, page: 0, size: this.size })
    this.getGoodComment({ otherId: this.$route.params.id, type: 1, page: 0, size: this.size })
    this.getBadComment({ otherId: this.$route.params.id, type: 1, page: 0, size: this.size })
  },
  methods: {
    loadOne () {
      this.loading = true
      setTimeout(() => {
        if (this.flagOne) {
          this.pagesOne++
          this.getComment({ otherId: this.$route.params.id, type: 1, page: this.pagesOne, size: this.size })
        }
        this.loading = false
      }, 1500)
    },
    loadTwo () {
      this.loadingTwo = true
      setTimeout(() => {
        if (this.flagTwo) {
          this.pagesTwo++
          this.getGoodComment({ otherId: this.$route.params.id, type: 1, page: this.pagesTwo, size: this.size })
        }
        this.loadingTwo = false
      }, 1500)
    },
    loadThree () {
      this.loadingThree = true
      setTimeout(() => {
        if (this.flagThree) {
          this.pagesThree++
          this.getBadComment({ otherId: this.$route.params.id, type: 1, page: this.pagesThree, size: this.size })
        }
      }, 1500)
      this.loadingThree = false
    },
    getComment (params) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getComment(params).then((res) => {
        this.CommentsTotal = this.CommentsTotal.concat(res.data.results)
        console.log(res.data)
        this.ones = res.data.totalCount
      })
    },
    getGoodComment (params) { // 获取好评
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getGoodComment(params).then((res) => {
        this.goodComments = this.goodComments.concat(res.data.results)
        this.twos = res.data.totalCount
      })
    },
    getBadComment (params) { // 获取差评
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getBadComment(params).then((res) => {
        this.badComments = this.badComments.concat(res.data.results)
        this.threes = res.data.totalCount
      })
    },
    getGoodComments (params) { // 获取好评总数
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getGoodComment(params).then((res) => {
        this.twos = res.data.totalCount
      })
    },
    getBadComments (params) { // 获取差评总数
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getBadComment(params).then((res) => {
      })
    },
    changeFlagOne () {
      this.flagOne = true
      this.flagTwo = false
      this.flagThree = false
    },
    changeFlagTwo () {
      this.flagOne = false
      this.flagTwo = true
      this.flagThree = false
    },
    changeFlagThree () {
      this.flagOne = false
      this.flagTwo = false
      this.flagThree = true
    }
  }
}
</script>

<style scoped lang="scss">
  .evaluateBox{
    width: 100%;
    background: #ffffff;
    overflow: hidden;
    .formBox{
      width: 94%;
      margin: 40px auto 0;
      form{
        display: block;
        .top{
          width: 100%;
          height: 30px;
          line-height: 30px;
        }
        .text{
          width: 100%;
          border: 1px solid #b3b3b3;
          height: 116px;
          overflow: hidden;
          textarea{
            display: block;
            resize: none;
            width: 94%;
            height: 76px;
            margin: 20px auto;
            outline: none;
            font-size: 15px;
            color: #333333;
            line-height: 25px;
          }
        }
        .sub{
          width: 100%;
          overflow: hidden;
          margin-top: 20px;
          button{
            display: inline-block;
            float: right;
            height: 40px;
            width: 100px;
            background: $redColor;
            color: #ffffff;
            border-radius: 5px;
            font-size: 16px;

          }
        }
      }
    }
    .evaluatelIST{
      width: 94%;
      margin: 30px auto 0;
      overflow: hidden;
      .top{
        width: 100%;
        padding: 1px 0;
        ul{
          width: 100%;
          overflow: hidden;
          li{
            float: left;
            display: inline-block;
            padding: 2px 10px ;
            color: #5f5f5f;
            font-size: 16px;
            cursor: pointer;
            margin-right: 20px;
            &.active{
              color: $redColor;
            }
          }
        }
      }
      .list{
        width: 100%;
        margin: 30px 0 0;
        overflow: hidden;
        height: 600px;
        ul{
          height: 200px;
          width: 100%;
          overflow-y: auto;
          li{
            width: 100%;
            border-bottom:dashed 1px #b1b1b1 ;
            display: flex;
            display: -ms-flex;
            margin-bottom: 20px;
            .leftImg{
              width:110px ;
              margin-bottom: 15px;
              margin-left: 10px;
              .img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
                img{
                  @include img;
                }
              }
              .name{
                width: 100%;
                font-size:12px ;
                margin-top: 7px;
                color: #808080;
                @include over;
              }
            }
            .rightText{
              flex: 1;
              -ms-flex: 1;
              margin-left: 20px;
              margin-right: 20px;
              overflow: hidden;
              p{
                font-size: 12px;
                &:nth-child(1){
                  em{
                    color: $redColor;
                  }
                  line-height: 24px;
                  color: #5f5f5f;
                }
                &:nth-child(2){
                  color: #D3D3D3;
                  margin-top: 6px;
                }
              }
            }
          }
          .NoMessage{
            width: 100%;
            margin-top: 100px;
            img{
              display: block;
              width: 200px;
              height: 200px;
              margin: 0 auto;
            }
            p{
              font-size: 14px;
              color: #333333;
              text-align: center;
              margin-top: 10px;
            }
          }
          .EvaLoading{
            width: 100%;
            height: 36px;
            line-height: 36px;
            font-size: 30px;
            color: #5f5f5f;
            text-align: center;
          }
          .Nomore{
            text-align: center;
            width: 100%;
            height: 36px;
            line-height: 36px;
            font-size: 12px;
            color: #323232;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>
