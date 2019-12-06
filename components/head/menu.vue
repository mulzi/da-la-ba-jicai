<template>
  <div class="menu">
    <div class="list">
      <ul>
        <li>
          <nuxt-link to="/">
            首页
          </nuxt-link>
        </li>
        <li v-for="(item,index) in nav" :key="index">
          <nuxt-link :to="item.path">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {
          title: '作品精选',
          path: '/works'
        },
        {
          title: '材料供应商',
          path: '/supplier',
          params: {
            type: 0
          }
        },
        {
          title: '设计施工方',
          path: '/user',
          params: {
            type: 3
          }
        },
        {
          title: '项目信息',
          path: '/projectInfo'
        },
        {
          title: '采购信息',
          path: '/purchaseList'
        },
        {
          title: '招募招标',
          path: '/askPriseList'
        },
        {
          title: '库存信息',
          path: '/stock'
        },
        {
          title: '论坛',
          path: '/news'
        }
        // {
        //   title: '关于我们',
        //   path: '/we'
        // },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

  .menu {
    width: 100%;
    margin: 40px auto 0;
    overflow: hidden;
    display: flex;

    .list {
      width: 75%;
      max-width: 1400px;
      margin: 0 auto 0;
      border-bottom: 1px solid $redColor;
      overflow: hidden;
      ul{
        width: 100%;
        display: -ms-flex;
        display: flex;
        li{
          flex: 1 1 auto;
          -ms-flex: 1 1 auto;
          a {
            width: 100%;
            display: inline-block;
            font-family: "Microsoft YaHei", "微软雅黑";
            margin-bottom: 10px;
            text-align: center;
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            color: #616161;
            text-align: center;
            &:hover {
              color: $redColor;
            }
          }
        }

      }

    }

  }

</style>
<style lang="scss">
  .menu{
    .list{
      ul{
        li{
          a{
            &.nuxt-link-exact-active.nuxt-link-active{
              color: $redColor;
            }
          }
        }
      }

    }
  }

</style>
