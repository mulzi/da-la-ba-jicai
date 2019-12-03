<template>
  <el-row>
    <el-row class="bottomListBox">
      <el-row class="NoData marginBottom40" v-if="date !== undefined && date.length === 0">
        <el-row class="img">
          <img src="@/assets/img/nodata.png" alt="">
        </el-row>
        <el-row class="text">
          没有数据
        </el-row>
      </el-row>
      <el-row class="contentList" v-if="date !== undefined && date.length > 0">
        <nuxt-link v-for="(t, i) in date" :key="i" :to="`/user/designDecoration/${t.supplierId}`">
          <p>
            <img :src="t.producePic" alt="">
          </p>
          <el-row class="companyName">
            <span>{{ t.agent }}</span>
            <span>{{ t.address }}</span>
          </el-row>
        </nuxt-link>
      </el-row>
      <el-row class="pageSbox" v-if="date !== undefined && date.length > 0">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :total="totalCount"
        />
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/myCentent'
export default {
  name: 'User',
  data () {
    return {
      size: 12,
      page: 0,
      date: [],
      currentPage: 1,
      totalCount: 0
    }
  },
  mounted () {
    this.get({ attribute: 3, size: this.size, page: this.page })
  },
  methods: {
    handleCurrentChange (val) {
      this.page = val - 1
      this.get({ attribute: 3, size: this.size, page: this.page })
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
    .bottomListBox {
        margin-top: 30px;
        width: 100%;

        .contentList {
            width: 100%;

            a {
                width: 32%;
                float: left;
                margin-right: 2%;
                border-radius: 6px;
                margin-bottom: 20px;
                overflow: hidden;
                box-sizing: border-box;
                border: 1px solid $borderE7;
                > p {
                    width: 100%;
                    height: 258px;

                    img {
                        @include img;
                    }
                }

                &:nth-child(3n) {
                    margin-right: 0;
                }

                .companyName {
                    padding: 0 20px;
                    margin: 10px auto 20px;

                    span {
                        display: block;
                        color: #333333;
                        font-size: 15px;
                        @include over;

                        &:nth-child(1) {
                            margin-bottom: 10px;
                            font-size: 16px;
                        }
                    }
                }
                &:hover{
                    transition: .2s ease-in;
                     box-shadow: 0 0 14px #bababa;
                }
            }
        }

        .NoData {
            background: #ffffff;
            width: 100%;
            height: 400px;
            overflow: hidden;

            .img {
                width: 200px;
                height: 200px;
                margin: 100px auto 50px;

                img {
                    @include img;
                }

            }

            .text {
                font-size: 13px;
                color: #333333;
                text-align: center;
            }
        }
    }
</style>
