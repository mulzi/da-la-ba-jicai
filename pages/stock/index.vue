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
            <span>库存信息</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="bo_img marginBottom100">
        <el-row class="code">
          <div>
            <div class="img">
              <img src="@/assets/img/Wacth.jpg">
            </div>
            <div class="left class" />
            <div class="right class" />
            <div class="leftBottom class" />
            <div class="rightBottom class" />
          </div>
          <div class="text">
            <div>
              请用微信扫描上方二维码
            </div> <span>进入公众号查看</span>
          </div>
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
  .bo_img{
    margin-top: 20px;
    background: #ffffFF;
    width: 100%;
    min-height: 700px;
    .code{
      margin: 200px auto 0;
      height: 250px;
      width: 250px;
      position: relative;
      text-align: center;
      img{
        width: 250px;
        height: 250px;
        margin-bottom: 15px;
      }
      .class{
        position: absolute;
        width: 100px;
        height: 100px;
        &.left{
          top: -50px;
          left:-50px;
          border-top: 2px solid #1d8ce0;
          border-left: 2px solid #1d8ce0;
          &:before{
            display: block;
            content: '';
            border-top: 2px solid gray;
            border-left: 2px solid gray;
            margin: 14px 9px 9px 9px;
          }
          &:after{
            display: block;
            position: absolute;
            height: 87px;
            top: 0;
            content: '';
            border-top: 2px solid gray;
            border-left: 2px solid gray;
            margin: 14px 9px 9px 9px;
          }
        }
        &.right{
          right: -50px;
          top: -50px;
          border-top: 2px solid #1d8ce0;
          border-right: 2px solid #1d8ce0;
          &::before{
            display: block;
            content: '';
            border-top: 2px solid gray;
            border-right: 2px solid gray;
            margin: 9px 9px -9px 9px;
            width: 97px;
          }
          &::after{
            display: block;
            position: absolute;
            height: 87px;
            top: 0;
            content: '';
            right: 0;
            border-top: 2px solid gray;
            border-right: 2px solid gray;
            margin: 9px -9px -9px -9px;
          }
        }
        &.leftBottom{
          bottom: -50px;
          left: -50px;
          border-bottom: 2px solid #1d8ce0;
          border-left: 2px solid #1d8ce0;
          &::before{
            display: block;
            content: '';
            border-top: 2px solid gray;
            border-left: 2px solid gray;
            margin: 14px 9px -9px 9px;
            position: absolute;
            bottom: 0;
            width:85px;
          }
          &::after{
            display: block;
            position: absolute;
            height: 95px;
            content: '';
            border-top: 2px solid gray;
            border-right: 2px solid gray;
            margin: 14px 9px -9px 9px;
          }
        }
        &.rightBottom{
          bottom:  -50px;
          right:  -50px;
          border-bottom: 2px solid #1d8ce0;
          border-right: 2px solid #1d8ce0;
          &::before{
            display: block;
            content: '';
            border-top: 2px solid gray;
            border-left: 2px solid gray;
            margin: -14px -9px -9px -9px;
            position: absolute;
            bottom: 0;
            right: 0;
            width:98px;
          }
          &::after{
            display: block;
            position: absolute;
            height:98px;
            content: '';
            right: 0;
            bottom: 0;
            border-top: 2px solid gray;
            border-right: 2px solid gray;
            margin: -14px -9px -9px -9px;
          }
        }
      }
       .text{
         margin-top: 100px;
         color: #555555;
         font-size: 18px;
       }
    }
  }
</style>
