<template>
  <el-row class="comment_box" v-loading="loading">
    <div class="top_form">
      <div class="text_Box">
        <textarea v-model="text" placeholder="想说点什么呢..." />
      </div>
      <div class="sub">
        <span @click="sub">评&nbsp;&nbsp;论</span>
      </div>
    </div>
    <el-row class="b_list_Box">
      <comment :list="date" />
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/works'
import Comment from '@/components/projectInfo/Comment'
export default {
  components: {
    Comment
  },

  data () {
    return {
      text: null,
      flag: true,
      date: '',
      loading: false
    }
  },
  created () {
    this.getComment()
  },
  methods: {
    sub () {
      const _this = this
      if (!_this.$store.state.home.isLogin) {
        this.$message({
          message: '你还没登录哦~~~   去登录吧！',
          type: 'error'
        })
        setTimeout(() => {
          _this.$router.push('/login')
        }, 1000)
        return false
      }
      if (this.text === null) {
        this.$message({
          message: '你没有输入任何评论哦！',
          type: 'error'
        })
        return
      }
      if (!this.flag) {
        this.$message({
          message: '稍等一会才能评论哦',
          type: 'warning'
        })
        return
      }
      this.loading = true
      this.$message({
        message: '提交中~~~ 请等待'
      })
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.postComment({ type: 3, otherId: this.$route.params.id, content: this.text }).then((res) => {
        if (res.status === 200) {
          this.flag = false
          this.loading = false
          this.$message({
            message: '提交成功！',
            type: 'success'
          })
          this.text = null
        }
        setTimeout(() => {
          this.flag = true
        }, 10000)
      })
    },
    getComment () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getComment({ type: 3, otherId: this.$route.params.id }).then((res) => {
        console.log('评论', res.data.results)
        this.date = res.data.results
      })
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
