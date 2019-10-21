<template>
  <el-row class="indexRollingNews">
    <el-col :span="8">
      <div class="one">
        <div class="leftName">
          <img src="@/assets/img/horn.png" alt="">
          <span>【工程商家推荐】</span>
        </div>

        <el-carousel
          class="rightRollList"
          height="19px"
          direction="vertical"
          :autoplay="true"
          loop
          indicator-position="none"
        >
          <el-carousel-item v-for="(item,index) in rollNews.homeSupplierTile" :key="index">
            <span> {{ item.title }}</span>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="one">
        <div class="leftName">
          <img src="@/assets/img/horn.png" alt="">
          <span>【家装商家推荐】</span>
        </div>
        <el-carousel
          class="rightRollList"
          height="19px"
          direction="vertical"
          :autoplay="true"
          loop
          indicator-position="none"
        >
          <el-carousel-item v-for="(item,index) in rollNews.projectSupplierTile" :key="index">
            <span> {{ item.title }}</span>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="one">
        <div class="leftName">
          <img src="@/assets/img/horn.png" alt="">
          <span>【设计施工方推荐】</span>
        </div>
        <el-carousel
          class="rightRollList"
          height="19px"
          direction="vertical"
          :autoplay="true"
          loop
          indicator-position="none"
        >
          <el-carousel-item v-for="(item,index) in rollNews.simpleProjectTile" :key="index">
            <span> {{ item.title }}</span>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {
  props: ['rollNews'],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .indexRollingNews{
    width: 100%;
    height: 20px;
    line-height: 20px;
    margin: 24px 0;
    .one{
      overflow: hidden;
      display: flex;
      display: -ms-flex;
      align-items: center;
      .leftName{
        padding: 0 1px;
        align-items: center;
        display: -ms-flex;
        display: flex;
        font-size: 0;
        img{
          width: 19px;
          height: 19px;
        }
        span{
          margin-left: 12px;
          font-size: 13px;
          color: #DA251D;
          line-height: 20px;
          height: 20px;
          display: inline-block;
        }
      }
      .rightRollList{
        flex: 1;
        margin-right: 60px;
        overflow: hidden;
        height: 19px;
        line-height: 20px;
        span{
          width: 100%;
          @include over;
          display: block;
          font-size: 13px;
          color: #666666;
          height: 19px;
          line-height: 19px;
          cursor: pointer;
        }
      }
    }
  }
</style>
