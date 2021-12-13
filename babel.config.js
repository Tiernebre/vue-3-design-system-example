const { isVue2, isVue3 } = require('vue-demi')

module.exports = {
  presets: [
    "@babel/env",
    "@babel/typescript",
    isVue2 && [
      '@vue/babel-preset-jsx',
      {
        compositionAPI: true,
      },
    ],
  ],
  plugins: [
    isVue3 && "@vue/babel-plugin-jsx"
  ]
}