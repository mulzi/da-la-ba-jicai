<template>
  <el-row class="list">
    <el-row class="topName">
      <span class="span" @click="$store.commit('projectInfo/changeDateE')">精准项目</span>
      <i :class=" this.$store.state.projectInfo.dateE ?'el-icon-caret-bottom' : 'el-icon-caret-right'" />
    </el-row>
    <el-collapse-transition>
      <contactOne :list="list" v-show="this.$store.state.projectInfo.dateE" />
    </el-collapse-transition>
  </el-row>
</template>

<script>
import contactOne from './contactTwo'
export default {
  components: { contactOne },
  // eslint-disable-next-line vue/require-prop-types
  props: ['list', 'tit'],
  data () {
    return {
      show: false,
      data: '',
      lisName: ''
    }
  },
  mounted () {
    console.log(this.list)
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
    .list{
        margin-bottom: 20px;
        .topName{
            width: 100%;
            line-height: 30px;
            border-bottom: 1px solid $borderE7;
            span{
                display: inline-block;
                margin-bottom: 20px;
                font-size: 30px;
                color: #333333;
                width: 200px;
                border-left: 8px solid $redColor;
                text-indent: 15px;
                cursor: pointer;
            }
            i{
                color: $redColor;
                font-size: 30px;
                transition: .5s ease-in-out;
            }
        }
        &.active{
            .topName{
                i{
                    transform: rotateZ(90deg);
                    transition: .5s ease-in-out;
                }
            }
        }
    }
</style>
