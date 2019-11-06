<template>
  <el-row class="box marginBottom100">
    <div class="contentList">
      <nuxt-link v-for="(t,i) in date" :key="i" :to="`/works/worksPage/${t.id}`">
        <p>
          <img :src="t.cover" alt="">
        </p>
        <el-row class="topNameBox">
          <el-row class="oneName">
            主题：{{ t.theme }}
          </el-row>
          <el-row class="twoName">
            项目名称：{{ t.name }}
          </el-row>
          <el-row class="numbers">
            <i class="el-icon-view">&nbsp;{{ t.browser }}</i>
            <i class="el-icon-chat-dot-square">&nbsp;{{ t.comment }}</i>
            <i class="iconfont">&#xe680; {{ t.likes }}</i>
            <span>{{ t.createdAtStr }}</span>
          </el-row>
        </el-row>
        <el-row class="b_name">
          <img :src="t.cover" alt="">
          <span>
            {{t.agent}}
          </span>
        </el-row>
      </nuxt-link>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'Works',
  // eslint-disable-next-line vue/require-prop-types
  props: ['list'],
  data () {
    return {
      date: this.list
    }
  }
}
</script>

<style scoped lang="scss">
    .box{
        width: 100%;
        background: #ffffff;
        .contentList{
            margin: 40px 0;
            padding: 0 30px;
            overflow: hidden;
            a{
                width:20% ;
                float: left;
                box-sizing: border-box;
                border: 1px solid $borderE7;
                border-radius: 6px;
                margin-bottom: 20px;
                overflow: hidden;
                background: #ffffff;
                &:hover{
                    border-color: $redColor;
                    transition: .4s ease-in;
                }
                >p{
                    width: 100%;
                    height:258px ;
                    img{
                        @include img;
                    }
                }
                .topNameBox{
                    width: 100%;
                    margin: 0 auto;
                    border-bottom: 1px solid $borderE7;
                    .oneName{
                        width: 90%;
                        margin: 10px auto 0;
                        height: 20px;
                        line-height: 20px;
                        color: #333333;
                        font-size: 14px;
                        @include over;

                    }
                    .twoName{
                        width: 90%;
                        margin: 10px auto 0;
                        height: 18px;
                        line-height: 18px;
                        color: #333333;
                        font-size: 12px;
                        @include over;
                    }
                    .numbers{
                        width: 90%;
                        margin: 14px auto ;
                        font-size: 12px;
                        color: #bfbfbf;
                        @include over;
                        i{
                            font-size: 12px;
                            margin-right: 6px;
                        }
                        span{
                            margin-left: 10px;
                        }
                    }
                }
                .b_name{
                    width: 90%;
                    margin: 10px auto;
                    display: flex;
                    display: -ms-flex;
                    justify-items: center;
                    align-items: center;
                    img{
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }
                    span{
                        flex: 1;
                        display: block;
                        -ms-flex: 1;
                        @include over;
                        margin-left: 10px;
                        font-size:12px ;
                        color: #333333;
                    }
                }

            }
        }

    }

</style>
