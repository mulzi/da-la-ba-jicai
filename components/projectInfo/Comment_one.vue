<template>
  <el-row>
    <div class="n_liList" v-for="(tt,ii) in flag ? list.slice(0,3) : list " :key="ii">
      <div class="l_img">
        <img :src="tt.headUri" alt="">
      </div>
      <div class="r_Li_list">
        <div class="topTit">
          <span>{{ tt.nickName }}：</span><em>回复<i>@{{ tt.toNickName }}</i></em> {{ tt.content }}
        </div>
        <div class="time">
          <div class="l_time">
            {{ tt.createdAtStr }}
          </div>
          <div v-if=" old !== tt.userId " class="r_click_Reply" @click="showMessageBox(tt.userId,tt.toId,tt.nickName)">
            回复
          </div>
        </div>
      </div>
    </div>
    <div class="spread" v-if="flag && this.list.length > 3">
      <span @click="changeFlag">展开查看更多{{ this.list.length - 3 }}条评论 <i class="el-icon-arrow-down" /></span>
    </div>
    <div class="fewer" v-if="!flag && this.list.length > 3">
      <span @click="changeFlag">
        收起更多评论 <i class="el-icon-arrow-up" />
      </span>
    </div>
  </el-row>
</template>

<script>
export default {
  props: ['list', 'old'],
  data () {
    return {
      flag: true
    }
  },
  methods: {
    changeFlag () {
      this.flag = !this.flag
    },
    showMessageBox (i, b, c) {
      this.$store.commit('works/changeUID', i)
      this.$store.commit('works/changeTOID', b)
      this.$store.commit('works/changeName', c)
      this.$store.commit('works/changeMsg')
    }
  }
}
</script>

<style scoped lang="scss">
    .n_list{
        width: 100%;
        background: #f2f2f2;
        margin-top: 10px;
        overflow: hidden;
        .n_liList{
            width: 97%;
            margin: 10px auto ;
            border-bottom: 1px solid #d9d9d9;
            display: flex;
            display: -ms-flex;
            .l_img{
                width: 40px;
                height: 40px;
                img{
                    @include img;
                }
            }
            .r_Li_list{
                flex: 1;
                overflow: hidden;
                -ms-flex: 1;
                margin-left: 10px;
                .topTit{
                    width: 100%;
                    font-size: 15px;
                    color: #666666;
                    line-height: 22px;
                    min-height: 44px;
                    span{
                        color: $redColor;

                    }
                    em{
                        i{
                            color: $redColor;
                        }
                    }
                }
                >.time{
                    overflow: hidden;
                    margin-top: 6px;
                    margin-bottom: 10px;
                    .l_time{
                        float: left;
                        color: #999999;
                        font-size: 16px;
                    }
                    .r_click_Reply{
                        float: right;
                        color: #999999;
                        font-size: 16px;
                        cursor: pointer;
                    }
                }

            }
        }
        .spread{
            width: 100%;
            height:40px ;
            line-height: 40px;
            span{
                color: $redColor;
                font-size: 12px;
                margin-left: 10px;
                cursor: pointer;

            }
        }
        .fewer{
            width: 100%;
            height:40px ;
            line-height: 40px;
            text-align: right;
            span{
                color: $redColor;
                font-size: 12px;
                margin-right: 10px;
                cursor: pointer;
            }
        }
    }
</style>
