<template>
  <el-row>
    <div v-for="(t,i) in date" :key="i" class="liList">
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
          <comment_one :list="t.children" :old="t.ownId " />
        </div>
      </div>
    </div>

  </el-row>
</template>

<script>
import comment_one from '@/components/works/Comment_one'
export default {
  name: 'Comment',
  components: { comment_one },
  // eslint-disable-next-line vue/require-prop-types
  props: [ 'date' ],
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.oldId, 'ss')
  },
  methods: {
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
