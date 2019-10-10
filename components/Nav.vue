<template>
  <div class="dlb-nav-container">
    <div class="dlb-banner-search">
      <div class="dlb-banner float-left">
        <img class="dlb-img-logo" src="@/assets/logo.png" alt="logo">
      </div>
      <div class="dlb-search float-left">
        <div class="input-group">
          <input type="text" class="form-input" placeholder="可输入产品名称、类别或规格型号等关键字">
          <button class="btn btn-primary input-group-btn">
            搜索
          </button>
        </div>
        <div class="dlb-search-type">
          <a class="c-hand">工装供应商</a>
          <a class="ml c-hand">家装供应商</a>
          <a class="ml c-hand">设计施工方</a>
          <a class="ml c-hand">项目信息</a>
          <a class="ml c-hand">招采信息</a>
          <a class="ml c-hand">招募招标</a>
        </div>
      </div>
      <img class="dab-telephone float-right" src="@/assets/telephone.png" alt="telephone">
      <div class="clearfix" />
    </div>
    <div class="dlb-nav">
      <ul class="nav" style="flex-direction: row;justify-content: space-between;">
        <li class="nav-item active">
          <nuxt-link to="">
            首页
          </nuxt-link>
          <!--<a href="#">首页</a>-->
        </li>
        <li class="nav-item">
          <a href="#">作品精选</a>
        </li>
        <li class="nav-item">
          <a href="#">材料供应商</a>
        </li>
        <li class="nav-item">
          <a href="#">设计施工方</a>
        </li>
        <li class="nav-item">
          <a href="#">项目信息</a>
        </li>
        <li class="nav-item">
          <a href="#">招采信息</a>
        </li>
        <li class="nav-item">
          <a href="#">招募招标</a>
        </li>
        <li class="nav-item">
          <a href="#">库存信息</a>
        </li>
        <li class="nav-item">
          <a href="#">论坛</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
  .dlb-nav-container {
    width: 100%;
    .dlb-banner-search {
      width: 70rem;
      margin: 0 auto;
      .dlb-banner {
        display: inline-block;
        margin-top: 2.3rem;
        img.dlb-img-logo {
          display: inline-block;
          width: 15.95rem;
          height: 2.7rem;
        }
      }
      .dlb-search {
        display: inline-block;
        margin-left: 10.95rem;
        margin-top: 2.85rem;
        input {
          width: 19.45rem;
          height: 1.7rem;
          border: 2px solid #DA251D;
        }
        input::placeholder {
          font-size:0.6rem;
          font-family:SimSun;
          font-weight:400;
          color:rgba(146,146,146,1);
          line-height:1.2rem;
        }
        button {
          width: 4rem;
          height: 1.7rem;
          border: 2px solid #DA251D;
          background-color: #DA251D;
        }
        .dlb-search-type {
          a {
            height:0.6rem;
            font-size:0.6rem;
            font-weight:400;
            color:#989898FF;
            line-height:1.2rem;
          }
          a.ml {
            margin-left: 0.6rem;
          }
        }
      }
      .dab-telephone {
        margin-top: 2.55rem;
        width: 10.25rem;
        height: 2rem;
      }
    }
    .dlb-nav {
      width: 70rem;
      margin: 2rem auto 0;
      padding-bottom: 1.05rem ;
      border-bottom: 1px solid $primary-color;
      .nav {
        margin: 0;
        .nav-item {
          margin: 0;
          height:0.95rem;
          a {
            height:0.95rem;
            font-size:0.9rem;
            padding: 0;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(97,97,97,1);
            /*line-height:1.2rem;*/
            &:hover {
              color: $primary-color;
            }
          }
          &.active {
            & > a {
              color: $primary-color;
              font-weight: bold;
              &:hover {
                color: $primary-color;
              }
            }
          }
        }
      }
    }
  }
</style>
