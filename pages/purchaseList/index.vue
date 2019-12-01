<template>
  <el-row class="supplierBody">
    <el-row class="bodyBox">
      <el-row class="HeaderBreadcrumb">
        <el-col :span="24">
          <div class="breadcrumb">
            <span class="iconfont">&#xe635;</span>
            <span style="margin-right: 0;color: #8e8e8e">当前位置：</span>
            <nuxt-link to="/">
              首页
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>采购信息</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="topSearchBox">
        <el-row class="boxStyle">
          <el-col :span="18" class="leftAddrsBox">
            <el-col :span="8">
              <el-col :span="6" class="leftText">
                地区
              </el-col>
              <el-col :span="18">
                <el-cascader
                  v-model="area"
                  :options="areaList"
                  :props="{ expandTrigger: 'hover' }"
                  clearable
                />
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6" class="leftText">
                项目类别
              </el-col>
              <el-col :span="18">
                <el-select v-model="type" clearable placeholder="请选择">
                  <el-option
                    v-for="item in typeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6" class="leftText">
                发布日期
              </el-col>
              <el-col :span="18">
                <el-date-picker
                  v-model="time"
                  type="datetimerange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始"
                  end-placeholder="结束"
                  :picker-options="pickerOptions"
                  style="width: 90%;"
                  value-format="yyyy-MM-dd"
                />
              </el-col>
            </el-col>
          </el-col>
          <el-col :span="6" class="rightSbox">
            <el-col :span="19">
              <el-input
                v-model="searchText"
                style="border-right-color: #DA251D;"
                placeholder="请输入内容"
                clearable
              />
            </el-col>
            <el-col :span="5">
              <span @click="getList" class="el-icon-search searchSt"></span>
            </el-col>
          </el-col>
        </el-row>
        <div @click="$store.commit('release/changeNumber', 1)" class="addItem">
          <nuxt-link to="/release">
            <em class="iconfont">&#xe880;</em>
            <span>发布项目</span>
          </nuxt-link>
        </div>
      </el-row>
      <el-row v-if="this.date !== undefined && this.date.length > 0" class="boxList">
        <nuxt-link :to="`/purchaseList/page/${t.id}`" v-for="(t,i) in date" :key="i">
          <el-row class="tit">
            {{ t.materials }}
          </el-row>
          <el-row class="addr">
            <el-col :span="8" class="one">
              工地地区\{{ t.areaName }}
            </el-col>
            <el-col :span="8" class="two">
              项目类型\{{ t.projectCategoryName }}
            </el-col>
            <el-col :span="8" class="three">
              {{ t.createdAtStr}}
            </el-col>
          </el-row>
          <el-row v-if="t.finishStatus === 2 " class="complete">
            已完成
          </el-row>
        </nuxt-link>
      </el-row>
      <el-row class="bottomListBox">
        <div v-if="this.date !== undefined && this.date.length === 0" class="NoData marginBottom40">
          <div class="img">
            <img src="@/assets/img/nodata.png" alt="">
          </div>
          <div class="text">
            没有数据
          </div>
        </div>
        <div v-if="this.date !== undefined && this.date.length > 0" class="pageSbox">
          <el-pagination
            background
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="sizeID"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/purchaseList'

export default {
  layout: 'main',
  data () {
    return {
      date: [],
      pageID: 0, // 分页第几页
      sizeID: 20, // 分页数量
      totalCount: 0, // 获取的总数
      currentPage4: 1,
      areaList: [], // 地区
      typeList: [], // 项目类别
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }, // 发布时间
      area: '',
      type: '',
      time: '',
      searchText: '' // 搜索的值
    }
  },
  watch: {
    time (val) {
      console.log(this.time)
    }
  },
  created () {
    this.getArea()
    this.getType()
    this.getList()
  },
  methods: {
    handleSizeChange (val) {
      const _this = this
      _this.sizeID = val
      _this.getList()
    },
    handleCurrentChange (val) {
      const _this = this
      _this.currentPage4 = val
      this.pageID = val - 1
      _this.getList()
    },
    getArea () { // 获取地区
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getArea().then((res) => {
        console.log(res.data)
        this.areaList = this.convertTree(res.data.results)
      })
    },
    getType () { // 获取类型
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getType().then((res) => {
        console.log(res.data)
        this.typeList = this.convertTree(res.data.results)
      })
    },
    getList () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getList({ flag: false, province: this.area[0] || 0, city: this.area[1] || 0, area: this.area[2] || 0, startTime: this.time[1] || '', endTime: this.time[2] || '', page: this.pageID, size: this.sizeID, condition: this.searchText, projectCategoryId: this.type || '' }).then((res) => {
        console.log(res.data)
        this.totalCount = res.data.totalCount
        this.date = res.data.results
      })
    },
    convertTree (tree) {
      const result = []
      // eslint-disable-next-line no-unused-vars
      // 遍历 tree
      tree.forEach((item) => {
        // 解构赋值
        let {
          // eslint-disable-next-line prefer-const
          name: label,
          id: value,
          children
        } = item
        // 如果有子节点，递归
        if (value === 0) {
          value = 0 // 生成字母和数字的随机数
        }
        if (children) {
          children = this.convertTree(children)
        }
        result.push({
          value,
          label,
          children
        })
      })

      return result
    }

  }
}
</script>

<style scoped lang="scss">

    .bottomListBox {
        margin-top: 30px;
        overflow: hidden;
        width: 100%;

        .NoData {
            background: #ffffff;
            width: 100%;
            height: 600px;
            overflow: hidden;

            .img {
                width: 200px;
                height: 200px;
                margin: 100px auto;

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

    .topSearchBox {
        width: 100%;
        background: #ffffff;
        margin-top: 20px;
        box-shadow: 2px 4px 10px #e2e2e2;
        position: relative;

        .boxStyle {
            padding: 0 30px;
            margin: 30px 0;

            .leftAddrsBox {
                .leftText {
                    font-size: 16px;
                    color: #666666;
                    line-height: 40px;
                    text-align: center;
                }
            }

            .rightSbox {
                .searchSt {
                  display: block;
                  width: 100%;
                    background: #DA251D;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    color: #ffffff;
                    cursor: pointer;
                    font-size: 24px;
                }
            }
        }

        .addItem {
            position: absolute;
            top: -40px;
            right: 4px;
            background: $redColor;
            height: 36px;
            color: #ffffff;
            line-height: 36px;
            font-size: 14px;
            box-shadow: 2px 2px 10px #bdbdbd;

            em {
                font-size: 20px;
                color: #ffffff;
                margin-left: 20px;
                margin-right: 4px;
                vertical-align: middle;
            }

            span {
                vertical-align: middle;
                margin-right: 20px;
                color: #ffffff;
            }
          &:hover{
            background: rgba(218, 37, 29, 0.84);
            transition: .2s ease-in;
          }
        }

    }
    .boxList {
      width: 100%;
      margin-top: 30px;

      a {
        float: left;
        width: 49%;
        margin-right: 2%;
        background: #ffffff;
        margin-bottom: 30px;
        position: relative;
        overflow: hidden;

        &:hover {
          transition: .3s ease-in-out;
          box-shadow: 2px 0px 10px #cccccc;
        }
        .tit{
          width: calc(100% - 60px);
          margin: 30px auto;
          font-size: 16px;
          color: #333333;
          font-weight: bold;
          @include over;
        }
        .addr{
          width: calc(100% - 60px);
          margin: 30px auto;
          color: #999999;
          font-size: 14px;
          .two{
            text-align: center;
          }
          .three{
            text-align: right;
          }

        }
        .complete{
          width: 200px;
          text-align: center;
          top: 17px;
          right: -70px;
          position: absolute;
          background: $redColor;
          height: 24px;
          line-height: 24px;
          font-size: 14px;
          color: #ffffff;
          transform: rotateZ(45deg);

        }
        &:nth-child(2n) {
          margin-right: 0;
        }
      }

      &::after {
        content: "";
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
      }
    }
</style>
