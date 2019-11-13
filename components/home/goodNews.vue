<template>
  <el-row class="goodNews">
    <el-row class="TwoBox">
      <rolling-news :goodnews-left="goodNews.enterpriseNews" />
      <roll-three-news-two :good-news="goodNews.successCases" />
    </el-row>
  </el-row>
</template>

<script>
import rollingNews from './rollThreeNews'
import rollThreeNewsTwo from './rollThreeNewsTwo'
export default {
  components: {
    rollThreeNewsTwo,
    rollingNews
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['goodNews'],
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
    .goodNews{
        width: 100%;
        border: 1px solid $borderE7;
        margin-top: 50px;
        overflow: hidden;
        box-sizing: border-box;
        .TwoBox{
            width: 92%;
            margin: 0 auto;
            max-width: 1338px;
            display: flex;
            position: relative;
            &::after{
                content: "";
                width: 1px;
                height: 120px;
                position: absolute;
                left: 50%;
                top: 47px;
                background: linear-gradient(180deg,#f9f9f9,#d9d9d9,#f9f9f9);
            }
        }
    }
</style>
