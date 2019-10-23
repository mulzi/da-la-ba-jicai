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
                :id="item.id"
                :key="index"
                :class="$store.state.supplier.supplierOne === index ? 'active':'' "
                @click="changeOne (index), getFilterBySupplier({id:item.id,type:0}) , changeCategoryIdNuOne (item.id), getSupplierList({ type: 0, categoryId: item.id, materialId: null, projectTypeId: null, grade: null, page: 0, size: 20 })"
              >{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              项目类别：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in projectTypes" :id="item.id" :key="index" :class="$store.state.supplier.supplierTwo === index ? 'active':'' " @click="changeTwo (index),changeMaterialIdNuOne( item.id || null) ,getSupplierList({ type: 0, categoryId: categoryIdNu, materialId: projectTypeIdNu, projectTypeId: materialIdNu, grade: gradeNu, page: pageID, size: sizeID })">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              材料类别：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in materialTypes" :id="item.id" :key="index" :class="$store.state.supplier.supplierThree === index ? 'active':'' " @click="changeThree (index),changeProjectTypeIdNuOne(item.id || null) , getSupplierList({ type: 0, categoryId: categoryIdNu, materialId: projectTypeIdNu, projectTypeId: materialIdNu, grade: gradeNu, page: pageID, size: sizeID })">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              品牌档次：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in brandLevels" :key="index" :class="$store.state.supplier.supplierFour === index ? 'active':'' " @click="changeFour (index) ,changeGradeNuOne (item.id || null ),getSupplierList({ type: 0, categoryId: categoryIdNu, materialId: projectTypeIdNu, projectTypeId: materialIdNu, grade: gradeNu, page: pageID, size: sizeID})">{{ item.name }}</span>
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
      getSupplierLiList: [],
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
        this.$store.commit('supplier/changeSupplinerTwo', 0)
        this.$store.commit('supplier/changeSupplinerThree', 0)
        this.$store.commit('supplier/changeSupplinerFour', 0)
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
        // console.log('s', res.data)
        this.getSupplierLiList = res.data.results
        this.totalCount = res.data.totalCount
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .supplierBody{
    width: 100%;
    background: #f0f3ef;
    overflow: hidden;
    .bodyBox{
      width: 75%;
      max-width: 1400px;
      margin: 0 auto;
      overflow: hidden;
      .HeaderBreadcrumb{
        width: 100%;
        margin-top: 20px;
        .breadcrumb{
          overflow: hidden;
          height: 20px;
          line-height: 20px;
          span{
            display: block;
            float: left;
            font-size: 14px;
            color: #333333;
            margin-right: 6px;
            &.right{
              font-size: 12px;
            }
          }
          a{
            font-size: 14px;
            display: block;
            float: left;
            color: #8e8e8e;
            margin-right: 6px;
          }
          .iconfont{
            color:#9a9a9a ;
            font-size: 20px;
          }
        }

      }
      .topMenuBox{
        background: #ffffff;
        width: 100%;
        overflow: hidden;
        margin-top: 20px;
        .contentBox{
          width:92% ;
          max-width: 1342px;
          margin: 40px auto 0;
          .defaultBox{
            width: 100%;
            margin-bottom: 20px;
            border-bottom: 1px solid $borderE7;
            display: flex;
            display: -ms-flex;
            .leftText{
              width: 80px;
              height: 30px;
              line-height: 30px;
              margin-bottom: 16px;
              text-align: right;
              font-size: 16px;
              font-weight: bold;
              color: #333333;
            }
            .rightList{
              flex: 1;
              -ms-flex: 1;
              span{
                display: inline-block;
                height: 26px;
                line-height: 26px;
                font-size: 16px;
                color: #666666;
                margin: 0 30px 10px 0;
                padding: 2px 10px;
                cursor: pointer;
                &.active{
                  color: #ffffff;
                  background: $redColor;
                }
                &:hover{
                  color: #ffffff;
                  background: $redColor;
                  @include triText;
                }
              }
            }
          }
        }
      }
      .bottomListBox{
        margin-top: 30px;
        overflow: hidden;
        width: 100%;

        .contentList{
          width: 100%;
          overflow: hidden;
          a{
            width:19% ;
            float: left;
            margin-right: 1.25%;
            border-radius: 6px;
            margin-bottom: 20px;
            overflow: hidden;
            background: #ffffff;
            >p{
              width: 100%;
              height:258px ;
              img{
                @include img;
              }
            }
            &:nth-child(5n){
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
          }
        }
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
    }
  }
</style>
