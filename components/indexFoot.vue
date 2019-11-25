<template>
  <el-row class="footerBox">
    <el-row class="centnetBox">
      <el-row class="footTop">
        <ul>
          <li>
            <div class="left">
              <img src="@/assets/img/footone.png" alt="">
            </div>
            <div class="right">
              <p>品类齐全快速响应</p>
              <p>海量建材数据库，让选建材更轻松</p>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="@/assets/img/foottwo.png" alt="">
            </div>
            <div class="right">
              <p>一对一交易服务</p>
              <p>随时随地为您服务，让业务更高效</p>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="@/assets/img/footthree.png" alt="">
            </div>
            <div class="right">
              <p>交易安全有保障</p>
              <p>大品牌大企业为依托，让资金更安全</p>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="@/assets/img/footfour.png" alt="">
            </div>
            <div class="right">
              <p>专家服务团队更放心</p>
              <p>
                专业服务更细致，让风险无处遁行
              </p>
            </div>
          </li>
        </ul>
      </el-row>
      <div class="line" />
      <el-row class="connectBox">
        <div class="leftMud">
          <div class="one">
            <p>关于我们</p>
            <li>
              <nuxt-link to="/we/about">
                关于我们
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="">
                联系我们
              </nuxt-link>
            </li>
          </div>
          <div class="one">
            <p>用户指南</p>
            <li>
              <nuxt-link to="">
                免责声明
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="">
                争议解决
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="">
                平台规则
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="">
                版权声明
              </nuxt-link>
            </li>
          </div>
          <div class="one">
            <p>帮助中心</p>
            <li>
              <nuxt-link to="">
                常见问题
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="">
                文档下载
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="">
                招商必看
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="">
                采购必看
              </nuxt-link>
            </li>
          </div>
          <div class="two">
            <p>服务与支持</p>
            <em>服务热线：400-023-5655</em>
            <em>服务时间：9:00-18:00</em>
            <em>服务邮箱：dalabajicai@outlook.com</em>
            <em>地址：重庆市渝北区山顶道捌号B区8栋4单元301</em>
          </div>
        </div>
        <div class="rightImg">
          <div class="imgOne">
            <p>
              <img src="../assets/img/home/official_account.jpg" alt="">
            </p>
            <p>
              公众号
            </p>
          </div>
          <div class="imgOne">
            <p>
              <img src="../assets/img/home/miniprogram.jpg" alt="">
            </p>
            <p>
              小程序
            </p>
          </div>
        </div>
      </el-row>
    </el-row>
    <div class="copyright">
      Copyright © 2019版权所有重庆庆渝科技有限公司
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style scoped lang="scss">

</style>
