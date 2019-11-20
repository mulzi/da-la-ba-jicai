<template>
  <el-row class="saleBox marginBottom100" v-loading="loading">
    <el-row class="saleList">
      <el-row class="liList" v-for="(t,i) in date" :key="i">
        <el-row class="flexs">
          <div class="leftBanner">
            <banner :banner="t.productPics" />
          </div>
          <div class="rightText">
            <el-row class="title">
              <span>{{ t.name }}</span>
            </el-row>
            <el-row class="property">
              <el-col class="li" v-for="(tt,ii) in t.productAttributeAndValues" :key="ii">
                {{ tt.attributeName }}{{ tt.name }}
              </el-col>
            </el-row>
            <el-row class="money">
              <el-col class="leBox">
                <span>大喇叭惊爆价：</span>
                <em>{{ t.price }}</em>
                <span>元</span>
              </el-col>
              <el-col class="riBox">
                <span>
                  门店价：
                </span>
                <em>
                  {{ t.previousPrice }}
                </em>
                <span>
                  元
                </span>
              </el-col>
            </el-row>
          </div>
        </el-row>
        <el-row class="line-s" />
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import banner from './banner'
// import { HomeService } from '@/services/home'
export default {
  name: 'Sale',
  components: {
    banner
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['listed'],
  data () {
    return {
      date: this.listed,
      dates: [],
      loading: true
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 500)
    // this.changeSE()
    // console.log('传过来的数据1', this.date)
    // const _this = this
    // const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
    // homeService.postHotProducts(this.$route.params.id).then((res) => { // 获取特价爆款
    //   this.date = res.data.results
    //   console.log('惊爆价数据', _this.date)
    //   if (res.status === 200) {
    //     setTimeout(() => {
    //       this.change()
    //       this.loading = false
    //     }, 200)
    //   }
    // })
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .saleBox{
    width: 100%;
    background: #ffffff;
    .saleList{
      padding: 0 30px;
      margin:60px auto 0 ;
      .liList{
        width: 100%;
        margin-bottom: 40px;
        .flexs{
          display: flex;
          display: -ms-flex;
          margin-bottom: 40px;
          .leftBanner{
            width: 684px;
            height: 506px;
          }
          .rightText{
            flex: 1;
            -ms-flex: 1;
            margin-left: 48px;
            overflow: hidden;
            .title{
              background: #333333;
              height: 56px;
              line-height: 56px;
              font-size: 28px;
              color: #ffffff;
              span{
                margin-left: 20px;
              }

            }
            .property{
              margin-top: 28px;
              overflow: hidden;

              .li{
                width: 48%;
                float: left;
                background: #e5e5e5;
                height: 56px;
                line-height: 56px;
                text-indent: 20px;
                color: #171717;
                font-size: 16px;
                margin-right: 4%;
                margin-bottom: 20px;
                &:nth-child(2n){
                  margin-right: 0;
                }
              }
            }
            .money{
              margin-top: 80px;
              .leBox{
                background: $redColor;
                height: 80px;
                line-height: 74px;
                text-align: center;
                @include  over;
                color: #ffffff;
                font-size: 24px;
                width: 55%;
                float: left;
                em{
                  margin-left: 10px;
                  font-size: 42px;
                  vertical-align: middle;
                }
                span{
                  vertical-align: middle;
                }
              }
              .riBox{
                background: #e5e5e5;
                height: 80px;
                line-height: 74px;
                text-align: center;
                @include  over;
                color: #333333;
                font-size: 24px;
                width: 40%;
                margin-left: 5%;
                float: left;
                em{
                  margin-left: 10px;
                  font-size: 42px;
                  vertical-align: middle;
                  color: #b7b7b7;
                  text-decoration: line-through;
                }
                span{
                  vertical-align: middle;
                }
              }
            }
          }
        }
        .line-s{
          width: 100%;
          height: 10px;
          background: url("~@/assets/img/line-01.jpg")repeat-x;
        }
        &:last-child{
          .line-s{
            display: none;
          }
        }
      }

    }
  }
</style>
