const { isVue2, isVue3 } = require('vue-demi')

module.exports = {
  presets: [
    "@babel/env",
    "@babel/typescript"
  ],
  plugins: [
    isVue3 && "@vue/babel-plugin-jsx"
  ]
}