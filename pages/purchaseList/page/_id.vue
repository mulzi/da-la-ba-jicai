<template>
  <el-row class="supplierBody">
    <el-row class="bodyBox">
      <el-row class="HeaderBreadcrumb">
        <el-col :span="24">
          <div class="breadcrumb">
            <span class="iconfont">&#xe635;</span>
            <span style="margin-right: 0;color: #8e8e8e">当前位置：</span>
            <nuxt-link to="/">
              首页
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <nuxt-link to="/purchaseList">
              招采信息
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>招采详情</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="ones">
        <el-row class="tit">
          <span>主题主题</span>
        </el-row>
        <el-row class="bo_box">
          <el-row class="li">
            <el-col :span="2" class="left">
              更新时间：
            </el-col>
            <el-col :span="20" class="right">
              招募类型
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              项目类别：
            </el-col>
            <el-col :span="20" class="right">
              招募类型
            </el-col>
          </el-row>
          <el-row class="li">
          <el-col :span="2" class="left">
            材料要求：
          </el-col>
          <el-col :span="20" class="right">
            招募类型
          </el-col>
        </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              &nbsp;
            </el-col>
            <el-col :span="20" class="right" v-viewer>
              <img src="@/assets/img/0123.jpg" alt="">
              <img src="@/assets/img/0123.jpg" alt="">
              <img src="@/assets/img/0123.jpg" alt="">
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              工地地区：
            </el-col>
            <el-col :span="20" class="right">
              招募类型
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              详细地址：
            </el-col>
            <el-col :span="20" class="right">
              招募类型
            </el-col>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="ones marginBottom100">
        <el-row class="tit">
          <span>联系方式</span>
        </el-row>
        <el-row class="bo_box">
          <el-row class="li">
            <el-col :span="2" class="left">
              联系人：
            </el-col>
            <el-col :span="20" class="right">
              招募类型
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              联系人职位：
            </el-col>
            <el-col :span="20" class="right">
              招募类型
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="2" class="left">
              联系电话：
            </el-col>
            <el-col :span="20" class="right">
              招募类型
            </el-col>
          </el-row>
          <el-row class="li">
            <el-col :span="8" class="left" style="text-align: left">
              联系我时请说是在大喇叭集采网上看到的，谢谢！
            </el-col>
          </el-row>
        </el-row>
        <el-row class="download">
          点击查看
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  layout: 'main'
}
</script>

<style scoped lang="scss">

    .ones{
        width: 100%;
        background: #ffffFF;
        overflow: hidden;
        margin-top: 20px;
        .tit{
            padding: 0 30px ;
            margin-top: 30px;
            span{
                width: 100%;
                display: block;
                height: 28px;
                line-height: 28px;
                font-size: 28px;
                color: #333333;
                font-weight: bold;
                text-indent: 20px;
                border-left: 8px solid $redColor;
            }
        }
        .bo_box{
            width: calc(100% - 60px);
            margin: 30px auto 0;
            overflow: hidden;
            .li{
                margin-bottom: 30px;
                color: #adadad;
                font-size: 16px;
                .left{
                    text-align: right;
                }
                .right{
                    color: #333333;
                  img{
                    width: 110px;
                    height: 100px;
                    display: inline-block;
                    margin-right: 12px;
                    cursor: pointer;
                  }
                }
            }
        }
        .download{
            position: absolute;
            top: 130px;
            left: 400px;
            display: inline-block;
            padding:8px 20px;
            background: $redColor;
            color: #ffffff;
            font-size: 13px;
            cursor: pointer;
            margin-left: 50px;
            margin-bottom: 30px;
        }
    }
    .twos{
        width: 100%;
        background: #ffffFF;
        overflow: hidden;
        margin-top: 20px;
        .tit{
            padding: 0 30px ;
            margin-top: 30px;
            span{
                width: 100%;
                display: block;
                height: 28px;
                line-height: 28px;
                font-size: 28px;
                color: #333333;
                font-weight: bold;
                text-indent: 20px;
                border-left: 8px solid $redColor;
            }
        }
        .bo_box{
            width: calc(100% - 60px);
            margin: 30px auto 0;
            overflow: hidden;
            .content{
                padding: 0 20px;
                p{
                    margin-bottom: 20px;
                    font-size: 16px;
                    line-height: 24px;
                    color: #333333;
                }
            }

        }
        .download{
            display: inline-block;
            padding:8px 16px;
            background: #1BACFF;
            color: #ffffff;
            font-size: 13px;
            cursor: pointer;
            margin-left: 50px;
            margin-bottom: 30px;
        }

    }

</style>
