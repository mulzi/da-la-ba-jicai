<template>
  <div class="menu">
    <div class="list">
      <nuxt-link to="/">
        首页
      </nuxt-link>
      <nuxt-link v-for="(item,index) in nav" :key="index" :to="item.path">
        {{ item.title }}
      </nuxt-link>
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
          title: '招采信息',
          path: '/purchaseList'
        },
        {
          title: '招募招标',
          path: '/AskPriseList'
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
      display: -ms-flex;
      display: flex;

      a {
        margin-bottom: 10px;
        flex: 1;
        -ms-flex: 1;
        text-align: center;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        width: 11%;
        float: left;
        color: #616161;
        &.nuxt-link-exact-active{
          color: $redColor;
        }
        &:hover {
          color: #DA251D;
        }
      }
    }

  }

</style>
