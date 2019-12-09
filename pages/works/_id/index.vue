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
            <span>作品精选</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="topMenuBox">
        <div class="contentBox">
          <div class="defaultBox">
            <div class="leftText">
              板块：
            </div>
            <div class="rightList">
              <span
                v-for="(item,index) in supplierOneTit"
                :id="item.id"
                :key="index"
                :class="supplierOne === index ? 'active':'' "
                @click=" changeOne (index), getFilterBySupplier({id:item.id}) , changeCategoryIdNuOne (item.id), getSupplierList({ sourceId: sourceId, typeId: typeId, styleId: styleId, searchId: searchId, page: pageID, size: sizeID })"
              >{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              分类：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in projectTypes" :id="item.id" :key="index" :class="supplierTwo === index ? 'active':'' " @click="changeTwo (index),changeMaterialIdNuOne( item.id || null) ,getSupplierList({ sourceId: sourceId, typeId: typeId, styleId: styleId, searchId: searchId, page: pageID, size: sizeID })">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              风格：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in materialTypes" :id="item.id" :key="index" :class="supplierThree === index ? 'active':'' " @click="changeThree (index),changeProjectTypeIdNuOne(item.id || null) , getSupplierList({ sourceId: sourceId, typeId: typeId, styleId: styleId, searchId: searchId, page: pageID, size: sizeID })">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBoxTwo">
            <div class="contentx">
              <span v-for="(item,index) in brandLevels" :key="index" :class="supplierFour === index ? 'active':'' " @click="changeFour (index) ,changeGradeNuOne (item.id || null ),getSupplierList({ sourceId: sourceId, typeId: typeId, styleId: styleId, searchId: searchId, page: pageID, size: sizeID })">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </el-row>
      <el-row class="bottomListBox">
        <div v-if="getSupplierLiList.length === 0 " class="NoData marginBottom40">
          <div class="img">
            <img src="@/assets/img/nodata.png" alt="">
          </div>
          <div class="text">
            没有数据
          </div>
        </div>
        <el-row v-if="getSupplierLiList.length !== 0 " class="contentList" v-loading="loading">
          <nuxt-link v-for="(item, index) in getSupplierLiList" :key="index" :to="`/works/worksPage/${item.id}`">
            <p>
              <img :src="item.cover" alt="">
            </p>
            <el-row class="topNameBox">
              <el-row class="oneName">
                主题：{{ item.theme }}
              </el-row>
              <el-row class="twoName">
                项目名称：{{ item.name }}
              </el-row>
              <el-row class="numbers">
                <i class="el-icon-view">&nbsp;{{ item.browser }}</i>
                <i class="el-icon-chat-dot-square">&nbsp;{{ item.comment }}</i>
                <i class="iconfont">&#xe680;&nbsp; {{ item.likes }}</i>
                <span>{{ item.createdAtStr }}</span>
              </el-row>
            </el-row>
            <el-row class="b_name">
              <img v-lazy="item.cover" alt="">
              <span :title="item.agent">
                {{ item.agent }}
              </span>
            </el-row>
          </nuxt-link>
        </el-row>
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
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/home'

export default {
  layout: 'main',
  data () {
    return {
      supplierOneTit: [],
      projectTypes: [ // 分类
        {
          id: null,
          name: '全部'
        }
      ],
      materialTypes: [ // 风格
        {
          id: null,
          name: '全部'
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
      sourceId: 10000, // 板块临时存储
      typeId: 0, // 产品类型临时存储
      styleId: 0, // 作品风格临时存储
      searchId: 0, // 搜索类型临时存储
      pageID: 0, // 分页第几页
      sizeID: 20, // 分页数量
      totalCount: 0, // 获取的总数
      currentPage4: 1,
      loading: true
    }
  },
  // async asyncData (context) { // 获取一级类别
  //   const supplierOneTit = [{
  //     id: 0,
  //     name: '全部'
  //   }]
  //   const homeService = new HomeService(context)
  //   // eslint-disable-next-line no-return-await
  //   return await homeService.getWorksOneList().then((res) => {
  //     console.log(res.data.result)
  //     return { supplierOneTit: supplierOneTit.concat(res.data.result.worksSources) }
  //   })
  // },

  created () {
    const _this = this
    _this.getWorksOneList()
    // _this.getFilterBySupplier({ id: 0 })
    // eslint-disable-next-line no-undef
    _this.getSupplierList({ sourceId: _this.sourceId, typeId: _this.typeId, styleId: _this.styleId, searchId: _this.searchId, page: _this.pageID, size: _this.sizeID })
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
      this.sourceId = index
    },
    changeMaterialIdNuOne (index) {
      this.typeId = index
    },
    changeProjectTypeIdNuOne (index) {
      this.styleId = index
    },
    changeGradeNuOne (index) {
      this.searchId = index
    },
    handleSizeChange (val) {
      const _this = this
      _this.sizeID = val
      _this.getSupplierList({ sourceId: _this.sourceId, typeId: _this.typeId, styleId: _this.styleId, searchId: _this.searchId, page: _this.pageID, size: _this.sizeID })
    },
    handleCurrentChange (val) {
      const _this = this
      _this.currentPage4 = val
      this.pageID = val - 1
      _this.getSupplierList({ sourceId: _this.sourceId, typeId: _this.typeId, styleId: _this.styleId, searchId: _this.searchId, page: _this.pageID, size: _this.sizeID })
    },
    getWorksOneList () { // 获取一级栏目
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getWorksOneList().then((res) => {
        console.log('第一级', res.data.result)
        this.supplierOneTit = res.data.result.worksSources
        const projectTypes = [{ id: 0, name: '全部' }]
        const materialTypes = [{ id: 0, name: '全部' }]
        this.materialTypes = materialTypes.concat(res.data.result.worksStyles)
        this.projectTypes = projectTypes.concat(res.data.result.worksTypes)
        this.supplierTwo = 0
        this.supplierThree = 0
        this.supplierFour = 0
      })
    },
    getFilterBySupplier (parmes) { // 获取二级三级类别
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getWorksTwoList(parmes).then((res) => {
        console.log('ss', res.data.result)
        const projectTypes = [{ id: 0, name: '全部' }]
        const materialTypes = [{ id: 0, name: '全部' }]
        this.materialTypes = materialTypes.concat(res.data.result.worksStyles)
        this.projectTypes = projectTypes.concat(res.data.result.worksTypes)
        this.supplierTwo = 0
        this.supplierThree = 0
        this.supplierFour = 0
        // this.$store.commit('supplier/changeCategoryIdNu', 1)
        this.typeId = 0
        this.styleId = 0
        this.searchId = 0
        this.pageID = 0
        this.sizeID = 20
        this.currentPage4 = 1
      })
    },
    getSupplierList (parmes) {
      this.loading = true
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getWorksContList(parmes).then((res) => {
        // console.log('s', res)
        this.getSupplierLiList = res.data.results
        this.totalCount = res.data.totalCount
        if (res.status === 200) {
          setTimeout(() => {
            this.loading = false
          }, 500)
        }
      })
    }
  },
  head () {
    return {
      title: '设计方施工方作品精选-大喇叭集采',
      meta: [
        { hid: 'keyworks', name: 'keyworks', content: '设计施工方作品展示,大喇叭集采' },
        { hid: 'description', name: 'description', content: '设计方作品展示,大喇叭集采' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
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
          font-size: 14px;
          font-weight: bold;
          color: #333333;
        }
        .rightList{
          flex: 1;
          -ms-flex: 1;
          font-size: 0;
          span{
            display: inline-block;
            height: 26px;
            line-height: 26px;
            font-size: 14px;
            color: #666666;
            margin: 0 6px 6px 0;
            border-radius: 2px;
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
      .defaultBoxTwo{
        width: 100%;
        margin-bottom: 20px;
        .contentx{
          width: 100%;
          text-align: center;
          span{
            font-size: 16px;
            display: inline-block;
            margin-right: 60px;
            cursor: pointer;
            &:hover{
              color: $redColor;
            }
            &.active{
              color: $redColor;
            }
          }
        }
      }
    }
  }
  .bottomListBox{
    margin-top: 30px;
    width: 100%;

    .contentList{
      width: 100%;
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
        .topNameBox{
          width: 100%;
          margin: 0 auto;
          border-bottom: 1px solid $borderE7;
          .oneName{
            width: 90%;
            margin: 10px auto 0;
            height: 20px;
            line-height: 20px;
            color: #333333;
            font-size: 14px;
            @include over;

          }
          .twoName{
            width: 90%;
            margin: 10px auto 0;
            height: 18px;
            line-height: 18px;
            color: #333333;
            font-size: 12px;
            @include over;
          }
          .numbers{
            width: 90%;
            margin: 14px auto ;
            font-size: 12px;
            color: #bfbfbf;
            @include over;
            i{
              font-size: 12px;
              margin-right: 6px;
            }
            span{
              margin-left: 10px;
            }
          }
        }
        .b_name{
          width: 90%;
          margin: 10px auto;
          display: flex;
          display: -ms-flex;
          justify-items: center;
          align-items: center;
          img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          span{
            flex: 1;
            display: block;
            -ms-flex: 1;
            @include over;
            margin-left: 10px;
            font-size:12px ;
            color: #333333;
          }
        }
        &:hover{
          transition: .2s ease-in;
          box-shadow: 0px 6px 20px #cbcbcb;
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
</style>
