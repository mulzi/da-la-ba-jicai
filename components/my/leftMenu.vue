<template>
  <el-row class="leftBox">
    <el-row class="headTop">
      <el-row class="headImg">
        <img :src="date.headUri" alt="">
      </el-row>
      <el-row class="name">
        {{ date.name }}
      </el-row>
      <el-row class="numID">
        ID:{{ date.id }}
      </el-row>
    </el-row>
    <el-row class="menuUl">
      <div class="li" :class="$store.state.myCentent.menuId === i ? 'active': '' " v-for="(t,i) in menu" :key="i" @click="changeMenuId(i)">
        <nuxt-link :to="t.url">
          {{ t.name }}
        </nuxt-link>
      </div>
    </el-row>
    <el-row class="release" >
      <div class="tit" @click="flag = !flag" v-if="false">
        <span>我的发布</span><i :class=" flag ? 'el-icon-arrow-down':'el-icon-arrow-right'" />
      </div>
      <transition name="el-zoom-in-top">
        <el-row class="leb" v-show="flag" v-if="false">
          <div class="le" :class="$store.state.myCentent.menuBId === i ? 'active': '' " v-for="(t, i) in menub" :key="i" @click="changeMenuBId(i)">
            <nuxt-link :to="t.url">
              {{ t.name }}
            </nuxt-link>
          </div>
        </el-row>
      </transition>
    </el-row>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/myCentent'
export default {
  data () {
    return {
      flag: false,
      date: [],
      menu: [
        { name: '基本信息', url: '/my/basicInfo' },
        { name: '我的会员', url: '/my/member' },
        { name: '我的积分', url: '/my/point' },
        // { name: '我的订单', url: '' },
        { name: '我的收藏', url: '/my/collection' }
      ],
      menub: [
        { name: '项目信息', url: '' },
        { name: '招采信息', url: '' },
        { name: '招募招标', url: '' }
      ]
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getUser().then((res) => {
        console.log(res)
        this.date = res.data.result
      })
    },
    changeMenuId (i) {
      this.$store.commit('myCentent/changeMenuId', i)
      this.$store.commit('myCentent/changeMenuBId', 999)
    },
    changeMenuBId (i) {
      this.$store.commit('myCentent/changeMenuId', 999)
      this.$store.commit('myCentent/changeMenuBId', i)
    }
  }
}
</script>

<style scoped lang="scss">
.leftBox{
    background: #ffffFF;
    .headTop{
        width: 100%;
        margin-top:30px ;
        .headImg{
            margin: 0 auto;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            overflow: hidden;
            img{
                @include img;
            }
        }
        .name{
            margin-top:10px ;
            font-size: 14px;
            color: #333333;
            text-align: center;
        }
        .numID{
            font-size: 14px;
            color: #333333;
            text-align: center;
        }
    }
    .menuUl{
        width: 100%;
        margin-top: 30px;
        .li{
            width: 100%;
            height: 50px;
            line-height: 50px;
            a{
                color: #333333;
                font-size: 14px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                display: inline-block;
                width: 100%;
            }
            &:hover{
                @include triText
                background: $redColor;
                a{
                    color: #ffffFF;
                }
            }
            &.active{
                @include triText
                background: $redColor;
                a{
                    color: #ffffFF;
                }
            }
        }
    }
  .release{
    width: 100%;
    height: 200px;
    .tit{
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      font-size: 14px;
      color: #333333;
      span{
        margin-right: 10px;
        cursor: pointer;
      }
    }
    .leb{
      width: 100%;
      height: 150px;
      .le{
        width: 100%;
        height: 50px;
        line-height: 50px;
        a{
          color: #333333;
          font-size: 14px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          display: inline-block;
          width: 100%;
        }
        &:hover{
          @include triText
          background: $redColor;
          a{
            color: #ffffFF;
          }
        }
        &.active{
          @include triText
          background: $redColor;
          a{
            color: #ffffFF;
          }
        }
      }
    }
  }
}
</style>
