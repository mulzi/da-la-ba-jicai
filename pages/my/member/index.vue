<template>
  <el-row class="supplierBody">
    <el-row class="myBodyBox">
      <el-row :gutter="25" class="myCentent marginBottom100">
        <el-col :span="4" class="leftBox">
          <menu-s />
        </el-col>
        <el-col :span="20" class="rightBox" v-loading="loading">
          <el-row class="infoBox">
            <el-row class="title">
              <span>我的会员</span>
              <nuxt-link to="">
                <i class="el-icon-tickets" /> <em>VIP会员服务协议</em>
              </nuxt-link>
            </el-row>
            <el-row class="noVip" v-if="date !== undefined && date.length === 0">
              <el-row class="imgBox">
                <img src="@/assets/img/nodata.png" alt="">
              </el-row>
              <el-row class="text">
                您还未开通任何VIP，加入 vip 会员，立享几大特权
              </el-row>
              <el-row class="addMore">
                <nuxt-link to="/my/member/members">
                  立即开通
                </nuxt-link>
              </el-row>
            </el-row>
            <el-row class="vipBox" v-if="date !== undefined && date.length > 0">
              <el-row class="topTit">
                <li v-for="(t,i) in menu" @click="changeNum(i)" class="li" :class="num === i ? 'active' : ''" :key="i">
                  {{ t }}
                </li>
              </el-row>
              <transition name="bounce">
                <el-row class="record" v-if="num === 0">
                  <el-table
                    :data="date"
                    border
                    highlight-current-row
                    style="width: 100%;"
                    header-cell-style="background:#fff7f7;font-size:16px;height:74px"
                  >
                    <el-table-column
                      label="VIP类型"
                      style="width: 20%;height: 120px;"
                      align="center"
                    >
                      <template slot-scope="scope">
                        <i class="iconfont" :style="scope.row.statusStr === '正常使用' ? 'color:red' : '' ">&#xe70e;</i>
                        <span style="margin-left: 10px">{{ scope.row.memberProductName }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="使用范围"
                      style="width: 20%; text-align: center"
                      prop="startedAtStr"
                      align="center"
                    />
                    <el-table-column
                      label="权限说明"
                      style="width: 20%;"
                      align="center"
                      prop="illustrate"
                    />
                    <el-table-column
                      label="到期时间"
                      style="width: 20%;"
                      prop="expiredAtStr"
                      align="center"
                    />
                    <el-table-column
                      label="状态"
                      align="center"
                      style="width: 20%;"
                      prop="statusStr"
                    />
                  </el-table>
                  <el-row class="pageSbox">
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      @current-change="handleCurrentChange"
                      :current-page.sync="currentPage"
                      :total="totalCount"
                    />
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
import { HomeService } from '@/services/myCentent'
import menuS from '@/components/my/leftMenu'
export default {
  components: { menuS },
  layout: 'my',
  data () {
    return {
      loading: true,
      num: 0,
      menu: [
        'VIP记录',
        '线上开票',
        'VIP优惠券'
      ],
      size: 10,
      page: 0,
      date: '',
      currentPage: 1,
      balance: 0,
      totalCount: 0
    }
  },
  mounted () {
    this.get({ size: this.size, page: this.page })
  },
  methods: {
    changeNum (i) {
      this.num = i
    },
    handleCurrentChange (val) {
      this.page = val - 1
      this.get({ size: this.size, page: this.page })
    },
    get (params) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getVipRecord(params).then((res) => {
        if (res.status === 200) {
          this.loading = false
          console.log(res.data)
          this.date = res.data.results
          this.totalCount = res.data.totalCount
        }
      })
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
