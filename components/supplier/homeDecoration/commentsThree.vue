<template>
  <ul v-infinite-scroll="loadOne" infinite-scroll-immediate="false" infinite-scroll-disabled="disabled">
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
        <comments-img :list="t.assessmentPicList" />
        <p class="two">
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
</template>

<script>
import commentsImg from './commentsImg'
import { HomeService } from '@/services/home'
export default {
  name: 'CommentsTwo',
  components: {
    commentsImg
  },
  data () {
    return {
      pagesOne: 0,
      // loading: false,
      size: 10,
      ones: 0,
      CommentsTotal: [ ] // 全部评论
    }
  },
  computed: {
    noMoreOne () {
      return this.CommentsTotal.length >= this.ones && this.CommentsTotal.length !== 0
    },
    loading () {
      return this.CommentsTotal.length < this.ones
    },
    disabled () {
      return this.noMoreOne
    }
  },
  watch: {
  },
  mounted () {
    this.getBadComment({ otherId: this.$route.params.id, type: 2, page: 0, size: this.size })
  },
  methods: {
    loadOne () {
      // this.loading = true
      setTimeout(() => {
        this.pagesOne++
        this.getBadComment({ otherId: this.$route.params.id, type: 2, page: this.pagesOne, size: this.size })
      }, 1500)
    },
    getBadComment (params) { // 获取差评
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getBadComment(params).then((res) => {
        this.CommentsTotal = this.CommentsTotal.concat(res.data.results)
        this.ones = res.data.totalCount
      })
    }
  }
}
</script>

<style scoped lang="scss">
    ul{
        height: 800px;
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
                    &.two{
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
</style>
