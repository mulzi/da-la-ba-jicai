<template>
  <div class="dlb-bottom-container">
    <div class="dlb-bottom-nav" />
    <div class="dlb-bottom-copyright text-center">
      <span>Copyright © 2019 版权所有 重庆庆渝科技有限公司</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom'
}
</script>

<style lang="scss" scoped>
  .dlb-bottom-container {
    .dlb-bottom-copyright {
      width: 100%;
      height: 3.55rem;
      background-color: #2B2B2B;
      padding-top: 1.35rem;
      span {
        height:0.75rem;
        font-size:0.7rem;
        font-family:Arial;
        font-weight:400;
        color:rgba(138,138,138,1);
        line-height:1.2rem;
      }
    }
  }
</style>
