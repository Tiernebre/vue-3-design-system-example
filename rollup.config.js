import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify'
import { isVue2 } from 'vue-demi'

const extensions = [
  '.ts', '.tsx'
];

const outputBundleName = 'vue-ds'
const outputDirectoryName = 'dist/' + (isVue2 ? 'vue-2' : 'vue') + '/'
console.log('output directory name = ', outputDirectoryName)

const config = {
  input: 'src/index.ts',

  external: ['vue', 'vue-demi', '@vue/composition-api'],

  plugins: [
      // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    babel({
      extensions,
      babelHelpers: 'inline',
      include: ['src/**/*'],
    }),

    uglify()
  ],

  output: [
    {
      file: `${outputDirectoryName}${outputBundleName}.es.js`,
      format: 'es'
    },
    {
      file: `${outputDirectoryName}${outputBundleName}.umd.js`,
      format: 'cjs'
    }
  ]
};

export default config;