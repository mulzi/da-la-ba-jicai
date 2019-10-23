<template>
  <div class="newsOne">
    <div class="title">
      <span>平台动态</span>
      <nuxt-link to="/">
        更多 +
      </nuxt-link>
    </div>
    <div class="bottomList">
      <div class="topOne">
        <div class="leftImg">
          <img src="http://www.dalabajicai.com:10300/files/dalaba/file/C67057FB655E4B05BF5CC84430C23D01.jpg" alt="">
        </div>
        <div class="rightText">
          <p>
            我是标题
          </p>
          <p>
            我是简介我是简介  我是简介我是简介  我是简介我是简介  我是简介我是简介  我是简介我是简介  我是简介我是简介  我是简介我是简介  我是简介我是简介  我是简介我是简介
          </p>
          <nuxt-link to="/">
            了解详情
          </nuxt-link>
        </div>
      </div>
      <div class="two">
        <nuxt-link v-for="(item,index) in newslist" :key="index" to="/">
          <i />
          <span>
            {{ item.title }}
          </span>
          <em>
            {{ item.createdAtStr }}
          </em>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['newslist'],
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
    .newsOne{
        width: 49%;
        max-width: 690px;
        margin-top: 12px;
        float: left;
        overflow: hidden;
        margin-right: 2%;
        box-sizing: border-box;
        border: 1px solid $borderE7;
       > .title{
            width: 92%;
            max-width: 634px;
            margin: 20px auto 0;
            border-bottom: 1px solid $borderE7;
            height: 50px;
            line-height: 50px;
            display: flex;
            display: -ms-flex;
            align-items: center;
            span{
                 display: inline-block;
                -ms-flex: 1;
                font-size: 21px;
                color: #333333;
                flex: 1;
            }
            a{
                font-size: 14px;
                color: #999999;
            }

        }
        > .bottomList{
            width: 92%;
            max-width: 634px;
            margin: 20px auto 0;
            .topOne{
                border-bottom: 1px solid $borderE7;
                display: flex;
                .leftImg{
                    width:160px ;
                    height: 116px;
                    margin-bottom: 20px;
                    img{
                        @include img;
                    }
                }
                .rightText{
                    flex: 1;
                    margin-left: 20px;
                    p{
                        &:nth-child(1){
                            height: 28px;
                            line-height: 28px;
                            color:#010101;
                            font-size: 16px;
                            @include over;
                        }
                        &:nth-child(2){
                            margin-top: 4px;
                            line-height: 22px;
                            max-height: 44px;
                            color: #999999;
                            font-size: 14px;
                            -webkit-line-clamp:2;
                            display: -webkit-box;
                            -webkit-box-orient:vertical;
                            overflow:hidden;
                            text-overflow: ellipsis;
                        }
                    }
                    a{
                        width: 76px;
                        height: 26px;
                        line-height: 26px;
                        color: #999999;
                        font-size: 14px;
                        text-align: center;
                        display: block;
                        border-radius: 6px;
                        margin-top: 10px;
                        border: 1px solid $borderE7;
                        &:hover{
                            background: #f0f0f0;
                        }
                    }
                }
            }
            .two{
                width: 100%;
                margin-bottom: 20px;
                a{
                    border-bottom: 1px dashed $borderE7;
                    height: 44px;
                    line-height: 44px;
                    box-sizing: border-box;
                    display: flex;
                    display: -ms-flex;
                    align-items: center;
                        i{
                        display: inline-block;
                        width: 3px;
                        height: 3px;
                        background: #999999;
                        margin-right:12px ;
                        }
                    span{
                        -ms-flex: 1;
                        display: inline-block;
                        flex: 1;
                        font-size: 14px;
                        color: #666666;
                        @include over;

                    }
                    em{
                        margin-left: 20px;
                        font-size: 12px;
                        color: #999999;
                        padding: 0 2px;
                    }
                    &:hover{
                        i{
                            background: $redColor;

                        }
                        span{

                            color: $redColor;

                        }
                        em{
                            color: $redColor;

                        }
                    }
                }
            }
        }
        &:nth-child(odd){
            margin-right: 0;
        }
    }
</style>
