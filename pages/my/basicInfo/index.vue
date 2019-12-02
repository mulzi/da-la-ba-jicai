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
                <img :src="date.headUri" alt="">
              </el-row>
              <el-row class="name">
                {{date.name}}
              </el-row>
              <el-row class="userId">
                Id:{{ date.id }}
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
                  <nuxt-link to="/my/basicInfo/edit">
                    编辑
                  </nuxt-link>
                </el-col>
              </el-row>
              <el-row class="list">
                <el-col class="lef">
                  昵称
                </el-col>
                <el-col class="rig">
                  {{date.name}}
                </el-col>
              </el-row>

              <el-row class="list">
                <el-col class="lef">
                  手机号
                </el-col>
                <el-col class="rig">
                  {{date.mobile}}
                </el-col>
              </el-row>
              <el-row class="list">
                <el-col class="lef">
                  邮箱
                </el-col>
                <el-col class="rig">
                  {{date.email}}
                </el-col>
              </el-row>
              <el-row class="list">
                <el-col class="lef">
                  性别
                </el-col>
                <el-col v-if="date.sex === 1" class="rig">
                  男
                </el-col>
                <el-col  v-if="date.sex === 2" class="rig">
                  女
                </el-col>
              </el-row>
              <el-row class="list">
                <el-col class="lef">
                  公司名称
                </el-col>
                <el-col class="rig">
                  {{date.companyName}}
                </el-col>
              </el-row>
              <el-row class="list">
                <el-col class="lef">
                  公司地址
                </el-col>
                <el-col class="rig">
                  {{ date.companyAddress }}
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
import { HomeService } from '@/services/myCentent'
import menuS from '@/components/my/leftMenu'
export default {
  components: { menuS },
  layout: 'my',
  data () {
    return {
      date: ''
    }
  },
  asyncData (context) {
    const homeService = new HomeService(context)
    return homeService.getUser().then((res) => {
      // console.log('首页全部数据', res.data)
      return { date: res.data.result || {} }
    })
  },
  mounted () {
    console.log(this.date)
    // this.getUser()
  },
  methods: {
    getUser () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getUser().then((res) => {
        console.log(res)
      })
    }
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
      .userBox{
        background: #ffffFF;
        margin-top: 10px;
        .title{
          padding: 0 30px;
          margin: 30px 0;
          .lete{
            font-size: 20px;
            font-weight: 400;
            color: #333333;
          }
          .rige{
            text-align: right;
            a{
              color:#037CE6 ;
              font-size: 14px;
            }
          }
        }
        .list{
          padding: 0 30px;
          margin-bottom: 25px;
          font-size: 14px;
          display: flex;
          display: -ms-flex;
          .lef{
            width: 80px;
            text-align: right;
            color: #b3b3b3;
          }
          .rig{
            flex: 1;
            margin-left: 20px;
            -ms-flex: 1;
            overflow: hidden;
            color: #333333;
          }
          &:last-child{
            margin-bottom: 32px;
          }
        }
      }

    }
  }
}
</style>
