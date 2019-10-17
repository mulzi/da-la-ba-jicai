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
        <div class="img">
          <img src="@/assets/img/home/other_company.2c64491.png" alt="">
        </div>
      </div>
      <div v-if="numberone==1" class="one">
        <div class="img">
          <img src="@/assets/img/home/other_company1.6abded2.png" alt="">
        </div>
      </div>
      <div v-if="numberone==2" class="one">
        <div class="img">
          <img src="@/assets/img/home/other_company.2c64491.png" alt="">
        </div>
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
            .img{
              width: 100%;
              height: 375px;
              img{
                @include img;
              }
            }
        }

    }
</style>
