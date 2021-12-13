import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import pkg from './package.json';
import { uglify } from 'rollup-plugin-uglify'

const extensions = [
  '.ts', '.tsx'
];


const config = {
  input: 'src/index.ts',

  external: ['vue', 'vue-demi'],

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
      file: pkg.module,
      format: 'es'
    },
    {
      file: pkg.main,
      format: 'cjs'
    }
  ]
};

export default config;