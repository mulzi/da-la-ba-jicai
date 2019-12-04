import Vue from 'vue'
import 'element-ui/lib/theme-chalk/base.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import {
  Button, Input, Carousel, Container, Icon, Col, Row, CarouselItem, Pagination, BreadcrumbItem,
  Breadcrumb, Tooltip, Rate, Radio, RadioButton, InfiniteScroll, Message, Form, FormItem, Calendar, Select, Cascader,
  Option, Upload, Dialog, DatePicker, Loading, RadioGroup, Checkbox, CollapseItem, Table, TableColumn
} from 'element-ui'
Vue.use(CarouselItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Icon)
Vue.use(Container)
Vue.use(Carousel)
Vue.use(Button)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(Tooltip)
Vue.use(BreadcrumbItem)
Vue.use(Rate)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Calendar)
Vue.use(Cascader)
Vue.use(Select)
Vue.use(Option)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(DatePicker)
Vue.use(Checkbox)
Vue.use(Table)
Vue.use(InfiniteScroll)
Vue.use(Message)
Vue.use(CollapseItem)
Vue.use(Loading)
Vue.use(TableColumn)
Vue.prototype.$message = Message
Vue.prototype.$loading = Loading.service
Vue.component(CollapseTransition.name, CollapseTransition)
