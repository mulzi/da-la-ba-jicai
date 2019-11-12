<template>
  <el-row class="peoDetails">
    <div class="bg" @click="changePro" />
    <el-row class="listBox">
      <el-row class="topClose">
        <el-col class="overc" :span="22">
          公司名字
        </el-col>
        <el-col :span="2">
          <span class="icon el-icon-close" @click="changePro" />
        </el-col>
      </el-row>
      <el-row class="textList">
        <el-row class="list">
          <el-col :span="6" class="left">
            公司类型：
          </el-col>
          <el-col :span="18" class="right">
            ssssssssssssss
          </el-col>
        </el-row>
        <el-row class="list">
          <el-col :span="6" class="left">
            公司名称：
          </el-col>
          <el-col :span="18" class="right">
            ssssssssssssss
          </el-col>
        </el-row>
        <el-row class="list">
          <el-col :span="6" class="left">
            姓名：
          </el-col>
          <el-col :span="18" class="right">
            ssssssssssssss
          </el-col>
        </el-row>
        <el-row class="list">
          <el-col :span="6" class="left">
            联系人职位：
          </el-col>
          <el-col :span="18" class="right">
            ssssssssssssss
          </el-col>
        </el-row>
        <el-row class="list">
          <el-col :span="6" class="left">
            联系人介绍：
          </el-col>
          <el-col :span="18" class="right">
            ssssssssssssss
          </el-col>
        </el-row>
        <el-row class="list">
          <el-col :span="6" class="left">
            联系人电话：
          </el-col>
          <el-col :span="18" class="right">
            ssssssssssssss
          </el-col>
        </el-row>
        <el-row class="list">
          <el-col :span="6" class="left">
            项目地址：
          </el-col>
          <el-col :span="18" class="right">
            ssssssssssssss
          </el-col>
        </el-row>
        <el-row class="list">
          <el-col :span="6" class="left">
            项目阶段：
          </el-col>
          <el-col :span="18" class="right">
            ssssssssssssss
          </el-col>
        </el-row>
        <el-row class="list">
          <el-col :span="6" class="left">
            未定材料：
          </el-col>
          <el-col :span="18" class="right">
            ssssssssssssss
          </el-col>
        </el-row>
        <el-row class="list">
          <el-col :span="6" class="left">
            项目图片：
          </el-col>
          <el-col :span="18" class="right" />
        </el-row>
        <div v-viewer class="imgList">
          <li><span><img src="@/assets/img/0123.jpg" alt=""></span></li>
          <li><span><img src="@/assets/img/0123.jpg" alt=""></span></li>
          <li><span><img src="@/assets/img/0123.jpg" alt=""></span></li>
          <li><span><img src="@/assets/img/0123.jpg" alt=""></span></li>
        </div>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'ProDetails',
  methods: {
    changePro () {
      this.$store.commit('home/changeProDetails')
    }
  }
}
</script>

<style scoped lang="scss">
    .peoDetails{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 900;
      overflow: hidden;
        .bg{
            width: 100%;
            height: 100%;
            background: rgba(0,0,0, .4);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 902;
        }
        .listBox{
            background: #ffffff;
            width: 500px;
            max-height: 90%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 908;
            overflow-y: auto;
            .topClose{
                width: 100%;
                height: 52px;
                line-height: 52px;
                background: $redColor;
                .overc{
                    text-indent: 20px;
                    color: #ffffff;
                    font-size:18px ;
                    @include over;
                }
                .icon{
                    font-size: 24px;
                    color: #ffffff;
                }
            }
            .textList{
                padding: 0 20px;
                margin: 40px auto 20px;
                .list{
                    width: 100%;
                    margin-bottom: 14px;
                    .left{
                        color: #999999;
                        font-size: 14px;
                        text-align: right;
                    }
                    .right{
                        font-size: 14px;
                        color: #333333;
                        @include over;
                    }
                }
                .imgList{
                    width: 80%;
                    margin-left: 20%;
                    &::after{
                        clear: both;
                        display: block;
                        height: 0;
                        visibility: hidden;
                        content: "";
                    }
                    li{
                        width: 49%;
                        float: left;
                        height: 120px;
                        margin-right: 2%;
                        border:1px solid $borderE7;
                        box-sizing: border-box;
                        &:nth-child(2n){
                            margin-right: 0;
                        }
                        span{
                            display: block;
                            padding: 4px;
                            height: 112px;
                            img{
                                display: block;
                                width: 100%;
                                height: 100%;
                              &:hover{
                                cursor: url("~@/assets/img/big01.png") auto;
                              }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
