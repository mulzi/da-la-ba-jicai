<template>
  <div class="supplierImg">
    <div class="topTit">
      <ul>
        <li v-for="(item,index) in titList" :key="index" :class="numberone==index ? 'active' : '' " @click="changeTit(index)">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="bottomListBox">
      <div v-if="numberone==0" class="one">
        <ul>
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
        </ul>
      </div>
      <div v-if="numberone==1" class="one">
        <ul>
          <li>
            <span>
              <img src="https://dalabajicai-prod.oss-cn-chengdu.aliyuncs.com/files/dalaba/file/A31BCBE12A0F42A3838F1A0F0E61A024.jpg" alt="">
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
        </ul>
      </div>
      <div v-if="numberone==2" class="one">
        <ul>
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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      numberone: 0,
      titList: [
        '供应商客户',
        '建设施工单位',
        '开发商及企事业单位'
      ]
    }
  },
  methods: {
    changeTit (index) {
      this.numberone = index
    }
  }
}
</script>

<style scoped lang="scss">
    .supplierImg{
        width: 100%;
        margin-top: 40px;
        border: solid 1px $borderE7;
        border-bottom: none;
        overflow: hidden;
        box-sizing: border-box;
        .topTit{
            width: 100%;
            border-bottom: 1px solid $borderE7;
            ul{
                width: 100%;
                overflow: hidden;
                li{
                    float: left;
                    height: 86px;
                    line-height: 90px;
                    font-size: 21px;
                    color: #333333;
                    padding: 0 6px;
                    margin: 0 60px 0 20px;
                    position: relative;
                    cursor: pointer;
                    &.active{
                        color: $redColor;
                        &::before{
                            width: 100%;
                            content: "";
                            height: 3px;
                            background: $redColor;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            z-index: 6;

                        }
                    }

                }
            }
        }
        .bottomListBox{
            width: 100%;
            .one{
                width: 100%;
                ul{
                    width: 100%;
                    li{
                        float: left;
                        width: 16.66%;
                        box-sizing: border-box;
                        border-right: 1px solid $borderE7;
                        border-bottom: 1px solid $borderE7;
                        background: #ffffff;
                        height: 120px;
                        &:nth-child(6n){
                            border-right: none;
                        }
                        &:hover{
                            background: #e1e1e1;
                        }
                        span{
                            width: 88%;
                            height:100px ;
                            display: block;
                            margin: 10px auto;
                            img{
                                @include img;
                            }
                        }

                    }

                }
            }
        }

    }
</style>
