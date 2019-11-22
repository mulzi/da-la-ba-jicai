<template>
  <el-row class="supplierBody">
    <el-row class="myBodyBox">
      <el-row :gutter="25" class="myCentent marginBottom100">
        <el-col :span="4" class="leftBox">
          <menu-s />
        </el-col>
        <el-col :span="20" class="rightBox">
          <el-row class="infoBox">
            <el-row class="title">
              <span>我的会员</span>
              <nuxt-link to="">
                <i class="el-icon-tickets" /> <em>VIP会员服务协议</em>
              </nuxt-link>
            </el-row>
            <el-row v-if="false" class="noVip">
              <el-row class="imgBox">
                <img src="@/assets/img/nodata.png" alt="">
              </el-row>
              <el-row class="text">
                您还未开通任何VIP，加入 vip 会员，立享几大特权
              </el-row>
              <el-row class="addMore">
                <nuxt-link to="">
                  立即开通
                </nuxt-link>
              </el-row>
            </el-row>
            <el-row class="vipBox">
              <el-row class="topTit">
                <li v-for="(t,i) in menu" @click="changeNum(i)" class="li" :class="num === i ? 'active' : ''" :key="i">
                  {{ t }}
                </li>
              </el-row>
              <transition name="bounce">
                <el-row class="record" v-if="num === 0">
                  <el-row class="top">
                    <el-col :span="4">
                      VIP类型
                    </el-col>
                    <el-col :span="5">
                      开通时间
                    </el-col>
                    <el-col :span="5">
                      权限说明
                    </el-col>
                    <el-col :span="5">
                      到期时间
                    </el-col>
                    <el-col :span="5">
                      状态
                    </el-col>
                  </el-row>
                  <el-row class="bottomList">
                    <el-col :span="4">
                      <i class="iconfont">&#xe70e;</i>
                      项目信息
                    </el-col>
                    <el-col :span="5">
                      2019-03-29
                    </el-col>
                    <el-col :span="5">
                      可浏览板块：项目信息
                    </el-col>
                    <el-col :span="5">
                      2020-03-29
                    </el-col>
                    <el-col :span="5">
                      正常使用/ 即将过期/过期/试用期
                    </el-col>
                  </el-row>
                </el-row>
              </transition>
              <transition name="bounce">
                <el-row class="invoice" v-if="num === 1">
                  <el-row class="NoInvoice">
                    <el-row class="imgBox">
                      <img src="@/assets/img/nodata.png" alt="">
                    </el-row>
                    <el-row class="text">
                      暂时还没有开通线上开票功能，尽请期待！
                    </el-row>
                  </el-row>
                </el-row>
              </transition>
              <transition name="bounce">
                <el-row class="coupon" v-if="num === 2">
                  <el-row class="NoCoupon">
                    <el-row class="imgBox">
                      <img src="@/assets/img/nodata.png" alt="">
                    </el-row>
                    <el-row class="text">
                      您还没有VIP优惠券哟！
                    </el-row>
                  </el-row>
                </el-row>
              </transition>
            </el-row>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import menuS from '@/components/my/leftMenu'
export default {
  components: { menuS },
  layout: 'my',
  data () {
    return {
      num: 0,
      menu: [
        'VIP记录',
        '线上开票',
        'VIP优惠券'
      ]
    }
  },
  methods: {
    changeNum (i) {
      this.num = i
    }
  }
}
</script>

<style scoped lang="scss">
    .myCentent{
        width: 100%;
        margin-top: 20px;
        .leftBox{
        }
        .rightBox{
            .infoBox{
                width: 100%;
                height: 628px;
                background: #ffffff;
                .title{
                    padding: 0 30px;
                    margin-top: 30px;
                    span{
                        font-size: 20px;
                        color: #333333;
                    }
                    a{
                        color: #1BACFF;
                        font-size: 14px;
                    }
                }
                .noVip{
                    width: 100%;
                    margin-top: 100px;
                    .imgBox{
                        width: 200px;
                        height: 200px;
                        margin: 0 auto;
                        img{
                            @include img;
                        }
                    }
                    .text{
                        margin-top: 40px;
                        font-size: 18px;
                        text-align: center;
                        color: #333333;
                    }
                    .addMore{
                        width: 100%;
                        text-align: center;
                        margin-top: 50px;
                        a{
                            width:180px ;
                            height: 50px;
                            line-height: 50px;
                            border-radius: 25px;
                            display: inline-block;
                            color: #ffffFF;
                            background: linear-gradient(90deg,#FF5E5E,#CE0101);
                        }
                    }
                }
                .vipBox{
                    padding: 0 30px;
                    margin: 40px auto 0;
                    .topTit{
                        border-bottom: 1px solid $borderE7;
                        .li{
                            position: relative;
                            display: inline-block;
                            height: 34px;
                            line-height: 34px;
                            margin-right: 40px;
                            color: #7F828B;
                            font-size: 15px;
                            cursor: pointer;
                            &.active{
                                color: $redColor;
                                &::before{
                                    content: '';
                                    display: block;
                                    position: absolute;
                                    bottom: -1px;
                                    height: 2px;
                                    background: $redColor;
                                    width: 100%;
                                }
                            }
                        }
                    }
                    .record{
                        margin-top: 40px;
                        .top{
                            width: 100%;
                            height: 44px;
                            line-height: 44px;
                            text-align: center;
                            background: #fff3e9;
                            font-size: 16px;
                            color: #333333;
                        }
                        .bottomList{
                            width: 100%;
                            height: 44px;
                            line-height: 44px;
                            text-align: center;
                            font-size: 16px;
                            color: #333333;
                            margin-top: 10px;
                            i{
                                color: $redColor;
                            }
                        }
                    }
                    .invoice{
                        width: 100%;
                        .NoInvoice{
                            width: 100%;
                            .imgBox{
                                width: 200px;
                                height: 200px;
                                margin: 60px auto 0;
                                img{
                                    @include  img;
                                }
                            }
                            .text{
                                text-align: center;
                                font-size: 18px;
                                color: #333333;
                                margin-top: 60px;
                            }
                        }
                    }
                    .coupon{
                        width: 100%;
                        .NoCoupon{
                            width: 100%;
                            .imgBox{
                                width: 200px;
                                height: 200px;
                                margin: 60px auto 0;
                                img{
                                    @include  img;
                                }
                            }
                            .text{
                                text-align: center;
                                font-size: 18px;
                                color: #333333;
                                margin-top: 60px;
                            }
                        }
                    }
                }

            }
        }
    }
</style>
