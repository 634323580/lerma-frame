import path from 'path'
import resolve from 'rollup-plugin-node-resolve'

const inputPath = path.resolve(__dirname, './lib/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/index.js')

const iifeGlobals = {
  'vue-demi': 'VueDemi',
  'vue': 'Vue',
}

export default {
  input: inputPath,
  external: ['vue', 'vue-demi'],
  output: {
    file: outputUmdPath,
    format: 'es',
    globals: iifeGlobals,
  },
  plugins: [resolve()]
};