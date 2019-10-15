<template>
  <div class="footerBox">
    <div class="centnetBox">
      <div class="footTop">
        <ul>
          <li>
            <div class="left">
              <img src="@/assets/img/footone.png" alt="">
            </div>
            <div class="right">
              <p>品类齐全快速响应</p>
              <p>海量建材数据库，让选建材更轻松</p>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="@/assets/img/footTwo.png" alt="">
            </div>
            <div class="right">
              <p>一对一交易服务</p>
              <p>随时随地为您服务，让业务更高效</p>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="@/assets/img/footThree.png" alt="">
            </div>
            <div class="right">
              <p>交易安全有保障</p>
              <p>大品牌大企业为依托，让资金更安全</p>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="@/assets/img/footfour.png" alt="">
            </div>
            <div class="right">
              <p>专家服务团队更放心</p>
              <p>
                专业服务更细致，让风险无处遁行
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="line" />
      <div class="connectBox">
        <div class="leftMud">
          <div class="one">
            <p>关于我们</p>
            <li>
              <a href="">
                关于我们
              </a>
            </li>
            <li>
              <a href="">
                联系我们
              </a>
            </li>
          </div>
          <div class="one">
            <p>用户指南</p>
            <li>
              <a href="">
                免责声明
              </a>
            </li>
            <li>
              <a href="">
                争议解决
              </a>
            </li>
            <li>
              <a href="">
                平台规则
              </a>
            </li>
            <li>
              <a href="">
                版权声明
              </a>
            </li>
          </div>
          <div class="one">
            <p>帮助中心</p>
            <li>
              <a href="">
                常见问题
              </a>
            </li>
            <li>
              <a href="">
                文档下载
              </a>
            </li>
            <li>
              <a href="">
                招商必看
              </a>
            </li>
            <li>
              <a href="">
                采购必看
              </a>
            </li>
          </div>
          <div class="two">
            <p>服务与支持</p>
            <em>服务热线：17316789980</em>
            <em>服务时间：9:00-18:00</em>
            <em>服务邮箱：59455428@qq.com</em>
            <em>地址：重庆市不知道哪里</em>
          </div>
        </div>
        <div class="rightImg">
          <div class="imgOne">
            <p>
              <img src="@/assets/img/0123.jpg" alt="">
            </p>
            <p>
              公众号
            </p>
          </div>
          <div class="imgOne">
            <p>
              <img src="@/assets/img/0123.jpg" alt="">
            </p>
            <p>
              小程序
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      Copyright © 2019版权所有重庆庆渝科技有限公司
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style scoped lang="scss">
  .footerBox{
    width: 100%;
    background:#333333 ;
    margin-top: 130px;
    overflow: hidden;
    .centnetBox{
      width: 63%;
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .footTop{
        margin-top: 30px;
        width: 100%;

        ul{
          width: 100%;
          overflow: hidden;
          li{
            float: left;
            display: flex;
            width: 25%;
            align-items: center;
            .left{
              width: 44px;
              height: 44px;
              img{
                @include  img;
              }
            }
            .right{
              flex: 1;
              margin-right: 10%;
              margin-left: 16px;
              p{
                width: 100%;
                @include over;
                height: 22px;
                line-height: 22px;
                &:nth-child(1){
                  font-size: 16px;
                  color: #ffffff;
                }
                &:nth-child(2){
                  color: #999999;
                  font-size: 12px;
                }
              }
            }
          }

        }
      }
      .line{
        margin-top: 30px;
        border-bottom: 1px solid rgb(26,26,26);
      }
      .connectBox{
        width: 100%;
        overflow: hidden;
        margin-top: 40px;
        display: flex;
        .leftMud{
          flex: 1;
          overflow: hidden;
          .one{
            float: left;
            width: 20%;
            p{
              font-size: 14px;
              color: #ffffff;
              width: 92%;
              @include over;
              margin-bottom: 15px;
            }
            li{
              width: 92%;
              @include over;
              margin-bottom: 15px;
              font-size: 0;
              a{
                font-size: 12px;
                color: #888888;
                display: inline-block;
                &:hover{
                  color: #dcdcdc;
                }
              }
            }

          }
          .two{
            float: left;
            width: 40%;
            p{
              font-size: 14px;
              color: #ffffff;
              width: 92%;
              @include over;
              margin-bottom: 15px;
            }
            em{
              font-size: 12px;
              color: #888888;
              width: 92%;
              @include over;
              margin-bottom: 15px;
              display: block;
            }
          }
        }
        .rightImg{
          width: 286px ;
          overflow: hidden;
          .imgOne{
            float: left;
            width:118px ;
            margin-right: 50px;
            p{
              &:nth-child(1){
                height: 118px;
                width: 100%;
                img{
                  @include img;
                }
              }
              &:nth-child(2){
                height: 20px;
                line-height: 20px;
                margin-top: 10px;
                font-size: 12px;
                color: #888888;
                text-align: center;
              }
            }
            &:last-child{
              margin-right: 0;
            }
          }
        }
      }
    }
    .copyright{
      width: 100%;
      height: 70px;
      line-height: 70px;
      text-align: center;
      font-size: 14px;
      color: #8a8a8a;
      background: #2b2b2b;
      margin-top: 60px;
    }
  }
</style>
