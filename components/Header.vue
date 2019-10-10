<template>
  <div class="dlb-head-container">
    <div class="dlb-head">
      <div class="dlb-head-left">
        <img class="location" src="@/assets/location@2x.png" alt="location">
        <span class="location-city">重庆</span>
        <a class="switch-city c-hand">切换城市</a>
        <a class="btn-login c-hand">立即登录</a>
        <a class="btn-logout c-hand d-none">退出登录</a>
        <a class="btn-register c-hand">注册</a>
        <a class="btn-user-center c-hand">个人中心</a>
      </div>
      <div class="dlb-head-right float-right">
        <a class="btn-index mr-1p2 c-hand">首页</a>
        <a class="btn-collect mr-1p2 c-hand">我的收藏</a>
        <a class="btn-mch-login mr-1p2 c-hand">商家登录</a>
        <a class="btn-contact mr-1p2 c-hand">联系客服</a>
        <a class="btn-mch-join c-hand">商家入驻</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  .dlb-head-container {
    width: 100%;
    background-color: #EEEEEE;
    .dlb-head{
      width: 70rem;
      margin: 0 auto;
      height: 1.95rem;
      line-height: 1.95rem;
      vertical-align: middle;
      .dlb-head-left {
        display: inline-block;
        .location{
          width: .55rem;
          height: .65rem;
        }
        .location-city{
          height:0.6rem;
          font-size:0.6rem;
          font-weight:400;
          color: #666666;
          line-height:1.2rem;
        }
        .switch-city{
          height:0.6rem;
          font-size:0.6rem;
          font-weight:400;
          color: #666666;
          line-height:1.2rem;
          margin-left: .8rem;
          border:1px solid rgba(204,204,204,1);
        }
        .btn-login{
          height:0.6rem;
          font-size:0.6rem;
          font-weight:400;
          color:#DA251D;
          line-height:1.2rem;
          margin-left: 1.9rem;
        }
        .btn-logout{
          height:0.6rem;
          font-size:0.6rem;
          font-weight:400;
          color:#DA251D;
          line-height:1.2rem;
          margin-left: 1.9rem;
        }
        .btn-register {
          height:0.6rem;
          font-size:0.6rem;
          font-weight:400;
          color:#666666;
          line-height:1.2rem;
          margin-left: .6rem;
        }
        .btn-user-center {
          height:0.6rem;
          font-size:0.6rem;
          font-weight:400;
          color:#666666;
          line-height:1.2rem;
          margin-left: 1.3rem;
        }
      }
      .dlb-head-right {
        display: inline-block;
        a {
          font-size:0.6rem;
          font-weight:400;
          line-height:1.2rem;
          color:#333333;
        }
        a.mr-1p2 {
          margin-right: .922rem;
        }
      }
    }
  }
</style>
