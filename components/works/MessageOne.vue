<template>
  <el-row class="comment_box">
    <div class="top_form">
      <div class="text_Box">
        <textarea v-model="text" placeholder="想说点什么呢..." />
      </div>
      <div class="sub">
        <span @click="postComment({type:4, otherId: $route.params.id,content: text})">评&nbsp;&nbsp;论</span>
      </div>
    </div>
    <div class="b_list_Box">
      <comment :date="commentList" />
    </div>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/works'
import Comment from '@/components/works/Comment'
export default {
  components: {
    Comment
  },
  // eslint-disable-next-line vue/require-prop-types
  data () {
    return {
      text: '',
      commentList: ''
    }
  },
  mounted () {
    this.getComment()
  },
  methods: {
    getComment () { // 获取评论
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getComment({ otherId: this.$route.params.id, type: 4 }).then((res) => {
        console.log('s', res.data.results)
        this.commentList = res.data.results
        // console.log('赋值成功', this.commentList)
      })
    },
    postComment (params) { // 提交普通评论
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
      } else if (this.text === '' || this.text === null || this.text === undefined) {
        this.$message({
          message: '你还没输入评论哦',
          type: 'warning'
        })
      } else {
        homeService.postComment(params).then((res) => {
          console.log(res)
          if (res.status === 200) {
            this.$message({
              message: '评论成功',
              type: 'success'
            })
            this.text = ''
          }
          this.getComment()
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .comment_box{
        background: #ffffff;
        margin: 40px auto 0;
        width: 100%;
        overflow: hidden;
        .top_form{
            width: 100%;
            margin-top: 30px ;
            .text_Box{
                width: 94%;
                margin: 0 auto;
                border: 1px solid $borderE7;
                border-radius: 6px;
                textarea{
                    width: 94%;
                    margin: 20px auto;
                    height: 96px;
                    line-height: 24px;
                    font-size: 16px;
                    color: #333333;
                    display: block;
                    resize: none;
                    outline: none;
                }
            }
            .sub{
                width: 94%;
                margin: 20px auto;
                overflow: hidden;
                span{
                    display: block;
                    float: right;
                    width: 100px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    color: #ffffff;
                    background: $redColor;
                    cursor: pointer;
                }
            }
        }
        .b_list_Box{
            width: 94%;
            margin: 30px auto ;
            overflow: hidden;

        }
    }
</style>
