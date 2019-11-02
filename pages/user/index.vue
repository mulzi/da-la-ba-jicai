<template>
  <div class="supplierBody">
    <div class="bodyBox">
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
      <div class="topMenuBox">
        <div class="contentBox">
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
                @click="changeOne (index), getFilterBySupplier({id:item.id,type:0}) , changeCategoryIdNuOne (item.id), getSupplierList({ type: 0, categoryId: item.id, materialId: null, projectTypeId: null, grade: null, page: 0, size: 20 })"
              >{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              分类：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in projectTypes" :id="item.id" :key="index" :class="supplierTwo === index ? 'active':'' " @click="changeTwo (index),changeMaterialIdNuOne( item.id || null) ,getSupplierList({ type: 0, categoryId: categoryIdNu, materialId: projectTypeIdNu, projectTypeId: materialIdNu, grade: gradeNu, page: pageID, size: sizeID })">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              类别：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in materialTypes" :id="item.id" :key="index" :class="supplierThree === index ? 'active':'' " @click="changeThree (index),changeProjectTypeIdNuOne(item.id || null) , getSupplierList({ type: 0, categoryId: categoryIdNu, materialId: projectTypeIdNu, projectTypeId: materialIdNu, grade: gradeNu, page: pageID, size: sizeID })">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBoxTwo">
            <div class="contentx">
              <span v-for="(item,index) in brandLevels" :key="index" :class="supplierFour === index ? 'active':'' " @click="changeFour (index) ,changeGradeNuOne (item.id || null ),getSupplierList({ type: 0, categoryId: categoryIdNu, materialId: projectTypeIdNu, projectTypeId: materialIdNu, grade: gradeNu, page: pageID, size: sizeID})">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
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
          <nuxt-link v-for="(item, index) in getSupplierLiList" :key="index" :to="`/works/worksPage/${item.supplierId}`">
            <p>
              <img :src="item.logo" alt="">
            </p>
          <el-row class="companyName">
              <span>公司姓名</span>
              <span>公司地址</span>
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
    </div>
  </div>
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
      brandLevels: [
        {
          name: '全部',
          id: null
        },
        {
          name: '最新',
          id: '1'
        },
        {
          name: '推荐',
          id: '2'
        },
        {
          name: '热门',
          id: '3'
        }
      ],
      getSupplierLiList: [],
      supplierOne: 0, // 选项1样式记录
      supplierTwo: 0, // 选项2样式记录
      supplierThree: 0, // 选项3样式记录
      supplierFour: 0, // 选项4样式记录
      categoryIdNu: 1, // 供应商ID临时存储
      materialIdNu: null, // 材料类别ID临时存储
      projectTypeIdNu: null, // 项目类别ID临时存储
      gradeNu: null, // 品牌档次ID临时存储
      pageID: 0, // 分页第几页
      sizeID: 20, // 分页数量
      totalCount: 0, // 获取的总数
      currentPage4: 1
    }
  },
  async asyncData (context) { // 获取一级类别
    const homeService = new HomeService(context)
    // eslint-disable-next-line no-return-await
    return await homeService.supplierType({ type: 0 }).then((res) => {
      // console.log(res.data.result.firstCategories)
      return { supplierOneTit: res.data.result.firstCategories }
    })
  },

  created () {
    const _this = this
    _this.getFilterBySupplier({ id: 1, type: 0 })
    // eslint-disable-next-line no-undef
    _this.getSupplierList({ type: 0, categoryId: _this.categoryIdNu, materialId: _this.projectTypeIdNu, projectTypeId: _this.materialIdNu, grade: _this.gradeNu, page: _this.pageID, size: _this.sizeID })
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
    changeFour (index) {
      this.supplierFour = index
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
    changeGradeNuOne (index) {
      this.gradeNu = index
    },
    handleSizeChange (val) {
      const _this = this
      _this.sizeID = val
      _this.getSupplierList({ type: 0, categoryId: _this.categoryIdNu, materialId: _this.projectTypeIdNu, projectTypeId: _this.materialIdNu, grade: _this.gradeNu, page: _this.pageID, size: _this.sizeID })
    },
    handleCurrentChange (val) {
      const _this = this
      _this.currentPage4 = val
      this.pageID = val - 1
      _this.getSupplierList({ type: 0, categoryId: _this.categoryIdNu, materialId: _this.projectTypeIdNu, projectTypeId: _this.materialIdNu, grade: _this.gradeNu, page: _this.pageID, size: _this.sizeID })
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
        this.supplierFour = 0
        // this.$store.commit('supplier/changeCategoryIdNu', 1)
        this.materialIdNu = null
        this.projectTypeIdNu = null
        this.gradeNu = null
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

</style>
