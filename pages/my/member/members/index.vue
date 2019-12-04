<template>
  <el-row class="dlb_indexBody">
    <index-head />
    <el-row class="members">
      <el-col :span="24" class="not_member_title">
        VIP服务选择
      </el-col>
      <el-col :span="24" class="mb-5 ">
        <el-table
          :data="date"
          border
          highlight-current-row
          style="width: 100%;"
          @row-click="rowClick"
          header-cell-style="background:#fff7f7;font-size:16px;height:74px"
        >
          <el-table-column
            label=""
            align="center"
          >
            <template slot-scope="scope">
              <img style="height: 20px;width: 20px;display: inline-block" :src="scope.row.pic" alt="">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="使用范围"
            prop="scope"
            align="center"
          />
          <el-table-column
            label="服务价格"
            style="width: 20%;"
            align="center"
          >
            <template slot-scope="scope">
              <span style="font-size: 26px">
                {{ scope.row.price }}
              </span>
              元
            </template>
          </el-table-column>
          <el-table-column
            label="浏览服务"
            prop="service"
            align="center"
          />
          <el-table-column
            label="加入方式"
            align="center"
          >
            <template>
              <el-button
                size="mini"
                type="primary"
                plain
              >
                立即开通
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="24" class="vipPower">
        <el-row class="title">
          VIP特权
        </el-row>
        <el-row class="list" v-html="remark">
          {{ remark }}
        </el-row>
      </el-col>
    </el-row>
    <index-foot />
  </el-row>
</template>

<script>
import { HomeService } from '@/services/myCentent'
import indexHead from '@/components/head/headTop'
import indexFoot from '@/components/indexFoot'

export default {
  components: {
    indexHead,
    indexFoot
  },
  data () {
    return {
      remark: '',
      date: []
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    rowClick (row, column, event) {
      const that = this
      that.remark = row.remark
    },
    get () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getVipBuyList().then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          this.remark = res.data.results[0].remark
          this.date = res.data.results
        }
      })
    }
  }
}
</script>

<style lang="scss">
.members{
  width: 1200px;
  margin: 150px auto;
  font-size: 18px;
  .not_member_title{
    text-align: center;
    font-size: 26px;
    color: #555555;
    margin-bottom: 20px;
  }
  .vipPower{
    margin-top: 100px;
    text-align: center;
    .title{
      font-size: 26px;
      color: #555555;
    }
    .list{
      width:350px ;
      margin: 20px auto;
       >p{
         text-align: left;
         font-size: 16px;
         margin-bottom: 14px;
       }
    }
  }
}
</style>
