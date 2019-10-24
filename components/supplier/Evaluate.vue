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

</style>
