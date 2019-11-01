<template>
  <el-row>
    <div class="engineeringWorks padding30 marginBottom100">
      <div v-for="(t,i) in list" :key="i" class="a" @click="getEngeering(t.id)">
        <div class="img">
          <img :src="t.coverPic" alt="">
          <div class="flext">
            <span />
            <span>{{ t.projectName }}</span>
          </div>
        </div>
        <div class="name">
          {{ t.projectName }}
        </div>
      </div>
    </div>
    <engineering v-if="$store.state.supplier.engineering" :list="date"/>
  </el-row>
</template>

<script>
import { HomeService } from '@/services/home'
import engineering from '@/components/publicModule/engineeringWorks'
export default {
  components: {
    engineering
  },
  // eslint-disable-next-line vue/require-prop-types
  props: [ 'list' ],
  data () {
    return {
      date: ''

    }
  },
  methods: {
    getEngeering (id) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.getCase(id).then((res) => {
        console.log(res)
        this.date = res.data.result
        if (res.status === 200) {
          this.$store.commit('supplier/changeEngineering')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .engineeringWorks{
        background: #ffffff;
        .a{
            float: left;
            cursor: pointer;
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
        &::after{
          content: "";
          display: block;
          visibility: hidden;
          height: 0;
          clear: both;
        }
    }
</style>
