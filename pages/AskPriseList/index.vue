<template>
  <el-row class="supplierBody">
    <el-row class="bodyBox" v-loading="loading">
      <el-row class="HeaderBreadcrumb">
        <el-col :span="24">
          <div class="breadcrumb">
            <span class="iconfont">&#xe635;</span>
            <span style="margin-right: 0;color: #8e8e8e">当前位置：</span>
            <nuxt-link to="/">
              首页
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>招募列表</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="topSearchBox">
        <el-row class="boxStyle">
          <el-col :span="12" class="leftAddrsBox">
            <el-col :span="12">
              <el-col :span="6" class="leftText">
                招募地区
              </el-col>
              <el-col :span="18">
                <el-cascader v-model="area" :options="areaList" :props="{ expandTrigger: 'hover' }" clearable />
              </el-col>
            </el-col>
            <el-col :span="12">
              <el-col :span="6" class="leftText">
                招募类型
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
          </el-col>
          <el-col :span="6" class="rightSbox">
            <el-col :span="19">
              <el-input
                v-model="searchText"
                placeholder="请输入内容"
                clearable
              />
            </el-col>
            <el-col :span="5">
              <span class="el-icon-search searchSt" @click="getList" />
            </el-col>
          </el-col>
        </el-row>
        <div @click="$store.commit('release/changeNumber', 2)" class="addItem">
          <nuxt-link to="/release">
            <em class="iconfont">&#xe880;</em>
            <span>发布招募招标</span>
          </nuxt-link>
        </div>
      </el-row>
      <el-row v-if="date !== undefined && date.length > 0" class="bodyListBox">
        <nuxt-link :to="`/AskPriseList/page/${t.id}`" v-for="(t,i) in date" :key="i">
          <el-row class="liList">
            <el-row class="tit">
              {{ t.title }}
            </el-row>
            <el-row class="time">
              <el-col :span="4">
                发布时间：<span>{{ t.createdAtStr }}</span>
              </el-col>
              <el-col :span="4">
                结束时间：<span>{{ t.expiredAtStr }}</span>
              </el-col>
            </el-row>
            <el-row class="time">
              <el-col :span="4">
                招募地区<span v-if="t.address">/{{ t.address }}</span>
              </el-col>
              <el-col :span="4">
                招募类型<span v-if="t.categoryName">/{{ t.categoryName }}</span>
              </el-col>
            </el-row>
            <el-row class="NOTime">
              {{ t.expiredAtMark }}
            </el-row>
          </el-row>
        </nuxt-link>
      </el-row>
      <div class="bottomListBox">
        <div v-if="date !== undefined && date.length === 0" class="NoData marginBottom40">
          <div class="img">
            <img src="@/assets/img/nodata.png" alt="">
          </div>
          <div class="text">
            没有数据
          </div>
        </div>
        <div v-if="date !== undefined && date.length > 0" class="pageSbox">
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
      </div>
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/askPriseList'

export default {
  layout: 'main',
  data () {
    return {
      loading: false,
      date: '',
      pageID: 0, // 分页第几页
      sizeID: 20, // 分页数量
      totalCount: 0, // 获取的总数
      currentPage4: 1,
      areaList: [], // 地区
      typeList: [], // 项目类别
      area: '',
      type: '',
      searchText: '' // 搜索的值
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
        // console.log(res)
        this.areaList = this.convertTree(res.data.results)
      })
    },
    getType () { // 获取类型
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getType().then((res) => {
        // console.log(res)
        this.typeList = this.convertTree(res.data)
        console.log(this.typeList)
      })
    },
    getList () { // 获取列表
      this.loading = true
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getList({ flag: false, title: this.searchText || '', categoryId: this.type || 0, page: this.pageID, size: this.sizeID, province: this.area[0] || 0, city: this.area[1] || 0, area: this.area[2] || 0 }).then((res) => {
        if (res.status === 200) {
          this.loading = false
          this.date = res.data.results
          this.totalCount = res.data.totalCount
          console.log(this.date)
          console.log(res)
        }
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
    .bottomListBox{
        margin-top: 30px;
        overflow: hidden;
        width: 100%;
        .NoData{
            background: #ffffff;
            width: 100%;
            height: 600px;
            overflow: hidden;
            .img{
                width: 200px;
                height: 200px;
                margin: 100px auto;
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
    .topSearchBox{
        width: 100%;
        background: #ffffff;
        margin-top: 20px;
        box-shadow: 2px 4px 10px #e2e2e2;
        position: relative;
        .boxStyle{
            padding: 0 30px;
            margin: 30px 0;
            .leftAddrsBox{
                .leftText{
                    font-size:16px ;
                    color: #666666;
                    line-height: 40px;
                    text-align: center;
                }
            }
            .rightSbox{
                .searchSt{
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
        .addItem{
            position: absolute;
            top: -40px;
            right: 4px;
            background: $redColor;
            height: 36px;
            color: #ffffff;
            line-height: 36px;
            font-size: 14px;
            box-shadow: 2px 2px 10px #bdbdbd;
            em{
                font-size: 20px;
                color: #ffffff;
                margin-left: 20px;
                margin-right: 4px;
                vertical-align: middle;
            }
            span{
                vertical-align: middle;
                margin-right: 20px;
                color: #ffffff;
            }
        }

    }
    .bodyListBox{
      width: 100%;
      margin-top: 30px;
      background: #ffffff;
      a{
        display: block;
        width: 100%;
        background: #ffffff;
        position: relative;
        border-bottom: 1px solid $borderE7 ;
        overflow: hidden;
        .liList{
          margin: 30px 0;
          padding: 0 30px;
          position: relative;
          .tit{
            width: 100%;
            font-size: 20px;
            line-height: 36px;
            color: #333333;
            margin-bottom: 10px;
          }
          .time{
            width: 100%;
            font-size: 16px;
            color: #777777;
            margin-bottom: 10px;
            span{
              color: #333333;
            }
          }
          .NOTime{
            position: absolute;
            height: 26px;
            line-height: 26px;
            font-size: 24px;
            color: $redColor;
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        &:hover{
          transition: .3s ease-in-out;
          box-shadow: 2px 2px 10px #dcdcdc;
          border-bottom-color: $redColor;
        }
      }
      &::after{
        content: "";
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
      }
    }
</style>
