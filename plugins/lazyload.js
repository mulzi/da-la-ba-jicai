import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载的宽高比
  error: 'static/home/shibai.jpg', // 请求失败后显示的图片
  loading: 'static/home/loading.jpg', // 加载的loading过渡图片
  attempt: 1 // 尝试加载次数
})
