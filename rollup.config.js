import { babel } from '@rollup/plugin-babel';


const config = {
  input: 'src/index.ts',

  external: [],

  plugins: [
    babel({
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
      include: ['src/**/*'],
    }),
  ],

  output: [
    {
      file: 'dist/test.js',
      format: 'es'
    }
  ]
};

export default config;