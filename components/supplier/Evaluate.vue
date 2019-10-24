<template>
  <div class="evaluateBox marginBottom100">
    <div class="formBox">
      <form action="">
        <div class="top">
          <el-radio v-model="radio" label="1">
            好评
          </el-radio>
          <el-radio v-model="radio" label="2">
            差评
          </el-radio>
        </div>
        <div class="text">
          <textarea placeholder="请输入..." />
        </div>
        <div class="sub">
          <button>提交</button>
        </div>
      </form>
    </div>
    <div class="evaluatelIST">
      <div class="top">
        <ul id="evaluateChang">
          <li class="active">
            全部(123)
          </li>
          <li>
            好评(222)
          </li>
          <li>
            差评(555)
          </li>
        </ul>
      </div>
      <div class="list">
        <ul v-infinite-scroll="load">
          <li>
            <div class="leftImg">
              <div class="img">
                <img src="@/assets/img/0123.jpg" alt="">
              </div>
              <div class="name">
                用户名称sdsd
              </div>
            </div>
            <div class="rightText">
              <p>
                <em>差评：</em>
                <span>

                  从有限到无限，从有差别到无差别，从有疆界到无疆界，任何人、任何时间、任何地点、用任意货币买卖任意商品，这就是这套全球商业这就是这套全球商业这就是这套全球商业操作系统带来的巨带来的巨变带来的巨变变！
                  带来的巨变带来的巨变

                </span>
              </p>
              <p>
                2019年11月12日 18:21
              </p>
            </div>
          </li>
          <li>
            <div class="leftImg">
              <div class="img">
                <img src="@/assets/img/0123.jpg" alt="">
              </div>
              <div class="name">
                用户名称sdsd
              </div>
            </div>
            <div class="rightText">
              <p>
                <em>差评：</em>
                <span>

                  从有限到无限，从有差别到无差别，从有疆界到无疆界，任何人、任何时间、任何地点、用任意货币买卖任意商品，这就是这套全球商业这就是这套全球商业这就是这套全球商业操作系统带来的巨带来的巨变带来的巨变变！
                  带来的巨变带来的巨变

                </span>
              </p>
              <p>
                2019年11月12日 18:21
              </p>
            </div>
          </li>
          <li>
            <div class="leftImg">
              <div class="img">
                <img src="@/assets/img/0123.jpg" alt="">
              </div>
              <div class="name">
                用户名称sdsd
              </div>
            </div>
            <div class="rightText">
              <p>
                <em>差评：</em>
                <span>

                  从有限到无限，从有差别到无差别，从有疆界到无疆界，任何人、任何时间、任何地点、用任意货币买卖任意商品，这就是这套全球商业这就是这套全球商业这就是这套全球商业操作系统带来的巨带来的巨变带来的巨变变！
                  带来的巨变带来的巨变

                </span>
              </p>
              <p>
                2019年11月12日 18:21
              </p>
            </div>
          </li>
          <li>
            <div class="leftImg">
              <div class="img">
                <img src="@/assets/img/0123.jpg" alt="">
              </div>
              <div class="name">
                用户名称sdsd
              </div>
            </div>
            <div class="rightText">
              <p>
                <em>差评：</em>
                <span>

                  从有限到无限，从有差别到无差别，从有疆界到无疆界，任何人、任何时间、任何地点、用任意货币买卖任意商品，这就是这套全球商业这就是这套全球商业这就是这套全球商业操作系统带来的巨带来的巨变带来的巨变变！
                  带来的巨变带来的巨变

                </span>
              </p>
              <p>
                2019年11月12日 18:21
              </p>
            </div>
          </li>
          <li>
            <div class="leftImg">
              <div class="img">
                <img src="@/assets/img/0123.jpg" alt="">
              </div>
              <div class="name">
                用户名称sdsd
              </div>
            </div>
            <div class="rightText">
              <p>
                <em>差评：</em>
                <span>

                  从有限到无限，从有差别到无差别，从有疆界到无疆界，任何人、任何时间、任何地点、用任意货币买卖任意商品，这就是这套全球商业这就是这套全球商业这就是这套全球商业操作系统带来的巨带来的巨变带来的巨变变！
                  带来的巨变带来的巨变

                </span>
              </p>
              <p>
                2019年11月12日 18:21
              </p>
            </div>
          </li>
          <li>
            <div class="leftImg">
              <div class="img">
                <img src="@/assets/img/0123.jpg" alt="">
              </div>
              <div class="name">
                用户名称sdsd
              </div>
            </div>
            <div class="rightText">
              <p>
                <em>差评：</em>
                <span>

                  从有限到无限，从有差别到无差别，从有疆界到无疆界，任何人、任何时间、任何地点、用任意货币买卖任意商品，这就是这套全球商业这就是这套全球商业这就是这套全球商业操作系统带来的巨带来的巨变带来的巨变变！
                  带来的巨变带来的巨变

                </span>
              </p>
              <p>
                2019年11月12日 18:21
              </p>
            </div>
          </li>
          <li>
            <div class="leftImg">
              <div class="img">
                <img src="@/assets/img/0123.jpg" alt="">
              </div>
              <div class="name">
                用户名称sdsd
              </div>
            </div>
            <div class="rightText">
              <p>
                <em>差评：</em>
                <span>

                  从有限到无限，从有差别到无差别，从有疆界到无疆界，任何人、任何时间、任何地点、用任意货币买卖任意商品，这就是这套全球商业这就是这套全球商业这就是这套全球商业操作系统带来的巨带来的巨变带来的巨变变！
                  带来的巨变带来的巨变

                </span>
              </p>
              <p>
                2019年11月12日 18:21
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      radio: '1',
      count: 0
    }
  },
  mounted () {
    $(function () {
      $('#evaluateChang li').on('click', function () {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
      })
    })
  },
  methods: {
    load () {
      this.count += 2
    }
  }
}
</script>

<style scoped lang="scss">
  .evaluateBox{
    width: 100%;
    background: #ffffff;
    overflow: hidden;
    .formBox{
      width: 94%;
      margin: 40px auto 0;
      form{
        display: block;
        .top{
          width: 100%;
          height: 30px;
          line-height: 30px;
        }
        .text{
          width: 100%;
          border: 1px solid #b3b3b3;
          height: 116px;
          overflow: hidden;
          textarea{
            display: block;
            resize: none;
            width: 94%;
            height: 76px;
            margin: 20px auto;
            outline: none;
            font-size: 15px;
            color: #333333;
            line-height: 25px;
          }
        }
        .sub{
          width: 100%;
          overflow: hidden;
          margin-top: 20px;
          button{
            display: inline-block;
            float: right;
            height: 40px;
            width: 100px;
            background: $redColor;
            color: #ffffff;
            border-radius: 5px;
            font-size: 16px;

          }
        }
      }
    }
    .evaluatelIST{
      width: 94%;
      margin: 30px auto 0;
      overflow: hidden;
      .top{
        width: 100%;
        padding: 1px 0;
        ul{
          width: 100%;
          overflow: hidden;
          li{
            float: left;
            display: inline-block;
            padding: 2px 10px ;
            color: #5f5f5f;
            font-size: 16px;
            cursor: pointer;
            margin-right: 20px;
            &.active{
              color: $redColor;
            }
          }
        }
      }
      .list{
        width: 100%;
        margin: 30px 0 0;
        overflow: hidden;
        ul{
          max-height: 600px;
          width: 100%;
          overflow-y: auto;
          li{
            width: 100%;
            border-bottom:dashed 1px #b1b1b1 ;
            display: flex;
            display: -ms-flex;
            margin-bottom: 20px;
            .leftImg{
              width:110px ;
              .img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
                img{
                  @include img;
                }
              }
              .name{
                width: 100%;
                font-size:12px ;
                margin-top: 7px;
                color: #808080;
                @include over;
              }
            }
            .rightText{
              flex: 1;
              -ms-flex: 1;
              margin-left: 20px;
              margin-right: 20px;
              overflow: hidden;
              p{
                font-size: 12px;
                &:nth-child(1){
                  em{
                    color: $redColor;
                  }
                  line-height: 24px;
                  color: #5f5f5f;
                }
                &:nth-child(2){
                  color: #D3D3D3;
                  margin-top: 6px;
                  margin-bottom: 15px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
