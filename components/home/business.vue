<template>
  <div class="businessBoxOne">
    <div class="headTit">
      <span>
        {{ titleName }}
      </span>
      <nuxt-link :to="url">
        更多 +
      </nuxt-link>
    </div>
    <div class="bottomList">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <nuxt-link :to="`${src}${item.supplierId}`">
            <div class="leftImg">
              <span>
                <img :src="item.logo" alt="">
              </span>
            </div>
            <div class="rightText">
              <p>{{ item.agent }}</p>
              <p>
                材料分类：<em>{{ item.materialName }}</em>
              </p>
              <p>
                主营品牌：<em>{{ item.brand }}</em>
              </p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['list', 'titleName', 'src', 'url'],
  data () {
    return {}
  },
  mounted () {
  }
}
</script>
/* eslint-disable */
<style scoped lang="scss">
  .businessBoxOne{
    width:32.5% ;
    max-width:460px;
    box-sizing: border-box;
    /* eslint-disable */
    border: 1px solid $borderE7;
    .headTit{
      width:90% ;
      max-width:418px ;
      margin: 20px auto 0;
      border-bottom: 1px solid $borderE7;
      display: flex;
      display: -ms-flex;
      height: 40px;
      align-items: center;
      span{
        font-size: 19px;
        display: inline-block;
        flex: 1;
        -ms-flex: 1; /* 兼容IE */
        color: #333333;
        font-weight: bold;
      }
      a{
        font-size: 14px;
        color: #999999;
        padding: 0px 2px;
      }
    }
    .bottomList{
      height: 734px;
      overflow-y: auto;
      width: 90%;
      max-width: 418px;
      margin: 14px auto 0;
      ul{
        width: 100%;
        li{
          display: block;
          width: 100%;
          border-bottom: 1px dashed $borderE7;
          margin-bottom: 14px;
          a{
            width: 100%;
            display: flex;
            margin-bottom: 14px;
            .leftImg{
              width: 146px;
              height: 96px ;
              span{
                @include img;
                img{
                  @include img;
                }
              }
            }
            .rightText{
              flex: 1;
              overflow: hidden;
              margin-left: 20px;
              p{
                @include over;
                height: 24px;
                line-height: 24px;
                &:nth-child(1){
                  margin-top: 10px;
                  color: #1a1a1a;
                  font-size: 18px;
                  &:hover{
                    color:$redColor;
                  }
                }
                &:nth-child(2){
                  color: #808080;
                  font-size: 15px;
                  em{
                    color: #333333;

                  }
                }
                &:nth-child(3){
                  color: #808080;
                  font-size: 15px;
                  em{
                    color: #333333;

                  }
                }
              }
            }
          }
          &:last-child{
            border: none;
            margin-bottom: 0;
          }
        }
      }
      &::-webkit-scrollbar {
        width:0;
      }
    }
  }
</style>
