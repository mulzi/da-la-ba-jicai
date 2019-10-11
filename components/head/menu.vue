<template>
  <div class="menu">
    <div class="list">
      <nuxt-link v-for="(item,index) in menu" :key="index" :to="item.name">
        {{ item.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { name: '首页', id: 1 },
        { name: '作品精选', id: 1 },
        { name: '材料供应商', id: 1 },
        { name: '设计施工方', id: 1 },
        { name: '项目信息', id: 1 },
        { name: '招采信息', id: 1 },
        { name: '招募招标', id: 1 },
        { name: '库存信息', id: 1 },
        { name: '论坛', id: 1 }

      ]
    }
  }
}
</script>

<style scoped lang="scss">

  .menu {
    width: 100%;
    margin: 40px auto 10px;
    overflow: hidden;
    display: flex;

    .list {
      width: 1400px;
      margin: 0 auto;

      a {
        flex: 1;
        text-align: center;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        width: 11%;
        float: left;
        color: #616161;

        &:hover {
          color: #DA251D;
        }
      }
    }

  }

</style>
