<template>
  <div class="evaluateBox marginBottom100">
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
        <comments v-if="flagOne" />
        <comments-two v-if="flagTwo" />
        <comments-three v-if="flagThree" />
      </div>
    </div>
  </div>
</template>

<script>
import comments from './comments'
import commentsTwo from '@/components/supplier/homeDecoration/commentsTwo'
import commentsThree from '@/components/supplier/homeDecoration/commentsThree'
import { HomeService } from '@/services/home'
export default {
  components: {
    comments,
    commentsTwo,
    commentsThree
  },
  data () {
    return {
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
      loadingThree: false
    }
  },
  mounted () {
    this.getComment({ otherId: this.$route.params.id, type: 2, page: 0, size: this.size })
    this.getGoodComment({ otherId: this.$route.params.id, type: 2, page: 0, size: this.size })
    this.getBadComment({ otherId: this.$route.params.id, type: 2, page: 0, size: this.size })
  },
  methods: {
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
      }
    }
  }
</style>
