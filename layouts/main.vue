<template>
  <div class="dlb-container">
    <Header />
    <Nav />
    <div class="dlb-content-container">
      <nuxt />
    </div>
    <Bottom />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Bottom from '@/components/Bottom'

export default {
  components: {
    Header,
    Nav,
    Bottom
  }
}
</script>
<style lang="scss" scoped>
  .dlb-container {
    width: 100%;
    font-family: SimSun;
  }
</style>
