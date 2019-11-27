<template>
  <el-row class="list">
    <el-row class="topName">
      <span class="span" @click="show = !show">{{ list[0].categoryName }}</span>
      <i :class=" show ?'el-icon-caret-bottom' : 'el-icon-caret-right'" />
    </el-row>
    <el-collapse-transition>
      <contact-one :list="list" v-show="show" />
    </el-collapse-transition>
  </el-row>
</template>

<script>
import contactOne from './contactOne'
export default {
  components: { contactOne },
  // eslint-disable-next-line vue/require-prop-types
  props: ['list'],
  data () {
    return {
      show: false,
      lisName: ''
    }
  },
  mounted () {
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
