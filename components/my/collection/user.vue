<template>
  <el-row>
    <el-row class="bottomListBox">
      <el-row class="NoData marginBottom40">
        <el-row class="img">
          <img src="@/assets/img/nodata.png" alt="">
        </el-row>
        <el-row class="text">
          没有数据
        </el-row>
      </el-row>
      <el-row class="contentList">
        <nuxt-link v-for="(item, index) in 15" :key="index" to="">
          <p>
            <img src="@/assets/img/nodata.png" alt="">
          </p>
          <el-row class="companyName">
            <span>公司名字</span>
            <span>公司地址</span>
          </el-row>
        </nuxt-link>
      </el-row>
      <el-row class="pageSbox">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
        />
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style scoped lang="scss">
    .bottomListBox {
        margin-top: 30px;
        width: 100%;

        .contentList {
            width: 100%;

            a {
                width: 32%;
                float: left;
                margin-right: 2%;
                border-radius: 6px;
                margin-bottom: 20px;
                overflow: hidden;
                box-sizing: border-box;
                border: 1px solid $borderE7;
                > p {
                    width: 100%;
                    height: 258px;

                    img {
                        @include img;
                    }
                }

                &:nth-child(3n) {
                    margin-right: 0;
                }

                .companyName {
                    padding: 0 20px;
                    margin: 10px auto 20px;

                    span {
                        display: block;
                        color: #333333;
                        font-size: 15px;
                        @include over;

                        &:nth-child(1) {
                            margin-bottom: 10px;
                            font-size: 16px;
                        }
                    }
                }
                &:hover{
                    transition: .2s ease-in;
                     box-shadow: 0 0 14px #bababa;
                }
            }
        }

        .NoData {
            background: #ffffff;
            width: 100%;
            height: 400px;
            overflow: hidden;

            .img {
                width: 200px;
                height: 200px;
                margin: 100px auto 50px;

                img {
                    @include img;
                }

            }

            .text {
                font-size: 13px;
                color: #333333;
                text-align: center;
            }
        }
    }
</style>
