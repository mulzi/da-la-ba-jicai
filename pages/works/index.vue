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
                :code="item.code"
                :key="index"
                :class="query.sourceCode === item.code ? 'active':'' "
              ><nuxt-link :to="`/works/${item.code}`">
                {{ item.name }}
              </nuxt-link>
              </span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              分类：
            </div>
            <div class="rightList">
              <span
                v-for="(item,i) in projectTypes"
                :key="i"
                :code="item.code"
                :class="query.typeId === item.id ? 'active':'' "
              ><nuxt-link :to="`/works/${query.sourceCode}/c${item.code}`">{{ item.name }}</nuxt-link></span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              风格：
            </div>
            <div class="rightList">
              <span
                v-for="(item,i) in materialTypes"
                :code="item.code"
                :key="i"
                :class="query.styleId === item.id ? 'active':'' "
              ><nuxt-link :to="`/works/${query.sourceCode}/c${query.typeCode}s${item.code}`">{{ item.name }}</nuxt-link></span>
            </div>
          </div>
          <div class="defaultBoxTwo">
            <div class="contentx">
              <span v-for="(t,i) in rankTypes" :key="i" :class="query.searchId === t.id ? 'active':''">
                {{ t.name }}
              </span>
            </div>
          </div>
        </div>
      </el-row>
      <el-row class="bottomListBox">
        <div v-if="works.length === 0 " class="NoData marginBottom40">
          <div class="img">
            <img src="@/assets/img/nodata.png" alt="">
          </div>
          <div class="text">
            没有数据
          </div>
        </div>
        <el-row v-if="works.length !== 0 " class="contentList" v-loading="loading">
          <nuxt-link v-for="(item, index) in works" :key="index" :to="`/works/worksPage/${item.id}`">
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
        <div v-if="works.length !== 0 " class="pageSbox">
          <el-pagination
            background
            :current-page="query.page + 1"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="query.size"
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
      seo: {
        title: '作品精选,大喇叭集采',
        description: '',
        keywords: ''
      },
      query: {
        sourceCode: '',
        typeCode: '',
        styleCode: '',
        sourceId: 0,
        typeId: 0,
        styleId: 0,
        searchId: 0,
        page: 0,
        size: 20
      },
      supplierOneTit: [],
      projectTypes: [ // 分类
      ],
      materialTypes: [ // 风格
      ],
      rankTypes: [
        {
          name: '全部',
          id: 0
        },
        {
          name: '最新',
          id: 1
        },
        {
          name: '推荐',
          id: 2
        },
        {
          name: '热门',
          id: 3
        }
      ],
      works: [],
      totalCount: 0,
      loading: false
    }
  },
  async asyncData (context) {
    const { params } = context
    const homeService = new HomeService(context)
    const res = await homeService.getWorksOneList()

    // 路由参数
    console.log(params)
    const paramCode = params.code
    const paramTypeId = params.pathMatch
    // paramTypeId = paramTypeId ? paramTypeId * 1 : paramTypeId
    const paramStyleId = params['1']
    // paramStyleId = paramStyleId ? paramStyleId * 1 : paramStyleId

    // 获取数据
    const { result } = res.data
    const supplierOneTit = result.worksSources

    // 设置默认的查询条件
    const query = {}
    if (paramCode) {
      // 目前先用id代替
      const matchedItems = supplierOneTit.filter(item => item.code === paramCode)
      query.sourceId = matchedItems[0].id
      query.sourceCode = matchedItems[0].code
    } else {
      // 默认第一个
      console.log(4)
      query.sourceId = supplierOneTit[0].id
      query.sourceCode = supplierOneTit[0].code
    }
    console.log(3)
    // 基础数据
    const defaultProjectTypes = [{ id: 0, sourceId: query.sourceId, name: '全部', code: 0 }]
    const defaultMaterialTypes = [{ id: 0, sourceId: query.sourceId, name: '全部', code: 0 }]
    const allProjectTypes = defaultProjectTypes.concat(res.data.result.worksTypes)
    const allMaterialTypes = defaultMaterialTypes.concat(res.data.result.worksStyles)
    const projectTypes = allProjectTypes.filter(item => item.sourceId === query.sourceId)
    const materialTypes = allMaterialTypes.filter(item => item.sourceId === query.sourceId)
    const types = projectTypes.filter(item => +item.code === +paramTypeId)
    const styles = materialTypes.filter(item => +item.code === +paramStyleId)
    console.log(paramStyleId)
    console.log(styles)
    console.log(projectTypes)
    console.log(materialTypes)

    // 其他参数
    query.typeCode = projectTypes[0].code
    query.styleCode = materialTypes[0].code
    query.typeId = types[0].id || 0
    query.styleId = 0
    query.searchId = 0
    query.page = 0
    query.size = 20

    // 加载列表
    const worksRes = await homeService.getWorksContList(query)
    const { results, totalCount } = worksRes.data
    return { query, supplierOneTit, projectTypes, materialTypes, works: results, totalCount }
  },
  created () {
    const _this = this
    _this.homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
    // console.log(this.$route)
  },
  methods: {
    changeGradeNuOne (searchId) {
      const _this = this
      _this.query.searchId = searchId
    },
    handleSizeChange (val) {
      const _this = this
      _this.query.size = val
      _this.getSupplierList(_this.query)
    },
    handleCurrentChange (val) {
      const _this = this
      _this.query.page = val - 1
      _this.getSupplierList(_this.query)
    },
    async getSupplierList (params) {
      const _this = this
      _this.loading = true
      const res = await _this.homeService.getWorksContList(params)
      const { results, totalCount } = res.data
      _this.works = results
      _this.totalCount = totalCount
      _this.loading = false
    }
  },
  head () {
    return {
      title: this.seo.title,
      meta: [
        { hid: 'keywords', name: 'keywords', content: '' },
        { hid: 'description', name: 'description', content: '' }
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
            display:inline-block;
            font-size: 14px;
            color: #666666;
            margin: 0 6px 6px 0;
            border-radius: 2px;
            cursor: pointer;
            a{
              display:block;
              text-align: center;
              padding: 4px 6px;
              color: #666666;
            }
            &.active{
              color: #ffffff;
              background: $redColor;
              a{
                color: #ffffFF;
              }
            }
            &:hover{
              color: #ffffff;
              background: $redColor;
              @include triText;
              a{
                color: #ffffFF;
              }
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
