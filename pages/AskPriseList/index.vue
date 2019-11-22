<template>
  <el-row class="supplierBody">
    <el-row class="bodyBox">
      <el-row class="HeaderBreadcrumb">
        <el-col :span="24">
          <div class="breadcrumb">
            <span class="iconfont">&#xe635;</span>
            <span style="margin-right: 0;color: #8e8e8e">当前位置：</span>
            <nuxt-link to="/">
              首页
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>招募列表</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="topSearchBox">
        <el-row class="boxStyle">
          <el-col :span="12" class="leftAddrsBox">
            <el-col :span="12">
              <el-col :span="6" class="leftText">
                招募地区
              </el-col>
              <el-col :span="18">
                <el-cascader v-model="valueOne" :options="options" :props="{ expandTrigger: 'hover' }" clearable />
              </el-col>
            </el-col>
            <el-col :span="12">
              <el-col :span="6" class="leftText">
                招募类型
              </el-col>
              <el-col :span="18">
                <el-select v-model="values" clearable placeholder="请选择">
                  <el-option
                    v-for="item in optionss"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
            </el-col>
          </el-col>
          <el-col :span="6" class="rightSbox">
            <el-col :span="19">
              <el-input
                v-model="searchText"
                placeholder="请输入内容"
                clearable
              />
            </el-col>
            <el-col :span="5" class="el-icon-search searchSt" />
          </el-col>
        </el-row>
        <div @click="$store.commit('release/changeNumber', 2)" class="addItem">
          <nuxt-link to="/release">
            <em class="iconfont">&#xe880;</em>
            <span>发布项目</span>
          </nuxt-link>
        </div>
      </el-row>
      <el-row class="bodyListBox">
        <nuxt-link to="/AskPriseList/page/sd" v-for="(t,i) in 8" :key="i">
          <el-row class="liList">
            <el-row class="tit">
              这个是标题
            </el-row>
            <el-row class="time">
              <el-col :span="4">
                发布时间：<span>2019-08-26</span>
              </el-col>
              <el-col :span="4">
                发布时间：<span>2019-08-26</span>
              </el-col>
            </el-row>
            <el-row class="time">
              <el-col :span="4">
                招募地区<span>/重庆</span>
              </el-col>
              <el-col :pan="4">
                招募类型<span>/施工单位</span>
              </el-col>
            </el-row>
            <el-row class="NOTime">
              已截止
            </el-row>
          </el-row>
        </nuxt-link>
      </el-row>
      <div class="bottomListBox">
        <div class="NoData marginBottom40">
          <div class="img">
            <img src="@/assets/img/nodata.png" alt="">
          </div>
          <div class="text">
            没有数据
          </div>
        </div>
        <div class="pageSbox">
          <el-pagination
            background
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="sizeID"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </el-row>
  </el-row>
</template>

<script>
// import { HomeService } from '@/services/home'

export default {
  layout: 'main',
  data () {
    return {
      pageID: 0, // 分页第几页
      sizeID: 20, // 分页数量
      totalCount: 0, // 获取的总数
      currentPage4: 1,
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }], // 地区
      optionss: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }], // 项目类别
      valueOne: '',
      value: '',
      values: '',
      searchText: '' // 搜索的值
    }
  },
  created () {
  },
  methods: {
    handleSizeChange (val) {
      const _this = this
      _this.sizeID = val
      _this.getSupplierList()
    },
    handleCurrentChange (val) {
      const _this = this
      _this.currentPage4 = val
      this.pageID = val - 1
      _this.getSupplierList()
    },
    getWorksOneList () { // 获取一级栏目
      // const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
    },
    getFilterBySupplier (parmes) { // 获取二级三级类别
    },
    getSupplierList (parmes) {
    }
  }
}
</script>

<style scoped lang="scss">
    .bottomListBox{
        margin-top: 30px;
        overflow: hidden;
        width: 100%;
        .NoData{
            background: #ffffff;
            width: 100%;
            height: 600px;
            overflow: hidden;
            .img{
                width: 200px;
                height: 200px;
                margin: 100px auto;
                img{
                    @include img;
                }

            }
            .text{
                font-size: 13px;
                color: #333333;
                text-align: center;
            }
        }
    }
    .topSearchBox{
        width: 100%;
        background: #ffffff;
        margin-top: 20px;
        box-shadow: 2px 4px 10px #e2e2e2;
        position: relative;
        .boxStyle{
            padding: 0 30px;
            margin: 30px 0;
            .leftAddrsBox{
                .leftText{
                    font-size:16px ;
                    color: #666666;
                    line-height: 40px;
                    text-align: center;
                }
            }
            .rightSbox{
                .searchSt{
                    background: #DA251D;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    color: #ffffff;
                    cursor: pointer;
                    font-size: 24px;
                }
            }
        }
        .addItem{
            position: absolute;
            top: -40px;
            right: 4px;
            background: $redColor;
            height: 36px;
            color: #ffffff;
            line-height: 36px;
            font-size: 14px;
            box-shadow: 2px 2px 10px #bdbdbd;
            em{
                font-size: 20px;
                color: #ffffff;
                margin-left: 20px;
                margin-right: 4px;
                vertical-align: middle;
            }
            span{
                vertical-align: middle;
                margin-right: 20px;
                color: #ffffff;
            }
        }

    }
    .bodyListBox{
      width: 100%;
      margin-top: 30px;
      background: #ffffff;
      a{
        display: block;
        width: 100%;
        background: #ffffff;
        position: relative;
        border-bottom: 1px solid $borderE7 ;
        overflow: hidden;
        .liList{
          margin: 30px 0;
          padding: 0 30px;
          position: relative;
          .tit{
            width: 100%;
            font-size: 20px;
            line-height: 36px;
            color: #333333;
            margin-bottom: 10px;
          }
          .time{
            width: 100%;
            font-size: 16px;
            color: #777777;
            margin-bottom: 10px;
            span{
              color: #333333;
            }
          }
          .NOTime{
            position: absolute;
            height: 26px;
            line-height: 26px;
            font-size: 24px;
            color: $redColor;
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        &:hover{
          transition: .3s ease-in-out;
          box-shadow: 2px 2px 10px #dcdcdc;
          border-bottom-color: $redColor;
        }
      }
      &::after{
        content: "";
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
      }
    }
</style>
