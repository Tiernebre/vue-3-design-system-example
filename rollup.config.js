import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const extensions = [
  '.ts', '.tsx'
];


const config = {
  input: 'src/index.ts',

  external: [],

  plugins: [
      // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    babel({
      extensions,
      babelHelpers: 'runtime',
      include: ['src/**/*'],
    }),
  ],

  output: [
    {
      file: 'dist/vue-3-dds.es.js',
      format: 'es'
    },
    {
      file: 'dist/vue-3-dds.umd.js',
      format: 'cjs'
    }
  ]
};

export default config;