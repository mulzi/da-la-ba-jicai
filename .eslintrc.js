module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/attribute-hyphenation': 1,
    'vue/attributes-order': 0, // 忽略属性顺序
    "no-console": 0,//禁止使用console
    'camelcase': 0, // 强制使用骆驼拼写法命名约定
  }
}
