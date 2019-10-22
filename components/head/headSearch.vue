<template>
  <div class="headSearchBox">
    <el-col :span="7">
      <div class="logoBox">
        <nuxt-link to="/">
          <img alt="" src="@/assets/img/headLogo.png">
        </nuxt-link>
      </div>
    </el-col>
    <el-col :span="11">
      <div class="headSearch">
        <div class="topIpt">
          <input v-model="input" placeholder="可输入产品名称、类别或规格型号等关键字" clearable class="input">
          <el-button class="btn" type="primary">
            搜索
          </el-button>
        </div>
        <div class="bottomText">
          <span v-for="(item,index) in searchText" :key="index" :class=" index === searchNumber ? 'active':''" @click="searchTextChange(index)">{{ item.name }}</span>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="rightPhone">
        <div class="img">
          <div class="leftIphoneImg">
            <img src="@/assets/img/tel.png" alt="">
          </div>
          <div class="rightNumber">
            <p>服务热线</p>
            <p>400 023 5655</p>
          </div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      searchNumber: '',
      searchText: [
        { name: '工装供应商' },
        { name: '家装供应商' },
        { name: '设计施工方' },
        { name: '项目信息' },
        { name: '招采信息' },
        { name: '招募招标' }
      ]

    }
  },
  methods: {
    searchTextChange (index) {
      this.searchNumber = index
    }

  }
}
</script>

<style scoped lang="scss">
</style>
