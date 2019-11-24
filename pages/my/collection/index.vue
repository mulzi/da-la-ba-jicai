<template>
  <el-row class="supplierBody">
    <el-row class="myBodyBox">
      <el-row :gutter="25" class="myCentent marginBottom100">
        <el-col :span="4" class="leftBox">
          <menu-s />
        </el-col>
        <el-col :span="20" class="rightBox">
          <el-row class="contentWaysBox">
            <el-row class="topChange">
              <div class="li" v-for="(t,i) in prompt" :class="num === i ? 'active' : ''" :key="i" @click="changeNum(i)">
                {{ t }}
              </div>
            </el-row>
            <el-row class="bottomList">
              <supplier v-if="num === 0" />
              <user v-if="num === 1" />
              <works v-if="num === 2" />
            </el-row>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import menuS from '@/components/my/leftMenu'
import supplier from '@/components/my/collection/supplier'
import user from '@/components/my/collection/user'
import works from '@/components/my/collection/works'
export default {
  components: {
    menuS,
    supplier,
    user,
    works
  },
  layout: 'my',
  data () {
    return {
      num: 0,
      prompt: [
        '材料供应商',
        '设计施工方',
        '作品精选'
      ]
    }
  },
  methods: {
    changeNum (i) {
      this.num = i
    }
  }
}
</script>

<style scoped lang="scss">
    .myCentent{
        width: 100%;
        margin-top: 20px;
      .rightBox{
        .contentWaysBox{
          background: #ffffff;
          .topChange{
            padding: 0 30px;
            margin: 30px 0 0;
            border-bottom: 1px solid $borderE7;
            .li{
              display: inline-block;
              height: 36px;
              line-height: 36px;
              position: relative;
              margin-right: 30px;
              color: #333333;
              font-size:16px ;
              font-weight: bold;
              cursor: pointer;
              &.active{
                color: $redColor;
                &::before{
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  height: 2px;
                  background: $redColor;
                }
              }
            }
          }
          .bottomList{
            padding: 0 40px;
            margin: 40px auto;
          }
        }
      }

    }
</style>
