<template>
  <div class="engineeringWorks padding30 marginBottom100">
    <nuxt-link to="" v-for="(t,i) in list" :key="i">
      <div class="img">
        <img :src="t.coverPic" alt="">
        <div class="flext">
          <span></span>
          <span>{{t.projectName}}</span>
        </div>
      </div>
      <div class="name">
        {{t.projectName}}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: [ 'list' ],
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
    .engineeringWorks{
        background: #ffffff;
        overflow: hidden;
        a{
            float: left;
            width: 23.5%;
            margin-right: 2%;
            margin-bottom: 26px;
            display: block;
            box-sizing: border-box;
            border: 1px solid $borderE7;
            .img{
                position: relative;
                height: 253px;
                img{
                    @include img;
                }
                .flext{
                    display: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,.7);
                    span{
                        display: block;
                        padding: 0 10px;
                        height: 36px;
                        line-height: 36px;
                        color: #ffffff;
                        font-size: 18px;
                        text-align: center;
                        @include over;
                        &:nth-child(1){
                            margin-top: 100px;
                            font-size: 24px;
                        }
                    }
                }
            }
            .name{
                height: 48px;
                line-height: 48px;
                @include over;
                font-size: 16px;
                color: #454545;
                text-align: center;
                width: 94%;
                margin: 0 auto;
            }
            &:nth-child(4n){
                margin-right: 0;
            }
            &:hover{
                .img{
                    .flext{
                        display: block;
                    }
                }
            }
        }
    }
</style>
