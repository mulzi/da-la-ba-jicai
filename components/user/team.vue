<template>
  <el-row class="teamBox marginBottom100">
    <el-row class="list">
      <div v-for="(t,i) in this.list" :key="i" class="a" @click="getData(t.id)">
        <div class="leftImg">
          <img v-lazy="t.selfImageList[0].pic" alt="">
        </div>
        <div class="rightText">
          <div class="topName">
            <div class="left_n">
              <span>{{ t.designersName }}</span>
              <span>{{ t.designersPosition }}</span>
            </div>
            <div class="r_look">
              <span>查看详情</span>
              <em class="el-icon-more" />
            </div>
          </div>
          <div class="content">
            {{ t.selfIntroduction }}
          </div>
          <div class="works">
            <div class="tit">
              作品集精选
            </div>
            <team-noe :list="t.portfolioList" />
          </div>
        </div>
      </div>
    </el-row>
    <popup v-if="$store.state.user.popup" :list="bo_list"/>
  </el-row>
</template>

<script>
import popup from './popup'
import teamNoe from './team_one'
import { HomeService } from '@/services/home'
export default {
  name: 'Team',
  components: {
    teamNoe,
    popup
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['list'],
  data () {
    return {
      bo_list: []
    }
  },
  created () {
  },
  methods: {
    getData (id) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getUserTeam(id).then((res) => {
        console.log(res.data.result)
        this.bo_list = res.data.result
        if (res.status === 200) {
          this.$store.commit('user/changePopup')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .teamBox{
        width: 100%;
        background: #ffffff;
        .list{
            margin-top: 32px;
            padding: 0 30px;
            overflow: hidden;
            .a{
                cursor: pointer;
                width: 49%;
                box-sizing: border-box;
                margin-right: 2%;
                margin-bottom: 20px;
                float: left;
                display: flex;
                display: -ms-flex;
                border: 1px solid $borderE7;
                &:hover{
                    border-color:$redColor ;
                    transition: .4s ease-in-out;
                }
                .leftImg{
                    width: 192px;
                    height: 292px;
                    margin: 22px;
                    img{
                        @include img;
                    }
                }
                .rightText{
                    flex: 1;
                    -ms-flex: 1;
                    overflow: hidden;
                    margin: 22px 22px 0 0;
                    .topName{
                        width: 100%;
                        display: -ms-flex;
                        display: flex;
                        .left_n{
                            flex: 1;
                            -ms-flex: 1;
                            span{
                                margin-right: 10px;
                                &:nth-child(1){
                                    font-size: 23px;
                                    color: #333333;
                                }
                                &:nth-child(2){
                                    font-size: 17px;
                                    color: #666666;
                                }
                            }
                        }
                        .r_look{
                            flex: 1;
                            -ms-flex: 1;
                            text-align: right;
                            span{
                                font-size: 15px;
                                color: #333333;
                                display: inline-block;
                                vertical-align: middle;
                            }
                            em{
                                vertical-align: middle;
                                display: inline-block;
                                text-align: center;
                                color: #9a9a9a;
                                height: 26px;
                                line-height: 26px;
                                width: 26px;
                                border-radius: 50%;
                                border: 1px solid #999999;
                                font-size: 16px;
                            }
                        }
                    }
                    .content{
                        width:100% ;
                        line-height:24px ;
                      max-height: 48px;
                        font-size: 16px;
                        margin-top: 24px;
                        color: #666666;
                      @include twoText;

                    }
                    .works{
                        width: 100%;
                        margin-top: 28px;
                        .tit{
                            width: 100%;
                            height: 18px;
                            line-height: 28px;
                            color: #333333;
                            font-size: 16px;
                        }
                    }
                }

                &:nth-child(2n){
                    margin-right: 0;
                }
            }
        }
    }
</style>
