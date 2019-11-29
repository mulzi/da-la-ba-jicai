<template>
  <el-row class="fxiedComment">
    <div class="BG" @click="showMessageBox" />
    <div class="comment">
      <div class="bodyContent">
        <div class="close" @click="showMessageBox">
          <span class="el-icon-close" />
        </div>
        <div class="name">
          你想对<span>{{ this.$store.state.works.toName }}</span>说什么
        </div>
        <div class="text">
          <textarea v-model="text" placeholder="写点什么吧" />
        </div>
        <div class="sub">
          <span @click="postComment">提交</span>
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/works'
export default {
  data () {
    return {
      text: '',
      flag: true
    }
  },
  methods: {
    showMessageBox () {
      this.$store.commit('works/changeMsg')
    },
    postComment () {
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
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.postComment({ type: 4, toUserId: this.$store.state.works.toUserId, toId: this.$store.state.works.toId, content: this.text, otherId: this.$route.params.id }).then((res) => {
        if (res.status === 200) {
          this.$store.commit('works/changeMsg')
          this.$store.commit('works/changeComBox')
          this.$nextTick(() => {
            this.$nuxt.$loading.start()
            this.$store.commit('works/changeComBox')
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
          })
          this.$message({
            message: '发布成功',
            type: 'success'
          })
        }
      })
    }
  }

}
</script>

<style scoped lang="scss">
  .fxiedComment{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 901;
    .BG{
      width: 100%;
      z-index: 902;
      height: 100%;
      background: rgba(0,0,0,.2);
      top: 0;
      left: 0;
      position: absolute;
    }
    .comment{
      width: 600px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: #ffffff;
      border-radius: 4px;
      z-index: 903;
      .bodyContent{
        width: 92%;
        margin: 30px auto;
        .close{
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          right: 0;
          text-align: center;
          line-height: 40px;
          span{
            font-size: 30px;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            width: 40px;
            cursor: pointer;
            &:hover{
              transform: rotateZ(720deg);
              transition: 1.4s ease-in-out;
            }
          }
        }
        .name{
          width: 100%;
          font-size: 13px;
          color: #999999;
          span{
            color: $redColor;
            font-weight: bold;
          }
        }
        .text{
          width: 100%;
          border: 1px solid $borderE7;
          margin-top: 6px;
          textarea{
            width: 94%;
            height: 60px;
            line-height: 20px;
            color: #333333;
            font-size: 13px;
            margin: 10px auto;
            resize: none;
            display: block;
            outline: none;
          }
        }
        .sub{
          width: 100%;
          margin: 20px auto 0;
          overflow: hidden;
          span{
            width: 80px;
            height: 34px;
            line-height: 34px;
            border-radius: 4px;
            background: $redColor;
            color: #ffffff;
            display: block;
            float: right;
            text-align: center;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
