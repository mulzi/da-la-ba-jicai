<template>
  <el-row>
    <div v-for="(t,i) in list" :key="i" class="liList">
      <div class="l_img">
        <img :src="t.headUri" alt="">
      </div>
      <div class="r_Li_list">
        <div class="topTit">
          <span>{{ t.nickName }}：</span>{{ t.content }}
        </div>
        <div class="time">
          <div class="l_time">
            {{ t.createdAtStr }}
          </div>
          <div v-if=" t.ownId !== t.userId " class="r_click_Reply" @click="showMessageBox(t.userId,t.id,t.nickName)">
            回复
          </div>
        </div>
        <div class="n_list" v-if="t.children">
          <div class="n_liList" v-for="(tt,ii) in t.children" :key="ii">
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
                <div v-if=" t.ownId !== t.userId " class="r_click_Reply" @click="showMessageBox(tt.userId,tt.id,tt.nickName)">
                  回复
                </div>
              </div>
            </div>
          </div>
          <div class="spread">
            <span>展开查看更多9条评论 <i class="el-icon-arrow-down" /></span>
          </div>
          <div class="fewer">
            <span>
              收起更多评论 <i class="el-icon-arrow-up" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <message :one-n="toUserId" :two-n="toId" :three-n="toName" v-if="this.$store.state.projectInfo.messageBox" />
  </el-row>
</template>

<script>
import Message from '@/components/projectInfo/message'
export default {
  name: 'Comment',
  components: { Message },
  // eslint-disable-next-line vue/require-prop-types
  props: [ 'list' ],
  data () {
    return {
      toUserId: '', // 被回复人
      toId: '', // 被回复ID
      toName: '' // 被回复名字
    }
  },
  mounted () {
  },
  methods: {
    showMessageBox (i, b, c) {
      this.toUserId = i
      this.toId = b
      this.toName = c
      this.$store.commit('projectInfo/changeMsg')
    },
    showMessageBoxTwo () {
      this.$store.commit('works/changeMsgTwo')
    }
  }
}
</script>

<style scoped lang="scss">
    .liList{
        width: 100%;
        display: flex;
        display: -ms-flex;
        margin-bottom: 15px;
        border-bottom: 1px solid $borderE7;
        >.l_img{
            width: 40px;
            height: 40px;
            img{
                @include img;
            }
        }
        >.r_Li_list{
            flex: 1;
            margin-left: 10px;
            overflow: hidden;
            margin-bottom: 15px;
            >.topTit{
                width: 100%;
                font-size:16px ;
                color: #666666;
                line-height: 24px;
                min-height: 48px;
                span{
                    color: $redColor;
                }
            }
            >.time{
                overflow: hidden;
                margin-top: 6px;
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
            >.n_list{
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
                        font-size: 16px;
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
                        font-size: 16px;
                        margin-right: 10px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
