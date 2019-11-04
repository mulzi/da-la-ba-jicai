<template>
  <el-row class="comment_box">
    <div class="top_form">
      <div class="text_Box">
        <textarea placeholder="想说点什么呢..." />
      </div>
      <div class="sub">
        <span>评&nbsp;&nbsp;论</span>
      </div>
    </div>
    <div class="b_list_Box">
      <comment />
    </div>
  </el-row>
</template>

<script>
import Comment from '@/components/works/Comment'
export default {
  name: 'MessageOne',
  components: {
    Comment
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
