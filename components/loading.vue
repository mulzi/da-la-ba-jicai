<template lang="html">
  <el-row class="body" v-if="loading">
    <div class="box">
      <div class="loader-18" />
    </div>
  </el-row>
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
      }, 100)
    }
  }
}
</script>

<style scoped>
  .body {
    background: rgba(255,255,255,.7);
    text-align: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    font-family: sans-serif;
    color: rgba(200, 200, 200, 0.5);
  }
  .body *,
  .body *:before,
 .body *:after {
    box-sizing: inherit;
  }
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: inline-block;
    width:100px;
    height: 100px;
    font-size: 50px;
    color: #00ffdf;
    vertical-align: top;
    -webkit-transition: .3s color, .3s border;
    transition: .3s color, .3s border;
  }
  .loader-18 {
    position: relative;
  }
  .loader-18:before,
  .loader-18:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    border: .1em solid transparent;
    border-bottom-color: currentcolor;
    top: 0;
    left: 0;
    -webkit-animation: 1s loader-18 linear infinite;
    animation: 1s loader-18 linear infinite;
  }
  .loader-18:before {
    width: 1em;
    height: 1em;
    color: #ff2f8f;
  }
  .loader-18:after {
    width: .8em;
    height: .8em;
    top: .1em;
    left: .1em;
    -webkit-animation-direction: reverse;
    animation-direction: reverse;
  }
  @-webkit-keyframes loader-18 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loader-18 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
