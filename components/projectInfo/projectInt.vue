<template>
  <el-row class="one">
    <div class="text">
      <p>
        {{ list.introduce }}
      </p>
    </div>
    <div class="boImg" v-if="list.pics !== undefined && list.pics.length > 0">
      <li v-for="(t,i) in list.pics" :key="i">
        <span v-viewer>
          <img :src="t.pic" alt="">
        </span>
      </li>
    </div>
  </el-row>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['list']
}
</script>

<style scoped lang="scss">
    .one{
        width: 100%;
        .text{
            width: 100%;
            margin-bottom: 20px;
            overflow: hidden;
            p{
                text-indent: 2em;
                font-size: 16px;
                color: #333333;
                line-height: 30px;
                margin-bottom: 20px;
            }
        }
        .boImg{
            width: 100%;
            overflow: hidden;
            li{
                width: 30%;
                float: left;
                margin-right: 5%;
                margin-bottom: 20px;
                height: 266px;
                border: 1px solid $borderE7;
                box-sizing: border-box;
                &:nth-child(3n){
                    margin-right: 0;
                }
                span{
                    padding: 8px;
                    display: block;
                    height: calc(100% - 16px);
                    img{
                        @include img;
                    }
                }
            }
        }
    }
</style>
