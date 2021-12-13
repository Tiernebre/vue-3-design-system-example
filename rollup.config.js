import { babel } from '@rollup/plugin-babel';


const config = {
  input: 'src/index.ts',

  external: [],

  plugins: [
    babel(),
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