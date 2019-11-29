<template>
  <el-row class="list">
    <el-row class="topName">
      <span class="span" @click="$store.commit('projectInfo/changeDateA')">承建方</span>
      <i :class=" this.$store.state.projectInfo.dateA ?'el-icon-caret-bottom' : 'el-icon-caret-right'" />
    </el-row>
    <el-collapse-transition>
      <contact-one :list="list" v-show="this.$store.state.projectInfo.dateA" />
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
      dateA: ''
    }
  },
  mounted () {
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
      .bo_list{
        width: 100%;
        margin-top: 20px;
        overflow: hidden;
        li{
          float: left;
          width: 32%;
          margin-right: 2%;
          margin-bottom: 20px;
          box-sizing: border-box;
          border: 1px solid $borderE7;
          .boxList{
            margin: 30px 0;
            padding: 0 30px;
            position: relative;
            overflow: hidden;
            .companyName{
              width: 100%;
              @include over;
              font-size: 20px;
              color: #333333;
              position: relative;
            }
            .bo_text{
              width: 100%;
              margin-top: 40px;
              position: relative;
              &::after{
                content: "";
                display: block;
                position: absolute;
                top: -20px;
                left: 0;
                height: 2px ;
                width: 30px;
                background: #333333;
              }
              p{
                margin-bottom:20px ;
                font-size: 17px;
                color: #666666;
                @include over;
              }
            }
            .clickLook{
              width: 100px;
              height: 40px;
              line-height: 40px;
              font-size: 18px;
              color: $redColor;
              background: #efefef;
              text-align: center;
              position: absolute;
              bottom: 20px;
              right: 30px;
              cursor: pointer;
            }
          }
          &:nth-child(3n){
            margin-right: 0;
          }
          &:hover{
            background: $redColor;
            transition: .3s ease-in-out;
            .boxList{
              .companyName{
                color: #ffffff;
              }
              .bo_text{
                p{
                  color: #ffffff;
                }
                &::after{
                  background: #ffffff;
                }
              }
              .clickLook{
                background: transparent ;
                border: 1px solid #ffffff;
                color: #ffffff;
                box-sizing: border-box;
                transition: .3s ease-in-out;
              }
            }
          }
        }
      }
    }
</style>
