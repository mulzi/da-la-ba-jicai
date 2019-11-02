<template>
  <div class="liList">
    <div class="l_img">
      <img src="@/assets/img/0123.jpg" alt="">
    </div>
    <div class="r_Li_list">
      <div class="topTit">
        <span>用户名称：</span>撒大声地阿萨德阿萨德啊实打实大啊实打实大阿萨德啊
      </div>
      <div class="time">
        <div class="l_time">
          今天 11:00
        </div>
        <div class="r_click_Reply" @click="showMessageBox">
          回复
        </div>
      </div>
      <div class="n_list">
        <div class="n_liList">
          <div class="l_img">
            <img src="@/assets/img/0123.jpg" alt="">
          </div>
          <div class="r_Li_list">
            <div class="topTit">
              <span>用户名称：</span><em>回复<i>@用户名称</i></em> 撒大声地阿萨德阿萨德啊实打实大啊实打实大阿萨德啊
            </div>
            <div class="time">
              <div class="l_time">
                今天 11:00
              </div>
              <div class="r_click_Reply" @click="showMessageBox">
                回复
              </div>
            </div>
          </div>
        </div>
        <div class="n_liList">
          <div class="l_img">
            <img src="@/assets/img/0123.jpg" alt="">
          </div>
          <div class="r_Li_list">
            <div class="topTit">
              <span>用户名称：</span><em>回复<i>@用户名称</i></em> 撒大声地阿萨德阿萨德啊实打实大啊实打实大阿萨德啊
            </div>
            <div class="time">
              <div class="l_time">
                今天 11:00
              </div>
              <div class="r_click_Reply" @click="showMessageBox">
                回复
              </div>
            </div>
          </div>
        </div>
        <div class="n_liList">
          <div class="l_img">
            <img src="@/assets/img/0123.jpg" alt="">
          </div>
          <div class="r_Li_list">
            <div class="topTit">
              <span>用户名称：</span><em>回复<i>@用户名称</i></em> 撒大声地阿萨德阿萨德啊实打实大啊实打实大阿萨德啊
            </div>
            <div class="time">
              <div class="l_time">
                今天 11:00
              </div>
              <div class="r_click_Reply" @click="showMessageBox">
                回复
              </div>
            </div>
          </div>
        </div>
        <div class="n_liList">
          <div class="l_img">
            <img src="@/assets/img/0123.jpg" alt="">
          </div>
          <div class="r_Li_list">
            <div class="topTit">
              <span>用户名称：</span><em>回复<i>@用户名称</i></em> 撒大声地阿萨德阿萨德啊实打实大啊实打实大阿萨德啊
            </div>
            <div class="time">
              <div class="l_time">
                今天 11:00
              </div>
              <div class="r_click_Reply" @click="showMessageBox">
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
</template>

<script>
export default {
  name: 'Comment',
  methods: {
    showMessageBox () {
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
        margin-bottom: 30px;
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
