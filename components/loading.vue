<template lang="html">
  <div v-if="loading" class="loading-page">
    <p>loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style scoped>
    .loading-page {
        position: fixed;
        z-index: 9999999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, .7);
        text-align: center;
        padding-top: 400px;
        font-size: 18px;
        font-family: sans-serif;
    }
</style>
