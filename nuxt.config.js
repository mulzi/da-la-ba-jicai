export default {
  mode: 'universal',
  router: {
    middleware: 'isLogin'
  },
  /*
    ** Headers of the page
    */
  head: {
    // title: '大喇叭集采-一家工程行业多方数据采集,多方需求集采的大数据供需平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
    ** Customize the progress-bar color
    */
  loading: '@/components/loading.vue',
  /*
    ** Global CSS
    */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/dlb_head.scss',
    '@/assets/css/dlb_foot.scss',
    '@/assets/css/@media.scss',
    'swiper/dist/css/swiper.css'
  ],
  /*
    ** Plugins to load before mounting the App
    */
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false },
    { src: '~/plugins/ElementUI.js', ssr: true }, // ssr:true代表在服务端渲染,客户端不渲染
    { src: '~/plugins/babel-polyfill.js', ssr: true },
    // { src: '~/plugins/myCentent.js', ssr: true },
    { src: '~/plugins/lazyload.js', ssr: false },
    { src: '~/plugins/viewer.js', ssr: false }

  ],
  /*
    ** Nuxt.js dev-modules
    */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@/modules/static/'
  ],
  /*
    ** Nuxt.js modules
    */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],

  styleResources: {
    scss: ['./assets/css/dlb_default.scss']
  },

  /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
  axios: {
    baseURL: 'http://www.dalabajicai.com/',
    browserBaseURL: '/',
    proxy: false
  },

  proxy: {
    '/api': {
      target: 'http://www.dalabajicai.com/',
      pathRewrite: {
        '^/api': '/api'
      }
    }
  },
  // http://qy.cqsudu.com:10200/
  // http://www.dalabajicai.com/
  /*
    ** Build configuration
    */
  build: {
    // 按需引入element-ui
    babel: {
      'plugins': [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ],
      'comments': true
    },
    transpile: [/^element-ui/],
    vendor: ['element-ui', 'axios'], // 防止重复重复打包
    extractCSS: { allChunks: true }, // 打包CSS成表
    /*
        ** You can extend webpack config here
        */
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: true,
    interval: 100
  }
}
