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
            <span>设计施工方</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="topMenuBox">
        <el-row class="contentBox">
          <div class="defaultBox">
            <div class="leftText">
              设计施工方：
            </div>
            <div class="rightList">
              <span
                v-for="(item,index) in supplierOneTit"
                :id="item.id"
                :key="index"
                :class="supplierOne === index ? 'active':'' "
                @click="changeOne (index), getFilterBySupplier({id:item.id,type:0}) , changeCategoryIdNuOne (item.id), getSupplierList({ type: type, categoryId: item.id, materialId: null, projectTypeId: null, page: 0, size: 20 })"
              >{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              分类：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in projectTypes" :id="item.id" :key="index" :class="supplierTwo === index ? 'active':'' " @click="changeTwo (index),changeMaterialIdNuOne( item.id || null) ,getSupplierList({ type: type, categoryId: categoryIdNu, materialId: projectTypeIdNu, projectTypeId: materialIdNu, page: pageID, size: sizeID })">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              类别：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in materialTypes" :id="item.id" :key="index" :class="supplierThree === index ? 'active':'' " @click="changeThree (index),changeProjectTypeIdNuOne(item.id || null) , getSupplierList({ type: type, categoryId: categoryIdNu, materialId: projectTypeIdNu, projectTypeId: materialIdNu, page: pageID, size: sizeID })">{{ item.name }}</span>
            </div>
          </div>
        </el-row>
      </el-row>
      <div class="bottomListBox">
        <div v-if="getSupplierLiList.length === 0 " class="NoData marginBottom40">
          <div class="img">
            <img src="@/assets/img/nodata.png" alt="">
          </div>
          <div class="text">
            没有数据
          </div>
        </div>
        <div v-if="getSupplierLiList.length !== 0 " class="contentList">
          <nuxt-link v-for="(item, index) in getSupplierLiList" :key="index" :to="`/user/designDecoration/${item.supplierId}`">
            <p>
              <img :src="item.logo" alt="">
            </p>
            <el-row class="companyName">
              <span>{{ item.agent }}</span>
              <span>{{ item.address }}</span>
            </el-row>
          </nuxt-link>
        </div>
        <div v-if="getSupplierLiList.length !== 0 " class="pageSbox">
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
import { HomeService } from '@/services/home'

export default {
  layout: 'main',
  data () {
    return {
      supplierOneTit: '',
      projectTypes: [ // 项目类别
        {
          id: null,
          name: '不限'
        }
      ],
      materialTypes: [ // 材料类别
        {
          id: null,
          name: '不限'
        }
      ],
      getSupplierLiList: [],
      supplierOne: 0, // 选项1样式记录
      supplierTwo: 0, // 选项2样式记录
      supplierThree: 0, // 选项3样式记录
      categoryIdNu: 1, // 供应商ID临时存储
      materialIdNu: null, // 材料类别ID临时存储
      projectTypeIdNu: null, // 项目类别ID临时存储
      type: 1,
      pageID: 0, // 分页第几页
      sizeID: 20, // 分页数量
      totalCount: 0, // 获取的总数
      currentPage4: 1
    }
  },
  async asyncData (context) { // 获取一级类别
    const homeService = new HomeService(context)
    // eslint-disable-next-line no-return-await
    return await homeService.supplierType({ type: 1 }).then((res) => {
      // console.log(res.data.result.firstCategories)
      return { supplierOneTit: res.data.result.firstCategories }
    })
  },

  created () {
    const _this = this
    _this.getFilterBySupplier({ id: 1, type: this.type })
    // eslint-disable-next-line no-undef
    _this.getSupplierList({ type: this.type, categoryId: _this.categoryIdNu, materialId: _this.projectTypeIdNu, projectTypeId: _this.materialIdNu, page: _this.pageID, size: _this.sizeID })
  },
  methods: {
    changeOne (index) {
      this.currentPage4 = 1
      this.supplierOne = index
    },
    changeTwo (index) {
      this.supplierTwo = index
    },
    changeThree (index) {
      this.supplierThree = index
    },
    changeCategoryIdNuOne (index) {
      this.categoryIdNu = index
    },
    changeMaterialIdNuOne (index) {
      this.materialIdNu = index
    },
    changeProjectTypeIdNuOne (index) {
      this.projectTypeIdNu = index
    },
    handleSizeChange (val) {
      const _this = this
      _this.sizeID = val
      _this.getSupplierList({ type: 1, categoryId: _this.categoryIdNu, materialId: _this.projectTypeIdNu, projectTypeId: _this.materialIdNu, page: _this.pageID, size: _this.sizeID })
    },
    handleCurrentChange (val) {
      const _this = this
      _this.currentPage4 = val
      this.pageID = val - 1
      _this.getSupplierList({ type: 1, categoryId: _this.categoryIdNu, materialId: _this.projectTypeIdNu, projectTypeId: _this.materialIdNu, page: _this.pageID, size: _this.sizeID })
    },
    getFilterBySupplier (parmes) { // 获取二级三级类别
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.filterBySupplier(parmes).then((res) => {
        // console.log('ss', res.data.result)
        const projectTypes = [{ id: null, name: '不限' }]
        const materialTypes = [{ id: null, name: '不限' }]
        this.materialTypes = res.data.result.materials ? materialTypes.concat(res.data.result.materials) : materialTypes
        this.projectTypes = res.data.result.projectTypes ? projectTypes.concat(res.data.result.projectTypes) : projectTypes
        this.supplierTwo = 0
        this.supplierThree = 0
        // this.$store.commit('supplier/changeCategoryIdNu', 1)
        this.materialIdNu = null
        this.projectTypeIdNu = null
        this.pageID = 0
        this.sizeID = 20
        this.currentPage4 = 1
      })
    },
    getSupplierList (parmes) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.SupplierList(parmes).then((res) => {
        console.log('s', res.data)
        this.getSupplierLiList = res.data.results
        this.totalCount = res.data.totalCount
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .topMenuBox {
    background: #ffffff;
    width: 100%;
    overflow: hidden;
    margin-top: 20px;

    .contentBox {
      width: 92%;
      max-width: 1342px;
      margin: 40px auto 0;

      .defaultBox {
        width: 100%;
        margin-bottom: 20px;
        border-bottom: 1px solid $borderE7;
        display: flex;
        display: -ms-flex;

        .leftText {
          width: 100px;
          height: 30px;
          line-height: 30px;
          margin-bottom: 16px;
          text-align: right;
          font-size: 14px;
          font-weight: bold;
          color: #333333;
        }

        .rightList {
          flex: 1;
          -ms-flex: 1;
          font-size: 0;

          span {
            display: inline-block;
            height: 26px;
            line-height: 26px;
            font-size: 14px;
            color: #666666;
            margin: 0 6px 6px 0;
            padding: 2px 10px;
            cursor: pointer;

            &.active {
              color: #ffffff;
              background: $redColor;
            }

            &:hover {
              color: #ffffff;
              background: $redColor;
              @include triText;
            }
          }
        }
      }

      .defaultBoxTwo {
        width: 100%;
        margin-bottom: 20px;

        .contentx {
          width: 100%;
          text-align: center;

          span {
            font-size: 16px;
            display: inline-block;
            margin-right: 60px;
            cursor: pointer;

            &:hover {
              color: $redColor;
            }

            &.active {
              color: $redColor;
            }
          }
        }
      }
    }
  }
  .bottomListBox {
    margin-top: 30px;
    overflow: hidden;
    width: 100%;

    .contentList {
      width: 100%;
      overflow: hidden;

      a {
        width: 19%;
        float: left;
        margin-right: 1.25%;
        border-radius: 6px;
        margin-bottom: 20px;
        overflow: hidden;
        background: #ffffff;

        > p {
          width: 100%;
          height: 258px;

          img {
            @include img;
          }
        }

        &:nth-child(5n) {
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
      }
    }

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
</style>
