<template>
  <div class="supplierBody">
    <div class="bodyBox">
      <el-row class="HeaderBreadcrumb">
        <el-col :span="24">
          <div class="breadcrumb">
            <span class="iconfont">&#xe635;</span>
            <span style="margin-right: 0;color: #8e8e8e">当前位置：</span>
            <nuxt-link to="/">
              首页
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>项目信息</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="topSearchBox">
        <el-row class="boxStyle">
          <el-col :span="18" class="leftAddrsBox">
            <el-col :span="8">
              <el-col :span="6" class="leftText">
                地区
              </el-col>
              <el-col :span="18">
                <el-cascader :options="options" clearable />
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6" class="leftText">
                项目类别
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
            <el-col :span="8">
              <el-col :span="6" class="leftText">
                项目阶段
              </el-col>
              <el-col :span="18">
                <el-select v-model="value" clearable placeholder="请选择">
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
          <el-col :span="6">
            ss
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
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
        }],
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
        }],
      value: '',
      values: ''
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
    .supplierBody{
        width: 100%;
        background: #f0f3ef;
        overflow: hidden;
        .bodyBox{
            width: 75%;
            max-width: 1400px;
            margin: 0 auto;
            overflow: hidden;
            .HeaderBreadcrumb{
                width: 100%;
                margin-top: 20px;
                .breadcrumb{
                    overflow: hidden;
                    height: 20px;
                    line-height: 20px;
                    span{
                        display: block;
                        float: left;
                        font-size: 14px;
                        color: #333333;
                        margin-right: 6px;
                        &.right{
                            font-size: 12px;
                        }
                    }
                    a{
                        font-size: 14px;
                        display: block;
                        float: left;
                        color: #8e8e8e;
                        margin-right: 6px;
                    }
                    .iconfont{
                        color:#9a9a9a ;
                        font-size: 20px;
                    }
                }

            }
            .topMenuBox{
                background: #ffffff;
                width: 100%;
                overflow: hidden;
                margin-top: 20px;
                .contentBox{
                    width:92% ;
                    max-width: 1342px;
                    margin: 40px auto 0;
                    .defaultBox{
                        width: 100%;
                        margin-bottom: 20px;
                        border-bottom: 1px solid $borderE7;
                        display: flex;
                        display: -ms-flex;
                        .leftText{
                            width: 80px;
                            height: 30px;
                            line-height: 30px;
                            margin-bottom: 16px;
                            text-align: right;
                            font-size: 16px;
                            font-weight: bold;
                            color: #333333;
                        }
                        .rightList{
                            flex: 1;
                            -ms-flex: 1;
                            span{
                                display: inline-block;
                                height: 26px;
                                line-height: 26px;
                                font-size: 16px;
                                color: #666666;
                                margin: 0 30px 10px 0;
                                padding: 2px 10px;
                                cursor: pointer;
                                &.active{
                                    color: #ffffff;
                                    background: $redColor;
                                }
                                &:hover{
                                    color: #ffffff;
                                    background: $redColor;
                                    @include triText;
                                }
                            }
                        }
                    }
                    .defaultBoxTwo{
                        width: 100%;
                        margin-bottom: 20px;
                        .contentx{
                            width: 100%;
                            text-align: center;
                            span{
                                font-size: 16px;
                                display: inline-block;
                                margin-right: 60px;
                                cursor: pointer;
                                &:hover{
                                    color: $redColor;
                                }
                                &.active{
                                    color: $redColor;
                                }
                            }
                        }
                    }
                }
            }
            .bottomListBox{
                margin-top: 30px;
                overflow: hidden;
                width: 100%;

                .contentList{
                    width: 100%;
                    overflow: hidden;
                    a{
                        width:19% ;
                        float: left;
                        margin-right: 1.25%;
                        border-radius: 6px;
                        margin-bottom: 20px;
                        overflow: hidden;
                        background: #ffffff;
                        >p{
                            width: 100%;
                            height:258px ;
                            img{
                                @include img;
                            }
                        }
                        &:nth-child(5n){
                            margin-right: 0;
                        }
                        .topNameBox{
                            width: 100%;
                            margin: 0 auto;
                            border-bottom: 1px solid $borderE7;
                            .oneName{
                                width: 90%;
                                margin: 10px auto 0;
                                height: 20px;
                                line-height: 20px;
                                color: #333333;
                                font-size: 14px;
                                @include over;

                            }
                            .twoName{
                                width: 90%;
                                margin: 10px auto 0;
                                height: 18px;
                                line-height: 18px;
                                color: #333333;
                                font-size: 12px;
                                @include over;
                            }
                            .numbers{
                                width: 90%;
                                margin: 14px auto ;
                                font-size: 12px;
                                color: #bfbfbf;
                                @include over;
                                i{
                                    font-size: 12px;
                                    margin-right: 6px;
                                }
                                span{
                                    margin-left: 10px;
                                }
                            }
                        }
                        .b_name{
                            width: 90%;
                            margin: 10px auto;
                            display: flex;
                            display: -ms-flex;
                            justify-items: center;
                            align-items: center;
                            img{
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                            }
                            span{
                                flex: 1;
                                display: block;
                                -ms-flex: 1;
                                @include over;
                                margin-left: 10px;
                                font-size:12px ;
                                color: #333333;
                            }
                        }

                    }
                }
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
        }
    }
</style>
