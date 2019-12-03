<template>
  <el-row class="supplier">
    <el-row class="bottomListBox">
      <el-row class="NoData marginBottom40" v-if="date !== undefined && date.length === 0">
        <div class="img">
          <img src="@/assets/img/nodata.png" alt="">
        </div>
        <div class="text">
          没有数据
        </div>
      </el-row>
      <el-row class="contentList" v-if="date !== undefined && date.length > 0">
        <nuxt-link v-for="(t, i) in date" :key="i" :to="`${t.attribute === 1 ?'/supplier/toolDecoration/':'/supplier/homeDecorationChange/'}${t.supplierId}`">
          <p>
            <img :src="t.producePic" alt="">
          </p>
          <el-row class="oneName">
            <el-col :span="14">
              {{ t.brand }}
            </el-col>
            <el-col :span="10" class="rightVip color">
              {{ t.vipTypeStr }}
            </el-col>
          </el-row>
          <el-row class="twoName">
            <el-col :span="16">
              {{ t.agent }}
            </el-col>
            <el-col :span="8" class="right">
              {{ t.nature }}
            </el-col>
          </el-row>
          <el-row class="rate">
            <el-col :span="24" class="xing">
              <el-rate
                :value="5"
                disabled
                disabled-void-color="#d6d6d6"
              />
            </el-col>
          </el-row>
        </nuxt-link>
      </el-row>
      <el-row class="pageSbox" v-if="date !== undefined && date.length > 0">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :total="con"
        />
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/myCentent'
export default {
  name: 'Supplier',
  // eslint-disable-next-line vue/require-prop-types
  props: ['date', 'con'],
  data () {
    return {
      size: 12,
      page: 0,
      list: this.date,
      currentPage: 1,
      totalCount: 0
    }
  },
  mounted () {
    console.log(this.list, '第二次')
  },
  methods: {
    handleCurrentChange (val) {
      this.page = val - 1
      this.get({ attribute: 0, size: this.size, page: this.page })
    },
    get (params) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getSupplierCol(params).then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          this.date = res.data.results
          this.totalCount = res.data.totalCount
          console.log(this.date)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .bottomListBox{
    margin-top: 30px;
    width: 100%;

    .contentList{
      width: 100%;
      a{
        width:32% ;
        float: left;
        margin-right: 2%;
        border-radius: 6px;
        margin-bottom: 20px;
        overflow: hidden;
        box-sizing: border-box;
        border: 1px solid $borderE7;
        >p{
          width: 100%;
          height:258px ;
          img{
            @include img;
          }
        }
        &:nth-child(3n){
          margin-right: 0;
        }
        .oneName{
          width: 90%;
          margin: 0 auto;
          height: 40px;
          line-height: 40px;
          color: #333333;
          font-size: 16px;
          >div{
            @include over;
          }
          .rightVip{
            font-size: 14px;
            color: #333333;
            text-align: right;
          }
          .color{
            color: #feaa12;
          }
        }
        .twoName{
          width: 90%;
          margin: 0 auto;
          height: 18px;
          line-height: 18px;
          color: #333333;
          font-size: 15px;
          .right{
            text-align: right;
          }
          >div{
            @include over;
          }
        }
        .rate{
          height: 40px;
          line-height: 40px;
          width: 90%;
          margin: 0 auto;
          .xing{
            margin-top: 10px;
            font-size: 0;
            .el-rate__icon{
              font-size:18px;
            }
          }
        }
        &:hover{
          transition: .2s ease-in;
          box-shadow: 0 0 14px #bababa;
        }
      }
    }
    .NoData{
      background: #ffffff;
      width: 100%;
      height: 400px;
      overflow: hidden;
      .img{
        width: 200px;
        height: 200px;
        margin: 100px auto 50px;
        img{
          @include img;
        }

      }
      .text{
        font-size: 13px;
        color: #333333;
        text-align: center;
      }
    }

  }
</style>
<style lang="scss">
  .bottomListBox{
    .pageSbox { // 默认分页样式
      width: 100%;
      margin: 30px auto 40px;
      text-align: center;

      .el-pagination {
        padding: 0 20px;
        display: inline-block;

        .btn-prev {
          background: #ffffff;
        }

        .el-pager {
          li {
            background: #ffffff;

            &.active {
              background: $redColor;
            }
          }

        }
      }
    }
  }
</style>
