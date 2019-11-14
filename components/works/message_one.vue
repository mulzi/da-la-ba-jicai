<template>
  <el-row class="fxiedComment">
    <div class="BG" @click="showMessageBox" />
    <div class="comment">
      <div class="bodyContent">
        <div class="close" @click="showMessageBox">
          <span class="el-icon-close" />
        </div>
        <div class="name">
          你想对<span>用户名字ss</span>说什么
        </div>
        <div class="text">
          <textarea placeholder="写点什么吧" />
        </div>
        <div class="sub">
          <span @click="postComment({type:4,toUserId:0})">提交</span>
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/works'
export default {
  name: 'Message',
  data () {
    return {

    }
  },
  methods: {
    showMessageBox () {
      this.$store.commit('works/changeMsgTwo')
    },
    postComment () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.postComment().then((res) => {
        console.log(res)
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
