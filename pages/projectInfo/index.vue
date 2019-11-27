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
            <span>项目信息</span>
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
                  @blur="console"
                  @focus="getArea"
                  clearable
                  :options="areaList"
                  :props="{ expandTrigger: 'hover' }"
                />
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6" class="leftText">
                项目类别
              </el-col>
              <el-col :span="18">
                <el-select v-model="type" @focus="getType" clearable placeholder="请选择">
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
                项目阶段
              </el-col>
              <el-col :span="18">
                <el-select v-model="phase" @focus="getPhase" clearable placeholder="请选择">
                  <el-option
                    v-for="item in phaesList"
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
            <el-col @click="getPage" :span="5">
              <span @click="getPage" class="el-icon-search searchSt" />
            </el-col>
          </el-col>
        </el-row>
        <div @click="$store.commit('release/changeNumber', 0)" class="addItem">
          <nuxt-link to="/release">
            <em class="iconfont">&#xe880;</em>
            <span>发布项目</span>
          </nuxt-link>
        </div>
      </el-row>
      <el-row class="boxList" v-if="listPage !== undefined && listPage.length > 0">
        <nuxt-link :to="`/projectInfo/projectContent/${t.id}`" v-for="(t,i) in listPage" :key="i">
          <el-row class="topBox">
            <el-row class="one">
              {{ t.name }}
            </el-row>
            <el-row class="two">
              {{ t.introduce }}
            </el-row>
            <el-row class="three">
              <el-col :span="18">
                <el-col :span="9">
                  {{ t.typeName }}
                </el-col>
                <el-col :span="9">
                  {{ t.phaseName }}
                </el-col>
                <el-col :span="6" class="red">
                  <span v-if="t.intelligences">精准情报</span>
                </el-col>
              </el-col>
              <el-col :span="6">
                {{ t.updatedAtStr }}
              </el-col>
            </el-row>
          </el-row>
          <el-row class="right_top" v-if="t.source === 0">
            <span>用户</span>
          </el-row>
        </nuxt-link>
      </el-row>
      <div class="bottomListBox">
        <div class="NoData marginBottom40" v-if="listPage !== undefined && listPage.length === 0">
          <div class="img">
            <img src="@/assets/img/nodata.png" alt="">
          </div>
          <div class="text">
            没有数据
          </div>
        </div>
        <div class="pageSbox" v-if="listPage !== undefined && listPage.length > 0">
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
import { HomeService } from '@/services/projectInfo'

export default {
  layout: 'main',
  data () {
    return {
      listPage: [], // 列表
      pageID: 0, // 分页第几页
      sizeID: 10, // 分页数量
      totalCount: 0, // 获取的总数
      currentPage4: 1,
      areaList: [], // 地区
      typeList: [], // 项目类别
      phaesList: [], // 项目阶段
      area: '', // 地区的值
      type: '', // 项目类别
      phase: '', // 项目阶段
      searchText: '', // 搜索的值
      loading: false
    }
  },
  created () {
    this.getPage()
  },
  methods: {
    handleSizeChange (val) {
      const _this = this
      _this.sizeID = val
      _this.getPage()
    },
    handleCurrentChange (val) {
      const _this = this
      _this.currentPage4 = val
      this.pageID = val - 1
      _this.getPage()
    },
    getArea () { // 获取项目地区
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getArea().then((res) => {
        // console.log('项目地区', res.data.results)
        this.areaList = this.convertTree(res.data.results)
        // console.log(this.options)
        setTimeout(() => {
          console.log(this.area)
        }, 3000)
      })
    },
    getType () { // 获取类型
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getType().then((res) => {
        // console.log('项目类型', res.data.results)
        this.typeList = this.convertTree(res.data.results)
        // console.log(this.options)
      })
    },
    getPhase () { // 获取阶段
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getPhase().then((res) => {
        console.log('项目阶段', res.data.results)
        this.phaesList = this.convertTrees(res.data.results)
      })
    },
    getPage () { // 获取列表
      this.loading = true
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getPage({
        conditions: this.searchText,
        province: this.area[0] || 0,
        city: this.area[1] || 0,
        area: this.area[2] || 0,
        typeId: this.type,
        phaseId: this.phase,
        page: this.pageID,
        size: this.sizeID
      }).then((res) => {
        console.log('项目列表', res.data.results)
        // console.log('项目列表', res)
        this.totalCount = res.data.totalCount
        this.listPage = res.data.results
        if (res.status === 200) {
          this.loading = false
        }
        // console.log(this.area[0])
        // console.log(this.area[1])
        // console.log(this.area[2])
      }).catch(() => {
        this.$message({
          message: '网络可能不太好哦! 刷新一下试试！',
          type: 'error'
        })
      })
    },
    console () {
      setTimeout(() => {
        console.log('地区', this.area)
      }, 3000)
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
          value = Math.random().toString(32).substr(2) // 生成字母和数字的随机数
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
    },
    convertTrees (tree) {
      const result = []
      // eslint-disable-next-line no-unused-vars
      // 遍历 tree
      tree.forEach((item) => {
        // 解构赋值
        const {
          // eslint-disable-next-line prefer-const
          phaseName: label,
          id: value
        } = item
        result.push({
          value,
          label
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
        .boxList{
          width: 100%;
          margin-top: 30px;
          a{
            float: left;
            height: 224px;
            width: 49%;
            margin-right: 2%;
            background: #ffffff;
            margin-bottom: 30px;
            position: relative;
            &:hover{
              transition: .3s ease-in-out;
              box-shadow: 2px 0px 10px #cccccc;
            }
            .topBox{
              padding: 0 30px;
              margin: 40px 0;
              .one{
                width: 100%;
                @include over;
                font-size: 16px;
                color: #333333;
                font-weight: bold;
              }
              .two{
                width: 100%;
                margin-top: 20px;
                height: 48px;
                line-height: 24px;
                @include twoText;
                font-size: 14px;
                color: #666666;
              }
              .three{
                color: #999999;
                font-size: 14px;
                margin-top: 35px;
                .red{
                  color: $redColor;
                }
              }
            }
            .right_top{
              position: absolute;
              top: 0;
              right: 20px;
              width: 35px;
              height: 50px;
              background: $redColor;
              span{
                width: 100%;
                height: 100%;
                position: relative;
                display: block;
                color: #ffffff;
                font-size: 14px;
                text-align: center;
                line-height: 34px;
                &::after{
                  content: "";
                  display: block;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  height: 0;
                  border: 17.5px solid transparent;
                  border-bottom-color: #ffffff;
                  z-index: 900;
                }
              }
            }

            &:nth-child(2n){
              margin-right: 0;
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
