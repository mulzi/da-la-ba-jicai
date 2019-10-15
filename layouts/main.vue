<template>
  <div class="dlb_indexBody">
    <index-head />

    <nuxt />

    <index-foot />
  </div>
</template>

<script>

import indexHead from '@/components/indexHead'
import indexFoot from '@/components/indexFoot'

export default {
  components: {
    indexHead,
    indexFoot
  }

}
</script>

<style>

</style>
