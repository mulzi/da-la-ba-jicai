<template>
  <el-row class="supplierBody">
    <el-row class="myBodyBox">
      <el-row :gutter="25" class="myCentent marginBottom100">
        <el-col :span="4" class="leftBox">
          <menu-s />
        </el-col>
        <el-col :span="20" class="rightBox">
          <el-row class="infoBox">
            <el-col :span="12" class="left">
              可用积分：0
            </el-col>
            <el-col :span="12" class="right">
              <nuxt-link to="/my/PurchasePoints">
                去充值
              </nuxt-link>
            </el-col>
          </el-row>
          <el-row class="bottomList">
            <el-row class="topTit">
              <span>
                积分明细
              </span>
              <em>
                积分规则
              </em>
            </el-row>
            <el-row class="list">
              <el-row class="top">
                <el-col :span="4">
                  操作时间
                </el-col>
                <el-col :span="8">
                  变更原因
                </el-col>
                <el-col :span="8">
                  变更明细
                </el-col>
                <el-col :span="4">
                  积分变动
                </el-col>
              </el-row>
              <el-row class="b_list" v-for="(t,i) in 10" :key="i">
                <el-col :span="4">
                  2019.04.03 15:22
                </el-col>
                <el-col :span="8">
                  发布情报
                </el-col>
                <el-col :span="8">
                  大喇叭平台
                </el-col>
                <el-col :span="4">
                  +50
                </el-col>
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
        </el-col>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import menuS from '@/components/my/leftMenu'
export default {
  components: { menuS },
  layout: 'my',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
    .myCentent{
        width: 100%;
        margin-top: 20px;
        .leftBox{
        }
      .rightBox{
        .infoBox{
          width: 100%;
          height: 96px;
          background: #ffffff;
          .left{
            text-indent: 30px;
            font-size:18px;
            color: #333333;
            line-height: 96px;
          }
          .right{
            text-align: right;
            a{
              display: inline-block;
              margin-right: 30px;
              height: 40px;
              line-height: 40px;
              width: 150px;
              background: $redColor;
              font-size: 16px;
              color: #ffffFF;
              text-align: center;
              border-radius: 6px;
              margin-top: 28px;
              &:hover{
                box-shadow: 0px 0px 10px #d8d8d8;
              }
            }
          }
        }
        .bottomList{
          width: 100%;
          background: #ffffFF;
          margin-top: 30px;
          .topTit{
            padding: 0 30px;
            margin-top: 30px;
            overflow: hidden;
            border-bottom: 1px solid $borderE7;
            span{
              float: left;
              width: 80px;
              line-height: 30px;
              height: 30px;
              text-align: center;
              color: $redColor;
              font-size: 16px;
              margin-bottom: 10px;
              position: relative;
              &::before{
                content: "";
                display: inline-block;
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: -10px;
                left: 0;
                background: $redColor;
              }
            }
            em{

              float: right;
              width: 80px;
              line-height: 30px;
              height: 30px;
              text-align: center;
              color: #333333;
              font-size: 16px;
              margin-bottom: 10px;
              cursor: pointer;
              text-decoration: underline #333333;

            }
          }
          .list{
            margin: 40px 0;
            padding: 0 30px;
            .top{
              width: 100%;
              height: 44px;
              line-height: 44px;
              text-align: center;
              background: #fff3e9;
              font-size: 16px;
              color: #333333;
            }
            .b_list{
              width: 100%;
              height: 44px;
              line-height: 44px;
              text-align: center;
              font-size: 13px;
              color: #666666;
              border-bottom: 1px solid $borderE7;
              &:hover{
                background: #f6f6f6;
                transition: .3s ease-in-out;
              }
            }
            .pageSbox{
              width: 100%;
              text-align: center;
              margin: 40px auto;
              .el-pagination {
                padding: 0 20px;
                display: inline-block;

                .btn-prev {
                  background: #ffffff;
                }

                .el-pager {
                  li {
                    background: #ffffff;

                    &.active {
                      background: $redColor;
                    }
                  }

                }
              }
            }
          }
        }
      }
    }
</style>
