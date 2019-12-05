<template>
  <div class="evaluateBox marginBottom100">
    <div class="formBox">
      <form action="" onsubmit=" return false">
        <div class="top">
          <el-radio v-model="radio" label="1">
            好评
          </el-radio>
          <el-radio v-model="radio" label="2">
            差评
          </el-radio>
        </div>
        <div class="text">
          <textarea placeholder="请输入..." v-model="text" />
        </div>
        <div class="sub">
          <button @click="clickComment">
            提交
          </button>
        </div>
      </form>
    </div>
    <div class="evaluatelIST">
      <div class="top">
        <ul id="evaluateChang">
          <li :class="flagOne ? 'active' : '' " @click="changeFlagOne">
            全部({{ ones }})
          </li>
          <li :class="flagTwo ? 'active' : '' " @click="changeFlagTwo">
            好评({{ twos }})
          </li>
          <li :class="flagThree ? 'active': '' " @click="changeFlagThree">
            差评({{ threes }})
          </li>
        </ul>
      </div>
      <div class="list">
        <comments v-if="flagOne" />
        <comments-two v-if="flagTwo" />
        <comments-three v-if="flagThree" />
      </div>
    </div>
  </div>
</template>

<script>
import comments from './reviews/comments'
import commentsTwo from './reviews/commentsTwo'
import commentsThree from './reviews/commentsThree'
import { HomeService } from '@/services/home'
export default {
  components: {
    comments,
    commentsTwo,
    commentsThree
  },
  data () {
    return {
      radio: '1',
      text: '',
      count: 0,
      ones: 0, // 评论总数
      twos: 0, // 好评总数
      threes: 0, // 差评总数
      pagesOne: 0,
      pagesTwo: 0,
      pagesThree: 0,
      size: 10,
      flagOne: true,
      flagTwo: false,
      flagThree: false,
      loading: false,
      loadingTwo: false,
      loadingThree: false
    }
  },
  mounted () {
    this.getComment({ otherId: this.$route.params.id, type: 3, page: 0, size: this.size })
    this.getGoodComment({ otherId: this.$route.params.id, type: 3, page: 0, size: this.size })
    this.getBadComment({ otherId: this.$route.params.id, type: 3, page: 0, size: this.size })
  },
  methods: {
    clickComment () {
      if (this.text === null || this.text === '') {
        this.$message.error('没有留言内容哦')
        return
      }
      const params = {
        type: 3,
        otherId: parseInt(this.$route.params.id),
        comment: parseInt(this.radio),
        content: this.text
      }
      this.postComment(params)
      this.getComment({ otherId: this.$route.params.id, type: 3, page: 0, size: this.size })
      this.getGoodComment({ otherId: this.$route.params.id, type: 3, page: 0, size: this.size })
      this.getBadComment({ otherId: this.$route.params.id, type: 3, page: 0, size: this.size })
    },
    postComment (params) { // 提交评论
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.PostComment(params).then((res) => {
        if (res.status === 200) {
          this.$message({
            message: '恭喜你，提交成功~',
            type: 'success'
          })
        }
      })
      this.text = ''
    },
    getComment (params) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getComment(params).then((res) => {
        this.ones = res.data.totalCount
      })
    },
    getGoodComment (params) { // 获取好评
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getGoodComment(params).then((res) => {
        this.twos = res.data.totalCount
      })
    },
    getBadComment (params) { // 获取差评
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
      margin: 60px auto 0;
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
