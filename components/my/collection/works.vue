<template>
  <el-row>
    <el-row class="bottomListBox">
      <el-row class="NoData marginBottom40">
        <div class="img">
          <img src="@/assets/img/nodata.png" alt="">
        </div>
        <div class="text">
          没有数据
        </div>
      </el-row>
      <el-row class="contentList">
        <nuxt-link v-for="(item, index) in 15" :key="index" to="">
          <p>
            <img src="@/assets/img/nodata.png" alt="">
          </p>
          <el-row class="topNameBox">
            <el-row class="oneName">
              主题：
            </el-row>
            <el-row class="twoName">
              项目名称：
            </el-row>
            <el-row class="numbers">
              <i class="el-icon-view">&nbsp;55</i>
              <i class="el-icon-chat-dot-square">&nbsp;55</i>
              <i class="iconfont">&#xe680;&nbsp;55</i>
              <span>2010-15-15</span>
            </el-row>
          </el-row>
          <el-row class="b_name">
            <img src="@/assets/img/nodata.png" alt="">
            <span>
              公司名字
            </span>
          </el-row>
        </nuxt-link>
      </el-row>
      <el-row class="pageSbox">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
        />
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'Works'
}
</script>

<style scoped lang="scss">
    .bottomListBox{
        margin-top: 30px;
        width: 100%;
        .contentList{
            width: 100%;
            a{
                width:32% ;
                float: left;
                margin-right: 2%;
                border-radius: 6px;
                margin-bottom: 20px;
                overflow: hidden;
                box-sizing: border-box;
                border: 1px solid $borderE7;
                >p{
                    width: 100%;
                    height:258px ;
                    img{
                        @include img;
                    }
                }
                &:nth-child(3n){
                    margin-right: 0;
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
                &:hover{
                    transition: .2s ease-in;
                    box-shadow: 0px 0px 14px #d9d9d9;
                }

            }
        }
        .NoData{
            background: #ffffff;
            width: 100%;
            height: 400px;
            overflow: hidden;
            .img{
                width: 200px;
                height: 200px;
                margin: 100px auto 50px;
                img{
                    @include img;
                }

            }
            .text{
                font-size: 13px;
                color: #333333;
                text-align: center;
            }
        }
    }
</style>
