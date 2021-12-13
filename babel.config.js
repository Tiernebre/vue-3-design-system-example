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
  ].filter(Boolean),
  plugins: [
    isVue3 && "@vue/babel-plugin-jsx"
  ].filter(Boolean)
}