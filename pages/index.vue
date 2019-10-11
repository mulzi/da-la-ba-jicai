<template>
  <div class="indexBodyBanner">
    <banner/>
  </div>
</template>

<script>

import { HomeService } from '@/services/home'
import banner from '@/components/home/banner'
export default {
  layout: 'main',
  middleware: 'authenticated',
  components: {
    banner
  },
  data () {
    return {
      home: {}
    }
  },
  // asyncData (context) {
  //   const homeService = new HomeService(context)
  //   return homeService.home().then((res) => {
  //     console.log(res.data)
  //     return { home: res.data || {} }
  //   })
  // },
  async fetch (context) {
    const { store } = context
    const homeService = new HomeService(context)
    await homeService.home().then((res) => {
      store.commit('home/addhome', res.data)
    })
  }

}
</script>

<style lang="scss" scoped>

</style>
