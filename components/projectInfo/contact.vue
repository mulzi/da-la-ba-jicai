<template>
  <el-row class="two">
    <el-row id="contentText" class="content">
      <el-row v-for="(t,i) in dates" :key="i" class="list">
        <el-row class="topName">
          <span class="span">{{ t }}</span>
          <i class="el-icon-caret-right" />
        </el-row>
        <contact-one />
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import $ from 'jquery'
import contactOne from './contactOne'
export default {
  name: 'Contact',
  components: {
    contactOne
  },
  data () {
    return {
      dates: ['sss', 'ssdasda', 'dasdas', 'dasdasf', 'fdsgsd']
    }
  },
  mounted () {
    $(function () {
      $('#contentText').children().first().addClass('active')
      $('#contentText').children().first().children('.bo_list').css({ display: 'block' })
      $('#contentText .span').on('click', function () {
        $(this).parent().parent().siblings().children('.bo_list').slideUp('slow')
        $(this).parent().parent().siblings().removeClass('active')
        $(this).parent().siblings('.bo_list').slideToggle('slow')
        $(this).parent().parent().toggleClass('active')
      })
    })
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
    .two{
        width: 100%;
        overflow: hidden;
        .content{
            width: 100%;
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
        }
    }
</style>
