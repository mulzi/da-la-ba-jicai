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
            <span>材料供应商</span>
          </div>
        </el-col>
      </el-row>
      <div class="topMenuBox">
        <div class="contentBox">
          <div class="defaultBox">
            <div class="leftText">
              供应商：
            </div>
            <div class="rightList">
              <span
                v-for="(item,index) in supplierOneTit"
                :key="index"
                :class="$store.state.supplier.supplierOne === index ? 'active':'' "
                @click="changeOne (index), getFilterBySupplier({id:item.id,type:0}) , changeCategoryIdNuOne (item.id), getSupplierList({ type: 0, categoryId: $store.state.supplier.categoryIdNu, materialId: $store.state.supplier.materialIdNu, projectTypeId: $store.state.supplier.projectTypeIdNu, grade: $store.state.supplier.gradeNu, page: $store.state.supplier.pageID, size: $store.state.supplier.sizeID })"
              >{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              项目类别：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in projectTypes" :key="index" :class="$store.state.supplier.supplierTwo === index ? 'active':'' " @click="changeTwo (index),changeMaterialIdNuOne(item.id) ,getSupplierList({ type: 0, categoryId: $store.state.supplier.categoryIdNu, materialId: $store.state.supplier.materialIdNu, projectTypeId: $store.state.supplier.projectTypeIdNu, grade: $store.state.supplier.gradeNu, page: $store.state.supplier.pageID, size: $store.state.supplier.sizeID })">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              材料类别：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in materialTypes" :key="index" :class="$store.state.supplier.supplierThree === index ? 'active':'' " @click="changeThree (index),changeProjectTypeIdNuOne(item.id) , getSupplierList({ type: 0, categoryId: $store.state.supplier.categoryIdNu, materialId: $store.state.supplier.materialIdNu, projectTypeId: $store.state.supplier.projectTypeIdNu, grade: $store.state.supplier.gradeNu, page: $store.state.supplier.pageID, size: $store.state.supplier.sizeID })">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              品牌档次：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in brandLevels" :key="index" :class="$store.state.supplier.supplierFour === index ? 'active':'' " @click="changeFour (index) ,changeGradeNuOne (item.id),getSupplierList({ type: 0, categoryId: $store.state.supplier.categoryIdNu, materialId: $store.state.supplier.materialIdNu, projectTypeId: $store.state.supplier.projectTypeIdNu, grade: $store.state.supplier.gradeNu, page: $store.state.supplier.pageID, size: $store.state.supplier.sizeID })">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomListBox">
        <div v-if="getSupplierLiList ==='' " class="NoData">
          <div class="img">
            <img src="@/assets/img/nodata.png" alt="">
          </div>
          <div class="text">
            没有数据
          </div>
        </div>
        <div v-if="getSupplierLiList !=='' " class="contentList">
          <nuxt-link v-for="(item, index) in getSupplierLiList" :key="index" :to="`/supplier/toolDecoration/${item.supplierId}`">
            <p>
              <img :src="item.logo" alt="">
            </p>
            <el-row class="oneName">
              <el-col :span="14">
                {{ item.brand }}
              </el-col>
              <el-col v-if="item.vipType === 0" :span="10" class="rightVip">
                普通会员
              </el-col>
              <el-col v-else-if="item.vipType === 1" :span="10" class="rightVip color">
                vip会员
              </el-col>
              <el-col v-else :span="10" class="rightVip color">
                超级会员
              </el-col>
            </el-row>
            <el-row class="twoName">
              <el-col :span="16">
                {{ item.agent }}
              </el-col>
              <el-col v-if="item.nature === 1" :span="8" class="right">
                厂家
              </el-col>
              <el-col v-if="item.nature === 2" :span="8" class="right">
                代理商
              </el-col>
              <el-col v-if="item.nature === 3" :span="8" class="right">
                办事处
              </el-col>
              <el-col v-if="item.nature === 4" :span="8" class="right">
                运营中心/分公司
              </el-col>
            </el-row>
            <el-row class="rate">
              <el-col :span="24" class="xing">
                <el-rate
                  :value="item.star"
                  disabled
                  disabled-void-color="#d6d6d6"
                />
              </el-col>
            </el-row>
          </nuxt-link>
        </div>
        <div v-if="getSupplierLiList !=='' " class="pageSbox">
          <!--          <el-pagination-->
          <!--            background-->
          <!--            :current-page.sync="currentPage2"-->
          <!--            :page-sizes="[10, 20, 30, 50]"-->
          <!--            :page-size="20"-->
          <!--            layout="sizes, prev, pager, next"-->
          <!--            :total="1000"-->
          <!--            @size-change="handleSizeChange"-->
          <!--            @current-change="handleCurrentChange"-->
          <!--          />-->
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
      supplier: [
        { name: '公装供应商' },
        { name: '家装供应商' },
        { name: '园林景观' },
        { name: '机电设备' },
        { name: '公装供应商' },
        { name: '家装供应商' },
        { name: '园林景观' },
        { name: '机电设备' },
        { name: '公装供应商' },
        { name: '家装供应商' },
        { name: '园林景观' },
        { name: '机电设备' },
        { name: '公装供应商' },
        { name: '家装供应商' },
        { name: '园林景观' },
        { name: '机电设备' },
        { name: '公装供应商' },
        { name: '家装供应商' },
        { name: '园林景观' },
        { name: '机电设备' },
        { name: '建筑材料' }
      ],
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
          name: '不限',
          id: null
        },
        {
          name: '高端品牌',
          id: '1'
        },
        {
          name: '中端品牌',
          id: '2'
        },
        {
          name: '亲民品牌',
          id: '3'
        },
        {
          name: '进口馆',
          id: '4'
        }

      ],
      getSupplierLiList: []
    }
  },
  async asyncData (context) { // 获取一级类别
    const homeService = new HomeService(context)
    // eslint-disable-next-line no-return-await
    return await homeService.supplierType({ type: 0 }).then((res) => {
      console.log(res.data.result.firstCategories)
      return { supplierOneTit: res.data.result.firstCategories }
    })
  },

  created () {
    const _this = this
    _this.getFilterBySupplier({ id: 1, type: 0 })
    // eslint-disable-next-line no-undef
    _this.getSupplierList({ type: 0, categoryId: 1, materialId: null, projectTypeId: null, grade: null, page: 0, size: 20 })
  },
  methods: {
    changeOne (index) {
      this.$store.commit('supplier/changeSupplinerOne', index)
    },
    changeTwo (index) {
      this.$store.commit('supplier/changeSupplinerTwo', index)
    },
    changeThree (index) {
      this.$store.commit('supplier/changeSupplinerThree', index)
    },
    changeFour (index) {
      this.$store.commit('supplier/changeSupplinerFour', index)
    },
    changeCategoryIdNuOne (index) {
      this.$store.dispatch('supplier/CHANGECategory', index)
    },
    changeMaterialIdNuOne (index) {
      this.$store.dispatch('supplier/CHANGEMaterialIdNu', index)
    },
    changeProjectTypeIdNuOne (index) {
      this.$store.dispatch('supplier/CHANGEProjectTypeIdNu', index)
    },
    changeGradeNuOne (index) {
      this.$store.dispatch('supplier/CHANGEGradeNu', index)
    },
    getFilterBySupplier (parmes) { // 获取二级三级类别
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.filterBySupplier(parmes).then((res) => {
        console.log('ss', res.data.result)
        const projectTypes = [{ id: null, name: '不限' }]
        const materialTypes = [{ id: null, name: '不限' }]
        this.materialTypes = res.data.result.materials ? materialTypes.concat(res.data.result.materials) : materialTypes
        this.projectTypes = res.data.result.projectTypes ? projectTypes.concat(res.data.result.projectTypes) : projectTypes
        this.$store.commit('supplier/changeSupplinerTwo', 0)
        this.$store.commit('supplier/changeSupplinerThree', 0)
        this.$store.commit('supplier/changeSupplinerFour', 0)
        // this.$store.commit('supplier/changeCategoryIdNu', 1)
        this.$store.dispatch('supplier/CHANGEMaterialIdNu', null)
        this.$store.dispatch('supplier/CHANGEProjectTypeIdNu', null)
        this.$store.dispatch('supplier/CHANGEGradeNu', null)
      })
    },
    getSupplierList (parmes) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.SupplierList(parmes).then((res) => {
        console.log('s', res.data.results)
        this.getSupplierLiList = res.data.results
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
