<template>
  <div class="newsProducts">
    <div class="title">
      <span>新品推荐</span>
      <nuxt-link  to="/">
        更多>
      </nuxt-link>
    </div>
    <div class="bottomList">
      <nuxt-link v-for="(item,index) in newProducts.works" :key="index" to="/">
        <div class="img">
          <img :key="index ++ " v-lazy="item.cover" alt="">
        </div>
        <div class="b_list">
          <p>{{ item.theme }}</p>
          <p>{{ item.name }}</p>
          <p>
            <i class="el-icon-view"> </i>{{ item.supplierId }}
            <i class="el-icon-chat-dot-square"></i>{{item.userId }}
            <i class="iconfont">&#xe680;</i>{{ item.userId }}
          </p>
        </div>
        <div class="b_name">
          <div class="l_img">
            <img v-lazy="item.cover" alt="">
            <span :title="item.agent">
              {{ item.agent }}
            </span>
            <em>{{ item.createdAtStr }}</em>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['newProducts'],
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
    .newsProducts{
        margin-top: 50px;
        width: 100%;
        .title{
            height: 52px;
            line-height: 52px;
            background: linear-gradient(20deg,#ff714a,#fc4242);
            display: flex;
           display: -ms-flex;
            color: #ffffff;
            border-radius: 6px;
            span{
                display: inline-block;
                flex: 1;
                -ms-flex: 1;
                font-size: 22px;
                margin-left: 20px;
                font-weight: bold;
            }
            a{
                width: 60px;
                text-align: center;
                margin-right: 20px;
                font-size: 18px;
                color: #ffffff;
            }
        }
        .bottomList{
            margin-top: 15px;
            overflow: hidden;
            a{
                float: left;
                width: 19%;
                max-width:268px ;
                box-sizing: border-box;
                border: 1px solid $borderE7;
                border-radius: 6px;
                overflow: hidden;
                margin-bottom: 15px;
                margin-right: 1.25%;
                &:nth-child(5n){
                    margin-right: 0;
                }
                .img{
                    height: 258px;
                    width: 100%;
                    overflow: hidden;
                    img{
                        @include img;
                      &:hover{
                        @include imgTrf;
                      }
                    }
                }
                .b_list{
                    width: 92%;
                    max-width: 240px;
                    margin: 0 auto;
                    p{
                        @include over;
                        height: 16px;
                        line-height: 16px;
                        margin-top: 8px;
                        &:nth-child(1){
                            font-size: 15px;
                            color: #333333;
                        }
                        &:nth-child(2){
                            font-size: 14px;
                            color: #666666;
                        }
                        &:nth-child(3){
                            display: flex;
                            align-items: center;
                            color: #999999;
                            font-size: 12px;
                            i{
                                font-size: 14px;
                                margin: 0 2px 0 8px;
                                &:nth-child(1){
                                    margin-left: 0;
                                }
                            }
                        }
                    }
                }
                .b_name{
                    margin-top: 14px;
                    border-top:1px solid #f5f5f5;
                    .l_img{
                        width: 92%;
                        max-width: 240px;
                        margin: 6px auto;
                        display: flex;
                        display: -ms-flex;
                        align-items: center;
                        img{
                            height: 30px;
                            width: 30px;
                            border-radius: 50%;
                        }
                        span{
                            display: inline-block;
                            -ms-flex: 1;
                            flex: 1;
                            color: #464646;
                            font-size: 12px;
                            @include over;
                            margin-left: 4px;
                        }
                        em{
                            color: #464646;
                            font-size: 12px;
                            margin-left: 30px;
                            padding: 0 1px;
                        }
                    }
                }
              &:hover{
                border-color: #b7b7b7;
                @include triText;
              }

            }
        }
    }

</style>
