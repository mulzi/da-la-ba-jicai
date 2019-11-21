<template>
  <el-row class="supplierBody">
    <el-row class="myBodyBox">
      <el-row :gutter="25" class="myCentent marginBottom100">
        <el-col :span="4" class="leftBox">
          <menu-s />
        </el-col>
        <el-col :span="20" class="rightBox">
          <el-row class="infoBox">
            <el-row class="topHead">
              <el-row class="headImg">
                <img src="@/assets/img/0123.jpg" alt="">
              </el-row>
              <el-row class="name">
                用户姓名
              </el-row>
              <el-row class="userId">
                Id:0123456789
              </el-row>
              <el-row class="numberMsg">
                <el-col :span="6" class="msgNub">
                  <p>关注</p>
                  <p>0</p>
                </el-col>
                <el-col :span="6" class="msgNub">
                  <p>粉丝</p>
                  <p>0</p>
                </el-col>
                <el-col :span="6" class="msgNub">
                  <p>帖子</p>
                  <p>0</p>
                </el-col>
                <el-col :span="6" class="msgNub">
                  <p>消息</p>
                  <p>0</p>
                </el-col>
              </el-row>
            </el-row>
            <el-row class="userBox">
              <el-row class="title">
                <el-col :span="12" class="lete">
                  <span>基本信息</span>
                </el-col>
                <el-col :span="12" class="rige">
                  <nuxt-link to="">
                    编辑
                  </nuxt-link>
                </el-col>
              </el-row>
              <el-row class="list">
                <el-col :span="2" class="lef">
                  昵称
                </el-col>
                <el-col :span="22" class="rig">
                  sdasdasd
                </el-col>
              </el-row>

              <el-row class="list">
                <el-col :span="2" class="lef">
                  手机号
                </el-col>
                <el-col :span="22" class="rig">
                  sdasdasd
                </el-col>
              </el-row>
              <el-row class="list">
                <el-col :span="2" class="lef">
                  邮箱
                </el-col>
                <el-col :span="22" class="rig">
                  sdasdasd
                </el-col>
              </el-row>
              <el-row class="list">
                <el-col :span="2" class="lef">
                  性别
                </el-col>
                <el-col :span="22" class="rig">
                  sdasdasd
                </el-col>
              </el-row>
              <el-row class="list">
                <el-col :span="2" class="lef">
                  公司名称
                </el-col>
                <el-col :span="22" class="rig">
                  sdasdasd
                </el-col>
              </el-row>
              <el-row class="list">
                <el-col :span="2" class="lef">
                  公司地址
                </el-col>
                <el-col :span="22" class="rig">
                  sdasdasd
                </el-col>
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
  layout: 'my'
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
      .topHead{
        width: 100%;
        height: 260px;
        background: url("~@/assets/img/personal.png") no-repeat;
        background-size: cover ;
        .headImg{
          width: 70px;
          height: 70px;
          margin: 50px auto 0;
          border-radius: 50%;
          overflow: hidden;
          img{
            @include img;
          }
        }
        .name{
          margin-top:10px ;
          font-size: 14px;
          color: #ffffff;
          text-align: center;
        }
        .userId{
          font-size: 16px;
          color: #ffffff;
          text-align: center;
        }
        .numberMsg{
          width: 260px;
          margin: 10px auto 0;
          .msgNub{
            font-size: 16px;
            color: #ffffFF;
            text-align: center;
            &:first-child{
              color:$redColor;
            }
          }
        }

      }
    }
  }
}
</style>
