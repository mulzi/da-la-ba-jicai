<template>
  <el-row class="saleBox marginBottom100">
    <el-row class="saleList">
      <el-row class="liList">
        <el-row class="flexs">
          <div class="leftBanner">
            <banner />
          </div>
          <div class="rightText">
            <el-row class="title">
              <span>产品名称</span>
            </el-row>
            <el-row class="property">
              <el-col class="li">
                属性：45KG
              </el-col>
              <el-col class="li">
                属性：45KG
              </el-col>
              <el-col class="li">
                属性：45KG
              </el-col>
            </el-row>
            <el-row class="money">
              <el-col class="leBox">
                <span>大喇叭惊爆价：</span>
                <em>72</em>
                <span>元</span>
              </el-col>
              <el-col class="riBox">
                <span>
                  门店价：
                </span>
                <em>
                  99
                </em>
                <span>
                  元
                </span>
              </el-col>
            </el-row>
          </div>
        </el-row>
        <div class="line-s" />
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import banner from './banner'
export default {
  name: 'Sale',
  components: {
    banner
  }
}
</script>

<style scoped lang="scss">
  .saleBox{
    width: 100%;
    background: #ffffff;
    .saleList{
      padding: 0 30px;
      margin:60px auto 0 ;
      .liList{
        width: 100%;
        margin-bottom: 40px;
        .flexs{
          display: flex;
          display: -ms-flex;
          margin-bottom: 40px;
          .leftBanner{
            width: 684px;
            height: 506px;
          }
          .rightText{
            flex: 1;
            -ms-flex: 1;
            margin-left: 48px;
            overflow: hidden;
            .title{
              background: #333333;
              height: 56px;
              line-height: 56px;
              font-size: 28px;
              color: #ffffff;
              span{
                margin-left: 20px;
              }

            }
            .property{
              margin-top: 28px;
              overflow: hidden;

              .li{
                width: 48%;
                float: left;
                background: #e5e5e5;
                height: 56px;
                line-height: 56px;
                text-indent: 20px;
                color: #171717;
                font-size: 16px;
                margin-right: 4%;
                margin-bottom: 20px;
                &:nth-child(2n){
                  margin-right: 0;
                }
              }
            }
            .money{
              margin-top: 80px;
              .leBox{
                background: $redColor;
                height: 80px;
                line-height: 74px;
                text-align: center;
                @include  over;
                color: #ffffff;
                font-size: 24px;
                width: 55%;
                float: left;
                em{
                  margin-left: 10px;
                  font-size: 42px;
                  vertical-align: middle;
                }
                span{
                  vertical-align: middle;
                }
              }
              .riBox{
                background: #e5e5e5;
                height: 80px;
                line-height: 74px;
                text-align: center;
                @include  over;
                color: #333333;
                font-size: 24px;
                width: 40%;
                margin-left: 5%;
                float: left;
                em{
                  margin-left: 10px;
                  font-size: 42px;
                  vertical-align: middle;
                  color: #b7b7b7;
                  text-decoration: line-through;
                }
                span{
                  vertical-align: middle;
                }
              }
            }
          }
        }
        .line-s{
          width: 100%;
          height: 10px;
          background: url("~@/assets/img/line-01.jpg")repeat-x;
        }
        &:last-child{
          .line-s{
            display: none;
          }
        }
      }

    }
  }
</style>
