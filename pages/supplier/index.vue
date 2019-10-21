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
              <span v-for="(item,index) in supplier" :key="index" :class="$store.state.supplier.supplierOne === index ? 'active':'' " @click="changeOne (index)">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              项目类别：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in supplier" :key="index" :class="$store.state.supplier.supplierTwo === index ? 'active':'' " @click="changeTwo (index)">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              材料类别：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in supplier" :key="index" :class="$store.state.supplier.supplierThree === index ? 'active':'' " @click="changeThree (index)">{{ item.name }}</span>
            </div>
          </div>
          <div class="defaultBox">
            <div class="leftText">
              品牌档次：
            </div>
            <div class="rightList">
              <span v-for="(item,index) in brandLevels" :key="index" :class="$store.state.supplier.supplierFour === index ? 'active':'' " @click="changeFour (index)">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomListBox">
        <div class="contentList">
          <nuxt-link to="/">
            <p>
              <img src="@/assets/img/0123.jpg" alt="">
            </p>
            <el-row class="oneName">
              <el-col :span="14">
                代理品牌
              </el-col>
              <el-col :span="10" class="rightVip color">
                vip会员
              </el-col>
            </el-row>
            <el-row class="twoName">
              <el-col :span="16">
                公司名称sd sad sd asdas das  sa
              </el-col>
              <el-col :span="8" class="right">
                商家性质
              </el-col>
            </el-row>
            <el-row class="rate">
              <el-col :span="24" class="xing">
                <el-rate
                  :value="4"
                  disabled
                  disabled-void-color="#d6d6d6"
                />
              </el-col>
            </el-row>
          </nuxt-link>
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

      ]
    }
  },
  asyncData (context) {
    const homeService = new HomeService(context)
    return homeService.supplierType().then((res) => {
      console.log(res.data)
    })
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
    }
  }
}
</script>

<style scoped lang="scss">

</style>
