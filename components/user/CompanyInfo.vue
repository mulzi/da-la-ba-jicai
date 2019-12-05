<template>
  <div class="companyInfo">
    <div class="topNewsBox">
      <li>
        <img src="@/assets/img/0123.jpg" alt="">
        <div class="right">
          <p>标题</p>
          <div class="twoText">
            贴脚线变成千兆级电力线通信，让插座移动起来。 装修，你还在用开墙机冲击钻在墙上“突突突” 不管怎么“突突突”插座还是不够用...
          </div>
          <nuxt-link to="/ss">
            了解详情
          </nuxt-link>
        </div>
      </li>
      <li>
        <img src="@/assets/img/0123.jpg" alt="">
        <div class="right">
          <p>标题</p>
          <div class="twoText">
            贴脚线变成千兆级电力线通信，让插座移动起来。 装修，你还在用开墙机冲击钻在墙上“突突突” 不管怎么“突突突”插座还是不够用...
          </div>
          <nuxt-link to="/ss">
            了解详情
          </nuxt-link>
        </div>
      </li>
      <li>
        <img src="@/assets/img/0123.jpg" alt="">
        <div class="right">
          <p>标题</p>
          <div class="twoText">
            贴脚线变成千兆级电力线通信，让插座移动起来。 装修，你还在用开墙机冲击钻在墙上“突突突” 不管怎么“突突突”插座还是不够用...
          </div>
          <nuxt-link to="/ss">
            了解详情
          </nuxt-link>
        </div>
      </li>
      <li>
        <img src="@/assets/img/0123.jpg" alt="">
        <div class="right">
          <p>标题</p>
          <div class="twoText">
            贴脚线变成千兆级电力线通信，让插座移动起来。 装修，你还在用开墙机冲击钻在墙上“突突突” 不管怎么“突突突”插座还是不够用...
          </div>
          <nuxt-link to="/ss">
            了解详情
          </nuxt-link>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.companyInfo{
    width: 100%;
    .topNewsBox{
        padding: 60px 30px;
        overflow: hidden;
        background: #ffffff;
        li{
            width: 50%;
            box-sizing: border-box;
            float: left;
            border: 1px solid $borderE7;
            display: flex;
            display: -ms-flex;
            img{
                width:157px ;
                height: 118px;
                margin:13px 0 13px 13px;
            }
            .right{
                flex: 1;
                margin-top: 13px;
                margin-left: 13px;
                >p{
                    width: 94%;
                    font-size: 16px;
                    color: #333333;
                    height: 18px;
                    line-height: 18px;
                    @include over;
                }
                .twoText{
                    font-size: 14px;
                    color: #919191;
                    width: 94%;
                    margin-top: 10px;
                    -webkit-line-clamp: 2;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    height:40px ;
                    line-height: 20px;
                }
               > a{
                   display: inline-block;
                   height: 28px;
                   line-height: 28px;
                   padding: 0 16px;
                   border: 1px solid $borderE7;
                   border-radius: 4px;
                   color: #919191;
                   font-size: 14px;
                   margin-top: 20px;
                   margin-bottom: 40px;
                   &:hover{
                       background: #f6f6f6;
                       @include triText;
                   }
               }
            }
        }
    }
}

</style>
