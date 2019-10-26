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
          <li class="active" @click="changeFlagOne, getComment({ otherId: $route.params.id, type: 1, page: pagesOne, size: 10 })">
            全部({{ this.ones }})
          </li>
          <li @click="changeFlagTwo,getGoodComment({ otherId: $route.params.id, type: 1, page: pagesTwo, size: 10 })">
            好评({{ this.twos }})
          </li>
          <li @click="changeFlagThree,getBadComment({ otherId: $route.params.id, type: 1, page: pagesThree, size: 10 })">
            差评({{ this.threes }})
          </li>
        </ul>
      </div>
      <div class="list">
        <ul v-infinite-scroll="load">
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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { HomeService } from '@/services/home'
export default {
  data () {
    return {
      radio: '1',
      count: 0,
      ones: 0,
      twos: 0,
      threes: 0,
      pagesOne: 0,
      pagesTwo: 0,
      pagesThree: 0,
      flagOne: true,
      flagTwo: false,
      flagThree: false,
      CommentsTotal: [ ], // 全部评论
      goodComments: [], // 好评
      badComments: [] // 差评
    }
  },
  mounted () {
    $(function () {
      $('#evaluateChang li').on('click', function () {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
      })
    })
    this.getComment({ otherId: this.$route.params.id, type: 1, page: 0, size: 10 })
    this.getGoodComments({ otherId: this.$route.params.id, type: 1, page: 0, size: 10 })
    this.getBadComments({ otherId: this.$route.params.id, type: 1, page: 0, size: 10 })
  },
  methods: {
    load () {
      if (this.flagOne) {
        this.getComment({ otherId: this.$route.params.id, type: 1, page: this.pagesOne, size: 10 })
        this.pagesOne++
      }
      if (this.flagTwo) {
        this.getGoodComment({ otherId: this.$route.params.id, type: 1, page: this.pagesTwo, size: 10 })
        this.pagesTwo++
      }
      if (this.flagThree) {
        this.getBadComment({ otherId: this.$route.params.id, type: 1, page: this.pagesThree, size: 10 })
        this.pagesThree++
      }
    },
    getComment (params) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getComment(params).then((res) => {
        this.CommentsTotal = res.data.results
        console.log(res.data)
        this.ones = res.data.totalCount
      })
    },
    getGoodComment (params) { // 获取好评
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getGoodComment(params).then((res) => {
        this.CommentsTotal = res.data.results
      })
    },
    getBadComment (params) { // 获取差评
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getBadComment(params).then((res) => {
        this.CommentsTotal = res.data.results
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
        this.threes = res.data.totalCount
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
        ul{
          height: 600px;
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
        }
      }
    }
  }
</style>
