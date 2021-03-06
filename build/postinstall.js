/* eslint-disable @typescript-eslint/no-var-requires */
const vue = require('vue')
const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

const version = vue.version
const isVue2 = +version.split('.')[0] === 2

if (isVue2) {
  console.log('[Vue 3 Design System Example] Switch main field for Vue 2')
  pkg.main = './dist/vue-2/vue-ds.umd.js'
  pkg.module = './dist/vue-2/vue-ds.es.js'
} else {
  console.log('[Vue 3 Design System Example] Switch main field for Vue 3')
  pkg.main = './dist/vue/vue-ds.umd.js'
  pkg.module = './dist/vue/vue-ds.es.js'
}

fs.writeFileSync(
  path.resolve(__dirname, '../package.json'),
  JSON.stringify(pkg, null, 2),
  {
    encoding: 'utf-8',
  }
)
