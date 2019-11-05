<template>
  <el-row class="teamBox marginBottom100">
    <el-row class="list">
      <div v-for="(t,i) in this.list" :key="i" class="a" @click="changePopup">
        <div class="leftImg">
          <img src="" alt="">
        </div>
        <div class="rightText">
          <div class="topName">
            <div class="left_n">
              <span>试试</span>
              <span>设计师职称</span>
            </div>
            <div class="r_look">
              <span>查看详情</span>
              <em><i /> <i /> <i /></em>
            </div>
          </div>
          <div class="content">
            个人介绍
          </div>
          <div class="works">
            <div class="tit">
              作品集精选
            </div>
            <div class="bot_img">
              <li>
                <img src="@/assets/img/0123.jpg" alt="">
              </li>
              <li>
                <img src="@/assets/img/0123.jpg" alt="">
              </li>
              <li>
                <img src="@/assets/img/0123.jpg" alt="">
              </li>
            </div>
          </div>
        </div>
      </div>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'Team',
  props: ['list'],
  methods: {
    changePopup () {
      this.$store.commit('user/changePopup')
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
                                height: 26px;
                                line-height: 26px;
                                width: 26px;
                                border-radius: 50%;
                                border: 1px solid #999999;
                                font-size: 0;
                                i{
                                    display: inline-block;
                                    text-align: center;
                                    height: 4px;
                                    width: 4px;
                                    background: #999999;
                                    margin: 0 2px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                    .content{
                        width:100% ;
                        line-height:24px ;
                      max-height: 48px;
                      overflow: hidden;
                        font-size: 16px;
                        margin-top: 24px;
                        color: #666666;

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
                        .bot_img{
                            width: 100%;
                            margin-top: 20px;
                            overflow: hidden;
                            li{
                                float: left;
                                width: 32%;
                                height: 120px;
                                margin-right: 2%;
                                &:last-child{
                                    margin-right: 0;
                                }
                                img{
                                    @include  img;
                                }
                            }
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
