export default {
  mode: 'universal',
  /*
    ** Headers of the page
    */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
    ** Customize the progress-bar color
    */
  loading: { color: '#fff' },
  /*
    ** Global CSS
    */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/dlb_head.scss',
    '@/assets/css/dlb_foot.scss',
    '@/assets/css/@media.scss'
  ],
  /*
    ** Plugins to load before mounting the App
    */
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false },
    { src: '~/plugins/ElementUI.js', ssr: true }, // ssr:true代表在服务端渲染,客户端不渲染
    { src: '~/plugins/babel-polyfill.js', ssr: true },
    { src: '~/plugins/lazyload.js', ssr: false }
  ],
  /*
    ** Nuxt.js dev-modules
    */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
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
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'http://www.dalabajicai.com',
      pathRewrite: {
        '^/api' : '/api'
      }
    }
  },
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
  }
}
