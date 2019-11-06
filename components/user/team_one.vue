<template>
  <div class="bot_img">
    <li v-for="(ti,ii) in date" :key="ii">
      <img v-lazy="ti.pic" alt="">
    </li>
  </div>
</template>

<script>
export default {
  name: 'WorksOne',
  // eslint-disable-next-line vue/require-prop-types
  props: ['list'],
  data () {
    return {
      date: []

    }
  },
  created () {
    this.date = this.list.splice(0, 3)
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
    .bot_img{
        width: 100%;
        margin-top: 20px;
        overflow: hidden;
        li{
            float: left;
            width: 32%;
            height: 120px;
            margin-right: 2%;
            &:last-child{
                margin-right: 0;
            }
            img{
                @include  img;
            }
        }
    }
</style>
