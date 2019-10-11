<template>
  <div class="headSearchBox">
    <el-col :span="8">
      <div class="logoBox">
        <nuxt-link to="/">
          <img alt="" src="@/assets/img/headLogo.png">
        </nuxt-link>
      </div>
    </el-col>
    <el-col :span="8">
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
    <el-col :span="8">
      <div class="rightPhone">
        <div class="img">
          <img src="@/assets/img/headPhone.png" alt="">
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
  .headSearchBox{
    max-width: 1400px;
    margin: 0 auto;
    overflow: hidden;
    .logoBox{
      width:319px ;
      height: 54px;
      margin-top: 40px;
      a{
        height: 100%;
        width: 100%;
        display: block;
        img{
          height: 100%;
          width: 100%;
          display: block;
        }
      }
    }
    .headSearch{
      max-width: 469px;
      overflow: hidden;
      margin:40px auto 0;
      .topIpt{
        width: 100%;
        float: left;
        display: flex;
        overflow: hidden;
        .input{
          float: left;
          flex: 1;
          width: 86%;
          max-width:390px;
          height:34px ;
          line-height: 34px;
          border: 2px solid #DA251D ;
          border-right: none;
          outline: none;
          display: block;
          text-indent: 1em;
          color: #333333;
          font-size: 12px;
          &::placeholder{
            color: #9b9b9b;
          }
        }
        .btn{
          float: left;
          border-radius: 0;
          background: #DA251D;
          border: none;

        }
      }
      .bottomText{
        width: 100%;
        margin-top: 14px;
        overflow: hidden;
        height: 28px;
        span{
          display: block;
          float: left;
          padding: 0 2px;
          font-size: 12px;
          margin-right: 16px;
          margin-top: 8px;
          cursor: pointer;
          &.active{
            color: #DA251D;
          }
          &:hover{
            color: #DA251D;
          }

        }
      }

    }
    .rightPhone{
      width: 100%;
      .img{
        width: 203px;
        height: 37px;
        margin: 40px auto 0;
      }
    }
  }

</style>
