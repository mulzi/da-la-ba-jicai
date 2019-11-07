<template>
  <el-row class="one">
    <div class="text">
      <p>
        重庆恒弘家具制造有限公司自成立以来，立足西南地区，大力开发办公家具市场，践行精品理念，成为拥有100亩独立生产基地的全定制办公家具企业，在行业内率先取得ISO9001质量管理体系认证、ISO14001环境管理体系认证、中国环境标志认证，并荣获“重庆市著名商标”。以国际化设计理念，获得多项国家专利，也成为西南办公家具业界之翘楚。
      </p>
      <p>
        公司产品以“恒弘”为品牌，拥有国际先进的现代办公家具生产线和16800平方米的办公环境体验中心。公司集研发、设计、生产、销售于一体；代表性的产品包括专业高隔间、屏风、板式家具、沙发转椅、家具五金、文件储存系统及周边产品；主要客户包括：政府机构、金融系统、制造业、医疗行业、通讯传媒业、房地产业、信息科技业、商贸系统及公共服务业等。客户现已覆盖中国大陆、北美、欧洲及其他国家和地区。
      </p>
    </div>
    <div v-viewer class="boImg">
      <li>
        <span>
          <img src="@/assets/img/0123.jpg" alt="">
        </span>
      </li>
      <li>
        <span>
          <img src="@/assets/img/0123.jpg" alt="">
        </span>
      </li>
      <li>
        <span>
          <img src="@/assets/img/0123.jpg" alt="">
        </span>
      </li>
      <li>
        <span>
          <img src="@/assets/img/0123.jpg" alt="">
        </span>
      </li>
      <li>
        <span>
          <img src="@/assets/img/0123.jpg" alt="">
        </span>
      </li>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'ProjectInt'
}
</script>

<style scoped lang="scss">
    .one{
        width: 100%;
        .text{
            width: 100%;
            margin-bottom: 20px;
            overflow: hidden;
            p{
                text-indent: 2em;
                font-size: 16px;
                color: #333333;
                line-height: 30px;
                margin-bottom: 20px;
            }
        }
        .boImg{
            width: 100%;
            overflow: hidden;
            li{
                width: 30%;
                float: left;
                margin-right: 5%;
                margin-bottom: 20px;
                height: 266px;
                border: 1px solid $borderE7;
                box-sizing: border-box;
                &:nth-child(3n){
                    margin-right: 0;
                }
                span{
                    padding: 8px;
                    display: block;
                    height: calc(100% - 16px);
                    img{
                        @include img;
                    }
                }
            }
        }
    }
</style>
