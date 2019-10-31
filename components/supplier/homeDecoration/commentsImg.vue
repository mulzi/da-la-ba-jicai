<template>
  <div class="imgBox">
    <div class="topImg">
      <dd v-for="(it, ii) in list" :key="ii" :class=" ii === number ?'active':''">
        <img :src="it.pic" alt="" @click="getImgUrl(it.pic),changeNumber(ii)">
        <i />
      </dd>
    </div>
    <div class="showImg">
      <img :src="imgBigUrl" alt="" @click="changeImgUrl">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentsImg',
  // eslint-disable-next-line vue/require-prop-types
  props: ['list'],
  data () {
    return {
      imgBigUrl: '',
      number: ''
    }
  },
  methods: {
    changeImgUrl () {
      this.imgBigUrl = ''
      this.number = ''
    },
    getImgUrl (index) {
      this.imgBigUrl = index
      console.log(this.imgBigUrl)
    },
    changeNumber (index) {
      this.number = index
    }
  }

}
</script>

<style scoped lang="scss">
    .imgBox{
        width: 100%;
        .topImg{
            width: 100%;
            margin-top: 20px;
            dd{
                float: left;
                width: 88px;
                height: 88px;
                position: relative;
                box-sizing: border-box;
                margin-right: 16px;
                img{
                    @include img;
                    &:hover{
                        cursor: url("~@/assets/img/big01.png"), pointer;
                    }
                }
                &.active{
                    border: 1px solid $redColor;
                    & i{
                        border: 10px solid transparent;
                        position: absolute;
                        bottom: -20px;
                        left: 34px;
                        z-index: 99;
                        border-top-color: $redColor;
                    }
                }
                &:hover{
                    border: 1px solid $redColor;
                    & i{
                        border: 10px solid transparent;
                        position: absolute;
                        bottom: -20px;
                        left: 34px;
                        z-index: 99;
                        border-top-color: $redColor;
                    }
                }

            }
            &::after{
                clear: both;
                visibility: hidden;
                height: 0;
                display: block;
                content: "";
            }
        }
        .showImg{
            margin-top: 30px;
            img{
                max-width: 560px;
                &:hover{
                    cursor: url("~@/assets/img/small.png"), pointer;
                }
            }
        }
    }
</style>
